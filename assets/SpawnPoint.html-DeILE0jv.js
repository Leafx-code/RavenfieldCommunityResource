import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as i,c as l,a as t,d as a,w as d,b as e,e as s}from"./app-BepbZfCa.js";const c={},p=t("h1",{id:"spawnpoint",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#spawnpoint"},[t("span",null,"SpawnPoint")])],-1),h=t("h2",{id:"描述",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#描述"},[t("span",null,"描述")])],-1),m=s('<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2><p>一般不使用此组件而是使用其子组件</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>defaultOwner</td><td>enum.Team</td><td>初始默认所有队伍(Neutral=待占领, Blue=Eagle队, Red=Raven队)</td></tr><tr><td>protectRange</td><td>float</td><td>Bot在点位内的活动半径（防御此点位时）</td></tr><tr><td>defenseStrategy</td><td>enum.DefenseStrategy</td><td>防御策略(Default=默认, NeverAutoDefend=不自动防御, AlwaysAutoDefend=自动防御)</td></tr><tr><td>vehicleFilter</td><td>class.VehicleFilter</td><td>此点位可以用什么类型的载具到达（landcraft=陆战类, amphibious=两栖类, watercraft=水战类, air=直升机, airFastmover=飞机, allowOnlyFromFrontlineSpawnUsage）</td></tr><tr><td>shortName</td><td>string</td><td>点位缩写名</td></tr><tr><td>spawnpointContainer</td><td>Transform</td><td>出生点的寄存器。（决定Bot与玩家将在哪里出生。在这个寄存器空物体内再添加的空物体视为出生点）</td></tr><tr><td>isRelevantPathfindingPoint</td><td>bool</td><td></td></tr><tr><td>captureAnimation</td><td>class.CaptureAnimation</td><td></td></tr><tr><td>helicopterLandingZones</td><td>Transform[]</td><td></td></tr><tr><td>animators</td><td>Animation[]</td><td></td></tr><tr><td>neutralCapturedAnimation</td><td>string</td><td></td></tr><tr><td>blueCapturedAnimation</td><td>string</td><td></td></tr><tr><td>redCapturedAnimation</td><td>string</td><td></td></tr></tbody></table>',5);function u(f,g){const n=r("RouteLink");return i(),l("div",null,[p,h,t("p",null,[a(n,{to:"/cn/Components/CapturePoint.html"},{default:d(()=>[e("据点")]),_:1}),e("与"),a(n,{to:"/cn/Components/VehicleSpawner.html"},{default:d(()=>[e("载具生成器")]),_:1}),e("等组件的基类，一般不使用此组件")]),m])}const y=o(c,[["render",u],["__file","SpawnPoint.html.vue"]]),b=JSON.parse('{"path":"/cn/Components/SpawnPoint.html","title":"SpawnPoint","lang":"zh-CN","frontmatter":{"category":["组件","地图"],"head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ravenfieldcommunity.github.io/docs/en/Components/SpawnPoint.html"}],["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/cn/Components/SpawnPoint.html"}],["meta",{"property":"og:site_name","content":"Ravenfield社区客制化文档"}],["meta",{"property":"og:title","content":"SpawnPoint"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-29T00:23:49.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-29T00:23:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpawnPoint\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-29T00:23:49.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]}],"git":{"createdTime":1684053664000,"updatedTime":1695947029000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":3}]},"filePathRelative":"cn/Components/SpawnPoint.md","localizedDate":"2023年5月14日"}');export{y as comp,b as data};
