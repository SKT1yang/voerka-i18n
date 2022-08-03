import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.39012857.js";const e={},p=t(`<h1 id="\u63D2\u503C\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u63D2\u503C\u53D8\u91CF" aria-hidden="true">#</a> \u63D2\u503C\u53D8\u91CF</h1><p><code>voerkai18n</code>\u7684<code>t</code>\u51FD\u6570\u652F\u6301\u4F7F\u7528<strong>\u63D2\u503C\u53D8\u91CF</strong>\uFF0C\u7528\u6765\u4F20\u5165\u4E00\u4E2A\u53EF\u53D8\u5185\u5BB9\u3002</p><p>\u63D2\u503C\u53D8\u91CF\u6709<code>\u547D\u540D\u63D2\u503C\u53D8\u91CF</code>\u548C<code>\u4F4D\u7F6E\u63D2\u503C\u53D8\u91CF</code>\u3002</p><h2 id="\u547D\u540D\u63D2\u503C\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u63D2\u503C\u53D8\u91CF" aria-hidden="true">#</a> <strong>\u547D\u540D\u63D2\u503C\u53D8\u91CF</strong></h2><p>\u53EF\u4EE5\u5728t\u51FD\u6570\u4E2D\u4F7F\u7528<code>{\u53D8\u91CF\u540D\u79F0}</code>\u8868\u793A\u4E00\u4E2A\u547D\u540D\u63D2\u503C\u53D8\u91CF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u59D3\u540D\u53EB{name},\u6211\u4ECA\u5E74{age}\u5C81&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u5982\u679C\u503C\u662F\u51FD\u6570\u4F1A\u81EA\u52A8\u8C03\u7528</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u59D3\u540D\u53EB{name},\u6211\u4ECA\u5E74{age}\u5C81&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span><span class="token function-variable function">age</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EC5\u5F53<code>t</code>\u51FD\u6570\u4EC5\u6709\u4E24\u4E2A\u53C2\u6570\u4E14\u7B2C2\u4E2A\u53C2\u6570\u662F<code>{}</code>\u7C7B\u578B\u65F6\uFF0C\u542F\u7528\u5B57\u5178\u63D2\u503C\u53D8\u91CF\uFF0C\u7FFB\u8BD1\u65F6\u4F1A\u81EA\u52A8\u8FDB\u884C\u63D2\u503C\u3002</p><h2 id="\u4F4D\u7F6E\u63D2\u503C\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u7F6E\u63D2\u503C\u53D8\u91CF" aria-hidden="true">#</a> \u4F4D\u7F6E\u63D2\u503C\u53D8\u91CF</h2><p>\u53EF\u4EE5\u5728t\u51FD\u6570\u4E2D\u4F7F\u7528\u4E00\u4E2A\u7A7A\u7684<code>{}</code>\u8868\u793A\u4E00\u4E2A\u4F4D\u7F6E\u63D2\u503C\u53D8\u91CF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u59D3\u540D\u53EB{},\u6211\u4ECA\u5E74{}\u5C81&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span>
<span class="token comment">// \u5982\u679C\u503C\u662F\u51FD\u6570\u4F1A\u81EA\u52A8\u8C03\u7528</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u59D3\u540D\u53EB{},\u6211\u4ECA\u5E74{}\u5C81&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u5982\u679C\u53EA\u6709\u4E24\u4E2A\u53C2\u6570\uFF0C\u4E14\u7B2C2\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4F1A\u81EA\u52A8\u5C55\u5F00</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u59D3\u540D\u53EB{},\u6211\u4ECA\u5E74{}\u5C81&quot;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">//\u5982\u679C\u7B2C2\u4E2A\u53C2\u6570\u4E0D\u662F{}\u65F6\u5C31\u542F\u7528\u4F4D\u7F6E\u63D2\u503C\u3002</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u59D3\u540D\u53EB{name},\u6211\u4ECA\u5E74{age}\u5C81&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token number">12</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63D2\u503C\u53D8\u91CF\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#\u63D2\u503C\u53D8\u91CF\u683C\u5F0F\u5316" aria-hidden="true">#</a> \u63D2\u503C\u53D8\u91CF\u683C\u5F0F\u5316</h2><p><code>voerka-i18n</code>\u652F\u6301\u5F3A\u5927\u7684\u63D2\u503C\u53D8\u91CF\u683C\u5F0F\u5316\u673A\u5236\uFF0C\u53EF\u4EE5\u5728\u63D2\u503C\u53D8\u91CF\u4E2D\u4F7F\u7528<code>{\u53D8\u91CF\u540D\u79F0 | \u683C\u5F0F\u5316\u5668\u540D\u79F0 | \u683C\u5F0F\u5316\u5668\u540D\u79F0(...\u53C2\u6570) | ... }</code>\u7C7B\u4F3C\u7BA1\u9053\u64CD\u4F5C\u7B26\u7684\u8BED\u6CD5\uFF0C\u5C06\u4E0A\u4E00\u4E2A\u8F93\u51FA\u4F5C\u4E3A\u4E0B\u4E00\u4E2A\u8F93\u5165\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5BF9\u53D8\u91CF\u503C\u7684\u8F6C\u6362\u3002\u6B64\u673A\u5236\u662F<code>voerka-i18n</code>\u5B9E\u73B0\u590D\u6570\u3001\u8D27\u5E01\u3001\u6570\u5B57\u7B49\u591A\u8BED\u8A00\u652F\u6301\u7684\u57FA\u7840\u3002</p><p>\u6211\u4EEC\u5047\u8BBE\u5B9A\u4E49\u4EE5\u4E0B\u683C\u5F0F\u5316\u5668\uFF08\u5982\u679C\u5B9A\u4E49\u683C\u5F0F\u5316\u5668\uFF0C\u8BE6\u89C1\u540E\u7EED\uFF09\u6765\u8FDB\u884C\u793A\u4F8B\u3002</p><ul><li><strong>UpperCase</strong>\uFF1A\u5C06\u5B57\u7B26\u8F6C\u6362\u4E3A\u5927\u5199</li><li><strong>division</strong>\uFF1A\u5BF9\u6570\u5B57\u6309\u6BCFn\u4F4D\u4E00\u4E2A\u9017\u53F7\u5206\u5272\uFF0C\u652F\u6301\u4E00\u4E2A\u53EF\u9009\u53C2\u6570\u5206\u5272\u4F4D\u6570\uFF0C\u5982<code>division(123456)===123,456</code>\uFF0C<code>division(123456,4)===12,3456</code></li><li><strong>mr</strong> : \u81EA\u52A8\u6DFB\u52A0\u4E00\u4E2A\u5148\u751F\u79F0\u547C</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// My name is TOM</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;My name is { name | UpperCase }&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u6211\u56FD2021\u5E74\u7684GDP\u662F\uFFE514,722,730,697,890</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u56FD2021\u5E74\u7684GDP\u662F\uFFE5{ gdp | division}&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">gdp</span><span class="token operator">:</span><span class="token number">14722730697890</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u652F\u6301\u4E3A\u683C\u5F0F\u5316\u5668\u63D0\u4F9B\u53C2\u6570\uFF0C\u63094\u4F4D\u4E00\u9017\u53F7\u5206\u5272</span>
<span class="token comment">// \u6211\u56FD2021\u5E74\u7684GDP\u662F\uFFE514,7227,3069,7890</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u56FD2021\u5E74\u7684GDP\u662F\uFFE5{ gdp | division(4)}&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">gdp</span><span class="token operator">:</span><span class="token number">14722730697890</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u652F\u6301\u8FDE\u7EED\u4F7F\u7528\u591A\u4E2A\u683C\u5F0F\u5316\u5668</span>
<span class="token comment">// My name is Mr.TOM</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;My name is { name | UpperCase | mr }&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BCF\u4E2A\u683C\u5F0F\u5316\u5668\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A<code>(value)=&gt;{...}</code>\u7684\u51FD\u6570\uFF0C\u5E76\u4E14\u80FD<strong>\u5C06\u4E0A\u4E00\u4E2A\u683C\u5F0F\u5316\u5668\u7684\u8F93\u51FA\u4F5C\u4E3A\u4E0B\u4E00\u4E2A\u683C\u5F0F\u5316\u5668\u7684\u8F93\u5165</strong>\uFF0C\u683C\u5F0F\u5316\u5668\u5177\u6709\u5982\u4E0B\u7279\u6027\uFF1A</p><h3 id="\u65E0\u53C2\u6570\u683C\u5F0F\u5316\u5668" tabindex="-1"><a class="header-anchor" href="#\u65E0\u53C2\u6570\u683C\u5F0F\u5316\u5668" aria-hidden="true">#</a> <strong>\u65E0\u53C2\u6570\u683C\u5F0F\u5316\u5668</strong></h3><p>\u4F7F\u7528\u65E0\u53C2\u6570\u683C\u5F0F\u5316\u5668\u65F6\u53EA\u9700\u4F20\u5165\u540D\u79F0\u5373\u53EF\u3002\u4F8B\u5982:<code>My name is { name | UpperCase }</code></p><h3 id="\u6709\u53C2\u6570\u683C\u5F0F\u5316\u5668" tabindex="-1"><a class="header-anchor" href="#\u6709\u53C2\u6570\u683C\u5F0F\u5316\u5668" aria-hidden="true">#</a> <strong>\u6709\u53C2\u6570\u683C\u5F0F\u5316\u5668</strong></h3><p>\u683C\u5F0F\u5316\u5668\u652F\u6301\u4F20\u5165\u53C2\u6570\uFF0C\u5982<code>{ gdp | division(4)}</code>\u3001<code>{ date | format(&#39;yyyy/MM/DD&#39;)}</code></p><p>\u7279\u522B\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u683C\u5F0F\u5316\u5668\u7684\u53C2\u6570\u53EA\u80FD\u652F\u6301\u7B80\u5355\u7684\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u5982<code>\u6570\u5B57</code>\u3001<code>\u5E03\u5C14\u578B</code>\u3001<code>\u5B57\u7B26\u4E32</code>\u3002</p><p><strong>\u4E0D\u652F\u6301\u6570\u7EC4\u3001\u5BF9\u8C61\u548C\u51FD\u6570\u53C2\u6570\uFF0C\u4E5F\u4E0D\u652F\u6301\u590D\u6742\u7684\u8868\u8FBE\u5F0F\u53C2\u6570\u3002</strong></p><h3 id="\u8FDE\u7EED\u4F7F\u7528\u591A\u4E2A\u683C\u5F0F\u5316\u5668" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u7EED\u4F7F\u7528\u591A\u4E2A\u683C\u5F0F\u5316\u5668" aria-hidden="true">#</a> <strong>\u8FDE\u7EED\u4F7F\u7528\u591A\u4E2A\u683C\u5F0F\u5316\u5668</strong></h3><p>\u5C31\u5982\u60A8\u9884\u671F\u7684\u4E00\u6837\uFF0C<strong>\u5C06\u4E0A\u4E00\u4E2A\u683C\u5F0F\u5316\u5668\u7684\u8F93\u51FA\u4F5C\u4E3A\u4E0B\u4E00\u4E2A\u683C\u5F0F\u5316\u5668\u7684\u8F93\u5165</strong>\u3002</p><p><code>\uFF5Bdata | f1 | f2 | f3(1)\uFF5D</code>\u7B49\u6548\u4E8E<code> f3(f2(f1(data)),1)</code></p>`,25),o=[p];function c(i,l){return s(),a("div",null,o)}var d=n(e,[["render",c],["__file","interpolation.html.vue"]]);export{d as default};
