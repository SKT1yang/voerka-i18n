import{_ as n,c as s}from"./app.7363afea.js";const a={},e=s(`<h1 id="\u6587\u672C\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u6620\u5C04" aria-hidden="true">#</a> \u6587\u672C\u6620\u5C04</h1><p>\u867D\u7136<code>VoerkaI18n</code>\u63A8\u8350\u91C7\u7528<code>t(&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u4E07\u5C81&quot;)</code>\u5F62\u5F0F\u7684\u7B26\u5408\u76F4\u89C9\u7684\u7FFB\u8BD1\u5F62\u5F0F\uFF0C\u800C\u4E0D\u662F\u91C7\u7528<code>t(&quot;xxxx.xxx&quot;)</code>\u8FD9\u6837\u4E0D\u7B26\u5408\u76F4\u89C9\u7684\u5F62\u5F0F\uFF0C\u4F46\u662F\u4E3A\u4EC0\u4E48\u5927\u90E8\u4EFD\u7684\u56FD\u9645\u5316\u65B9\u6848\u5747\u91C7\u7528<code>t(&quot;xxxx.xxx&quot;)</code>\u5F62\u5F0F\uFF1F</p><p>\u5728\u6211\u4EEC\u7684\u65B9\u6848\u4E2D\uFF0Ct(&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u4E07\u5C81&quot;)\u5F62\u5F0F\u76F8\u5F53\u4E8E\u91C7\u7528\u539F\u59CB\u6587\u672C\u8FDB\u884C\u67E5\u8868\uFF0C\u8BED\u8A00\u540D\u5F62\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// en.js</span>
<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD&quot;</span><span class="token operator">:</span><span class="token string">&quot;the people&#39;s Republic of China&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">// jp.js</span>
<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u4E2D\u83EF\u4EBA\u6C11\u5171\u548C\u56FD&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5F88\u663E\u7136\uFF0C\u76F4\u63A5\u4F7F\u7528\u6587\u672C\u5185\u5BB9\u4F5C\u4E3A<code>key</code>\uFF0C\u867D\u7136\u7B26\u5408\u76F4\u89C9\uFF0C\u4F46\u662F\u4F1A\u9020\u6210\u5927\u91CF\u7684\u5197\u4F59\u4FE1\u606F\u3002\u56E0\u6B64\uFF0C<code>voerkai18n compile</code>\u4F1A\u5C06\u4E4B\u7F16\u8BD1\u6210\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//idMap.js</span>
<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;1&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u4E07\u5C81&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">// en.js</span>
<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;1&quot;</span><span class="token operator">:</span><span class="token string">&quot;Long live the people&#39;s Republic of China&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">// jp.js</span>
<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;2&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u4E2D\u83EF\u4EBA\u6C11\u5171\u548C\u56FD&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5982\u6B64\uFF0C\u5C31\u6D88\u9664\u4E86\u5728<code>en.js</code>\u3001<code>jp.js</code>\u6587\u4EF6\u4E2D\u7684\u5197\u4F59\u3002\u4F46\u662F\u5728\u6E90\u4EE3\u7801\u6587\u4EF6\u4E2D\u8FD8\u5B58\u5728<code>t(&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u4E07\u5C81&quot;)</code>\uFF0C\u6574\u4E2A\u8FD0\u884C\u73AF\u5883\u4E2D\u5B58\u5728\u4E24\u4EFD\u526F\u672C\uFF0C\u4E00\u4EFD\u5728\u6E90\u4EE3\u7801\u6587\u4EF6\u4E2D\uFF0C\u4E00\u4EFD\u5728<code>idMap.js</code>\u4E2D\u3002</p><p>\u4E3A\u4E86\u8FDB\u4E00\u6B65\u51CF\u5C11\u91CD\u590D\u5185\u5BB9\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u6E90\u4EE3\u7801\u6587\u4EF6\u4E2D\u7684<code>t(&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u4E07\u5C81&quot;)</code>\u66F4\u6539\u4E3A<code>t(&quot;1&quot;)</code>\uFF0C\u8FD9\u6837\u5C31\u80FD\u786E\u4FDD\u65E0\u91CD\u590D\u5197\u4F59\u3002\u4F46\u662F\uFF0C\u5F88\u663E\u7136\uFF0C\u6211\u4EEC\u4E0D\u53EF\u80FD\u624B\u52A8\u6765\u66F4\u6539\u6E90\u4EE3\u7801\u6587\u4EF6\uFF0C\u8FD9\u5C31\u9700\u8981\u7531<code>voerkai18n</code>\u63D0\u4F9B\u7684\u4E00\u4E2A\u7F16\u8BD1\u533A\u63D2\u4EF6\u6765\u505A\u8FD9\u4E00\u4EF6\u4E8B\u4E86\u3002</p><p>\u4EE5<code>babel-plugin-voerkai18n</code>\u63D2\u4EF6\u4E3A\u4F8B\uFF0C\u8BE5\u63D2\u4EF6\u540C\u65F6\u8FD8\u5B8C\u6210\u4E00\u4EFD\u4EFB\u52A1\uFF0C\u5C31\u662F\u81EA\u52A8\u8BFB\u53D6<code>voerkai18n compile</code>\u751F\u6210\u7684<code>idMap.js</code>\u6587\u4EF6\uFF0C\u7136\u540E\u5C06<code>t(&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u4E07\u5C81&quot;)</code>\u81EA\u52A8\u66F4\u6539\u4E3A<code>t(&quot;1&quot;)</code>\uFF0C\u8FD9\u6837\u5C31\u5B8C\u5168\u6D88\u9664\u4E86\u91CD\u590D\u5197\u4F59\u4FE1\u606F\u3002</p><p>\u6240\u4EE5\uFF0C\u5728\u6700\u7EC8\u5F62\u6210\u7684\u4EE3\u7801\u4E2D\uFF0C\u5B9E\u9645\u4E0A\u6BCF\u4E00\u4E2At\u51FD\u6570\u5747\u662F<code>t(&quot;1&quot;)</code>\u3001<code>t(&quot;2&quot;)</code>\u3001<code>t(&quot;3&quot;)</code>\u3001<code>...</code>\u3001<code>t(&quot;n&quot;)</code>\u7684\u5F62\u5F0F\uFF0C\u6700\u7EC8\u4EE3\u7801\u8FD8\u662F\u91C7\u7528\u4E86\u7528<code>key</code>\u6765\u8FDB\u884C\u8F6C\u6362\uFF0C\u53EA\u4E0D\u8FC7\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u81EA\u52A8\u5B8C\u6210\u7684\u800C\u5DF2\u3002</p><p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li>\u5982\u679C\u6CA1\u6709\u542F\u7528<code>babel-plugin-voerkai18n</code>\u6216<code>vite</code>\u7B49\u7F16\u8BD1\u533A\u63D2\u4EF6\uFF0C\u8FD8\u662F\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u4F46\u662F\u4F1A\u6709\u4E00\u4EFD\u9ED8\u8BA4\u8BED\u8A00\u7684\u5197\u4F59\u4FE1\u606F\u5B58\u5728\u3002</li></ul>`,12);function o(p,t){return e}var r=n(a,[["render",o],["__file","textMap.html.vue"]]);export{r as default};
