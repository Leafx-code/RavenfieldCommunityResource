import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as e,d as n,e as l,w as d,a as r,r as p,o as s}from"./app-CuwiGLNR.js";const u={};function m(c,t){const o=p("RouteLink");return s(),i("div",null,[t[3]||(t[3]=e("h1",{id:"soundbank",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#soundbank"},[e("span",null,"SoundBank")])],-1)),t[4]||(t[4]=e("h2",{id:"描述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#描述"},[e("span",null,"描述")])],-1)),t[5]||(t[5]=e("p",null,"AudioCilp集",-1)),t[6]||(t[6]=e("p",null,"用于在游戏中的Animations事件按传入的int类型参数来播放指定的AudioCilp",-1)),e("p",null,[t[1]||(t[1]=n("使用场景譬如单/多发装填武器特定动画时间点播放特定音效（参考")),l(o,{to:"/cn/Tutorials/wpn.1.html"},{default:d(()=>t[0]||(t[0]=[n("RFCreator Project")])),_:1}),t[2]||(t[2]=n("）"))]),t[7]||(t[7]=r('<p>详细参阅<a href="https://docs.unity.cn/cn/2020.3/Manual/script-AnimationWindowEvent.html" target="_blank" rel="noopener noreferrer">Unity文档的&quot;Animation Event&quot;</a></p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2><p>挂载在武器物体上</p><p>AnimationEvent具有PlayRandom与PlaySoundBank两个可用Function</p><p>PlayRandom没有可用参数，用于随机播放一个clips[]中的AudioClip</p><p>PlaySoundBank需要传入一个int参数作为index（&quot;序号&quot;，clips处的&quot;Element *&quot;的*就是这个AudioClip的index），用于按index播放clips[]中index对应的AudioClip</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>clips</td><td>AudioClip[]</td><td>要使用的AudioClip</td></tr><tr><td>audioSource</td><td>AudioSource</td><td>用于播放AudioCilp的AudioSource物体</td></tr></tbody></table>',9))])}const k=a(u,[["render",m],["__file","SoundBank.html.vue"]]),y=JSON.parse('{"path":"/cn/Components/SoundBank.html","title":"SoundBank","lang":"zh-CN","frontmatter":{"category":["组件","武器"],"head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ravenfieldcommunity.github.io/docs/en/Components/SoundBank.html"}],["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/cn/Components/SoundBank.html"}],["meta",{"property":"og:site_name","content":"Ravenfield社区文档"}],["meta",{"property":"og:title","content":"SoundBank"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-01T14:54:12.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T14:54:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SoundBank\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-01T14:54:12.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]}],"git":{"createdTime":1684053664000,"updatedTime":1690901652000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":3}]},"filePathRelative":"cn/Components/SoundBank.md","localizedDate":"2023年5月14日"}');export{k as comp,y as data};