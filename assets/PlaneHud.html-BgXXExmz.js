import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o,c as d,a as e,d as r,w as i,e as c,b as t}from"./app-Doc3v-Ue.js";const s={},u=c('<h1 id="planehud" tabindex="-1"><a class="header-anchor" href="#planehud"><span>PlaneHud</span></a></h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>用于监视在游戏中实时监控飞机的各项数值并应用到UI物体</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2><p>随意，建议挂载在UI父物体顶层</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2><p>如果没有指定plane，组件会指定寻找所绑定的父物体飞机</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2>',8),h=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"描述")])],-1),p=e("td",null,"plane",-1),m=e("td",null,"目标监控飞机",-1),_=e("tr",null,[e("td",null,"gearIndicator"),e("td",null,"GameObject.Indicator"),e("td",null,[t("起落架状态("),e("code",null,"ready"),t("=准备好时显示的UI物体, "),e("code",null,"waiting"),t("=忙时显示的UI物体)")])],-1),g=e("tr",null,[e("td",null,"airbrakeIndicator"),e("td",null,"GameObject.Indicator"),e("td",null,[t("减速板状态(当飞机的vector.y小于-0.3时触发ready，否则为waiting。"),e("code",null,"ready"),t("=准备好时显示的UI物体, "),e("code",null,"waiting"),t("=忙时显示的UI物体)")])],-1),f=e("tr",null,[e("td",null,"countermeasureIndicator"),e("td",null,"GameObject.Indicator"),e("td",null,[t("热诱弹状态("),e("code",null,"ready"),t("=准备好时显示的UI物体, "),e("code",null,"waiting"),t("=装弹时显示的UI物体)")])],-1),y=e("tr",null,[e("td",null,"speedLabel"),e("td",null,"Text"),e("td",null,"显示速度的Text物体（纯数字，会覆盖原文本）")],-1),b=e("tr",null,[e("td",null,"altitudeLabel"),e("td",null,"Text"),e("td",null,"显示海拔的Text物体（纯数字，会覆盖原文本）")],-1);function x(I,k){const n=a("RouteLink");return o(),d("div",null,[u,e("table",null,[h,e("tbody",null,[e("tr",null,[p,e("td",null,[r(n,{to:"/cn/Components/Airplane.html"},{default:i(()=>[t("Airplane")]),_:1})]),m]),_,g,f,y,b])])])}const H=l(s,[["render",x],["__file","PlaneHud.html.vue"]]),T=JSON.parse('{"path":"/cn/Components/PlaneHud.html","title":"PlaneHud","lang":"zh-CN","frontmatter":{"category":["组件","载具"],"head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ravenfieldcommunity.github.io/docs/en/Components/PlaneHud.html"}],["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/cn/Components/PlaneHud.html"}],["meta",{"property":"og:site_name","content":"Ravenfield社区文档"}],["meta",{"property":"og:title","content":"PlaneHud"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-21T12:41:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-21T12:41:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PlaneHud\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-21T12:41:02.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]}],"git":{"createdTime":1676784598000,"updatedTime":1721565662000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":5},{"name":"KeilAwk","email":"82655578+KeilAwk@users.noreply.github.com","commits":1}]},"filePathRelative":"cn/Components/PlaneHud.md","localizedDate":"2023年2月19日"}');export{H as comp,T as data};
