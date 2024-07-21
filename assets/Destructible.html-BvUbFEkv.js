import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o,c as i,a as l,b as t,d as n,w as c,e}from"./app-Doc3v-Ue.js";const s={},h=e('<h1 id="destructible" tabindex="-1"><a class="header-anchor" href="#destructible"><span>Destructible</span></a></h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>可破坏物体</p><p>该组件可以给被添加的物体具有健康值属性，可受到来自射弹命中、射弹溅射、近战武器、撞击的伤害，一般用在地图中的一些可摧毁的物体上</p><p>破坏的效果可以通过<code>disableOnDeath</code>、<code>activateOnDeath</code>实现</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2><p>将其挂载在带有碰撞体的目标物体上</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2>',8),m=e('<p>如果<code>activateOnDeath</code>的物体具有Rigidbody组件且组件的<code>isKinematic</code>选项为false，则激活该物体时会AddTorque，即施加一个旋转力，并使该物体不属于任何一个父物体</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>smallArmsMultiplier</td><td>float</td><td>轻武器造成的伤害乘数</td></tr><tr><td>heavyArmsMultiplier</td><td>float</td><td>重武器造成的伤害乘数</td></tr><tr><td>antiTankMultiplier</td><td>float</td><td>反坦克武器造成的伤害乘数</td></tr><tr><td>armorDamagedBy</td><td>Vehicle.ArmorRating</td><td>可以受到最低来自指定武器类型的伤害</td></tr><tr><td>canInstantShatter</td><td>bool</td><td>如果受到的伤害类型大于或等于设定的<code>armorInstantShatteredBy</code>值，直接消亡（死亡）</td></tr><tr><td>armorInstantShatteredBy</td><td>Vehicle.ArmorRating</td><td>被伤害直接消亡所需的最低伤害类型</td></tr><tr><td>activateOnDeath</td><td>GameObject[]</td><td>消亡（死亡）后激活的游戏物体</td></tr><tr><td>disableOnDeath</td><td>GameObject[]</td><td>消亡（死亡）后隐藏（禁用）的游戏物体</td></tr><tr><td>showHitIndicator</td><td>bool</td><td>是否显示命中反馈</td></tr><tr><td>takeSplashDamage</td><td>bool</td><td>允许受到溅射伤害</td></tr><tr><td>takesMeleeDamage</td><td>bool</td><td>允许受到近战伤害</td></tr><tr><td>takesCollisionDamage</td><td>bool</td><td>允许受到撞击的伤害</td></tr><tr><td>collisionDamageMultiplier</td><td>float</td><td>撞击造成的伤害乘数</td></tr><tr><td>health</td><td>float</td><td>生命值（健康）</td></tr></tbody></table>',3);function p(u,b){const a=r("RouteLink");return o(),i("div",null,[h,l("p",null,[t("如果你想给载具加上可被摧毁的物体，请使用 "),n(a,{to:"/cn/Components/VehicleDestructibleHitbox.html"},{default:c(()=>[t("VehicleDestructibleHitbox")]),_:1})]),m])}const y=d(s,[["render",p],["__file","Destructible.html.vue"]]),D=JSON.parse('{"path":"/cn/Components/Destructible.html","title":"Destructible","lang":"zh-CN","frontmatter":{"category":["组件","地图"],"head":[["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/cn/Components/Destructible.html"}],["meta",{"property":"og:site_name","content":"Ravenfield社区文档"}],["meta",{"property":"og:title","content":"Destructible"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-21T12:41:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-21T12:41:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Destructible\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-21T12:41:02.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]}],"git":{"createdTime":1684053664000,"updatedTime":1721565662000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":2},{"name":"QMeiMei","email":"119944603+RedQieMei@users.noreply.github.com","commits":2},{"name":"KeilAwk","email":"82655578+KeilAwk@users.noreply.github.com","commits":1}]},"filePathRelative":"cn/Components/Destructible.md","localizedDate":"2023年5月14日"}');export{y as comp,D as data};
