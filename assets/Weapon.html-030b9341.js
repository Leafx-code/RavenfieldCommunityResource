import{_ as t,X as d,Y as r,a1 as e}from"./framework-77bf7967.js";const o={},a=e('<h1 id="weapon" tabindex="-1"><a class="header-anchor" href="#weapon" aria-hidden="true">#</a> Weapon</h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>HaltStrategy</td><td>enum</td><td>(Auto, Never, PreferredLongRange, PreferredAnyRange, AlwaysLongRange, Always)</td></tr><tr><td>Effectiveness</td><td>enum</td><td>(No, Yes, Preferred)</td></tr><tr><td>ReflectionSound</td><td>enum</td><td>(Auto, None, Handgun, RifleSmall, RifleLarge, Launcher, Tank)</td></tr><tr><td>thirdPersonTransform</td><td>Transform</td><td></td></tr><tr><td>thirdPersonOffset</td><td>Vector3</td><td></td></tr><tr><td>cullInThirdPerson</td><td>GameObject[]</td><td></td></tr><tr><td>thirdPersonScale</td><td>float</td><td></td></tr><tr><td>configuration</td><td>Configuration</td><td></td></tr><tr><td>reloadAudio</td><td>AudioSource</td><td></td></tr><tr><td>changeFireModeAudio</td><td>AudioSource</td><td></td></tr><tr><td>reflectionSound</td><td>ReflectionSound</td><td></td></tr><tr><td>reflectionVolume</td><td>float</td><td></td></tr><tr><td>walkBobMultiplier</td><td>float</td><td></td></tr><tr><td>sprintBobMultiplier</td><td>float</td><td></td></tr><tr><td>proneBobMultiplier</td><td>float</td><td></td></tr><tr><td>uiSprite</td><td>Sprite</td><td></td></tr><tr><td>arms</td><td>SkinnedMeshRenderer</td><td></td></tr><tr><td>allowArmMeshReplacement</td><td>bool</td><td></td></tr><tr><td>parentWeapon</td><td>Weapon</td><td></td></tr><tr><td>useParentWeaponSightModes</td><td>bool</td><td></td></tr><tr><td>holdingFire</td><td>bool</td><td></td></tr><tr><td>reloading</td><td>bool</td><td></td></tr><tr><td>unholstered</td><td>bool</td><td></td></tr><tr><td>switchedFromSubWeapon</td><td>bool</td><td></td></tr><tr><td>ammo</td><td>int</td><td></td></tr><tr><td>activeSubWeaponIndex</td><td>int</td><td></td></tr><tr><td>activeSightModeIndex</td><td>int</td><td></td></tr><tr><td>isLocked</td><td>bool</td><td></td></tr><tr><td>auto</td><td>bool</td><td></td></tr><tr><td>ammo</td><td>int</td><td></td></tr><tr><td>spareAmmo</td><td>int</td><td></td></tr><tr><td>resupplyNumber</td><td>int</td><td></td></tr><tr><td>reloadTime</td><td>float</td><td></td></tr><tr><td>cooldown</td><td>float</td><td></td></tr><tr><td>unholsterTime</td><td>float</td><td></td></tr><tr><td>unholsterIsReload</td><td>bool</td><td></td></tr><tr><td>changeFireModeTime</td><td>float</td><td></td></tr><tr><td>changeFireModeIsReload</td><td>bool</td><td></td></tr><tr><td>aimFov</td><td>float</td><td></td></tr><tr><td>forceSniperAimSensitivity</td><td>bool</td><td></td></tr><tr><td>aimSensitivityMultiplier</td><td>float</td><td></td></tr><tr><td>autoReloadDelay</td><td>float</td><td></td></tr><tr><td>canBeAimedWhileReloading</td><td>bool</td><td></td></tr><tr><td>forceAutoReload</td><td>bool</td><td></td></tr><tr><td>loud</td><td>bool</td><td></td></tr><tr><td>forceWorldAudioOutput</td><td>bool</td><td></td></tr><tr><td>muzzles</td><td>Transform[]</td><td></td></tr><tr><td>optionalThirdPersonMuzzles</td><td>Transform[]</td><td></td></tr><tr><td>casingParticles</td><td>ParticleSystem[]</td><td></td></tr><tr><td>fireFromAllMuzzles</td><td>bool</td><td></td></tr><tr><td>projectilesPerShot</td><td>int</td><td></td></tr><tr><td>projectilePrefab</td><td>GameObject</td><td></td></tr><tr><td>scopeAimObject</td><td>GameObject</td><td></td></tr><tr><td>kickback</td><td>float</td><td></td></tr><tr><td>randomKick</td><td>float</td><td></td></tr><tr><td>spread</td><td>float</td><td></td></tr><tr><td>followupSpreadGain</td><td>float</td><td></td></tr><tr><td>followupMaxSpreadHip</td><td>float</td><td></td></tr><tr><td>followupMaxSpreadAim</td><td>float</td><td></td></tr><tr><td>followupSpreadStayTime</td><td>float</td><td></td></tr><tr><td>followupSpreadDissipateTime</td><td>float</td><td></td></tr><tr><td>snapMagnitude</td><td>float</td><td></td></tr><tr><td>snapDuration</td><td>float</td><td></td></tr><tr><td>snapFrequency</td><td>float</td><td></td></tr><tr><td>kickbackProneMultiplier</td><td>float</td><td></td></tr><tr><td>spreadProneMultiplier</td><td>float</td><td></td></tr><tr><td>followupSpreadProneMultiplier</td><td>float</td><td></td></tr><tr><td>snapProneMultiplier</td><td>float</td><td></td></tr><tr><td>aiAllowedAimSpread</td><td>float</td><td></td></tr><tr><td>aiAimSwing</td><td>float</td><td></td></tr><tr><td>effInfantry</td><td>Effectiveness</td><td></td></tr><tr><td>effInfantryGroup</td><td>Effectiveness</td><td></td></tr><tr><td>effUnarmored</td><td>Effectiveness</td><td></td></tr><tr><td>effArmored</td><td>Effectiveness</td><td></td></tr><tr><td>effAir</td><td>Effectiveness</td><td></td></tr><tr><td>effAirFastMover</td><td>Effectiveness</td><td></td></tr><tr><td>effectiveRange</td><td>float</td><td></td></tr><tr><td>haltStrategy</td><td>HaltStrategy</td><td></td></tr><tr><td>pose</td><td>int</td><td></td></tr><tr><td>applyHeat</td><td>bool</td><td></td></tr><tr><td>heatMaterial</td><td>MaterialTarget</td><td></td></tr><tr><td>heatGainPerShot</td><td>float</td><td></td></tr><tr><td>heatDrainRate</td><td>float</td><td></td></tr><tr><td>heatColor</td><td>Color</td><td></td></tr><tr><td>heatColorGain</td><td>AnimationCurve</td><td></td></tr><tr><td>overheatParticles</td><td>ParticleSystem</td><td></td></tr><tr><td>overheatSound</td><td>AudioSource</td><td></td></tr><tr><td>useChargeTime</td><td>bool</td><td></td></tr><tr><td>chargeTime</td><td>float</td><td></td></tr><tr><td>chargeSound</td><td>AudioSource</td><td></td></tr><tr><td>dropAmmoWhenReloading</td><td>bool</td><td></td></tr><tr><td>maxRemainingAmmoAfterDrop</td><td>int</td><td></td></tr><tr><td>useMaxAmmoPerReload</td><td>bool</td><td></td></tr><tr><td>maxAmmoPerReload</td><td>int</td><td></td></tr><tr><td>advancedReload</td><td>bool</td><td></td></tr><tr><td>allowedReloads</td><td>int[]</td><td></td></tr><tr><td>sightModes</td><td>SightMode[]</td><td></td></tr><tr><td>overrideFov</td><td>bool</td><td></td></tr><tr><td>fov</td><td>float</td><td></td></tr><tr><td>name</td><td>string</td><td></td></tr></tbody></table>',6),l=[a];function i(n,f){return d(),r("div",null,l)}const c=t(o,[["render",i],["__file","Weapon.html.vue"]]);export{c as default};