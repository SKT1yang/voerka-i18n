

import {test,vi,describe,expect,afterAll,beforeAll} from 'vitest'
import { VoerkaI18nScope } from '../scope'
import zhFormatters from '../formatters/zh';
import enFormatters from '../formatters/en';
import { VoerkaI18nManager } from '../manager';
import { VoerkaI18nFormatterRegistry } from '../formatterRegistry';
import { VoerkaI18nLanguageMessages } from '../types';


const zhMessages:VoerkaI18nLanguageMessages = {
    $config:{
        x:{a:1},
        y:{b:1}
    },
    "1": "你好",
    "2": "你好，{name}",
    "3": "中国",
    "4": ["我有一部车","我有很多部车"]  ,
}
const enMessages={
    "1": "hello",
    "2": "hello,{name}",
    "3": "china",
    "4": "I have {} cars"
}

const messages = {
    zh: zhMessages,
    en: enMessages
}

const idMap={
    "你好":1,
    "你好，{name}":2,
    "中国":3,
    "我有{}部车":4
}
const languages = [
    { name: "zh",default:true,active:true},
    { name: "en"}
]

const formatters ={
    zh:zhFormatters,
    en:enFormatters,
    jp:()=>{}
}

describe("VoerkaI18nScope", () => {
    let scope = new VoerkaI18nScope({
        id: "test",
        languages,
        idMap,
        messages,
        formatters
    })
    test("成功创建实例", () => {
        expect(scope).toBeInstanceOf(VoerkaI18nScope)
        expect(scope.activeLanguage).toBe("zh")
        expect(scope.defaultLanguage).toBe("zh")
        expect(scope.messages).toEqual(messages)
        expect(scope.default).toEqual(zhMessages)
        expect(scope.current).toEqual(zhMessages)
        expect(scope.idMap).toEqual(idMap)
        // 格式化器配置
        expect(scope.formatters).toBeInstanceOf(VoerkaI18nFormatterRegistry)
        expect(scope.formatters.language).toBe("zh")
        expect(scope.formatters.formatters).toEqual(formatters)
        expect(scope.formatters.config).toBe(zhFormatters.$config)
        expect(scope.formatters.types).toBe(zhFormatters.$types)
        
 
        // 全局管理器
        expect(scope.global).toBeInstanceOf(VoerkaI18nManager)
    })


})

test('translate', () => {})

