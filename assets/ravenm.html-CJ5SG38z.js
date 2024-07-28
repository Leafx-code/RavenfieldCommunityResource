import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as l,c as p,a as e,b as o,d as n,w as c,e as i}from"./app-CoqYAJJM.js";const r={},s=e("h1",{id:"ravenm联机使用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ravenm联机使用"},[e("span",null,"RavenM联机使用")])],-1),m=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装"},[e("span",null,"安装")])],-1),h=i('<p>打开游戏，若右下角提示版本不兼容，请检查你下载的安装工具是否为最新，或等待社区更新插件</p><h2 id="游戏前配置房间" tabindex="-1"><a class="header-anchor" href="#游戏前配置房间"><span>游戏前配置房间</span></a></h2><p>以下括号中的英文部分表示国际版RavenM原文</p><h3 id="加入-创建房间" tabindex="-1"><a class="header-anchor" href="#加入-创建房间"><span>加入&amp;创建房间</span></a></h3><p>进入游戏后打开Instant Action（即平常跟游戏时一样）的对局配置界面，在此时按下<code>M</code>键以呼出联机大厅菜单：</p><p><img src="https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.001.png" alt=""></p><p><code>主机</code>（<code>HOST</code>）意为创建房间，<code>加入</code>（<code>JOIN</code>）意为加入房间</p><p>点击<code>主机</code>，你可以自行配置房间属性，注意当你勾选<code>是否为公共房间</code>时，你的房间会公开在联机大厅列表</p><p><img src="https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.002.png" alt=""></p><p>点击<code>确定</code>，即可进入预开始界面，点击<code>离开房间</code>可以关闭此房间（关闭地图不会关闭房间，除了关闭游戏），左边菜单的数字是你的房间Lobby ID（LID，房间ID）</p><p><img src="https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.003.png" alt=""></p><p>像平常一样，配置好本局游戏（也会有Bot的！），点击开始<code>START</code>即可进入游戏</p><p>点击<code>加入</code>，分别有两个选项，一为通过联机大厅列表进入，一为直接使用LID进入房间</p><p>点击联机列表的一个房间，可以查看房间信息并选择进入房间（房间如果设置了限制或为 RavenM国际版 创建的房间，或房主使用的兼容版EA27插件较为古老，<code>加入房间</code>按钮可能不可用）</p><p>加入后，如果房主没有开始游戏，你点击开始<code>START</code>后，你可能需要等待房主开局（左边的玩家列表中玩家名字的颜色即为准备状态，绿色为就绪。房主可以踢人、修改玩家队伍），如果已经开始，你会直接进入对局（但是地图可能不会正确同步）</p><p>另外，无论如何（即使为No Mod模式），玩家都会同步下载房主所使用的Mod，Mod会在进入房间的时候下载与载入</p><h2 id="游戏中" tabindex="-1"><a class="header-anchor" href="#游戏中"><span>游戏中</span></a></h2><p>进入游戏后，按<code>P</code>键打开/隐藏聊天框，按<code>Y</code>可输入全局消息（按<code>Enter</code>发送，<code>Esc</code>关闭文本框），按<code>U</code>可在队伍（Eagle\\Raven）范围内输入消息（同）</p><p>按<code>Enter</code>打开重生界面的同时可打开房间菜单</p><p>按<code>CapsLock</code>可打开语音（疑似需要Discord）</p><p>按<code>F7</code>可打开数据流检测UI(仅作测试用)</p><p>按<code>~</code>可打开玩家坐标指示</p><p>按<code>“</code>可标记地点</p><p>小队指挥控件（<code>G</code>、<code>B</code>键）是可用的</p><p>右上角会显示Ping延迟值（房主的当然为0ms）</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><blockquote><p><strong>右下角提示“Steam连接失败，请检查网络联接”</strong></p><p>RavenM联机基于Steam官方架设的联机服务，故需要Steam在后台且不处于离线模式，请不要关闭Steam或尝试使用盗版环境运行</p></blockquote><blockquote><p><strong>无法在未启动Steam的情况下正常直接运行游戏</strong></p><p>请自行临时禁用RavenM</p></blockquote><blockquote><p><strong>右下角提示“版本不兼容”</strong></p><p>游戏大版本更新，导致插件不兼容，请更新或临时禁用插件</p></blockquote><blockquote><p><strong>无法使用本地Mod</strong></p><p>由于联机需要房主与玩家同步工坊Mod，这依赖于Steam创意工坊服务（从本地Mod体量、云服务传输文件成本考虑，后续也不会考虑兼容本地Mod），故不本地Mod不可用</p><p>爱发电定制的Mod一般会由作者上传到工坊，请在工坊订阅问题Mod</p></blockquote><blockquote><p><strong>如何删除游戏时同步的Mod？</strong></p><p>打开游戏安装目录，返回上两级目录（例如游戏目录为<code>E:\\Program Files\\Steam\\steamapps\\common\\Ravenfield</code>，返回上级目录后，文件管理器应处在<code>E:\\Program Files\\Steam\\steamapps\\</code>），然后依次打开当前目录下的<code>\\workshop\\content\\636480\\</code>，清空其内内容即可（然后你自己订阅的Mod要重新下载，所以大可不必管这个）</p></blockquote><blockquote><p><strong>原版游戏出现严重Bug（例如无法上车）</strong></p><p>一般是由于原版游戏小型补丁更新，导致插件不适用于现有游戏版本，切换至游戏stable（标准）分支（当为Beta版时，即在Steam游戏属性 -&gt; 测试版处选<code>无</code>），更新或临时禁用插件即可</p></blockquote>',32),u=e("p",null,[e("strong",null,"联机失败")],-1),g=e("p",null,"请检查：",-1),v=e("li",null,[o("游戏版本是否为最新（非"),e("code",null,"ravenm-compatible"),o("分支版本，非任何"),e("code",null,"legacy-ea**"),o("分支版本。建议非Beta版）")],-1),_=e("li",null,"网络是否稳定、可用（是否运行过你所安装的安全软件的网络修复工具来尝试修复，是否修改了hosts，是已经启动加速器）",-1),b=e("li",null,"如果是朋友间联机，请让朋友一并检查",-1),M=e("blockquote",null,[e("p",null,[e("strong",null,"Ping延迟有点高")]),e("p",null,"要不你试一下挂加速器？")],-1);function f(k,E){const t=d("RouteLink");return l(),p("div",null,[s,m,e("p",null,[o("参考"),n(t,{to:"/cn/Project/ravenm.html"},{default:c(()=>[o("RavenM联机插件国内版")]),_:1})]),h,e("blockquote",null,[u,g,e("ul",null,[v,e("li",null,[o("插件版本是否为最新，且不为国际版（否则请至"),n(t,{to:"/cn/Project/ravenm.html"},{default:c(()=>[o("本站")]),_:1}),o("下载）")]),_,b]),e("p",null,[o("如果仍无法解决问题，请提问"),n(t,{to:"/cn/Project/ravenm.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98"},{default:c(()=>[o("QQ群")]),_:1})])]),M])}const R=a(r,[["render",f],["__file","ravenm.html.vue"]]),q=JSON.parse('{"path":"/cn/in-GAME/ravenm.html","title":"RavenM联机使用","lang":"zh-CN","frontmatter":{"head":[["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/cn/in-GAME/ravenm.html"}],["meta",{"property":"og:site_name","content":"Ravenfield社区文档"}],["meta",{"property":"og:title","content":"RavenM联机使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.001.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-28T14:42:24.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-28T14:42:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RavenM联机使用\\",\\"image\\":[\\"https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.001.png\\",\\"https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.002.png\\",\\"https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.003.png\\"],\\"dateModified\\":\\"2024-07-28T14:42:24.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"游戏前配置房间","slug":"游戏前配置房间","link":"#游戏前配置房间","children":[{"level":3,"title":"加入&创建房间","slug":"加入-创建房间","link":"#加入-创建房间","children":[]}]},{"level":2,"title":"游戏中","slug":"游戏中","link":"#游戏中","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}],"git":{"createdTime":1721913894000,"updatedTime":1722177744000,"contributors":[{"name":"KeilAwk","email":"82655578+KeilAwk@users.noreply.github.com","commits":7}]},"filePathRelative":"cn/in-GAME/ravenm.md","localizedDate":"2024年7月25日"}');export{R as comp,q as data};
