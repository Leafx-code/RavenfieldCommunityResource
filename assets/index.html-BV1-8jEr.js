import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as p,a as e,b as t,d as n,w as s,e as i}from"./app-CaNES3Ui.js";const h={},d=e("h1",{id:"mod教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mod教程"},[e("span",null,"MOD教程")])],-1),_=e("h2",{id:"前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前言"},[e("span",null,"前言")])],-1),u=e("p",null,"Hi~（＾∀＾●）ﾉｼ",-1),m=e("p",null,"欢迎成为RF的modder（模组作者）！",-1),f=e("p",null,"此页面集将指导您创建MOD",-1),g={class:"hint-container tip"},b=e("p",{class:"hint-container-title"},"提示",-1),y=e("p",null,"此文档可能在某些方面仍然存在笼统、错误的部分，但只要我没弃坑这个项目都应该会长期维护&更新&重写XD，欢迎时不时回来这里!!",-1),k={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=2902809158",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"在启程之前-必读",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在启程之前-必读"},[e("span",null,"在启程之前...(必读)")])],-1),v=e("p",null,[t("在启程之前，这是您需要的掌握一些技能，"),e("strong",null,"您必须至少先看一遍教程才能确保您MODDING的顺利，这里不是零基础教程"),t("：")],-1),x=e("h3",{id:"你必须掌握的技能",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#你必须掌握的技能"},[e("span",null,"你必须掌握的技能")])],-1),S=e("p",null,[e("em",null,[e("strong",null,"Unity开发")])],-1),B={href:"https://unity.com/releases/editor/archive",target:"_blank",rel:"noopener noreferrer"},R=e("em",null,"要求2020.3版的最新小版本",-1),U=e("p",null,[e("strong",null,"描述"),t(" 这是这个游戏的的游戏引擎，也是这个系列的核心，但是您不必完全掌握，您只需了解Unity的核心操作即可（甚至不用完全记住，有些东西学了一辈子都用不到），您可以去查找相关速通教程（5小时内为佳），然后在实际开发中不断提升能力")],-1),M=e("p",null,[e("strong",null,"学习路线（仅参考）")],-1),T={href:"https://www.bilibili.com/video/BV1gQ4y1e7SS",target:"_blank",rel:"noopener noreferrer"},C={href:"https://learn.unity.com/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://docs.unity.cn/cn/2020.3/Manual/index.html",target:"_blank",rel:"noopener noreferrer"},D=e("em",null,[e("strong",null,"模型、动画制作")],-1),O=e("strong",null,"可以代表这项技能的软件",-1),E={href:"https://www.blendercn.org/",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,[e("strong",null,"描述"),t(" 这项技能我们同样无需完全掌握，速通即可，然后在实际项目中不断提升能力（除非你能找到美术资源，版权的话一般来说只要不盈利都是允许的。不提倡高模，模型面数最好低于8万，推荐使用Blender版本2.93）")],-1),V=e("strong",null,"学习路线（仅参考）",-1),A={href:"https://www.bilibili.com/video/BV1qq4y1772P",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.bilibili.com/video/BV13y4y1H75J",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.bilibili.com/video/BV13y4y1H75J",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.bilibili.com/video/BV14A411n76J",target:"_blank",rel:"noopener noreferrer"},I=e("p",null,"请不要花费大量时间学习Blender的材质节点，了解材质槽等基础概念即可，Unity的材质并不与Blender兼容，有这时间不如学一下Unity的Shader（也不建议Shader，现阶段Shader跨版本兼容性不好）",-1),z=e("strong",null,"提示",-1),H={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=2690680489",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://blendermarket.com/products/better-fbx-importer--exporter",target:"_blank",rel:"noopener noreferrer"},J=e("h3",{id:"你可以额外掌握的技能",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#你可以额外掌握的技能"},[e("span",null,"你可以额外掌握的技能")])],-1),W=e("p",null,[e("em",null,[e("strong",null,"音频制作")])],-1),X=e("strong",null,"可以代表这项技能的软件",-1),K=e("a",{href:"www.adobe.com"},"Audition",-1),Z={href:"https://www.audacityteam.org/",target:"_blank",rel:"noopener noreferrer"},j=e("strong",null,"描述",-1),G=e("p",null,"用于剪辑音效，同样速通",-1),Y=e("p",null,[e("em",null,[e("strong",null,"C#、Lua(Ravenscript基于此)")])],-1),$=e("strong",null,"可以代表这项技能的软件",-1),ee={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},te=e("a",{href:"www.jetbrains.com"},"JetBrains' apps",-1),ne={href:"https://visualstudio.microsoft.com/zh-hans/vs/community/",target:"_blank",rel:"noopener noreferrer"},oe=e("p",null,[e("strong",null,"描述"),t(" 除非你不想干高级一点的MOD开发，不然就要学，可速通（至少包括基本语法、简单理解面向对象、会打Helloworld以及一部分实例）")],-1),re=e("p",null,[e("strong",null,"学习路线（仅参考）")],-1),le={href:"https://www.bilibili.com/video/BV1sy4y1u7cw",target:"_blank",rel:"noopener noreferrer"},se={href:"https://www.bilibili.com/video/BV1vf4y1L7Rb",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://docs.unity.cn/cn/2020.3/Manual/",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://www.runoob.com/",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://learn.microsoft.com/zh-cn/dotnet/csharp/",target:"_blank",rel:"noopener noreferrer"},pe=e("p",null,[e("strong",null,"提示"),t(" Lua它相比C#更友好且目前在RF开发Mod写脚本用得更多的还是Lua(Ravenscript)")],-1),he={href:"https://bepinex.dev",target:"_blank",rel:"noopener noreferrer"},de=e("p",null,"但是，学习使用RS开发脚本是一项极其繁琐的行为（反复导出+加测试MOD，这个指实际mod开发，不指单纯的rs学习），不如C#在Unity Editor里的所见即所得与快速修改，加之C#的逻辑与Lua一致，因此从这一方面来说如果你真的打算使用Lua来娴熟地开发脚本，那么你还是得学C#才能获得开发能力地最大化，等到你的C#在Unity实战运用得极为成熟了，再快速入门Lua",-1),_e=e("p",null,[e("strong",null,"看不懂可以硬着头皮看，实际开发过程有不会可以重新回来看相应内容，没有谁在实操中可以直接一下记下所有技能点")],-1),ue=e("h2",{id:"文档正文",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#文档正文"},[e("span",null,"文档正文")])],-1),me=e("p",null,"<= 正文在侧边栏",-1),fe=e("p",null,"在开始前，你必须安装Unity并在你新建得Unity项目中导入RFTools（开发工具包，如果你使用的是旧版本的RavenfieldToolPack就直接解压并使用Unity打开此项目文件夹）",-1),ge=e("p",null,[e("strong",null,"注意Unity Editor的版本是否兼容")],-1),be=i("<p>建议先通读所有教程再精读</p><p><strong>记住多研究RFTools里的官方预制件！</strong></p><p>更新计划：</p><blockquote><p>wpn.1 武器</p><p>vhc.1 载具</p><p>map.1 地图</p><p>map.2 自定义游戏模式（TriggerSystem与ScriptMission）</p><p>otr.1 RFTools杂项（包括RFTools的一些功能、文件目录结构、常见问题等的集合）</p><p>otr.2 皮肤</p><p>ext.1 BepInEX插件</p><p>rvs.1 Ravenscript（RS的入门）</p><p>rvs.2 Mutator（Mutator的制作）</p><p>rvs.3 反盗版（MOD内建反盗版的工作原理与实战）</p></blockquote>",4),ye={class:"hint-container details"},ke=e("summary",null,"ＳＯＭＥ　ＴＨＩＮＧＳ",-1),we={href:"http://steamcommunity.com/profiles/76561198368231803",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=2798038529",target:"_blank",rel:"noopener noreferrer"},xe={href:"http://ravenfieldgame.com/ravenscript/getting-started.html",target:"_blank",rel:"noopener noreferrer"},Se={href:"https://blog.csdn.net/x3464/article/details/105137284",target:"_blank",rel:"noopener noreferrer"},Be={href:"http://steamcommunity.com/profiles/76561198310507502",target:"_blank",rel:"noopener noreferrer"},Re={style:{"text-align":"right"}},Ue={href:"http://steamcommunity.com/profiles/76561198859753798",target:"_blank",rel:"noopener noreferrer"},Me={href:"https://github.com/SOP-von-SRN",target:"_blank",rel:"noopener noreferrer"},Te=i('<h2 id="社区服务支持" tabindex="-1"><a class="header-anchor" href="#社区服务支持"><span>社区服务支持</span></a></h2><p>一些有用的网站在顶栏上的“站外链接”里 ↑↑</p><p><strong>非官方QQ频道号</strong>：9pmc179t29</p><p><strong>非官方QQ群</strong>：771055407（也许是目前最大专业群）、<s>672972617（modder多但是不是专业群）</s> （群里modder跑啦但是可以和我们吹水hh）</p><h2 id="附-如何更聪明地问他人问题" tabindex="-1"><a class="header-anchor" href="#附-如何更聪明地问他人问题"><span>附:如何更聪明地问他人问题</span></a></h2><p>原文链接：https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way</p><p>！！！萌 新 ＭＯＤＤＥＲ特 供！！！</p><p>希望能帮到你！</p><ol><li>在开始询问他人之前，尽可能嘗試通过其他渠道來找到答案，如搜索引擎、论坛已有文章，不要问不该问的SB问题（自己明明可以解决非要问别人），如：</li></ol><p>“我该怎样安装Unity？”“我找不到Unity”</p><ol start="2"><li>不要使用过度的修饰词，例如：</li></ol><p>“救命！！！”“救救孩子！！”“緊急”</p><ol start="3"><li>仔細、清楚地描述问题而并非猜測，讲明需求，为他人提供准确的线索与文件，以帮助他人复现问题。例如：</li></ol><p>SB问的问题：“救命！我的Unity无法启动！我怀疑电脑出了问题...”（你都怀疑了你自己就不会去查吗？？？而且什么信息也没提供...）</p><p>聪明人问的问题：“我的Unity在（什么情况下）...无法启动，报错‘Couldn&#39;t find main.dll’，这是出现错误时的日志文件[文件]，运行环境与程序版本是Win10 22H2 64bit、2022.3.23f1，我尝试过重装Unity与sfc /SCANNOW但没有用，我该如何修复它？”</p><p>因此，描述问题请包括：发生问题时的环境与行为、问题出现时的报错信息与日志、<strong>工程文件</strong>，程式信息、尝试过的方法、解决问题的具体要求</p><ol start="4"><li>別用低聲下氣取代你真正該做的事，尤其是伴隨著與實際問題含糊不清的描述時这更令人反感</li></ol><p>（虽然我好像就是这样...当然礼貌性的用语还是可以的！)</p><ol start="5"><li>多给创意工坊的内容一个赞！！！</li></ol><p><strong>这有助于维护良好的社区氛围</strong></p>',20);function Ce(Le,De){const o=l("ExternalLinkIcon"),r=l("RouteLink");return c(),p("div",null,[d,_,u,m,f,e("div",g,[b,y,e("p",null,[t("另外欢迎回到这个项目的"),e("a",k,[t("旧Steam指南"),n(o)]),t("给我们点赞或回馈点数！")])]),w,v,e("p",null,[t("你可以在"),n(r,{to:"/cn/RESOURCE.html"},{default:s(()=>[t("资源镜像")]),_:1}),t("中找到下载链接")]),x,e("blockquote",null,[S,e("p",null,[t("可以代表这项技能的软件 "),e("a",B,[t("Unity Editor"),n(o)]),t(" （中国特供版爬） "),R]),U,M,e("p",null,[t("初阶 "),e("a",T,[t("Tutorials1(速通请跳P1~8、11~17、20~31、33~61)"),n(o)]),t(" =>")]),e("p",null,[t("中高阶 "),e("a",C,[t("Unity Learn(Unity官方课程，支持中文翻译)"),n(o)]),t(),e("a",L,[t("Unity文档"),n(o)])])]),e("blockquote",null,[e("p",null,[D,O,t(),e("a",E,[t("Blender"),n(o)]),t("（如果你想在这个游戏做MOD就必须用Blender😡）")]),N,e("p",null,[V,t(" 初阶 "),e("a",A,[t("建模(速通请跳P1~23)"),n(o)]),t(),e("a",q,[t("动画(速通请跳P1~18)"),n(o)])]),e("p",null,[t("中阶 "),e("a",F,[t("动画(速通请跳P1~18)"),n(o)]),t(),e("a",P,[t("硬表面建模(速通请看完)"),n(o)])]),I,e("p",null,[z,t(" 无论您使用何种版本的Blender（2.79b除外），都请使用乌鸦的"),e("a",H,[t("FBX导出预设(*.blend不兼容)"),n(o)]),t("！")]),e("p",null,[t("或者更进一步，在Blender导出fbx模型时使用"),e("a",Q,[t("Better FBX Importer & Exporter插件"),n(o)]),t("以最大化兼容性(付费，自行搜索破解版)")])]),J,e("blockquote",null,[W,e("p",null,[X,K,t("、"),e("a",Z,[t("Audacity"),n(o)]),j]),G]),e("blockquote",null,[Y,e("p",null,[$,t(),e("a",ee,[t("VS Code"),n(o)]),t("、"),te,t("、"),e("a",ne,[t("Visual Studio"),n(o)])]),oe,re,e("p",null,[t("初阶（速通级，需要一定编程基础） "),e("a",le,[t("C#"),n(o)]),t("、"),e("a",se,[t("Lua"),n(o)])]),e("p",null,[t("中高阶 "),e("a",ie,[t("Unity文档(毕竟万物基于Unity，除了编程语言不同，开发逻辑完全一致)"),n(o)]),t(),e("a",ae,[t("菜鸟教程"),n(o)]),t("、"),e("a",ce,[t("Microsoft Learn"),n(o)])]),pe,e("p",null,[t("最重要的一点是，从EA27开始，游戏开始限制外来C#脚本的导入，RFTools在实际C#开发中缺少API支持，开发环境与实际C#导出入体验不友好，导致开发体验糟糕，除非你想使用"),e("a",he,[t("BepInEx"),n(o)]),t("这类高级UnityMOD开发框架，否则不建议C#")]),de]),_e,ue,me,fe,ge,e("p",null,[t("这两项的下载链接你可以在本站的"),n(r,{to:"/cn/RESOURCE.html"},{default:s(()=>[t("资源镜像")]),_:1}),t("内找到")]),be,e("details",ye,[ke,e("blockquote",null,[e("p",null,[t("我个人感觉做模组到了一定地步就是动画和脚本了，模型很多人都是“偷（DOWNLOADS）”的，但是如果你是一个有自己想法的人可以像@"),e("a",we,[t("青木"),n(o)]),t("一样自己设计并制作。比如像我的模组大部分可以说是换皮，素材经常重复利用，不过说实话我的重复利用度已经很低了，"),e("a",ve,[t("LETMS"),n(o)]),t("全系用的apfsds和heat模型总共也就俩，这几个武器的ui也是完全一致的，我是会给不同的炮弹不同的建模以及ui。在制作枪械模组的时候可以学习下骨骼和权重（用于弓弩或者机枪弹链），这些在皮肤和载具也很可能用到。制作载具基本就是拿原版换皮调调数据就完事，但是不管怎么样坐在剧的时候还是得自己弄精简的碰撞箱，这也需要点模型知识。皮肤是需要权重和绑骨。地图差不多就是找素材搭积木弄寻路，这个在之前这位佬（此项目所有者）的指南里应该有我就不说了。脚本需要编程知识，我不会，但是这边有几个网站 可能能给你提供帮助")]),e("p",null,[e("a",xe,[t("http://ravenfieldgame.com/ravenscript/getting-started.html"),n(o)]),t(" #your-first-bug 这是乌鸦的")]),e("p",null,[e("a",Se,[t("https://blog.csdn.net/x3464/article/details/105137284"),n(o)]),t("　#这是＠"),e("a",Be,[t("Lezvin"),n(o)]),t("大佬翻译的")])]),e("div",Re,[e("p",null,[e("em",null,[t("————@SRNKMDT["),e("a",Ue,[t("Steam"),n(o)]),t(),e("a",Me,[t("Github"),n(o)]),t("]")])])])]),Te])}const Ne=a(h,[["render",Ce],["__file","index.html.vue"]]),Ve=JSON.parse('{"path":"/cn/Tutorials/","title":"MOD教程","lang":"zh-CN","frontmatter":{"category":["教程"],"head":[["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/cn/Tutorials/"}],["meta",{"property":"og:site_name","content":"Ravenfield社区文档"}],["meta",{"property":"og:title","content":"MOD教程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-26T12:28:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-26T12:28:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MOD教程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-26T12:28:12.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"在启程之前...(必读)","slug":"在启程之前-必读","link":"#在启程之前-必读","children":[{"level":3,"title":"你必须掌握的技能","slug":"你必须掌握的技能","link":"#你必须掌握的技能","children":[]},{"level":3,"title":"你可以额外掌握的技能","slug":"你可以额外掌握的技能","link":"#你可以额外掌握的技能","children":[]}]},{"level":2,"title":"文档正文","slug":"文档正文","link":"#文档正文","children":[]},{"level":2,"title":"社区服务支持","slug":"社区服务支持","link":"#社区服务支持","children":[]},{"level":2,"title":"附:如何更聪明地问他人问题","slug":"附-如何更聪明地问他人问题","link":"#附-如何更聪明地问他人问题","children":[]}],"git":{"createdTime":1676625511000,"updatedTime":1721996892000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":15},{"name":"KeilAwk","email":"82655578+KeilAwk@users.noreply.github.com","commits":3}]},"filePathRelative":"cn/Tutorials/README.md","localizedDate":"2023年2月17日"}');export{Ne as comp,Ve as data};
