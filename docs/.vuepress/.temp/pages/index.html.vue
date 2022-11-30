<template><div><h1>abc</h1>
<table>
<thead>
<tr>
<th>First Header</th>
<th>Second Header</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Command</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>git status</td>
<td>List all new or modified files</td>
</tr>
<tr>
<td>git diff</td>
<td>Show file differences that haven't been staged</td>
</tr>
</tbody>
</table>
<!-- 相对路径 -->
<p><RouterLink to="/">首页</RouterLink><br>
<RouterLink to="/reference/config.html">配置参考</RouterLink><br>
<RouterLink to="/getting-started.html">快速上手</RouterLink></p>
<!-- 绝对路径 -->
<p><RouterLink to="/zh/guide/">指南</RouterLink><br>
<RouterLink to="/zh/reference/config.html#links">配置参考 &gt; markdown.links</RouterLink></p>
<!-- URL -->
<p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></p>
<p>VuePress 2 已经发布 :tada: ！</p>
<nav class="table-of-contents"><ul><li><router-link to="#一级">一级</router-link><ul><li><router-link to="#二级">二级</router-link></li></ul></li></ul></nav>
<h2>一级</h2>
<h3>二级</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'你好， VuePress'</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 行号被禁用</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token comment">&lt;!-- 默认情况下，这里会被保持原样 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 这里会被 Vue 编译 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 由于 JS 代码高亮，这里不会被正确编译</span>
<span class="token keyword">const</span> onePlusTwoPlusThree <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- 最简单的语法 -->
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig<span class="token punctuation">,</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/utils'</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    lang<span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'你好， VuePress ！'</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">'这是我的第一个 VuePress 站点'</span><span class="token punctuation">,</span>
    <span class="token comment">// pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!MyBlog/*.md'],</span>

    locales<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 键名是该语言所属的子路径</span>
        <span class="token comment">// 作为特例，默认语言可以使用 '/' 作为其路径。</span>
        <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            lang<span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'VuePress'</span><span class="token punctuation">,</span>
            description<span class="token operator">:</span> <span class="token string">'Vue-powered Static Site Generator'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            lang<span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'VuePress'</span><span class="token punctuation">,</span>
            description<span class="token operator">:</span> <span class="token string">'Vue 驱动的静态网站生成器'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    base<span class="token operator">:</span> <span class="token string">'/bar/'</span><span class="token punctuation">,</span>
    markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
        anchor<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        emoji<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        code<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// lineNumbers: false,</span>
            <span class="token comment">// highlightLines: false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        importCode<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">handleImportPath</span><span class="token operator">:</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">=></span>
                str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^@vuepress</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        locales<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                selectLanguageName<span class="token operator">:</span> <span class="token string">'English'</span><span class="token punctuation">,</span>
                selectLanguageText<span class="token operator">:</span> <span class="token string">'Languages'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                selectLanguageName<span class="token operator">:</span> <span class="token string">'简体中文'</span><span class="token punctuation">,</span>
                selectLanguageText<span class="token operator">:</span> <span class="token string">'选择语言'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import { path } from '@vuepress/utils'


export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import { path } from '@vuepress/utils'


export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一加一等于： {{ 1 + 1 }}</p>
<p><span v-for="i in 3"> span: {{ i }} </span></p>
<CodeGroup>
  <CodeGroupItem title="YARN">
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="NPM" active>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div>  </CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这是一个提示</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>这是一个警告</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>这是一个危险警告</p>
</div>
<details class="custom-container details">
<p>这是一个 details 标签</p>
</details>
<ul>
<li>VuePress - <Badge type="tip" text="v2" vertical="top" /></li>
<li>VuePress - <Badge type="warning" text="v2" vertical="middle" /></li>
<li>VuePress - <Badge type="danger" text="v2" vertical="bottom" /></li>
</ul>
<p><img src="/images/abc.jpg" alt=""></p>
</div></template>


