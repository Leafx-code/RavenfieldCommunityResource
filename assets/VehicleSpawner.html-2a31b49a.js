import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o,c as d,a as i,b as e,d as s,w as h,e as t}from"./app-6e7f78a1.js";const c={},p=t('<h1 id="vehiclespawner" tabindex="-1"><a class="header-anchor" href="#vehiclespawner" aria-hidden="true">#</a> VehicleSpawner</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Vehicle spawning Points</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Applied to an empty object, you need to add the Mesh Filter (you should choose Resource\\Perview\\Default.obj in RFTools), Mesh Renderer and material by yourself.</p><p>Or just use Vehicle Spawner.prefab in \\Assets\\Prefabs\\Map Elements (recommended).</p>',6),l=t('<h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h2><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>spawnTime</td><td>float</td><td>Generation interval of two carriers</td></tr><tr><td>respawnType</td><td>enum.RespawnType</td><td>When to regenerate the carrier (AfterDestroyed=After the previous one is destroyed, AfterMoved=After the previous one is driven away, Never=Never)</td></tr><tr><td>typeToSpawn</td><td>enum.VehicleSpawnType</td><td>spawn type(Jeep, JeepMachineGun, Quad, Tank, AttackHelicopter, AttackPlane, Rhib, AttackBoat, BombPlane, TransportHelicopter, Apc)</td></tr><tr><td>prefab</td><td>GameObject</td><td>Custom spawn vehicle Prefab (i.e. specify one individually, this option is not affected by game options)</td></tr><tr><td>priority</td><td>byte</td><td>Priority (role unknown)</td></tr><tr><td>isRelevantPathfindingPointForBoats</td><td>bool</td><td>is the Pathfinding Point of the boat (enable when the generated carrier is a Boat)</td></tr></tbody></table>',3);function u(f,m){const a=n("RouterLink");return o(),d("div",null,[p,i("p",null,[e("The object should be protected by "),s(a,{to:"/en/Components/CapturePoint.html"},{default:h(()=>[e("Capture Point")]),_:1}),e(", otherwise there is a chance of error when exporting the map.")]),l])}const y=r(c,[["render",u],["__file","VehicleSpawner.html.vue"]]);export{y as default};