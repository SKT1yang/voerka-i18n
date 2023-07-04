import { defineConfig } from 'tsup' 


export default defineConfig({
    entry: [
        'src/index.ts'
    ],
    format: ['esm','cjs','iife'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    treeshake:true,  
    minify: false,
    noExternal:['flex-tools'],
    banner: {
        js: `/***        
*   ---=== VoerkaI18n Runtime ===---
*   https://zhangfisher.github.io/voerka-i18n/*
*/`}
}) 