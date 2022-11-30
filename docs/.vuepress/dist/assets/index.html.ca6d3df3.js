import{_ as g,r as t,o as u,c as d,b as l,a as n,d as s,w as e,e as a,F as b,f as h,g as p,t as f}from"./app.7130c605.js";const _="/bar/images/abc.jpg",x={},y=p("<h1>abc</h1><table><thead><tr><th>First Header</th><th>Second Header</th></tr></thead><tbody><tr><td>Content Cell</td><td>Content Cell</td></tr><tr><td>Content Cell</td><td>Content Cell</td></tr></tbody></table><table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td>git status</td><td>List all new or modified files</td></tr><tr><td>git diff</td><td>Show file differences that haven&#39;t been staged</td></tr></tbody></table>",3),w=n("br",null,null,-1),C=n("br",null,null,-1),V=n("br",null,null,-1),P={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},N=n("p",null,"VuePress 2 已经发布 :tada: ！",-1),L={class:"table-of-contents"},T=p(`<h2>一级</h2><h3>二级</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;你好， VuePress&#39;</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">&#39;https://vuejs.org/images/logo.png&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 行号被禁用</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">&#39;This is line 2&#39;</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">&#39;This is line 3&#39;</span>
</code></pre></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 默认情况下，这里会被保持原样 --&gt;</span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 这里会被 Vue 编译 --&gt;</span>
1 + 2 + 3 = 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 由于 JS 代码高亮，这里不会被正确编译</span>
<span class="token keyword">const</span> onePlusTwoPlusThree <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),z=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig<span class="token punctuation">,</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/utils&#39;</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">&#39;你好， VuePress ！&#39;</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">&#39;这是我的第一个 VuePress 站点&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// pagePatterns: [&#39;**/*.md&#39;, &#39;!.vuepress&#39;, &#39;!node_modules&#39;, &#39;!MyBlog/*.md&#39;],</span>

    locales<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 键名是该语言所属的子路径</span>
        <span class="token comment">// 作为特例，默认语言可以使用 &#39;/&#39; 作为其路径。</span>
        <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            lang<span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">&#39;VuePress&#39;</span><span class="token punctuation">,</span>
            description<span class="token operator">:</span> <span class="token string">&#39;Vue-powered Static Site Generator&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">&#39;VuePress&#39;</span><span class="token punctuation">,</span>
            description<span class="token operator">:</span> <span class="token string">&#39;Vue 驱动的静态网站生成器&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    base<span class="token operator">:</span> <span class="token string">&#39;/bar/&#39;</span><span class="token punctuation">,</span>
    markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
        anchor<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        emoji<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        code<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// lineNumbers: false,</span>
            <span class="token comment">// highlightLines: false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        importCode<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">handleImportPath</span><span class="token operator">:</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
                str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^@vuepress</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        locales<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                selectLanguageName<span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span>
                selectLanguageText<span class="token operator">:</span> <span class="token string">&#39;Languages&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                selectLanguageName<span class="token operator">:</span> <span class="token string">&#39;简体中文&#39;</span><span class="token punctuation">,</span>
                selectLanguageText<span class="token operator">:</span> <span class="token string">&#39;选择语言&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { path } from &#39;@vuepress/utils&#39;


export default defineUserConfig({
    lang: &#39;zh-CN&#39;,
    title: &#39;你好， VuePress ！&#39;,
    description: &#39;这是我的第一个 VuePress 站点&#39;,
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { path } from &#39;@vuepress/utils&#39;


export default defineUserConfig({
    lang: &#39;zh-CN&#39;,
    title: &#39;你好， VuePress ！&#39;,
    description: &#39;这是我的第一个 VuePress 站点&#39;,
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一加一等于： 2</p>`,4),G=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),a(`
`)])])],-1),S=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(`
`)])])],-1),U=p('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>这是一个提示</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>这是一个警告</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>这是一个危险警告</p></div><details class="custom-container details"><p>这是一个 details 标签</p></details>',4),I=n("p",null,[n("img",{src:_,alt:""})],-1);function j(B,R){const i=t("RouterLink"),v=t("ExternalLinkIcon"),c=t("router-link"),r=t("CodeGroupItem"),k=t("CodeGroup"),o=t("Badge");return u(),d("div",null,[y,l(" 相对路径 "),n("p",null,[s(i,{to:"/"},{default:e(()=>[a("首页")]),_:1}),w,s(i,{to:"/reference/config.html"},{default:e(()=>[a("配置参考")]),_:1}),C,s(i,{to:"/getting-started.html"},{default:e(()=>[a("快速上手")]),_:1})]),l(" 绝对路径 "),n("p",null,[s(i,{to:"/zh/guide/"},{default:e(()=>[a("指南")]),_:1}),V,s(i,{to:"/zh/reference/config.html#links"},{default:e(()=>[a("配置参考 > markdown.links")]),_:1})]),l(" URL "),n("p",null,[n("a",P,[a("GitHub"),s(v)])]),N,n("nav",L,[n("ul",null,[n("li",null,[s(c,{to:"#一级"},{default:e(()=>[a("一级")]),_:1}),n("ul",null,[n("li",null,[s(c,{to:"#二级"},{default:e(()=>[a("二级")]),_:1})])])])])]),T,l(" 最简单的语法 "),z,n("p",null,[(u(),d(b,null,h(3,m=>n("span",null," span: "+f(m),1)),64))]),s(k,null,{default:e(()=>[s(r,{title:"YARN"},{default:e(()=>[G]),_:1}),s(r,{title:"NPM",active:""},{default:e(()=>[S]),_:1})]),_:1}),U,n("ul",null,[n("li",null,[a("VuePress - "),s(o,{type:"tip",text:"v2",vertical:"top"})]),n("li",null,[a("VuePress - "),s(o,{type:"warning",text:"v2",vertical:"middle"})]),n("li",null,[a("VuePress - "),s(o,{type:"danger",text:"v2",vertical:"bottom"})])]),I])}const A=g(x,[["render",j],["__file","index.html.vue"]]);export{A as default};
