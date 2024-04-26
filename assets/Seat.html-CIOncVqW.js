import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o,c as d,a as e,d as i,w as s,b as t,e as r}from"./app-BepbZfCa.js";const c={},h=r('<h1 id="seat" tabindex="-1"><a class="header-anchor" href="#seat"><span>Seat</span></a></h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2><p>Basic seating category of the carrier</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>Apply to an empty object, the model under which the seat is placed (yes, you need to apply the model manually)</p><p>It is not recommended to apply components directly to the model, as the scaling of the model will affect the scaling of the character model.</p><p>If the object to be applied has a collision volume, you can optionally add a BoxCollider component along with it.</p><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>Comment</span></a></h2><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables"><span>Variables</span></a></h2>',9),u=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description")])],-1),m=e("tr",null,[e("td",null,"animation"),e("td",null,"enum.SitAnimation"),e("td",null,"Movement of the person in the seat (Chair=sitting down, Quad=driving a vehicle, Standing=standing)")],-1),p=e("tr",null,[e("td",null,"type"),e("td",null,"enum.Type"),e("td",null,"Seat Type (FreelookUnarmed, LockedAllowFreelookUnarmed, AlwaysLockedUnarmed=Locked view with the weapon in the character's equipment column, FreelookArmed=Allowed to use the weapon in the character's equipment column)")],-1),_=e("tr",null,[e("td",null,"enclosed"),e("td",null,"bool"),e("td",null,"Inside the carrier (to ensure that the character is not jolted out of his seat by balanceDamage damage)")],-1),f=e("tr",null,[e("td",null,"enclosedDamagedByDirectFire"),e("td",null,"bool"),e("td",null,"Unprotected in carrier (works with enclosed to determine if splash damage will be dealt)）")],-1),g=e("tr",null,[e("td",null,"soundMuffle"),e("td",null,"enum.SoundMuffle"),e("td",null,"（ Auto, On, Off ）")],-1),y=e("tr",null,[e("td",null,"allowLean"),e("td",null,"bool"),e("td",null,"Side head allowed")],-1),b=e("tr",null,[e("td",null,"allowUnderwater"),e("td",null,"bool"),e("td",null,"Allowed underwater")],-1),w=e("tr",null,[e("td",null,"exitOffset"),e("td",null,"Vector3"),e("td",null,"Displacement from the vehicle")],-1),v=e("td",null,"weapons",-1),C=e("td",null,"Weapons for this seat",-1),S=e("tr",null,[e("td",null,"handTargetL"),e("td",null,"Transform"),e("td",null,"Left hand placement position (empty object. Leave empty and it will not be shown)")],-1),k=e("tr",null,[e("td",null,"handTargetR"),e("td",null,"Transform"),e("td",null,"Right hand placement position (empty object. (Leave empty and it will not be shown)")],-1),x=e("tr",null,[e("td",null,"camera"),e("td",null,"Camera"),e("td",null,"First person camera (need to keep Camera component disabled)")],-1),T=e("tr",null,[e("td",null,"thirdPersonCamera"),e("td",null,"Camera"),e("td",null,"Third person camera (need to keep Camera component disabled)")],-1),L=e("tr",null,[e("td",null,"hud"),e("td",null,"GameObject"),e("td",null,"Heads up display HUB (Canvas of this HUB to be bound to the camera)")],-1),U=e("tr",null,[e("td",null,"maxOccupantBalance"),e("td",null,"float"),e("td")],-1);function A(B,D){const n=a("RouteLink");return o(),d("div",null,[h,e("table",null,[u,e("tbody",null,[m,p,_,f,g,y,b,w,e("tr",null,[v,e("td",null,[i(n,{to:"/en/Components/MountedWeapon.html"},{default:s(()=>[t("MountedWeapon")]),_:1}),t("[]")]),C]),S,k,x,T,L,U])])])}const j=l(c,[["render",A],["__file","Seat.html.vue"]]),M=JSON.parse('{"path":"/en/Components/Seat.html","title":"Seat","lang":"en-US","frontmatter":{"category":["Components","Vehicle"],"head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ravenfieldcommunity.github.io/docs/cn/Components/Seat.html"}],["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/en/Components/Seat.html"}],["meta",{"property":"og:site_name","content":"Ravenfield Modding Documents"}],["meta",{"property":"og:title","content":"Seat"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-19T08:38:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-19T08:38:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Seat\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-19T08:38:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Description","slug":"description","link":"#description","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Comment","slug":"comment","link":"#comment","children":[]},{"level":2,"title":"Variables","slug":"variables","link":"#variables","children":[]}],"git":{"createdTime":1700383134000,"updatedTime":1700383134000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":1}]},"filePathRelative":"en/Components/Seat.md","localizedDate":"November 19, 2023"}');export{j as comp,M as data};
