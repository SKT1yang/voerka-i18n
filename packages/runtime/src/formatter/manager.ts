/**
 * 
 *  保存所有格式化器数据
 * 
 * 
 */
import type { VoerkaI18nScope } from '../scope';        
import { VoerkaI18nFormatter, VoerkaI18nFormatterBuilder, VoerkaI18nFormatters } from './types';

export interface VoerkaI18nScopeCache{
    activeLanguage :string | null,
    typedFormatters: VoerkaI18nFormatters,
    formatters     : VoerkaI18nFormatters,
}

export class FormattersNotLoadedError extends Error{
    constructor(language:string){
        super(`Formatters of language<${language}> is not loaded,try to call load()`)
    }
}
 

export class VoerkaI18nFormatterManager{
    private _formatters        : VoerkaI18nFormatters = [] 
    private _scope             : VoerkaI18nScope                                         
    private _cache             : Map<string,VoerkaI18nFormatter> = new Map<string,VoerkaI18nFormatter> 

    constructor(scope:VoerkaI18nScope){ 
        this._scope = scope   
        this._formatters = scope?.options.formatters     
        this._loadFormatters()
    }    
    get scope(){ return this._scope! }     
    get cache(){ return this._cache }  
    get formatters(){ return this._formatters }    

    /**
     * 
     * 加载所有格式化器
     * 
     */
    private _loadFormatters(){
        this._formatters.forEach((formatterBuilder)=>{
            const builder = formatterBuilder as VoerkaI18nFormatterBuilder
            const filter = builder(this.scope)
            try{
                this.scope.interpolator.addFilter(filter)
                // 如果是全局格式化器，则注册到全局scope(即appCcope)里面
                if(filter.global){
                    this.scope.manager.scope.formatters.register(filter)
                }
            }catch(e:any){
                this.scope.logger.error(`注册格式化器<${filter.name}>失败：${e.stack}`)
            }
        })        
    }  
    /**
    * 动态注册格式化器 
    * 
    */
    register(formatter:VoerkaI18nFormatter) {
        this.scope.interpolator.addFilter(formatter)         
    }              
 
     
     
}