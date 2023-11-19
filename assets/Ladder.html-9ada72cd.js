import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o,c as n,a as e,b as t,d as i,w as h,e as l}from"./app-6e7f78a1.js";const s={},c=e("h1",{id:"ladder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ladder","aria-hidden":"true"},"#"),t(" Ladder")],-1),p=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),t(" Description")],-1),m=l('<p>Ladder class</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Apply to an empty object, the model under which the ladder is placed (yes, you need to apply the model manually)</p><p>It is not recommended to apply components directly on the model, the scaling of the model will affect the scaling of the character model</p><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h2><p>Since EA28Beta, players can no longer walk through walls via ladders</p><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>height</td><td>float</td><td>ladder altitude</td></tr><tr><td>topExitDirection</td><td>Vector3</td><td>Position of the relative departure point when reaching the top of the ladder and leaving the ladder</td></tr></tbody></table>',8);function f(u,_){const a=r("RouterLink");return o(),n("div",null,[c,p,e("p",null,[t("Derived from "),i(a,{to:"/en/Components/PathfindingLink.html"},{default:h(()=>[t("Pathfinding")]),_:1})]),m])}const y=d(s,[["render",f],["__file","Ladder.html.vue"]]);export{y as default};