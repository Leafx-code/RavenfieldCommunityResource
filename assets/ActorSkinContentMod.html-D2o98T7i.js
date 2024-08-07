import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as a}from"./app-DoJ8gQMP.js";const o={},d=a('<h1 id="actorskincontentmod" tabindex="-1"><a class="header-anchor" href="#actorskincontentmod"><span>ActorSkinContentMod</span></a></h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>人物皮肤导出配置组件，只有给Mesh应用这个组件才能被Unity导出与被游戏导入</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2><p>先给模型绑骨</p><p>将其套用在一个空物体预制件</p><p>配置各个Skin时先在<code>Sizes</code>设置本次导出的Skin数量再配置各个皮肤</p><p>然后再各个MeshSkin槽位配置对应皮肤模型</p><p>最后选中物体，在菜单栏导出</p><p>MeshSkin类槽位变量：</p><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>mesh</td><td>Mesh</td><td>此MeshSkin的Mesh（模型）</td></tr><tr><td>materials</td><td>Material[]</td><td>此MeshSkin模型所用材质</td></tr><tr><td>teamMaterial</td><td>int</td><td>该MeshSkin对应的队伍（0为Eagle蓝队，1为Raven红队）</td></tr></tbody></table><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>皮肤名</td></tr><tr><td>characterSkin</td><td>MeshSkin</td><td>第三人称的MeshSkin</td></tr><tr><td>armSkin</td><td>MeshSkin</td><td>第一人称手臂的MeshSkin</td></tr><tr><td>kickLegSkin</td><td>MeshSkin</td><td>第一人称腿的模型的MeshSkin</td></tr></tbody></table>',14),i=[d];function r(c,h){return e(),n("div",null,i)}const p=t(o,[["render",r],["__file","ActorSkinContentMod.html.vue"]]),m=JSON.parse('{"path":"/cn/Components/ActorSkinContentMod.html","title":"ActorSkinContentMod","lang":"zh-CN","frontmatter":{"category":["组件","Misc"],"head":[["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/cn/Components/ActorSkinContentMod.html"}],["meta",{"property":"og:site_name","content":"Ravenfield社区文档"}],["meta",{"property":"og:title","content":"ActorSkinContentMod"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-21T12:41:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-21T12:41:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ActorSkinContentMod\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-21T12:41:02.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]}],"git":{"createdTime":1690815767000,"updatedTime":1721565662000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":5},{"name":"KeilAwk","email":"82655578+KeilAwk@users.noreply.github.com","commits":1}]},"filePathRelative":"cn/Components/ActorSkinContentMod.md","localizedDate":"2023年7月31日"}');export{p as comp,m as data};