import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as l,a as e,b as t,d as o,w as d,e as s}from"./app-6e7f78a1.js";const c={},h=e("h1",{id:"floatingrigidbody",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#floatingrigidbody","aria-hidden":"true"},"#"),t(" FloatingRigidbody")],-1),m=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),t(" Description")],-1),f=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),t(" Usage")],-1),p=e("p",null,"This component comes with a bound Rigidbody component, no need to add it manually.",-1),u=s('<h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h2><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>floatingSamplers</td><td>Transform[]</td><td>Sampling points (rigid body datums, empty objects, it is recommended to follow the official setting of four to keep the vehicle balanced)</td></tr><tr><td>floatAcceleration</td><td>float</td><td>Floating acceleration</td></tr><tr><td>floatDepth</td><td>float</td><td>floating depth</td></tr><tr><td>waterDrag</td><td>float</td><td>Resistance in water</td></tr><tr><td>waterAngularDrag</td><td>float</td><td>Resistance to steering in water</td></tr></tbody></table>',3);function _(g,b){const a=i("RouterLink");return r(),l("div",null,[h,m,e("p",null,[t("In the game water（"),o(a,{to:"/en/Components/WaterLevel.html"},{default:d(()=>[t("WaterLevel")]),_:1}),t(" and "),o(a,{to:"/en/Components/WaterVolume.html"},{default:d(()=>[t("WaterVolume")]),_:1}),t("'s floating rigid body")]),e("p",null,[t("For non-"),o(a,{to:"/cn/Components/Boat.html"},{default:d(()=>[t("Boat")]),_:1}),t(" vehicle(like APC).")]),f,p,e("p",null,[t("Refer "),o(a,{to:"/cn/Components/Vehicle.html"},{default:d(()=>[t("Vehicle")]),_:1}),t(", add to the topmost object of the vehicle object")]),u])}const x=n(c,[["render",_],["__file","FloatingRigidbody.html.vue"]]);export{x as default};