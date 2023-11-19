import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as s,a as e,b as t,d as n,w as c,e as h}from"./app-6e7f78a1.js";const l={},p=e("h1",{id:"soundbank",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#soundbank","aria-hidden":"true"},"#"),t(" SoundBank")],-1),u=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),t(" Description")],-1),m=e("p",null,"AudioCilp集",-1),_=e("p",null,"Used for in-game Animations events to play the specified AudioCilp according to the incoming intType parameter.",-1),f={href:"https://docs.unity3d.com/2020.3/Documentation/Manual/script-AnimationWindowEvent.html",target:"_blank",rel:"noopener noreferrer"},b=h('<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>add to a weapon object</p><p>AnimationEvent has two available functions, PlayRandom and PlaySoundBank.</p><p>PlayRandom has no parameters available and is used to play a random AudioClip from a clip[].</p><p>PlaySoundBank needs to pass an int parameter as index (&quot;serial number&quot;, the * in &quot;Element *&quot; at the clips is the index of the AudioClip), which is used to play the AudioClip corresponding to the index in the <code>clips[]</code> according to the index.</p><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h2><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>clips</td><td>AudioClip[]</td><td>AudioClip to be used</td></tr><tr><td>audioSource</td><td>AudioSource</td><td>AudioSource object for AudioCilp playback</td></tr></tbody></table>',8);function x(k,y){const o=a("RouterLink"),i=a("ExternalLinkIcon");return r(),s("div",null,[p,u,m,_,e("p",null,[t("Scenarios such as single/multi-shot weapons playing a specific sound effect at a specific animation time.（Refer "),n(o,{to:"/cn/Tutorials/wpn.1.html"},{default:c(()=>[t("RFCreator Project")]),_:1}),t("）")]),e("p",null,[t("Refer "),e("a",f,[t(`Unity docs' "Animation Event"`),n(i)])]),b])}const g=d(l,[["render",x],["__file","SoundBank.html.vue"]]);export{g as default};