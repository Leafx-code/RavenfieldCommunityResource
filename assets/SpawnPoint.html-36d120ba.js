import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as s,a as e,d as a,w as r,b as t,e as h}from"./app-6e7f78a1.js";const l={},c=e("h1",{id:"spawnpoint",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#spawnpoint","aria-hidden":"true"},"#"),t(" SpawnPoint")],-1),p=e("h2",{id:"描述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),t(" 描述")],-1),u=h('<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>一般不使用此组件而是使用其子组件</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>defaultOwner</td><td>enum.Team</td><td>初始默认所有队伍(Neutral=待占领, Blue=Eagle队, Red=Raven队)</td></tr><tr><td>protectRange</td><td>float</td><td>Bot在点位内的活动半径（防御此点位时）</td></tr><tr><td>defenseStrategy</td><td>enum.DefenseStrategy</td><td>防御策略(Default=默认, NeverAutoDefend=不自动防御, AlwaysAutoDefend=自动防御)</td></tr><tr><td>vehicleFilter</td><td>class.VehicleFilter</td><td>此点位可以用什么类型的载具到达（landcraft=陆战类, amphibious=两栖类, watercraft=水战类, air=直升机, airFastmover=飞机, allowOnlyFromFrontlineSpawnUsage）</td></tr><tr><td>shortName</td><td>string</td><td>点位缩写名</td></tr><tr><td>spawnpointContainer</td><td>Transform</td><td>出生点的寄存器。（决定Bot与玩家将在哪里出生。在这个寄存器空物体内再添加的空物体视为出生点）</td></tr><tr><td>isRelevantPathfindingPoint</td><td>bool</td><td></td></tr><tr><td>captureAnimation</td><td>class.CaptureAnimation</td><td></td></tr><tr><td>helicopterLandingZones</td><td>Transform[]</td><td></td></tr><tr><td>animators</td><td>Animation[]</td><td></td></tr><tr><td>neutralCapturedAnimation</td><td>string</td><td></td></tr><tr><td>blueCapturedAnimation</td><td>string</td><td></td></tr><tr><td>redCapturedAnimation</td><td>string</td><td></td></tr></tbody></table>',5);function m(f,_){const d=o("RouterLink");return i(),s("div",null,[c,p,e("p",null,[a(d,{to:"/cn/Components/CapturePoint.html"},{default:r(()=>[t("据点")]),_:1}),t("与"),a(d,{to:"/cn/Components/VehicleSpawner.html"},{default:r(()=>[t("载具生成器")]),_:1}),t("等组件的基类，一般不使用此组件")]),u])}const g=n(l,[["render",m],["__file","SpawnPoint.html.vue"]]);export{g as default};