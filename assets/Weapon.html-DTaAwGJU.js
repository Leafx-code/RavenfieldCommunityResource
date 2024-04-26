import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as s,c as i,a as t,b as l,d,w as e,e as o}from"./app-BepbZfCa.js";const a={},c=o('<h1 id="weapon" tabindex="-1"><a class="header-anchor" href="#weapon"><span>Weapon</span></a></h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>武器的基础类，是建构一个武器的基础</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2><p>套用在武器物体的最顶层层级，附属物体下挂在这个物体里面</p>',5),_=o('<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2><p>此组件使用了一个Audio Source组件作为依赖项，请将开火音效置于此组件（如果是自动武器请勾选Audio Source的Loop，注意不要勾选Play on Awake！）</p><p>此外请避免装载有Weapon组件的物体上并排存在多个Audio Source组件，这会导致音效冲突+游戏报错</p><p>解决方法是武器内新建空物体再另外挂载一个Audio Source</p><p>此组件对应的可用动画机Parameters：</p><table><thead><tr><th>原名</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>loaded ammo</td><td>int</td><td>已装载的弹药数</td></tr><tr><td>unholster</td><td>trigger</td><td>切换到武器时为True</td></tr><tr><td>tuck</td><td>bool</td><td>冲刺且没有换弹行为时为True</td></tr><tr><td>muzzle</td><td>int</td><td>开火时等于目前武器所处的枪口序号（默认0开始）之后+1，以此类推（如果当前武器枪口数量小于1或勾选fireFromAllMuzzles选项将忽略此条件）</td></tr><tr><td>alt weapon</td><td>int</td><td>当武器动画激活或切换到子武器时，等于目前子武器所处的序号（0=处于主武器，默认1开始）</td></tr><tr><td>charging</td><td>bool</td><td>处于充能状态时为True</td></tr><tr><td>overheat</td><td>bool</td><td>过热时为True</td></tr><tr><td>sight mode</td><td>int</td><td>等于目前玩家所处的瞄准模式（默认0开始）</td></tr><tr><td>smooth sight mode</td><td>float</td><td>等于目前玩家所处的瞄准模式（与sight mode等同，适用于BlenderTree）</td></tr><tr><td>fire</td><td>trigger</td><td>开火时为True</td></tr><tr><td>aim</td><td>bool</td><td>瞄准时为True，其余状态为False</td></tr><tr><td>reload</td><td>trigger</td><td>装填时为True</td></tr><tr><td>reloading</td><td>bool</td><td>启用高级换弹选项后，装填时为True</td></tr><tr><td>reload motion</td><td>int</td><td>启用高级换弹选项后，按照allowedReloads的顺序，等于本次装载行为对应的弹药数量</td></tr><tr><td>no ammo</td><td>bool</td><td>在弹药数量发生变化或当武器动画激活时，武器当前弹夹和备弹都没有弹药时为True</td></tr><tr><td>no ammo blend</td><td>float</td><td>在弹药数量发生变化或当武器动画激活时，武器拥有弹药（当前弹夹或备弹其一满足条件即可）时为0，否则为1</td></tr><tr><td>kick</td><td>trigger</td><td>踢人时为True</td></tr><tr><td>call</td><td>trigger</td><td>召集队员时为True</td></tr><tr><td>direct</td><td>trigger</td><td>指挥队员时为True</td></tr><tr><td>random</td><td>float</td><td>在切换到武器时或每帧随机生成一个0到100的浮点值</td></tr></tbody></table><p>对于此组件的子组件，部分选项是不可用的，请按照逻辑判断</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2>',8),h=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"类型"),t("th",null,"描述")])],-1),p=t("tr",null,[t("td",null,"displayName"),t("td",null,"string"),t("td",null,"武器在实际UI显示的名称")],-1),m=t("tr",null,[t("td",null,"thirdPersonTransform"),t("td",null,"Transform"),t("td",null,"第三人称显示的武器模型（包括手臂）")],-1),f=t("tr",null,[t("td",null,"thirdPersonOffset"),t("td",null,"Vector3"),t("td",null,"第三人称显示的武器模型位置偏移量（矫正位置）")],-1),g=t("tr",null,[t("td",null,"cullInThirdPerson"),t("td",null,"GameObject[]"),t("td",null,[l("第三人称不显示的游戏物体（"),t("code",null,"Size"),l("=数量。先填写要隐藏的物体数量，再在Element*处拖入物体）")])],-1),b=t("tr",null,[t("td",null,"thirdPersonScale"),t("td",null,"float"),t("td",null,"第三人称显示的武器模型缩放偏移量（矫正位置）")],-1),y=t("tr",null,[t("td",null,"keepScriptsOnThirdPersonImposter"),t("td",null,"bool"),t("td")],-1),A=t("td",null,"reloadAudio",-1),S=t("td",null,"AudioSource",-1),T=t("code",null,"advanceRaload",-1),P=t("tr",null,[t("td",null,"changeFireModeAudio"),t("td",null,"AudioSource"),t("td",null,"切换开火模式的音效")],-1),v=t("tr",null,[t("td",null,"reflectionSound"),t("td",null,"enum.ReflectionSound"),t("td",null,"回音效果（Auto=自动、None=无、Handgun=手枪、RifleSmall=小步枪、RifleLarge=大步枪、Launcher=炮、Tank=坦克）")],-1),M=t("tr",null,[t("td",null,"keepScriptsOnThirdPersonImposter"),t("td",null,"bool"),t("td")],-1),R=t("tr",null,[t("td",null,"reflectionVolume"),t("td",null,"float"),t("td",null,"回音效果大小")],-1),k=t("tr",null,[t("td",null,"walkBobMultiplier"),t("td",null,"float"),t("td",null,"走路时晃动倍数")],-1),w=t("tr",null,[t("td",null,"sprintBobMultiplier"),t("td",null,"float"),t("td",null,"跑步时晃动倍数")],-1),z=t("tr",null,[t("td",null,"proneBobMultiplier"),t("td",null,"float"),t("td",null,"趴下时晃动倍数")],-1),B=t("tr",null,[t("td",null,"uiSprite"),t("td",null,"Sprite"),t("td",null,"武器图标")],-1),C=t("tr",null,[t("td",null,"arms"),t("td",null,"SkinnedMeshRenderer"),t("td",null,"武器动画的手臂模型（场景层级内的！包含骨骼，默认名为“Hands“）")],-1),W=t("tr",null,[t("td",null,"allowArmMeshReplacement"),t("td",null,"bool"),t("td",null,"是否允许实际游戏时玩家皮肤替换手部皮肤")],-1),x=t("td",null,"parentWeapon",-1),N=t("td",null,"父武器（有子武器时可用，子武器就是Weapon物体里再套一个Weapon）",-1),E=t("tr",null,[t("td",null,"useParentWeaponSightModes"),t("td",null,"bool"),t("td",null,[l("使用父武器的"),t("code",null,"sightModes")])],-1),I=t("tr",null,[t("td",null,"ammo"),t("td",null,"int"),t("td",null,"武器装载的弹药数（如武器无此弹药逻辑则设为-1）")],-1),F=t("tr",null,[t("td",null,"isLocked"),t("td",null,"bool"),t("td",null,"是否该锁定武器")],-1),D=t("tr",null,[t("td",null,"auto"),t("td",null,"bool"),t("td",null,"是否为自动武器（影响开火是否为连发还是单发，影响开火音效是即时停止还是直接播放完音效）")],-1),H=t("tr",null,[t("td",null,"spareAmmo"),t("td",null,"int"),t("td",null,"武器备用的弹药数（如武器无此弹药逻辑则设为-1")],-1),j=t("tr",null,[t("td",null,"resupplyNumber"),t("td",null,"int"),t("td",null,"每次从补给箱补充的弹药数")],-1),L=t("tr",null,[t("td",null,"reloadTime"),t("td",null,"float"),t("td",null,[l("装填所需时间（启用"),t("code",null,"advanceReload"),l("时不可用）")])],-1),G=t("tr",null,[t("td",null,"cooldown"),t("td",null,"float"),t("td",null,"开火时连续两发子弹的间隔（开火速度，值越小越快）")],-1),O=t("tr",null,[t("td",null,"unholsterTime"),t("td",null,"float"),t("td",null,"切换到武器时所用时间")],-1),V=t("tr",null,[t("td",null,"unholsterIsReload"),t("td",null,"bool"),t("td",null,"切换到武器的行为是否可以替代装填")],-1),Y=t("tr",null,[t("td",null,"changeFireModeTime"),t("td",null,"float"),t("td",null,"更改开火模式时所用时间")],-1),U=t("tr",null,[t("td",null,"changeFireModeIsReload"),t("td",null,"bool"),t("td",null,"更改开火模式的行为是否可以替代装填")],-1),Z=t("tr",null,[t("td",null,"aimFov"),t("td",null,"float"),t("td",null,"瞄准时的视角FoV")],-1),K=t("tr",null,[t("td",null,"forceSniperAimSensitivity"),t("td",null,"bool"),t("td",null,"瞄准时鼠标操作视角的灵敏度")],-1),Q=t("tr",null,[t("td",null,"aimSensitivityMultiplier"),t("td",null,"float"),t("td",null,"瞄准灵敏度倍数")],-1),q=t("tr",null,[t("td",null,"autoReloadDelay"),t("td",null,"float"),t("td",null,"自动装填的延迟")],-1),J=t("tr",null,[t("td",null,"canBeAimedWhileReloading"),t("td",null,"bool"),t("td",null,"装填时是否可以瞄准")],-1),X=t("tr",null,[t("td",null,"forceAutoReload"),t("td",null,"bool"),t("td",null,"强制自动换弹（如投掷类武器）")],-1),$=t("tr",null,[t("td",null,"loud"),t("td",null,"bool"),t("td",null,"开火造成声音是否响亮（会使武器持有者高亮4秒）")],-1),tt=t("tr",null,[t("td",null,"forceWorldAudioOutput"),t("td",null,"bool"),t("td",null,"强制场景音频输出")],-1),lt=t("tr",null,[t("td",null,"muzzles"),t("td",null,"Transform[]"),t("td",null,[l("枪口（或近战武器攻击点，掷弹点。生成子弹projectiles的地方，"),t("code",null,"Size"),l("=数量。先填写枪口数量，一般为1，再在"),t("code",null,"Element*"),l("处拖入物体。"),t("strong",null,"muzzlesz中指定的物体及此物体的子层级的Particle System组件在在开火时会触发"),l("）")])],-1),nt=t("tr",null,[t("td",null,"optionalThirdPersonMuzzles"),t("td",null,"Transform[]"),t("td",null,"可选的第三人称时的枪口")],-1),dt=t("tr",null,[t("td",null,"casingParticles"),t("td",null,"ParticleSystem[]"),t("td",null,[l("抛壳口（"),t("code",null,"Size"),l("=数量。先填写数量，一般为1，再在"),t("code",null,"Element*"),l("处拖入物体，抛壳次序与"),t("code",null,"muzzles"),l("次序保持一致）")])],-1),et=t("tr",null,[t("td",null,"fireFromAllMuzzles"),t("td",null,"bool"),t("td",null,"每次开火时所有的枪口是否全部开火（否则按照枪口顺序向下运行）")],-1),ot=t("tr",null,[t("td",null,"projectilesPerShot"),t("td",null,"int"),t("td",null,"每次开火会射出多少子弹")],-1),ut=t("tr",null,[t("td",null,"projectilePrefab"),t("td",null,"GameObject"),t("td",null,"子弹的预制件")],-1),rt=t("tr",null,[t("td",null,"scopeAimObject"),t("td",null,"GameObject"),t("td",null,"瞄准时出现的物体（可选，类似狙击时画面外的一圈黑边，聚焦瞄准时的黑边物体。应在场景层级内，机制为游戏时默认在此项设置的物体会禁用，玩家瞄准时会启用）")],-1),st=t("tr",null,[t("td",null,"kickback"),t("td",null,"float"),t("td",null,"后坐力")],-1),it=t("tr",null,[t("td",null,"randomKick"),t("td",null,"float"),t("td",null,"随机附加后坐的最大值")],-1),at=t("tr",null,[t("td",null,"spread"),t("td",null,"float"),t("td",null,"散布效果")],-1),ct=t("tr",null,[t("td",null,"followupSpreadGain"),t("td",null,"float"),t("td",null,"连发时的散布效果")],-1),_t=t("tr",null,[t("td",null,"followupMaxSpreadHip"),t("td",null,"float"),t("td",null,"（未瞄准时）连发时的散布效果的最大值")],-1),ht=t("tr",null,[t("td",null,"followupMaxSpreadAim"),t("td",null,"float"),t("td",null,"（瞄准时）连发时的散布效果的最大值")],-1),pt=t("tr",null,[t("td",null,"followupSpreadStayTime"),t("td",null,"float"),t("td",null,"连发时的散布效果的持续时间")],-1),mt=t("tr",null,[t("td",null,"followupSpreadDissipateTime"),t("td",null,"float"),t("td",null,"连发时的散布效果的消散时间")],-1),ft=t("tr",null,[t("td",null,"snapMagnitude"),t("td",null,"float"),t("td",null,"开火时武器的上抬幅度")],-1),gt=t("tr",null,[t("td",null,"snapDuration"),t("td",null,"float"),t("td",null,"开火时武器上抬的持续时间")],-1),bt=t("tr",null,[t("td",null,"snapFrequency"),t("td",null,"float"),t("td",null,"开火时武器上抬频率")],-1),yt=t("tr",null,[t("td",null,"kickbackProneMultiplier"),t("td",null,"float"),t("td",null,"趴下时后座倍数")],-1),At=t("tr",null,[t("td",null,"spreadProneMultiplier"),t("td",null,"float"),t("td",null,"不精准度倍数")],-1),St=t("tr",null,[t("td",null,"followupSpreadProneMultiplier"),t("td",null,"float"),t("td",null,"趴下时后续增加的不精准度倍数")],-1),Tt=t("tr",null,[t("td",null,"snapProneMultiplier"),t("td",null,"float"),t("td")],-1),Pt=t("tr",null,[t("td",null,"aiAllowedAimSpread"),t("td",null,"float"),t("td",null,"Bot瞄准不精准度（数值越高，Bot就越容易开火，即使未瞄准）")],-1),vt=t("tr",null,[t("td",null,"aiAimSwing"),t("td",null,"float"),t("td",null,"Bot的攻击时的瞄准误差")],-1),Mt=t("tr",null,[t("td",null,"effInfantry"),t("td",null,"enum.Effectiveness"),t("td",null,"攻击是否对步兵作用(No, Yes, Preferred)")],-1),Rt=t("tr",null,[t("td",null,"effInfantryGroup"),t("td",null,"enum.Effectiveness"),t("td",null,"攻击是否对步兵群作用(No, Yes, Preferred)")],-1),kt=t("tr",null,[t("td",null,"effUnarmored"),t("td",null,"enum.Effectiveness"),t("td",null,"攻击是否对无装甲的载具作用(No, Yes, Preferred)")],-1),wt=t("tr",null,[t("td",null,"effArmored"),t("td",null,"enum.Effectiveness"),t("td",null,"攻击是否对装甲载具作用(No, Yes, Preferred)")],-1),zt=t("tr",null,[t("td",null,"effAir"),t("td",null,"enum.Effectiveness"),t("td",null,"攻击是否对空中目标作用(No, Yes, Preferred)")],-1),Bt=t("tr",null,[t("td",null,"effAirFastMover"),t("td",null,"enum.Effectiveness"),t("td",null,"攻击是否对快速移动的空中目标作用(No, Yes, Preferred)")],-1),Ct=t("tr",null,[t("td",null,"effectiveRange"),t("td",null,"float"),t("td",null,"攻击有效范围")],-1),Wt=t("tr",null,[t("td",null,"diffInfantry"),t("td",null,"enum.Difficulty"),t("td",null,[l("Bot使用此武器攻击步兵的难度(Auto=自动调整,Easy=轻松,Challenging=还行,Hard=困难,Impossible=不可能。"),t("strong",null,"游戏中Bot自动分为Beginner、Normal、Veteran、Elite四个等级，各个级别的实力可从名字体现，武器的攻击难度对于不同级别的Bot是不同的，会削减或增强"),l(")")])],-1),xt=t("tr",null,[t("td",null,"diffInfantryGroup"),t("td",null,"enum.Difficulty"),t("td",null,"Bot使用此武器攻击步兵群的难度(Auto=自动调整,Easy=轻松,Challenging=还行,Hard=困难,Impossible=不可能)")],-1),Nt=t("tr",null,[t("td",null,"diffGroundVehicles"),t("td",null,"enum.Difficulty"),t("td",null,"Bot使用此武器攻击载具的难度(Auto=自动调整,Easy=轻松,Challenging=还行,Hard=困难,Impossible=不可能)")],-1),Et=t("tr",null,[t("td",null,"diffAir"),t("td",null,"enum.Difficulty"),t("td",null,"Bot使用此武器攻击空中目标的难度(Auto=自动调整,Easy=轻松,Challenging=还行,Hard=困难,Impossible=不可能)")],-1),It=t("tr",null,[t("td",null,"diffAirFastMover"),t("td",null,"enum.Difficulty"),t("td",null,"Bot使用此武器攻击快速移动的空中目标的难度(Auto=自动调整,Easy=轻松,Challenging=还行,Hard=困难,Impossible=不可能)")],-1),Ft=t("tr",null,[t("td",null,"haltStrategy"),t("td",null,"enum.HaltStrategy"),t("td",null,"Bot移动时的开火策略（建议不改。Auto=自动调整, Never=移动时始终开火, PreferredLongRange=远距离优先停止移动再开火但近距离依旧开火, PreferredAnyRange=允许边移动边开火跑打但优先停移, AlwaysLongRange=远距离才始终停移但近距离依旧开火, Always=开火时始终停移)")],-1),Dt=t("tr",null,[t("td",null,"pose"),t("td",null,"int"),t("td",null,"第三人称握持武器的姿势(例子：0=AK、1=手雷、2=SMAW)")],-1),Ht=t("tr",null,[t("td",null,"applyHeat"),t("td",null,"bool"),t("td",null,"是否有过热效果")],-1),jt=t("tr",null,[t("td",null,"heatMaterial"),t("td",null,"MaterialTarget"),t("td",null,"过热效果的材质（参考Unity的文档与Prefab,需要自发光材质）")],-1),Lt=t("tr",null,[t("td",null,"heatGainPerShot"),t("td",null,"float"),t("td",null,"每发使武器过热%多少）")],-1),Gt=t("tr",null,[t("td",null,"heatDrainRate"),t("td",null,"float"),t("td",null,"每秒使武器散热%多少")],-1),Ot=t("tr",null,[t("td",null,"heatColor"),t("td",null,"Color"),t("td",null,"过热效果的颜色")],-1),Vt=t("tr",null,[t("td",null,"heatColorGain"),t("td",null,"AnimationCurve"),t("td",null,"过热散热时颜色消失的曲线")],-1),Yt=t("tr",null,[t("td",null,"overheatParticles"),t("td",null,"ParticleSystem"),t("td",null,"过热出现的粒子")],-1),Ut=t("tr",null,[t("td",null,"overheatSound"),t("td",null,"AudioSource"),t("td",null,"过热音效")],-1),Zt=t("tr",null,[t("td",null,"useChargeTime"),t("td",null,"bool"),t("td",null,"武器是否需要充能（蓄力）")],-1),Kt=t("tr",null,[t("td",null,"chargeTime"),t("td",null,"float"),t("td",null,"武器充能时间")],-1),Qt=t("tr",null,[t("td",null,"chargeSound"),t("td",null,"AudioSource"),t("td",null,"武器充能音效")],-1),qt=t("tr",null,[t("td",null,"dropAmmoWhenReloading"),t("td",null,"bool"),t("td",null,"换弹时丢弃剩余弹药")],-1),Jt=t("tr",null,[t("td",null,"maxRemainingAmmoAfterDrop"),t("td",null,"int"),t("td",null,"丢弃弹药后最大剩余弹药")],-1),Xt=t("tr",null,[t("td",null,"useMaxAmmoPerReload"),t("td",null,"bool"),t("td",null,"限制每次换弹的最大装填数")],-1),$t=t("tr",null,[t("td",null,"maxAmmoPerReload"),t("td",null,"int"),t("td",null,[l("每次换弹的最大装填数（与"),t("code",null,"useMaxAmmoPerReload"),l("联动）")])],-1),tl=t("tr",null,[t("td",null,"advancedReload"),t("td",null,"bool"),t("td",null,"是否启用高级装填（用于单\\多发装填武器,需要在AnimationEvent手动调用ReloadDone才能结束装填）")],-1),ll=t("tr",null,[t("td",null,"allowedReloads"),t("td",null,"int[]"),t("td",null,"启用高级装填选项后，换弹时将会按照设定好的顺序，装填对应的弹药数量")],-1),nl=t("tr",null,[t("td",null,"sightModes"),t("td",null,"SightMode[]"),t("td",null,[l("瞄准方式（"),t("code",null,"Sizes"),l("=有多少种瞄准方式；overrideFov=铺满视角；fov=可视范围；name=名称，显示在实际游戏时的HUB中）")])],-1);function dl(el,ol){const n=r("RouteLink");return s(),i("div",null,[c,t("p",null,[l("参考"),d(n,{to:"/cn/Tutorials/wpn.1.html"},{default:e(()=>[l("RFCreator Project")]),_:1})]),_,t("table",null,[h,t("tbody",null,[p,m,f,g,b,y,t("tr",null,[A,S,t("td",null,[l("装填音效(开启"),T,l("时忽略此项，此AudioSource建议放置于武器内的空物体上，参阅"),d(n,{to:"/cn/Tutorials/"},{default:e(()=>[l("RFCreator Project")]),_:1}),l(")")])]),P,v,M,R,k,w,z,B,C,W,t("tr",null,[x,t("td",null,[d(n,{to:"/cn/Components/Weapon.html"},{default:e(()=>[l("Weapon")]),_:1})]),N]),E,I,F,D,H,j,L,G,O,V,Y,U,Z,K,Q,q,J,X,$,tt,lt,nt,dt,et,ot,ut,rt,st,it,at,ct,_t,ht,pt,mt,ft,gt,bt,yt,At,St,Tt,Pt,vt,Mt,Rt,kt,wt,zt,Bt,Ct,Wt,xt,Nt,Et,It,Ft,Dt,Ht,jt,Lt,Gt,Ot,Vt,Yt,Ut,Zt,Kt,Qt,qt,Jt,Xt,$t,tl,ll,nl])])])}const sl=u(a,[["render",dl],["__file","Weapon.html.vue"]]),il=JSON.parse('{"path":"/cn/Components/Weapon.html","title":"Weapon","lang":"zh-CN","frontmatter":{"category":["组件","武器"],"head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ravenfieldcommunity.github.io/docs/en/Components/Weapon.html"}],["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/cn/Components/Weapon.html"}],["meta",{"property":"og:site_name","content":"Ravenfield社区客制化文档"}],["meta",{"property":"og:title","content":"Weapon"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-18T12:39:33.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-18T12:39:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Weapon\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-18T12:39:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]}],"git":{"createdTime":1684053664000,"updatedTime":1702903173000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":14},{"name":"QMeiMei","email":"119944603+RedQieMei@users.noreply.github.com","commits":1}]},"filePathRelative":"cn/Components/Weapon.md","localizedDate":"2023年5月14日"}');export{sl as comp,il as data};
