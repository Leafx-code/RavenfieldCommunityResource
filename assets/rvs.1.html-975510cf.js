import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as r,a as e,b as s,d as a,e as t}from"./app-30e99b1c.js";const d={},c=e("h1",{id:"rvs-1-ravenscrpit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rvs-1-ravenscrpit","aria-hidden":"true"},"#"),s(" rvs.1 Ravenscrpit")],-1),p=e("h2",{id:"_2-0-何为ravenscrpit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-0-何为ravenscrpit","aria-hidden":"true"},"#"),s(" -2.0 何为Ravenscrpit？")],-1),u=e("p",null,"Ravenscrpit是一个基于Lua的游戏语言（其实就是Lua），为了Ravenfield的模组化开发",-1),h={href:"https://www.moonsharp.org/",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"Ravenscript可以控制Ravenfield和Unity引擎的某些部分",-1),m=e("p",null,"因此它具有与Unity开发中的C#具有相同的逻辑与操作",-1),v=e("h2",{id:"_1-0-环境配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-0-环境配置","aria-hidden":"true"},"#"),s(" -1.0 环境配置")],-1),b=e("p",null,[e("strong",null,"此处不再详细说明，如果你有看过相关编程语言的教程，对下面的事情你应该会很快上手")],-1),g=e("p",null,[e("strong",null,"详情请参考官方文档")],-1),k={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},f=e("img",{src:"https://img.shields.io/badge/VS Code-Install-blue?style=for-the-badge&logo=visualstudiocode",alt:"Install in VS Code",title:"Install in VS Code"},null,-1),C=e("p",null,"或者自行选择一个合适的编辑器,以下内容部分仅适用VSCode",-1),S={start:"2"},V={href:"https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans",target:"_blank",rel:"noopener noreferrer"},I=e("img",{src:"https://img.shields.io/badge/VS Code-Install-blue?style=for-the-badge&logo=visualstudiocode",alt:"Install in VS Code",title:"Install in VS Code"},null,-1),x={href:"https://marketplace.visualstudio.com/items?itemName=sumneko.lua",target:"_blank",rel:"noopener noreferrer"},y=e("img",{src:"https://img.shields.io/badge/VS Code-Install-blue?style=for-the-badge&logo=visualstudiocode",alt:"Install in VS Code",title:"Install in VS Code"},null,-1),q={href:"https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp",target:"_blank",rel:"noopener noreferrer"},N=e("img",{src:"https://img.shields.io/badge/VS Code-Install-blue?style=for-the-badge&logo=visualstudiocode",alt:"Install in VS Code",title:"Install in VS Code"},null,-1),R=e("li",null,[e("p",null,"配置工作区的.vscode\\settings.json为：")],-1),j=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">//配置文件扩展名关联</span>
    <span class="token property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;*.txt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lua&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">//隐藏meta文件</span>
    <span class="token property">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;**/*.meta&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),E={start:"6"},L=e("li",null,[e("p",null,"配置VSCode为Unity的外部编辑器")],-1),w={href:"https://marketplace.visualstudio.com/items?itemName=xanathar.moonsharp-debug",target:"_blank",rel:"noopener noreferrer"},B=e("img",{src:"https://img.shields.io/badge/VS Code-Install-blue?style=for-the-badge&logo=visualstudiocode",alt:"Install in VS Code",title:"Install in VS Code"},null,-1),D=t('<h2 id="_1-0-文件结构" tabindex="-1"><a class="header-anchor" href="#_1-0-文件结构" aria-hidden="true">#</a> 1.0 文件结构</h2><h2 id="_1-1-一般api使用方法" tabindex="-1"><a class="header-anchor" href="#_1-1-一般api使用方法" aria-hidden="true">#</a> 1.1 一般Api使用方法</h2><h2 id="_1-2-在游戏测试" tabindex="-1"><a class="header-anchor" href="#_1-2-在游戏测试" aria-hidden="true">#</a> 1.2 在游戏测试</h2><h2 id="_1-3-常见报错" tabindex="-1"><a class="header-anchor" href="#_1-3-常见报错" aria-hidden="true">#</a> 1.3 常见报错</h2><h2 id="_1-4-debug" tabindex="-1"><a class="header-anchor" href="#_1-4-debug" aria-hidden="true">#</a> 1.4 Debug</h2>',5);function U(M,P){const n=l("ExternalLinkIcon");return i(),r("div",null,[c,p,u,e("p",null,[s("它的诞生基于"),e("a",h,[s("MoonSharp Project"),a(n)]),s("（可惜自2016年就没了更新，官方仓库堆了一堆PR）")]),_,m,v,b,g,e("ol",null,[e("li",null,[s("安装 "),e("a",k,[f,a(n)]),s("作为IDE")])]),C,e("ol",S,[e("li",null,[e("p",null,[s("安装Chinese-Simple语言扩展包"),e("a",V,[I,a(n)])])]),e("li",null,[e("p",null,[s("安装vscode-lua扩展"),e("a",x,[y,a(n)])])]),e("li",null,[e("p",null,[s("安装C#扩展"),e("a",q,[N,a(n)])])]),R]),j,e("ol",E,[L,e("li",null,[e("p",null,[s("（可选）安装Debug扩展"),e("a",w,[B,a(n)])])])]),D])}const A=o(d,[["render",U],["__file","rvs.1.html.vue"]]);export{A as default};