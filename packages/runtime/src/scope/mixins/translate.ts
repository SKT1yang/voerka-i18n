import { isMessageId } from "@/utils/isMessageId"
import { isFunction } from "flex-tools/typecheck/isFunction"
import { isNumber } from "flex-tools/typecheck/isNumber"
import { isPlainObject } from "flex-tools/typecheck/isPlainObject"
import type { VoerkaI18nScope } from ".."


export class TranslateMixin{    
    /**
     * 根据值的单数和复数形式，从messages中取得相应的消息
     * 
     * @param {*} messages  复数形式的文本内容 = [<=0时的内容>，<=1时的内容>，<=2时的内容>,...,<>=N的内容>]
     * @param {*} value 
     */
    private _getPluraMessage(this:VoerkaI18nScope,messages:string | string[],value:number){
        try{
            if(Array.isArray(messages)){
                return messages.length > value ? messages[value] : messages[messages.length-1]
            }else{
                return messages
            }
        }catch{
            return Array.isArray(messages) ? messages[0] : messages
        }
    }

    translate(this:VoerkaI18nScope,message:string,...args:any[]):string { 
        // 如果内容是复数，则其值是一个数组，数组中的每个元素是从1-N数量形式的文本内容
        let result:string | string[] = message
        let vars=[]                             // 插值变量列表
        let pluraValue = null                   // 复数值        
        if(!(typeof(message)==="string")) return message
        try{
            // 1. 预处理变量:  复数变量保存至pluralVars中 , 变量如果是Function则调用 
            if(arguments.length === 2 && isPlainObject(arguments[1])){// 字典插值
                const dictVars:Record<string,any>=arguments[1]
                for(const [name,value] of Object.entries(dictVars)){
                    if(isFunction(value)){
                        try{
                            dictVars[name] = value()
                        }catch{
                            dictVars[name] = value
                        }
                    } 
                    // 以$开头的视为复数变量，记录下来
                    const isNum:boolean = typeof(dictVars[name])==="number"
                    if((pluraValue==null && isNum) || name.startsWith("$") && isNum){
                        pluraValue = dictVars[name]
                    }
                }            
                vars = [dictVars]
            }else if(arguments.length >= 2){ // 位置插值
                vars = [...arguments].splice(1).map((arg)=>{
                    try{
                        arg = isFunction(arg) ? arg() : arg         
                        // 约定：位置参数中以第一个数值变量作为指示复数变量
                        if(isNumber(arg)) pluraValue = parseInt(arg)     
                    }catch{
                        return String(arg)
                     }
                    return arg   
                })            
            }
            
            if(isMessageId(message)){ // 如果是数字id,
                result = (this.activeMessages as any)[message] || message
            }else{
                const msgId = this.idMap[message]  
                // 语言包可能是使用idMap映射过的，则需要转换
                result = (msgId ? (this.activeMessages as any)[msgId]  : (this.activeMessages as any)[message]) ?? message
            }
    
             // 2. 处理复数
            // 经过上面的处理，content可能是字符串或者数组
            // content = "原始文本内容" || 复数形式["原始文本内容","原始文本内容"....]
            // 如果是数组说明要启用复数机制，需要根据插值变量中的某个变量来判断复数形式
            if(Array.isArray(result) && result.length>0){
                // 如果存在复数命名变量，只取第一个复数变量
                if(pluraValue!==null){  // 启用的是位置插值 
                    result = this._getPluraMessage(result,pluraValue)
                }else{ // 如果找不到复数变量，则使用第一个内容
                    result = result[0]
                }
            }         
            // 如果没有传入插值变量，则直接返回
            if(args.length===0) return result as string
            // 进行插值处理
            return this.interpolator.replace(result as string,...vars)
        }catch{
            return result as string    
        } 

    } 
}