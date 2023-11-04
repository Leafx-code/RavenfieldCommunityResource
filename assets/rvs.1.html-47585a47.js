import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as i,c as r,a as n,b as s,d as a,w as l,e as t}from"./app-182cd54d.js";const u={},d=n("h1",{id:"rvs-1-ravenscrpit",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rvs-1-ravenscrpit","aria-hidden":"true"},"#"),s(" rvs.1 Ravenscrpit")],-1),k=n("h2",{id:"_2-0-何为ravenscrpit",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-0-何为ravenscrpit","aria-hidden":"true"},"#"),s(" -2.0 何为Ravenscrpit？")],-1),m=n("p",null,"Ravenscrpit是一个基于Lua的游戏语言（其实就是Lua），为了Ravenfield的模组化开发",-1),v={href:"https://www.moonsharp.org/",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,"Ravenscript可以控制Ravenfield和Unity引擎的某些部分",-1),b=n("p",null,"因此它具有与Unity开发中的C#具有相同的逻辑与操作",-1),_=n("p",null,"所以，建议你先入门Unity C#开发，再入门Ravenscript，有助于你更顺利的理解一些概念",-1),f=n("h2",{id:"_1-0-环境配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-0-环境配置","aria-hidden":"true"},"#"),s(" -1.0 环境配置")],-1),g=n("p",null,[n("strong",null,"此处不再详细说明，如果你有看过相关编程语言的教程，对下面的事情你应该会很快上手")],-1),y=n("p",null,[n("strong",null,"详情请参考官方文档")],-1),w={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},S=n("img",{src:"https://img.shields.io/badge/VS Code-Install-blue?style=for-the-badge&logo=visualstudiocode",alt:"Install in VS Code",title:"Install in VS Code"},null,-1),C=n("p",null,"或者自行选择一个合适的编辑器,以下内容部分仅适用VSCode",-1),q={start:"2"},x={href:"https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans",target:"_blank",rel:"noopener noreferrer"},P=n("img",{src:"https://img.shields.io/badge/VS Code-Install-blue?style=for-the-badge&logo=visualstudiocode",alt:"Install in VS Code",title:"Install in VS Code"},null,-1),I={href:"https://marketplace.visualstudio.com/items?itemName=sumneko.lua",target:"_blank",rel:"noopener noreferrer"},R=n("img",{src:"https://img.shields.io/badge/VS Code-Install-blue?style=for-the-badge&logo=visualstudiocode",alt:"Install in VS Code",title:"Install in VS Code"},null,-1),A={href:"https://github.com/RavenfieldCommunity",target:"_blank",rel:"noopener noreferrer"},T={href:"https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp",target:"_blank",rel:"noopener noreferrer"},V=n("img",{src:"https://img.shields.io/badge/VS Code-Install-blue?style=for-the-badge&logo=visualstudiocode",alt:"Install in VS Code",title:"Install in VS Code"},null,-1),E=n("li",null,[n("p",null,"配置工作区的.vscode\\settings.json为：")],-1),B=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">//配置文件扩展名关联</span>
    <span class="token property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;*.txt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lua&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">//隐藏meta文件</span>
    <span class="token property">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;**/*.meta&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),U={start:"6"},D=n("li",null,[n("p",null,"配置VSCode为Unity的外部编辑器")],-1),G={href:"https://marketplace.visualstudio.com/items?itemName=xanathar.moonsharp-debug",target:"_blank",rel:"noopener noreferrer"},N=n("img",{src:"https://img.shields.io/badge/VS Code-Install-blue?style=for-the-badge&logo=visualstudiocode",alt:"Install in VS Code",title:"Install in VS Code"},null,-1),O={href:"https://www.bilibili.com/read/cv8997496/",target:"_blank",rel:"noopener noreferrer"},L=t(`<h2 id="_1-0-文件结构" tabindex="-1"><a class="header-anchor" href="#_1-0-文件结构" aria-hidden="true">#</a> 1.0 文件结构</h2><p>标准的RS脚本一般分为3个结构：</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">--#1 注册RS父table，这样你才能从里面派生方法并让游戏执行</span>
<span class="token function">behavior</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>

<span class="token comment">--#2 local变量，为什么不可以在事件方法体里可以自行研究</span>
<span class="token keyword">local</span> var1

<span class="token comment">--#3 定义事件方法体</span>
<span class="token keyword">function</span> test<span class="token punctuation">:</span> <span class="token function">Start</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> test<span class="token punctuation">:</span> <span class="token function">Update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),M=n("code",null,"test",-1),Q=n("code",null,"behaviour",-1),K=n("code",null,"test",-1),j={href:"http://ravenfieldgame.com/ravenscript/api/ScriptedBehaviour.html",target:"_blank",rel:"noopener noreferrer"},H=n("code",null,"test",-1),F=n("p",null,[s("在第二部分中，在外部定义变量而不是在方法体内定义的原因时各个方法体的局部变量不可互相访问，在外部定义就可以直接通过self指针（例如"),n("code",null,"self.var1"),s("）在table方法体内部全局读写变量（但因为解释器的逻辑，你不能在此处使用RS的Api初始化值？）")],-1),W=n("code",null,"Awake",-1),z=n("code",null,"OnEnable",-1),J=n("code",null,"OnDisable",-1),X=n("code",null,"OnDestroy",-1),Y=n("code",null,"Start",-1),Z=n("code",null,"Update",-1),$=n("code",null,"LateUpdate",-1),nn=n("code",null,"FixedUpdate",-1),sn=n("code",null,"OnAnimatorIK",-1),an={href:"https://docs.unity3d.com/cn/2020.3/Manual/ExecutionOrder.html",target:"_blank",rel:"noopener noreferrer"},en=n("p",null,"至于为什么Ravenscript与Unity C#一样，不像一般编程一样直接在文件里贴代码，你可以自行探讨",-1),tn=n("h2",{id:"_1-1-文档使用方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-1-文档使用方法","aria-hidden":"true"},"#"),s(" 1.1 文档使用方法")],-1),on={href:"http://ravenfieldgame.com/ravenscript/api.html",target:"_blank",rel:"noopener noreferrer"},pn=n("h3",{id:"类class",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#类class","aria-hidden":"true"},"#"),s(" 类Class")],-1),ln=n("p",null,"尽管文档没有标注，首先你仍需要明白文档中那些classes（其实classes这个名称并不准确？）可以分别是怎么用的",-1),cn={href:"http://ravenfieldgame.com/ravenscript/api/Player.html",target:"_blank",rel:"noopener noreferrer"},rn={href:"http://ravenfieldgame.com/ravenscript/api/Actor.html",target:"_blank",rel:"noopener noreferrer"},un={href:"http://ravenfieldgame.com/ravenscript/api/AudioMixer.html",target:"_blank",rel:"noopener noreferrer"},dn=n("p",null,"官方并没有标注这些内容，这需要您按照逻辑思维与常识自行探索",-1),kn=n("h3",{id:"类成员与类型、关键字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#类成员与类型、关键字","aria-hidden":"true"},"#"),s(" 类成员与类型、关键字")],-1),mn=n("p",null,"点击一个类的文档，在Details一栏，你会发现这样的一些文本，下面是这些类成员的描述",-1),vn=n("p",null,"它们分为构建函数（Constructors，部分，参考C#）、成员属性（Members，参考C#）、成员方法（Methods，部分，参考C#）、成员事件（Events，部分）",-1),hn=n("p",null,"构建函数用于实例化一个新类，需要按函数重载传入一些初始值，之后函数会返回实例化的新类",-1),bn=n("p",null,"在成员属性中，如：",-1),_n={href:"http://ravenfieldgame.com/ravenscript/api/Actor.html#_CPPv4N5Actor7balanceE",target:"_blank",rel:"noopener noreferrer"},fn=t("<p>int表示这个属性的类型是int整数，balance表示这个属性的名字，其他的类似，RS自带的内建类会提供一个超链接高亮显示</p><p>可能你也会看到一些诸如const、static这样的关键字（类似于“标识符”），他们的含义如下：</p><table><thead><tr><th>关键字</th><th>含义</th></tr></thead><tbody><tr><td>const</td><td>表示这个属性是常量，不可更改，指向的内容始终不变（即使玩家层面可见的变更，即使被变量无限引用）</td></tr><tr><td>static</td><td>静态属性，无论如何类实例化，返回值不受实例的类影响，始终一致</td></tr></tbody></table><p>在成员方法中，如：</p>",4),gn={href:"http://ravenfieldgame.com/ravenscript/api/Actor.html#_CPPv4N5Actor14CanBeDamagedByE6Weapon",target:"_blank",rel:"noopener noreferrer"},yn=n("p",null,[s("方法名前的是方法返回的数据的类型（如果是void则表示无返回值），"),n("code",null,"seat"),s("表示的是参数，前头的"),n("code",null,"Seat"),s("表示的是这个参数的类型")],-1),wn=n("p",null,"一个方法可能有多个重载，你可以按需求使用合适的重载",-1),Sn=n("p",null,"在成员事件中，如：",-1),Cn={href:"http://ravenfieldgame.com/ravenscript/api/Actor.html#_CPPv4N5Actor12onTakeDamageE",target:"_blank",rel:"noopener noreferrer"},qn={href:"http://ravenfieldgame.com/ravenscript/api/ScriptEvent.html",target:"_blank",rel:"noopener noreferrer"},xn=t(`<p>在实际上，他是这样使用的：</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">behavior</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> test<span class="token punctuation">:</span> <span class="token function">Start</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">--注册事件</span>
    <span class="token comment">--self指触发事件时调用方法所在的table(ScriptedBehavior)，如果你已经获取了别的ScriptedBehavior，你也可以将self替换为ScriptedBehavior所在变量</span>
    <span class="token comment">--&quot;onTakeDamage&quot;指触发事件时调用self所在方法的方法名，不一定非要填写属性ScriptEvent的属性名</span>
    Player<span class="token punctuation">.</span>onTakeDamage<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token string">&quot;onTakeDamage&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment">--触发事件时就会调用这个方法</span>
<span class="token keyword">function</span> test<span class="token punctuation">:</span> <span class="token function">onTakeDamage</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Pn={href:"http://ravenfieldgame.com/ravenscript/api/GameEvents.html#_CPPv4N10GameEvents14onActorCreatedE",target:"_blank",rel:"noopener noreferrer"},In=n("code",null,"callback",-1),Rn=t(`<h2 id="_1-3-coding实践" tabindex="-1"><a class="header-anchor" href="#_1-3-coding实践" aria-hidden="true">#</a> 1.3 Coding实践</h2><p>如写一个玩家血量修复的RS脚本</p><p>首先提取功能中的关键字</p><p>然后到文档的Api索引查找相关方法、member，如我们可以在Player这个类中找到可以获取玩家对应actor的menber是<code>Player.actor</code>，我们就可以在</p><p>如果找不到合适的方法，可以尝试关键词搜索，如果还找不到。那就是乌鸦没写估计，只能另辟蹊径</p><p>然后按文档提供的member和method编写脚本，不断重复这个行为</p><p>首先，我们先实现我们最<strong>核心</strong>的功能血量回复</p><p>通过<code>Input.GetKeyDown</code>的return判断按键是否按下这个是基本操作，各个Unity基础教程应该有介绍</p><p>血量回复这个功能对应的API的话，先把这个功能拆出一个词“Health”（健康），在文档里搜索</p><p>在Actor这个类里找到<code>Actor.ResupplyHealth(float health)</code>这个方法似乎有用</p><p>那类Actor是什么？</p><p>类Actor是一个管理玩家与Bot在游戏中的“属性”的一个重要的类，包括但不限于血量、所使用的武器载具、所属小队等属性</p><p>同时我们又发现<code>Player.actor</code>这个API可以让我们获取到玩家的Actor</p><p>那么，所需的方法都有了！</p><p>示例：</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">behaviour</span><span class="token punctuation">(</span><span class="token string">&quot;QuickTreat&quot;</span><span class="token punctuation">)</span>  <span class="token comment">--注册Ravenscript行为，然后我们才能从这个基类派生自己的自定义类</span>

<span class="token keyword">function</span> QuickTreat<span class="token punctuation">:</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> Input<span class="token punctuation">.</span><span class="token function">GetKeyDown</span><span class="token punctuation">(</span>KeyCode<span class="token punctuation">.</span>P<span class="token punctuation">)</span> <span class="token keyword">then</span> <span class="token comment">--当按下P键时...，通过Input.GetKeyDown的return判断按键是否按下，基本操作hhh</span>
        Player<span class="token punctuation">.</span>actor<span class="token punctuation">.</span><span class="token function">ResupplyHealth</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token comment">--调用Player的成员actor内的一个成员方法来回复50血量</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际测试，发现没有Bug，同时发现使用<code>Player.actor.ResupplyHealth()</code>这个方法可以确保防止血量回复后健康超过最大值，这意味着我们可以减少实现这个功能的代码量</p><p>然后继续添加下一个功能冷却时间：</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">behaviour</span><span class="token punctuation">(</span><span class="token string">&quot;QuickTreat&quot;</span><span class="token punctuation">)</span>

<span class="token comment">--初始化局部变量,无法从脚本外部访问</span>
<span class="token keyword">local</span> timer <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment">--计时器</span>

<span class="token keyword">function</span> QuickTreat<span class="token punctuation">:</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">--这个Start()函数会在游戏的一开始运行</span>
    <span class="token comment">--在调用的变量前加一个self.防止得到的的值是nil</span>
    self<span class="token punctuation">.</span>timer <span class="token operator">=</span> Time<span class="token punctuation">.</span>time <span class="token operator">+</span> <span class="token number">60</span>  <span class="token comment">--初始化计时器，计算超出冷却时间后时的游戏时间，选用这个方案的原因是Time.deltaTime似乎无法正常使用</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> QuickTreat<span class="token punctuation">:</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">--这个Update()函数会在游戏的每帧运行</span>
    <span class="token keyword">if</span> Input<span class="token punctuation">.</span><span class="token function">GetKeyDown</span><span class="token punctuation">(</span>KeyCode<span class="token punctuation">.</span>P<span class="token punctuation">)</span> <span class="token keyword">then</span>
	    <span class="token keyword">if</span> Time<span class="token punctuation">.</span>time <span class="token operator">&gt;=</span> self<span class="token punctuation">.</span>timer <span class="token keyword">then</span>
            Player<span class="token punctuation">.</span>actor<span class="token punctuation">.</span><span class="token function">ResupplyHealth</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
			self<span class="token punctuation">.</span>timer <span class="token operator">=</span> Time<span class="token punctuation">.</span>time <span class="token operator">+</span> <span class="token number">60</span>  <span class="token comment">--重置计时器</span>
		<span class="token keyword">end</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后实际测试，发现没有Bug，然后继续添加下一个功能，不断重复这个过程，直到完成：</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">behaviour</span><span class="token punctuation">(</span><span class="token string">&quot;QuickTreat&quot;</span>

<span class="token keyword">local</span> timer <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">local</span> cooldown  <span class="token comment">--冷却时间</span>
<span class="token keyword">local</span> ratio <span class="token comment">--血量回复比</span>
<span class="token keyword">local</span> keybind <span class="token comment">--触发键位</span>
<span class="token keyword">local</span> mutator

<span class="token keyword">function</span> QuickTreat<span class="token punctuation">:</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">--进入游戏地图的一开始时运行</span>
    coroutine<span class="token punctuation">.</span><span class="token function">yield</span><span class="token punctuation">(</span><span class="token function">WaitForSeconds</span><span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">--延迟运行下一行确保mutator设置加载成功</span>
    self<span class="token punctuation">.</span>mutator <span class="token operator">=</span> self<span class="token punctuation">.</span>script<span class="token punctuation">.</span>mutator  <span class="token comment">--获取此脚本绑定的mutator信息</span>
	self<span class="token punctuation">.</span>cooldown <span class="token operator">=</span> self<span class="token punctuation">.</span>mutator<span class="token punctuation">.</span><span class="token function">GetConfigurationFloat</span><span class="token punctuation">(</span><span class="token string">&quot;cooldown&quot;</span><span class="token punctuation">)</span>  <span class="token comment">--获取mutator自定义选项卡中id为cooldown的float对应的值</span>
	<span class="token keyword">if</span> self<span class="token punctuation">.</span>cooldown <span class="token operator">&lt;</span> <span class="token number">60</span> <span class="token keyword">then</span>  <span class="token comment">--如果cooldown小于60，则重置cooldown为60</span>
	    self<span class="token punctuation">.</span>cooldown <span class="token operator">=</span> <span class="token number">60</span>
    <span class="token keyword">end</span>
	self<span class="token punctuation">.</span>ratio <span class="token operator">=</span> self<span class="token punctuation">.</span>mutator<span class="token punctuation">.</span><span class="token function">GetConfigurationRange</span><span class="token punctuation">(</span><span class="token string">&quot;ratio&quot;</span><span class="token punctuation">)</span>  <span class="token comment">--获取mutator自定义选项卡中id为ratio的range对应的值</span>
	self<span class="token punctuation">.</span>keybind <span class="token operator">=</span> self<span class="token punctuation">.</span>mutator<span class="token punctuation">.</span><span class="token function">GetConfigurationString</span><span class="token punctuation">(</span><span class="token string">&quot;keybind&quot;</span><span class="token punctuation">)</span>  <span class="token comment">--获取mutator自定义选项卡中id为keybind的string对应的值</span>
	<span class="token keyword">if</span> self<span class="token punctuation">.</span>keybind <span class="token operator">==</span> <span class="token keyword">nil</span> <span class="token keyword">then</span>  <span class="token comment">--如果keybind为空，则重置keybind为&quot;p&quot;</span>
	    self<span class="token punctuation">.</span>keybind <span class="token operator">=</span> <span class="token string">&quot;P&quot;</span>
    <span class="token keyword">end</span>
	self<span class="token punctuation">.</span>timer <span class="token operator">=</span> Time<span class="token punctuation">.</span>time <span class="token operator">+</span> self<span class="token punctuation">.</span>cooldown  <span class="token comment">--计算超出冷却时间后的游戏时间</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> QuickTreat<span class="token punctuation">:</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> Input<span class="token punctuation">.</span><span class="token function">GetKeyDown</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>keybind<span class="token punctuation">)</span> <span class="token keyword">then</span>  <span class="token comment">--当按下keybind对应的按键时...</span>
		<span class="token keyword">if</span> Time<span class="token punctuation">.</span>time <span class="token operator">&gt;=</span> self<span class="token punctuation">.</span>timer <span class="token keyword">then</span>
            Player<span class="token punctuation">.</span>actor<span class="token punctuation">.</span><span class="token function">ResupplyHealth</span><span class="token punctuation">(</span>Player<span class="token punctuation">.</span>actor<span class="token punctuation">.</span>maxHealth <span class="token operator">*</span> self<span class="token punctuation">.</span>ratio<span class="token punctuation">)</span>
			self<span class="token punctuation">.</span>timer <span class="token operator">=</span> Time<span class="token punctuation">.</span>time <span class="token operator">+</span> self<span class="token punctuation">.</span>cooldown
			Overlay<span class="token punctuation">.</span><span class="token function">ShowMessage</span><span class="token punctuation">(</span><span class="token string">&quot;[QuickTreat]Sucess&quot;</span><span class="token punctuation">,</span><span class="token number">0.15</span><span class="token punctuation">)</span>  <span class="token comment">--调用Overlay.ShowMessage()来显示一行信息，后半部分的数值是消失延迟</span>
        <span class="token keyword">else</span>
            Overlay<span class="token punctuation">.</span><span class="token function">ShowMessage</span><span class="token punctuation">(</span><span class="token string">&quot;[QuickTreat]Failure,Need delay&quot;</span><span class="token punctuation">,</span><span class="token number">0.15</span><span class="token punctuation">)</span>
		<span class="token keyword">end</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当主要功能完成时，我们就可以继续下一步：添加次要功能与优化代码</p><p>优化代码这部分表现为：减少不必要的判断、运算，精简代码，将可以迁移到事件函数的判断迁移之类</p><p>此处不再赘述</p><h2 id="_1-4-在游戏测试" tabindex="-1"><a class="header-anchor" href="#_1-4-在游戏测试" aria-hidden="true">#</a> 1.4 在游戏测试</h2>`,25),An={href:"http://steamcommunity.com/profiles/76561198310507502",target:"_blank",rel:"noopener noreferrer"},Tn={href:"https://blog.csdn.net/x3464/article/details/105137284",target:"_blank",rel:"noopener noreferrer"},Vn=t('<p>无论如何，你都要将将脚本挂载到游戏物体中，并且保证这个物体在实际游戏中会被加载</p><h2 id="_1-5-常见报错" tabindex="-1"><a class="header-anchor" href="#_1-5-常见报错" aria-hidden="true">#</a> 1.5 常见报错</h2><h3 id="测试模式下无法重载脚本" tabindex="-1"><a class="header-anchor" href="#测试模式下无法重载脚本" aria-hidden="true">#</a> 测试模式下无法重载脚本</h3><p>其具体表现为，点击重载键不出现加载提示：</p><p>{缺图}</p><p>正常应为：</p><p>{缺图}</p><p>请检查游戏是否可以访问这个脚本所在位置，修改Windows文件夹的安全属性（Unity游戏不支持使用管理员权限运行），或检查访问是否被拒绝</p><p>否则尝试迁移Unity项目位置</p><h2 id="_1-6-debug" tabindex="-1"><a class="header-anchor" href="#_1-6-debug" aria-hidden="true">#</a> 1.6 Debug</h2>',10);function En(Bn,Un){const e=p("ExternalLinkIcon"),o=p("RouterLink");return i(),r("div",null,[d,k,m,n("p",null,[s("它的诞生基于"),n("a",v,[s("MoonSharp Project"),a(e)]),s("（可惜自2016年就没了更新，官方仓库堆了一堆PR）")]),h,b,_,f,g,y,n("ol",null,[n("li",null,[s("安装 "),n("a",w,[S,a(e)]),s("作为IDE")])]),C,n("ol",q,[n("li",null,[n("p",null,[s("安装Chinese-Simple语言扩展包"),n("a",x,[P,a(e)])])]),n("li",null,[n("p",null,[s("安装vscode-lua扩展"),n("a",I,[R,a(e)]),s("（我们"),n("a",A,[s("社区"),a(e)]),s("的还没出，敬请期待！）")])]),n("li",null,[n("p",null,[s("安装C#扩展"),n("a",T,[V,a(e)])])]),E]),B,n("ol",U,[D,n("li",null,[n("p",null,[s("（可选）安装Debug扩展"),n("a",G,[N,a(e)])])]),n("li",null,[n("p",null,[s("（可选）安装"),n("a",O,[s("BepInEx"),a(e)]),s("并启用控制台（方便调取RS输出）")])])]),L,n("p",null,[s("在此示例中，第一部分的作用是向Ravenscript解释器要求注册一个名为"),M,s("的table（应与"),a(o,{to:"/cn/Components/ScriptedBehaviour.html"},{default:l(()=>[s("ScriptedBehaviour")]),_:1}),s("的"),Q,s("的值一致，或与文件名一致），调用此方法后解释器会在当前环境中创建一个名为"),K,s("的table，这个table派生于"),n("a",j,[s("ScriptedBehaviour"),a(e)]),s("，用于定义self指针包含的内容方便调用，并注复制test外部的local（即第二步定义的局部变量）进"),H]),F,n("p",null,[s("在第三部分中，你可以选择从注册的table派生一些一些方法，解释器会在游戏运行期间调用它们， "),W,s("、"),z,s("、"),J,s("、"),X,s("、"),Y,s("、"),Z,s("、"),$,s("、"),nn,s("、"),sn,s("这些都是默认可用的方法名，他们的意义与执行顺序与Unity C#的一致，你可以参考"),n("a",an,[s("Unity文档"),a(e)])]),en,tn,n("p",null,[s("打开官方的"),n("a",on,[s("Ravenscrpit的文档"),a(e)])]),pn,ln,n("p",null,[s("即哪些类已经实例化可以直接作为api对象进行调用（如"),n("a",cn,[s("Player"),a(e)]),s(",它可以直接在脚本里Player.actor.health =9999这样直接调用 ）")]),n("p",null,[s("哪些是作为“数据类型”需要先实例化这个类才能使用（如"),n("a",rn,[s("类Actor"),a(e)]),s("，它需要先在一个Bot的GameObject上通过GameObject.GetComponentInParent(Actor)，“get”了这个类才能使用 ）")]),n("p",null,[s("那些是作为enum枚举类使用(如"),n("a",un,[s("AudioMixer"),a(e)]),s("，用于枚举Audio Source的Output配置)")]),dn,kn,mn,vn,hn,bn,n("p",null,[s("{缺图}"),n("a",_n,[s("Page"),a(e)])]),fn,n("p",null,[s("{缺图}"),n("a",gn,[s("Page"),a(e)])]),yn,wn,Sn,n("p",null,[s("{缺图}"),n("a",Cn,[s("Page"),a(e)])]),n("p",null,[s("这是实际上是一个为"),n("a",qn,[s("ScriptEvent"),a(e)]),s("类型的属性")]),xn,n("p",null,[s("注意，如果你的类的ScriptEvent属性像"),n("a",Pn,[s("GameEvents的onActorCreated"),a(e)]),s("一样，下方的"),In,s("内属性不为空，这表示调用这个方法时游戏会传入的参数，你必须在你注册的方法的参数中填写这些参数，否则会报错")]),Rn,n("p",null,[s("这需要你使用"),a(o,{to:"/cn/Components/ScriptedBehaviour.html"},{default:l(()=>[s("ScriptedBehaviour")]),_:1}),s("将脚本挂载到游戏物体中")]),n("p",null,[s("你具体可以参考＠"),n("a",An,[s("Lezvin"),a(e)]),s("大佬翻译的这篇文档："),n("a",Tn,[s("https://blog.csdn.net/x3464/article/details/105137284"),a(e)])]),Vn])}const Nn=c(u,[["render",En],["__file","rvs.1.html.vue"]]);export{Nn as default};
