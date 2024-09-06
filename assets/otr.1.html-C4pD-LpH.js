import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-CuwiGLNR.js";const l={};function p(c,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="otr-1-rftools杂项" tabindex="-1"><a class="header-anchor" href="#otr-1-rftools杂项"><span>otr.1 RFTools杂项</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>本文介绍有关RFTools的一些功能、文件目录结构，以及关于其的常见问题等</p><h2 id="rftools的目录结构" tabindex="-1"><a class="header-anchor" href="#rftools的目录结构"><span>RFTools的目录结构</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>RFTools</span></span>
<span class="line"><span>├─Animations 一些Prefab使用的动画机</span></span>
<span class="line"><span>│  ├─Character #角色</span></span>
<span class="line"><span>│  ├─Vehicles #载具</span></span>
<span class="line"><span>│  └─Weapons #武器</span></span>
<span class="line"><span>├─Content #MOD导出向导的配置实例，即预置的预导出MOD实例（此文件夹内的Prefab无法Export或Test）</span></span>
<span class="line"><span>├─Export #MOD导出位置</span></span>
<span class="line"><span>├─Fonts #载具HUB使用的字体</span></span>
<span class="line"><span>├─Materials #Prefab以及示例场景使用的材质</span></span>
<span class="line"><span>│  ├─Actor #玩家皮肤材质</span></span>
<span class="line"><span>│  ├─Effects #粒子与Prijectiles效果</span></span>
<span class="line"><span>│  ├─Level #Map的Flag</span></span>
<span class="line"><span>│  ├─Misc #一些杂七杂八的像标靶、地图避障箱</span></span>
<span class="line"><span>│  ├─Nature #自然事物（水）</span></span>
<span class="line"><span>│  ├─Physics #物理材质</span></span>
<span class="line"><span>│  ├─Props #一些杂七杂八的物体材质如补给箱</span></span>
<span class="line"><span>│  ├─Shaders #材质Shader，但没什么东西</span></span>
<span class="line"><span>│  │  └─GrassOverride</span></span>
<span class="line"><span>│  ├─Skybox #天空盒材质</span></span>
<span class="line"><span>│  ├─Standard Assets #Unity Standard Assets包,但只有草</span></span>
<span class="line"><span>│  ├─Textures #图像材质</span></span>
<span class="line"><span>│  │  ├─Camo #迷彩</span></span>
<span class="line"><span>│  │  ├─Effects #又是粒子和载具准星</span></span>
<span class="line"><span>│  │  │  └─Materials 已Material的图像材质</span></span>
<span class="line"><span>│  │  ├─Misc #杂七杂八的的像标靶材质的原图像</span></span>
<span class="line"><span>│  │  ├─Nature #自然纹理（地形、植被）的原图像与法向贴图</span></span>
<span class="line"><span>│  │  ├─Props #杂七杂八的如补给箱的原图像</span></span>
<span class="line"><span>│  │  ├─UI #UI物体</span></span>
<span class="line"><span>│  │  │  ├─Blips #载具Prefab的地图图标</span></span>
<span class="line"><span>│  │  │  ├─Vehicles #载具Prefab的UI贴图</span></span>
<span class="line"><span>│  │  │  └─Weapons #武器Prefab的图标</span></span>
<span class="line"><span>│  │  └─Vehicles #载具Prefab所用材质原图像</span></span>
<span class="line"><span>│  │      └─Occlusion #武直Prefab的迷彩</span></span>
<span class="line"><span>│  ├─Tracers 武器红点瞄具材质</span></span>
<span class="line"><span>│  ├─UI #载具UI材质</span></span>
<span class="line"><span>│  ├─Vehicles #载具材质</span></span>
<span class="line"><span>│  │  └─Updated Vehicles #某次RFTools更新增加的载具材质</span></span>
<span class="line"><span>│  │      └─Attack Helicopter</span></span>
<span class="line"><span>│  └─Weapons #武器材质</span></span>
<span class="line"><span>├─Models #Prefab所用模型</span></span>
<span class="line"><span>│  ├─Character #玩家角色</span></span>
<span class="line"><span>│  │  └─Materials</span></span>
<span class="line"><span>│  ├─Effects #Projectiles的Prefab所用模型</span></span>
<span class="line"><span>│  │  └─Materials</span></span>
<span class="line"><span>│  ├─Misc #杂七杂八的别理</span></span>
<span class="line"><span>│  │  └─Materials</span></span>
<span class="line"><span>│  ├─Props #杂七杂八的别理</span></span>
<span class="line"><span>│  │  └─Level Elements</span></span>
<span class="line"><span>│  │      └─Materials</span></span>
<span class="line"><span>│  ├─Vehicles #载具Prefab所用模型</span></span>
<span class="line"><span>│  │  ├─Materials</span></span>
<span class="line"><span>│  │  └─UI #飞机Prefab的UI所用模型</span></span>
<span class="line"><span>│  │      └─Materials</span></span>
<span class="line"><span>│  └─Weapons #武器</span></span>
<span class="line"><span>│      ├─Materials</span></span>
<span class="line"><span>│      └─Misc #武器Prefab的子弹抛壳</span></span>
<span class="line"><span>├─Plugins #Steam Workshop的依赖，勿动</span></span>
<span class="line"><span>├─Prefabs #一些Prefab</span></span>
<span class="line"><span>│  ├─Combat #载具的Projectiles的Prefab</span></span>
<span class="line"><span>│  ├─Map Elements #地图的Prefab</span></span>
<span class="line"><span>│  │  └─Must Haves #地图必须有的Prefab</span></span>
<span class="line"><span>│  │      └─Pathfinding #寻路系统的Prefab</span></span>
<span class="line"><span>│  ├─Projectiles #子弹Projectiles的Prefab</span></span>
<span class="line"><span>│  ├─Vehicles #载具</span></span>
<span class="line"><span>│  │  ├─Misc #杂七杂八的</span></span>
<span class="line"><span>│  │  └─Old Versions #以前版本的旧载具</span></span>
<span class="line"><span>│  └─Weapons #武器</span></span>
<span class="line"><span>├─Resources #一些工具包组件的可视化预览所用模型</span></span>
<span class="line"><span>│  └─Preview</span></span>
<span class="line"><span>│      └─Materials</span></span>
<span class="line"><span>├─Scenes #示例场景</span></span>
<span class="line"><span>│  ├─ExampleScene #示例地图</span></span>
<span class="line"><span>│  └─Weapons Lab #武器实验场景</span></span>
<span class="line"><span>├─Scripts #RFTools依赖组件，勿动</span></span>
<span class="line"><span>├─Shaders #一些Shaders</span></span>
<span class="line"><span>├─Sounds #一些音效</span></span>
<span class="line"><span>│  ├─Ambience #环境音（风声）</span></span>
<span class="line"><span>│  ├─Vehicles #载具</span></span>
<span class="line"><span>│  └─Weapons #武器</span></span>
<span class="line"><span>│      ├─Effects #一些杂七杂八的像烟与子弹飞行声</span></span>
<span class="line"><span>│      └─Reflection #子弹打击回声，勿动</span></span>
<span class="line"><span>├─Standalone #Steam相关，勿动</span></span>
<span class="line"><span>├─Standard Assets #Unity Standard Assets资源包的东西，有Shaders以及图像材质，此处不作注解</span></span>
<span class="line"><span>│  ├─Editor</span></span>
<span class="line"><span>│  │  └─ImageEffects</span></span>
<span class="line"><span>│  └─Effects</span></span>
<span class="line"><span>│      ├─GlassRefraction</span></span>
<span class="line"><span>│      │  ├─Materials</span></span>
<span class="line"><span>│      │  ├─Shaders</span></span>
<span class="line"><span>│      │  └─Textures</span></span>
<span class="line"><span>│      ├─ImageEffects</span></span>
<span class="line"><span>│      │  ├─Scripts</span></span>
<span class="line"><span>│      │  ├─Shaders</span></span>
<span class="line"><span>│      │  │  ├─Contrast Stretch</span></span>
<span class="line"><span>│      │  │  ├─_Antialiasing</span></span>
<span class="line"><span>│      │  │  ├─_BloomAndFlares</span></span>
<span class="line"><span>│      │  │  └─_DepthOfField</span></span>
<span class="line"><span>│      │  └─Textures</span></span>
<span class="line"><span>│      ├─LightCookies</span></span>
<span class="line"><span>│      │  └─Textures</span></span>
<span class="line"><span>│      ├─LightFlares</span></span>
<span class="line"><span>│      │  ├─Flares</span></span>
<span class="line"><span>│      │  ├─Materials</span></span>
<span class="line"><span>│      │  └─Textures</span></span>
<span class="line"><span>│      ├─Projectors</span></span>
<span class="line"><span>│      │  ├─Materials</span></span>
<span class="line"><span>│      │  ├─Prefabs</span></span>
<span class="line"><span>│      │  ├─Shaders</span></span>
<span class="line"><span>│      │  └─Textures</span></span>
<span class="line"><span>│      ├─TessellationShaders</span></span>
<span class="line"><span>│      │  ├─Materials</span></span>
<span class="line"><span>│      │  ├─Models</span></span>
<span class="line"><span>│      │  ├─Scenes</span></span>
<span class="line"><span>│      │  ├─Shaders</span></span>
<span class="line"><span>│      │  └─Textures</span></span>
<span class="line"><span>│      └─ToonShading</span></span>
<span class="line"><span>│          ├─Materials</span></span>
<span class="line"><span>│          ├─Shaders</span></span>
<span class="line"><span>│          └─Textures</span></span>
<span class="line"><span>└─Tools #勿动</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="菜单栏功能" tabindex="-1"><a class="header-anchor" href="#菜单栏功能"><span>菜单栏功能</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Ravenfield Tool</span></span>
<span class="line"><span>├─ Build Target #导出MOD对应目标系统类型（点击“Set ...”设置）</span></span>
<span class="line"><span>├─ Set Game Executeble #选择游戏文件目录（方便测试MOD）</span></span>
<span class="line"><span>├─ Map #地图相关</span></span>
<span class="line"><span>│   ├─ Scan Pathfinding #扫描地图的NAV-MESH（会唤醒游戏进程）</span></span>
<span class="line"><span>│   ├─ Export Open Scene as Map #将打开的Unity场景作为Map导出</span></span>
<span class="line"><span>│   └─ Sanity Check Map #检查Map是否可以导出（是否缺失必要物体）</span></span>
<span class="line"><span>├─ Content #MOD</span></span>
<span class="line"><span>│  ├─ Sanity Check Content Mod #检查选中的Mod导出向导Prefab是否可以导出（是否缺失必要物体）</span></span>
<span class="line"><span>│  └─ Export Content Mod #导出选中的Mod导出向导Prefab</span></span>
<span class="line"><span>├─ Export Map or Content Mod #导出选中的Map或Mod导出向导Prefab</span></span>
<span class="line"><span>├─ Test Map or Content Mod #导出并运行游戏测试选中的Map或Mod导出向导Prefab</span></span>
<span class="line"><span>└─ Publish to Steam Workshop #发布已导出的Mod或Map到Steam创意工坊</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="打开unity工程-提示进入安全模式" tabindex="-1"><a class="header-anchor" href="#打开unity工程-提示进入安全模式"><span>打开Unity工程，提示进入安全模式</span></a></h3><p>提示<a href="https://docs.unity.cn/cn/2020.3/Manual/SafeMode.html" target="_blank" rel="noopener noreferrer">安全模式</a>时，此时如果忽略错误并强制进入，大部分情况下RFTools的所有依赖组件都会无法运行</p><p>按以下方式排查：</p><ol><li>上一次打开工程时刚导入RFTools包</li></ol><p>尝试新建工程，再次导入RFTools包，检查控制台是否有报错</p><p>如果有，则说明以下2个可能：</p><blockquote><ol><li><p>RFTools损坏或有Bug，尝试到官网下载一个最新版使用</p></li><li><p>RFTools包与当前的Unity Editor版本不兼容，请确保使用的Unity Editor与Tools版本对应。详情请看本站的资源镜像</p></li></ol></blockquote><ol start="2"><li>不是第一个情况</li></ol><p>请检查上一次打开工程时是否添加了外部C#脚本进入工程或修改了RFTools依赖组件，如果有，替换原版脚本或删除外来脚本</p>`,17)]))}const v=n(l,[["render",p],["__file","otr.1.html.vue"]]),t=JSON.parse('{"path":"/cn/Tutorials/otr.1.html","title":"otr.1 RFTools杂项","lang":"zh-CN","frontmatter":{"category":["教程"],"head":[["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/cn/Tutorials/otr.1.html"}],["meta",{"property":"og:site_name","content":"Ravenfield社区文档"}],["meta",{"property":"og:title","content":"otr.1 RFTools杂项"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-30T09:55:48.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-30T09:55:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"otr.1 RFTools杂项\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-30T09:55:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"RFTools的目录结构","slug":"rftools的目录结构","link":"#rftools的目录结构","children":[]},{"level":2,"title":"菜单栏功能","slug":"菜单栏功能","link":"#菜单栏功能","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"打开Unity工程，提示进入安全模式","slug":"打开unity工程-提示进入安全模式","link":"#打开unity工程-提示进入安全模式","children":[]}]}],"git":{"createdTime":1698589960000,"updatedTime":1698659748000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":2}]},"filePathRelative":"cn/Tutorials/otr.1.md","localizedDate":"2023年10月29日"}');export{v as comp,t as data};