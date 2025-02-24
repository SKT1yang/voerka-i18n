import { createFormatter } from "../../../runtime/src/formatter/utils"
import { toDate } from "../../../runtime/src/utils/toDate" 

export type QuarterFormatterConfig = {
    format: 'long' | 'short' | string | ((date:Date)=>string)
    long  : string[]
    short : string[] 
}


export type QuarterFormatterArgs = {
    format: string
}

export const quarterFormatter =  createFormatter<QuarterFormatterArgs,QuarterFormatterConfig>(()=>{
    return {
        name   : "quarter",
        args   : [ "format" ],
        default: { 
            format : "long" 
        },
        next(value,args,ctx){ 
            const config = ctx.getFormatterConfig<QuarterFormatterConfig>("quarter")
            const month   = toDate(value).getMonth() + 1  
            const quarter = Math.floor( ( month % 3 == 0 ? ( month / 3 ) : (month / 3 + 1 ) ))
            const format  = args.format || 'long'
            if( typeof(format)==='string' && format in config ){
                const formatVal = (config as any)[format]
                if(typeof formatVal === 'function'){
                    return (formatVal as any)(quarter)
                }else{
                    return formatVal[quarter]
                }                    
            }
            return quarter
        }
    } 
},{
    en:{ 
        long        : ["First Quarter","Second Quarter","Third Quarter","Fourth Quarter"],
        short       : ["Q1","Q2","Q3","Q4"],
        format      : "short"
    },
    zh:{ 
        long        : ["一季度","二季度","三季度","四季度"],
        short       : ["Q1","Q2","Q3","Q4"],
        format      : "short"          // 0-短格式,1-长格式,2-数字
    }
})
 