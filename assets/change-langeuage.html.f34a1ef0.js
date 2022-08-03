import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,a as e}from"./app.39012857.js";const t={},p=e(`<h1 id="\u5207\u6362\u8BED\u8A00" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u8BED\u8A00" aria-hidden="true">#</a> \u5207\u6362\u8BED\u8A00</h1><h2 id="\u5207\u6362\u8BED\u8A00-1" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u8BED\u8A00-1" aria-hidden="true">#</a> \u5207\u6362\u8BED\u8A00</h2><p>\u53EF\u4EE5\u901A\u8FC7\u5168\u5C40\u5355\u4F8B\u6216\u5F53\u524D\u4F5C\u7528\u57DF\u5B9E\u4F8B\u7684<code>change</code>\u65B9\u6CD5\u6765\u5207\u6362\u8BED\u8A00\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> i18nScope <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./languages&quot;</span>

<span class="token comment">// \u5207\u6362\u5230\u82F1\u6587</span>
<span class="token keyword">await</span> i18nScope<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token string">&quot;en&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// VoerkaI18n\u662F\u4E00\u4E2A\u5168\u5C40\u5355\u4F8B\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE</span>
<span class="token keyword">await</span> VoerkaI18n<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token string">&quot;en&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FA6\u542C\u8BED\u8A00\u5207\u6362\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FA6\u542C\u8BED\u8A00\u5207\u6362\u4E8B\u4EF6" aria-hidden="true">#</a> \u4FA6\u542C\u8BED\u8A00\u5207\u6362\u4E8B\u4EF6</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> i18nScope <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./languages&quot;</span>

<span class="token comment">// \u5207\u6362\u5230\u82F1\u6587</span>
i18nScope<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">newLanguage</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u76F4\u63A5\u5728\u5168\u5C40\u5355\u4F8B\u4E0A\u8C03\u7528</span>
VoerkaI18n<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">newLanguage</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[p];function o(i,l){return a(),s("div",null,c)}var d=n(t,[["render",o],["__file","change-langeuage.html.vue"]]);export{d as default};
