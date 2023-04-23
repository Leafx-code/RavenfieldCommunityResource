(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{399:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_1-0-环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-环境配置"}},[t._v("#")]),t._v(" -1.0 环境配置")]),t._v(" "),s("p",[s("strong",[t._v("此处不再详细说明，如果你有看过相关编程语言的教程，对下面的事情你应该会很快上手")])]),t._v(" "),s("p",[s("strong",[t._v("详情请参考官方文档")])]),t._v(" "),s("ol",[s("li",[t._v("安装VSCode")]),t._v(" "),s("li",[t._v("安装Chinese-Simple语言扩展包")]),t._v(" "),s("li",[t._v("安装vscode-lua扩展")]),t._v(" "),s("li",[t._v("安装C#扩展")]),t._v(" "),s("li",[t._v("安装EditorConfig for VS Code扩展")]),t._v(" "),s("li",[t._v("配置工作区的.vscode\\settings.json为：")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"files.associations"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"*.txt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lua"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"files.exclude"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"**/*.meta"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[t._v("配置VSCode为Unity的外部编辑器")])]),t._v(" "),s("h1",{attrs:{id:"_0-0-想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-0-想"}},[t._v("#")]),t._v(" 0.0 想！")]),t._v(" "),s("p",[t._v("现在我们先想一下我们的Mutators有什么功能")]),t._v(" "),s("p",[t._v("例如我们本次的示例Mutators载具快速修复，他应该有：")]),t._v(" "),s("ul",[s("li",[t._v("基本的修复载具，每次修复35%")]),t._v(" "),s("li",[t._v("有冷却时间")]),t._v(" "),s("li",[t._v("防止修复载具后载具健康超过最大值")]),t._v(" "),s("li",[t._v("防止通过暂停游戏跳过修复时间")]),t._v(" "),s("li",[t._v("显示修复状态与健康")]),t._v(" "),s("li",[t._v("有音效")]),t._v(" "),s("li",[t._v("可以使用附加Alt键防止键位冲突")]),t._v(" "),s("li",[t._v("修复时不可操作载具(载具内有队友时除外)")])]),t._v(" "),s("p",[t._v("然后我们再简单想一下脚本的运行逻辑与可以供玩家在游戏中调整的数值，方便实际敲代码(可以跳过)")]),t._v(" "),s("p",[t._v("在这之前，如果您不了解诸如Start()以及实际开发中可以调用的方法，请自行查阅RCR的"),s("RouterLink",{attrs:{to:"/Documents/Ravenscrpit/"}},[t._v("RS文档")]),t._v("（或Unity文档，基本通用），此处不再赘述")],1),t._v(" "),s("p",[t._v("在本实例中，公开的可以供玩家在游戏中调整的数值：冷却时间、修复时间、激活键、是否使用Alt键、每次修复载具最大健康的%")]),t._v(" "),s("p",[t._v("计划的运行逻辑：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Start() > local化自定义选项与本地变量(如果数值不符合要求或为空则填充默认数值)\n\nUpdate() > 当游戏未暂停时冷却计时器累加时间到变量self.deltaTime；\n如果玩家按下激活键且不处于冷却状态且驾驶载具中，则将变量self.Repairing变量设置为Ture，否则打印报错信息到屏幕；\n当self.Repairing为Ture时且游戏未暂停时，修复时间计时器累加时间到变量self.repairingDeltaTime并播放循环音效，打印修复剩余时间到屏幕，当载具只有玩家一个人时阻止玩家操作载具；\n当self.rpairingDeltaTime大于玩家设置的修复时间，则修复载具的%，并打印修复的健康到屏幕，重置所有计时器，停止播放音效，重新允许玩家操作载具\n")])])]),s("p",[t._v("现在我们可以正式开始了!")]),t._v(" "),s("h1",{attrs:{id:"_1-0-unity内简单配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-unity内简单配置"}},[t._v("#")]),t._v(" 1.0 Unity内简单配置")]),t._v(" "),s("p",[t._v("在打代码之前，我们先在Unity配置一下Mutators的预制件()的Mod导出设置")]),t._v(" "),s("p",[t._v("场景内新建一个空物体，添加ScriptedBehaviour组件，游戏中这个物体下的所有东西都会被实例化")]),t._v(" "),s("p",[t._v("新建一个TXT(Ravenscrpit)文件，把这个文件托入组件内的source，Behaviour处填写TXT的文件名")]),t._v(" "),s("p",[t._v("预制件化这个物体，在Mutator Content Mod配置")]),t._v(" "),s("h1",{attrs:{id:"_1-1-撸码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-撸码"}},[t._v("#")]),t._v(" 1.1 撸码")]),t._v(" "),s("p",[t._v("首先您需要明白如何为脚本对应找到合适的Api:\n提取功能中的关键字，如“载具” > Vehicle\n然后到文档的Api索引查找相关方法、member，如我们可以在Player这个类中找到可以获取玩家活动载具的menber Player.Actor.activeVehicle\n如果找不到合适的方法，可以尝试关键词搜索，如果还找不到。那就是乌鸦没写估计，只能另辟蹊径")]),t._v(" "),s("p",[t._v("然后复制一份")]),t._v(" "),s("p",[t._v("您最后的成品应该看着像这样")]),t._v(" "),s("div",{staticClass:"language-lua extra-class"},[s("pre",{pre:!0,attrs:{class:"language-lua"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("behaviour")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"QuickRepair"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--注册Ravenscript行为")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--以下的变量均为局部变量，无法从外界访问")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" deltaTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--初始化冷却计时器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" repairDeltaTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--初始化修理时间计时器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" repairTime  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--初始化修理所需时间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" colddown\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" isRepairing    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('--初始化"是否正在维修"状态')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" oldVehicleHealth   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--初始化未维修前的载具健康")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" keybind   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--初始化激活键")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" useAlt   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('--初始化"是否使用Alt键"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" repairRange    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--初始化要维修载具健康的百分比")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" mutators     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--初始化与脚本绑定的Mutators")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" isRuning     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--初始化Mutator状态")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" audioSource\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" audioSourceVolume\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" QuickRepair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" isRuning "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Ture "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" useAlt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Ture "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--A")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" QuickRepair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Listener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" Input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("KeyCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" Input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetKeyDown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keybind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" deltaTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" colddown "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n                            isRepairing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ture\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--B")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" QuickRepair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Listener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" Input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetKeyDown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keybind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" deltaTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" colddown "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n                        isRepairing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ture\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("      \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" QuickRepair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--在进入游戏游戏时运行一次，用于将游戏设置载入变量")]),t._v("\n    coroutine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yield")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WaitForSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--延迟运行确保mutators设置加载成功")]),t._v("\n    mutators "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ScriptedBehaviour"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mutator\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" mutators "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--如果无法读取设置，则报错并禁用Mutators")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[QuickRepair]Couldn\'t find mutator setting,check mod plz."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        isRuning "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Flase\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--如果可以读取设置，则导入设置")]),t._v("\n        isRuning "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ture\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" mutators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConfigurationFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("epairTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n            repairTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            repairTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mutators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConfigurationFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("repairTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" mutators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mutators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConfigurationString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keybind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n            keybind "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'`'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            keybind "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mutators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConfigurationString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keybind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        audioSource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("audioSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GameObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GetComponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("AudioSource"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        audioSourceVolume "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" audioSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AudioSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("volume\n        audioSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AudioSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("volume "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        useAlt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mutators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConfigurationBool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("useAlt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        repairRange "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mutators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConfigurationRange")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("repairRange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" QuickRepair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" isRuning "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Ture "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" GameManeger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isPaused "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Flase "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n                    deltaTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deltaTime  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--计时器累加时间")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Listener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" isRepairing "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeVehicle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n                            Overlay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ShowMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[QuickRepair]No vehicle is active!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                            isRepairing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Flase\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n                        repairDeltaTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deltaTime\n                        Overlay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ShowMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[QuickRepair]Remaining"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" repairTime"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("repairDeltaTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeVehicle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("team "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--当载具只有玩家一个人时阻止玩家操作载具")]),t._v("\n                            Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("allowMouseLook "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Flase\n                            Screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UnlockCursor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" repairDeltaTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" repairTime "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n                        oldVehicleHealth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeVehicle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("health\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeVehicle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("health "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeVehicle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxHealth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" repairRange "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeVehicle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxHealth "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n                            Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeVehicle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("health "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeVehicle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxHealth\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n                            Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeVehicle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Repair")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeVehicle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxHealth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" repairRange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        Overlay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ShowMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[QuickRepair]Success,Repaired"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeVehicle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("health"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("oldVehicleHealth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeVehicle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("health"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        isRepairing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Flase\n                        deltaTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n                        repairDeltaTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n                        Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeVehicle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isDead "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Flase\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("allowMouseLook "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Flase "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n                            Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("allowMouseLook "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ture\n                            Screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LockCursor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isDead "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Ture "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n                        Overlay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ShowMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[QuickRepair]Player is died!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        isRepairing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Flase\n                        deltaTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeVehicle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isDead "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Ture "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n                        Overlay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ShowMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[QuickRepair]Vehicle is  too bad,can\'t repair!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        isRepairing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Flase\n                        deltaTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v(" \n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);