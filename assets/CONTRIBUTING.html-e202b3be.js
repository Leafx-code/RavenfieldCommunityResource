import{_ as t,X as o,Y as p,Z as n,$ as a,a0 as e,a1 as c,E as l}from"./framework-77bf7967.js";const i={},d=n("h1",{id:"项目维护帮助",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#项目维护帮助","aria-hidden":"true"},"#"),a(" 项目维护帮助")],-1),u=n("p",null,"欢迎帮助我们维护RavenfieldCommunity\\docs（以下简称docs）社区客制化支持项目！ 在开始之前，您需要先阅读维护注意事项",-1),r=n("h2",{id:"维护注意事项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#维护注意事项","aria-hidden":"true"},"#"),a(" 维护注意事项")],-1),k={href:"/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://ravenfieldgame.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/RavenfieldCommunity/docs/blob/main/LICENSE",target:"_blank",rel:"noopener noreferrer"},v=n("blockquote",null,[n("p",null,"本项目为开源项目，不接受任何形式的催单和索取行为，更不容许存在付费内容")],-1),h={href:"https://zh.wikipedia.org/zh-cn/Markdown",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/RavenfieldCommunity/docs/graphs/contributors",target:"_blank",rel:"noopener noreferrer"},_={href:"/OpenSource%20Mod",target:"_blank",rel:"noopener noreferrer"},x={href:"/Resource",target:"_blank",rel:"noopener noreferrer"},f=c(`<h2 id="index、路径结构、命名规范" tabindex="-1"><a class="header-anchor" href="#index、路径结构、命名规范" aria-hidden="true">#</a> Index、路径结构、命名规范</h2><h3 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> Index</h3><p>文档目录索引应以Markdown无序列表语法写在/cn、/en下（包括子文件夹）的README.md中，使用缩进标识（四个空格）文档的层级，并包括一下元素：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> {title}</span>
<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">{Index1.name}</span>](<span class="token url">{Index1.path}</span>)</span> {Index1.transName}
<span class="token list punctuation">-</span> {N Type}
    <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">{Index2.name}</span>](<span class="token url">{Index2.path}</span>)</span> {Index2.transName}
{以下省略}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>{title}</code>分为多个部分，分别填充以下内容（省略Documents、in-GAME）：</p><table><thead><tr><th>目录名</th><th>在索引中替换为</th></tr></thead><tbody><tr><td>Components</td><td>组件</td></tr><tr><td>Weapon</td><td>武器</td></tr><tr><td>Ravenscrpit</td><td>Ravenscrpit</td></tr><tr><td>Tutorials</td><td>RFCreator Project</td></tr></tbody></table><p>如\\Components\\README.md的<code>{title}</code>，应替换为“组件”</p><p>每个<code>{Index*.name}</code>都应以对应的.cs脚本文件名或Lua table类名填写，如“DamageZone.cs”为&quot;<code>DamageZone</code>&quot;，文件名也为&quot;<code>DamageZone.md</code>&quot;</p><p>每个<code>{Index*.path}</code>都填充对应.md的绝对路径，如“<code>/Documents/Components/Vehicle/VehicleContentMod.md</code>”，不应使用local修饰，如“<code>.\\VehicleContentMod.md</code>”是不被允许的</p><p>每个<code>{Index*.transName}</code>填充<code>{Index*.name}</code>的译名</p><p>每个<code>{N Type}</code>都应以对应在RFTools\\Scrpits里的父文件夹名填写（顶级的父文件夹名可省略），如“..\\Visual”为&quot;<code>Visual</code>&quot;</p><p>示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 组件</span>
<span class="token title important"><span class="token punctuation">##</span> 载具</span>
<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">VehicleContentMod</span>](<span class="token url">./VehicleContentMod.md</span>)</span> 载具导出配置
<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">Vehicle</span>](<span class="token url">./Vehicle.md</span>)</span> 载具
<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">Seat</span>](<span class="token url">./Seat.md</span>)</span> 载具座位
<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">Plane</span>](<span class="token url">./Plane.md</span>)</span> 飞机
<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">Helicopter</span>](<span class="token url">./Helicopter.md</span>)</span> 直升机
<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">CarWheel</span>](<span class="token url">./CarWheel.md</span>)</span> 车轮
<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">Boat</span>](<span class="token url">./Boat.md</span>)</span> 船
<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">ArcadeCar</span>](<span class="token url">./ArcadeCar.md</span>)</span>
<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">AnimationDrivenVehicle</span>](<span class="token url">./AnimationDrivenVehicle.md</span>)</span>
<span class="token list punctuation">-</span> Weapon 车载武器
    <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">AutoRepairVehicleWeapon</span>](<span class="token url">./AutoRepairVehicleWeapon.md</span>)</span> 载具修复武器
    <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">CarHorn</span>](<span class="token url">./CarHorn.md</span>)</span>
    <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">Mortar</span>](<span class="token url">./Mortar.md</span>)</span>
    <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">MountedStabilizedTurret</span>](<span class="token url">./MountedStabilizedTurret.md</span>)</span>
    <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">MountedTurret</span>](<span class="token url">./MountedTurret.md</span>)</span>
    <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">MountedWeapon</span>](<span class="token url">./MountedWeapon.md</span>)</span>
    <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">TankTurret</span>](<span class="token url">./TankTurret.md</span>)</span>
{以下省略}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路径结构" tabindex="-1"><a class="header-anchor" href="#路径结构" aria-hidden="true">#</a> 路径结构</h3><p>纯英文，开头大写，只能包括连字符“<code>-</code>”,文件夹名参考<code>{title}</code></p><h3 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范</h3><p>参考<code>{Index*.name}</code></p><h2 id="组件类文档编写规范" tabindex="-1"><a class="header-anchor" href="#组件类文档编写规范" aria-hidden="true">#</a> 组件类文档编写规范</h2><p>包括以下元素：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> {title}</span>
<span class="token title important"><span class="token punctuation">##</span> 描述</span>
{description}
<span class="token title important"><span class="token punctuation">##</span> 用法</span>
{usage}
<span class="token title important"><span class="token punctuation">##</span> 注释</span>
{note}
<span class="token title important"><span class="token punctuation">##</span> 变量</span>
<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> 名称 </span><span class="token punctuation">|</span><span class="token table-header important"> 类型 </span><span class="token punctuation">|</span><span class="token table-header important"> 描述 </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">-----------</span> <span class="token punctuation">|</span> <span class="token punctuation">-----------</span> <span class="token punctuation">|</span> <span class="token punctuation">-----------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> {var.name} </span><span class="token punctuation">|</span><span class="token table-data"> {var.type} </span><span class="token punctuation">|</span><span class="token table-data"> {var.description} </span><span class="token punctuation">|</span>
</span></span>{以下省略}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>{title}</code>与该组件文档相对应的<code>{Index*.name}</code>一致，无需其他字符</p><p><code>{description}</code>填写对这个组件的描述，如“用于配置载具导出”，如果是由其他cs类派生而来的应注明<code>从[{Index*.name}]({Index*.path})类派生</code>。</p><p><code>{usage}</code>填写如何使用这个组件，例如“套用在一个空物体上”或“武器的最顶层中附加”等</p><p><code>{note}</code>填写一些开发时可用的技巧或注意事项</p><p><code>{var.name}</code>填写.cs脚本中的可调整项（变量），应与在脚本中未被Unity格式化的名称一致，如“<code>banlanceDamage</code>”</p><p><code>{var.type}</code>填写变量类型，如“<code>gameObject</code>”、“<code>float</code>”。当变量类型是由其他数据类型派生而来时应注明，如“<code>AiType</code>”类是由emun类派生而来的，则<code>{var.type}</code>中应填写“<code>emun.AiType</code>”</p><p><code>{var.description}</code>填写对这个变量的说明、作用，填写的内容请尽量详细可靠。当这里为下拉列表或emun时，请填写对选项的说明，如“<code>（Auto=自动、None=无、Handgun=手枪、RifleSmall=小步枪、RifleLarge=大步枪、Launcher=炮、Tank=坦克）</code>”</p><p>注意：</p><blockquote><p>当其上任何一个内容引用了任何一个其他的RFTools的组件时，应为这个字符串设置一个超链接，方便他人快速访问。如<code>{var.type}</code>中填写的“<code>List&lt;Seat&gt;</code>”时使用了一个组件，则应改为“<code>List&lt;[Seat](/Documents/Components/Vehicle/Seat.md)&gt;</code>”。其他地方同理。</p></blockquote><blockquote><p>当您不知道一个项例如<code>{var.description}</code>应填写什么时，应在这里填充“<code>unknown{*}</code>”，便于其他贡献者找到未知项，而不是填写“未知”、“不知道”。其中“<code>unknown{*}</code>”中的“<code>*</code>”可以替换为您对这个项的猜测，便于其他贡献者找到这个项应填写什么。</p></blockquote><blockquote><p>当某一栏不用填写什么例如<code>## 注释</code>下的<code>{note}</code>时，您可以填写“<code>无</code>”，但不能删除那一栏文本。</p></blockquote><p>示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Vehicle</span>

<span class="token title important"><span class="token punctuation">##</span> 描述</span>

载具的基本组成组件

<span class="token title important"><span class="token punctuation">##</span> 用法</span>

套用在场景载具物体最顶层物体上

<span class="token title important"><span class="token punctuation">##</span> 注释</span>

无

<span class="token title important"><span class="token punctuation">##</span> 变量</span>
<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> 名称 </span><span class="token punctuation">|</span><span class="token table-header important"> 类型 </span><span class="token punctuation">|</span><span class="token table-header important"> 描述 </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">-----------</span> <span class="token punctuation">|</span> <span class="token punctuation">-----------</span> <span class="token punctuation">|</span> <span class="token punctuation">-----------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> name </span><span class="token punctuation">|</span><span class="token table-data"> string </span><span class="token punctuation">|</span><span class="token table-data"> 载具名称 </span><span class="token punctuation">|</span><span class="token table-data"> </span>
<span class="token punctuation">|</span><span class="token table-data"> seats </span><span class="token punctuation">|</span><span class="token table-data"> List&lt;<span class="token url">[<span class="token content">Seat</span>](<span class="token url">/Documents/Components/Vehicle/Seat.md</span>)</span>&gt; </span><span class="token punctuation">|</span><span class="token table-data"> 座位 </span><span class="token punctuation">|</span>
</span></span>{以下省略}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编程语言类文档编写规范" tabindex="-1"><a class="header-anchor" href="#编程语言类文档编写规范" aria-hidden="true">#</a> 编程语言类文档编写规范</h2><p>包括以下元素：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> {title}</span>
<span class="token title important"><span class="token punctuation">##</span> 描述</span>
{description}
<span class="token title important"><span class="token punctuation">##</span> 属性</span>
<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> 属性 </span><span class="token punctuation">|</span><span class="token table-header important"> variable类型 </span><span class="token punctuation">|</span><span class="token table-header important"> 类型 </span><span class="token punctuation">|</span><span class="token table-header important"> 描述 </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">-----------</span> <span class="token punctuation">|</span> <span class="token punctuation">-----------</span> <span class="token punctuation">|</span> <span class="token punctuation">-----------</span> <span class="token punctuation">|</span> <span class="token punctuation">-----------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> {member.name} </span><span class="token punctuation">|</span><span class="token table-data"> {member.varType} </span><span class="token punctuation">|</span><span class="token table-data"> {member.type} </span><span class="token punctuation">|</span><span class="token table-data"> {member.description} </span><span class="token punctuation">|</span>
</span></span><span class="token title important"><span class="token punctuation">##</span> 事件</span>
<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> Event </span><span class="token punctuation">|</span><span class="token table-header important"> 描述 </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">-----------</span> <span class="token punctuation">|</span> <span class="token punctuation">-----------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> {event.name} </span><span class="token punctuation">|</span><span class="token table-data"> {event.description} </span><span class="token punctuation">|</span>
</span></span>
<span class="token title important"><span class="token punctuation">##</span> 方法</span>
<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> Method </span><span class="token punctuation">|</span><span class="token table-header important"> 描述 </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">-----------</span> <span class="token punctuation">|</span> <span class="token punctuation">-----------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> {method.name}( **{value} ) </span><span class="token punctuation">|</span><span class="token table-data"> {method.description} </span><span class="token punctuation">|</span>
</span></span>
<span class="token title important"><span class="token punctuation">##</span> 示例</span>

<span class="token title important"><span class="token punctuation">###</span> {Example1}</span>
···lua
{Example1.code}
···
{以下省略}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>{title}</code>与该table文档相对应的<code>{Index*.name}</code>一致，无需其他字符</p><p><code>{description}</code>填写对这个table的描述，如“RS里的基础table，所有的AI与Player都包含这个table”。</p><p><code>{member.name}</code>填写属性名，如“<code>Actor.team</code>”中的“<code>team</code>”</p><p><code>{member.varType}</code>填写变量类型，如const、static、一般的，实际填写“<code>const</code>”、“<code>static</code>”、“<code>static</code>”。</p><p><code>{member.type}</code>填写数据类型，如“<code>munber</code>”、“<code>Team</code>”、“<code>string</code>”。</p><p><code>{member.description}</code>填写对这个变量的说明、作用，填写的内容请尽量详细可靠。</p><p><code>{event.name}</code>、<code>{event.description}</code>暂未定义</p><p><code>{method.name}( **{value} )</code>填写lua方法，其中“<code>{method.name}</code>”替换为方法名，“<code>**{value}</code>”替换为输入的数组，可留空。若文档中有其的示例代码片段，应设置超链接，如“<code>[ShowText](./Overlay#示例##Overlay.ShowText)</code>”</p><p><code>{method.description}</code>填写对这个方法的描述，包括输入值的类型的描述，输出结果的类型与描述，如“<code>用于弹出文本。\`string\`（string）为\`显示的文本、\`time\`（munber）为滞留时间</code>”。</p><p>在<code>### {Example*}</code>机器下的内容中：</p><blockquote><p><code>{Example*}</code>填写示例代码片段的标题，如“<code>Overlay.ShowText()</code>”</p></blockquote><blockquote><p><code>{Example1.code}</code>填写代码片段，应包含注释。</p></blockquote><p>注意：</p><blockquote><p>当其上任何一个内容引用了任何一个其他的table时，应为这个字符串设置一个超链接，方便他人快速访问。如<code>{var.type}</code>中填写的“<code>List&lt;Seat&gt;</code>”时使用了一个组件，则应改为“<code>List&lt;[Seat](/Documents/Components/Vehicle/Seat.md)&gt;</code>”。其他地方同理。</p></blockquote><blockquote><p>当您不知道一个项例如<code>{method.description}</code>应填写什么时，应在这里填充“<code>unknown{*}</code>”，便于其他贡献者找到未知项，而不是填写“未知”、“不知道”。其中“<code>unknown{*}</code>”中的“<code>*</code>”可以替换为您对这个项的猜测，便于其他贡献者找到这个项应填写什么。</p></blockquote><blockquote><p>当某一栏不用填写什么例如<code>## 示例</code>下的<code>{Example*}</code>时，您可以填写“<code>无</code>”，但不能删除那一栏文本。</p></blockquote><p>示例：</p><blockquote><p>暂缺</p></blockquote><h2 id="开源模组上传要求" tabindex="-1"><a class="header-anchor" href="#开源模组上传要求" aria-hidden="true">#</a> 开源模组上传要求</h2><blockquote><p>！！！请勿上传，未启用该功能</p></blockquote><h2 id="文档commit提交" tabindex="-1"><a class="header-anchor" href="#文档commit提交" aria-hidden="true">#</a> 文档Commit提交</h2><p>应先提交至开发分支（DEV-BRANCHES），并填写好Commit的详细信息（包括修改、增添的大概，方便其他贡献者），确保GPG签名有效，提交后等待管理员手动merge或Actions自动merge至稳定分支。不要fork或新建一个分支后向我们提交pull resquests</p><h2 id="issue与社群讨论" tabindex="-1"><a class="header-anchor" href="#issue与社群讨论" aria-hidden="true">#</a> Issue与社群讨论</h2><p>对文档内容存在<strong>不理解</strong>之处、以及发现文档内容有所<strong>缺失</strong>或<strong>错误</strong>，可直接提出，强烈建议以发 <strong>Issue</strong> 的形式参与用户反馈，并希望关于本项目的各种交流都是<strong>公开进行</strong>的，因为这样才可以保证关键信息的一致性。</p><p>由于本项目属于文档型项目，故不设置 Issue 模板，同时允许中英文标题，但提交 Issue 请遵守以下原则：</p>`,61),C=n("li",null,[n("p",null,"标题言简意骇，说明欲提出的问题要点；切勿使用表意含糊不清或索取性的标题")],-1),w=n("li",null,[n("p",null,"Issue 正文应对问题进行尽可能详细的描述，展开并聚焦有关的信息")],-1),q={href:"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/tangx/Stop-Ask-Questions-The-Stupid-Ways",target:"_blank",rel:"noopener noreferrer"},R=n("p",null,"你还可以通过加入社群的方式参与讨论（包括但不限于本项目",-1),T=n("blockquote",null,[n("p",null,"！！！未实装！！！")],-1);function y(S,E){const s=l("ExternalLinkIcon");return o(),p("div",null,[d,u,r,n("blockquote",null,[n("p",null,[n("a",k,[a("RavenfieldCommunity\\docs"),e(s)]),a(" 项目（简称RCR）是一个仅用于学习研究、社区开源、公益性质的"),n("a",m,[a("Ravenfield"),e(s)]),a("文档，基于 "),n("a",b,[a("CC-BY-NC 2.0"),e(s)]),a(' (除被另外声明的内容)协议开源，禁止一切商业使用，如需转载请注明"Github@RavenfieldCommunity"')])]),v,n("blockquote",null,[n("p",null,[a("该项目使用 "),n("a",h,[a("Markdown"),e(s)]),a(" 语法进行文档书写，不要滥用vuepress的拓展markdown语法")])]),n("blockquote",null,[n("p",null,[a("请上传内容之前检查版权合法性，您将您的内容上传至RCR时即意味着您同意以统一在"),n("a",g,[a("Contributors"),e(s)]),a("署名的形式（除"),n("a",_,[a("/OpenSource Mod"),e(s)]),a("与"),n("a",x,[a("/Resource"),e(s)]),a("内被另外声明的内容）授权RCR项目使用与分发您的内容")])]),f,n("ol",null,[C,w,n("li",null,[n("p",null,[a("提出问题时注意 "),n("a",q,[a("提问的智慧"),e(s)]),a(" 并且 "),n("a",I,[a("别像弱智一样提问"),e(s)])])])]),R,T])}const V=t(i,[["render",y],["__file","CONTRIBUTING.html.vue"]]);export{V as default};