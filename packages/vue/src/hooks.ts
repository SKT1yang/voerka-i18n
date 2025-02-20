import type { VoerkaI18nManager, VoerkaI18nScope } from '@voerkai18n/runtime';
import { ref, onMounted, onUnmounted } from 'vue';


export function useVoerkaI18n(scope?:VoerkaI18nScope) {
    const manager:VoerkaI18nManager = globalThis.VoerkaI18n;
    const curScope = scope || manager.scope
    if (!manager || !curScope) {
        throw new Error('VoerkaI18n is not defined');
    }

    const activeLanguage = ref(manager.activeLanguage);


    let listener:any

    onMounted(() => {
        listener = manager.on("change", ()=>{
            activeLanguage.value = manager.activeLanguage;
        });
    });

    onUnmounted(() => listener && listener.off()); 

    return {
        activeLanguage,
        defaultLanguage: curScope.defaultLanguage,
        languages      : curScope.languages,
        changeLanguage : curScope.change,
        t              : curScope.t
    }; 

}