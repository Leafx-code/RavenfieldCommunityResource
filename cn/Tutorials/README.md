# RFCreator Project

## 前言
Hi~（＾∀＾●）ﾉｼ

欢迎来到这个项目！

这个项目旨在填充官方与社区在客制化教程方面的空白，帮助您写出自己的第一个ＭＯＤ！！

也许这对您有一些困难，但

骚年哟，相信你自己，为你的热爱启程吧！o(*≧▽≦)↗

## 在启程之前...
在启程之前，这是您需要的掌握一些技能，**您必须至少先看一遍教程才能确保您MODDING的顺利，RFCreator Project不是零基础教程**：

### 你必须掌握的技能
#### Unity开发
::: details 可以代表这项技能的软件
[Unity Editor](https://unity.com/releases/editor/archive) （中国特供版爬）

**要求2020.3版的最新小版本**
:::

::: details 描述
这是这个游戏的的游戏引擎，也是这个系列的核心，但是您不必完全掌握，您只需了解Unity的核心操作即可（甚至不用完全记住，有些东西学了一辈子都用不到），您可以去查找相关速通教程（5小时内为佳），然后在实际开发中不断提升能力
:::

::: details 学习路线（仅参考）
初阶 [Tutorials1(速通请跳P1\~8、11\~17、20\~31、33\~61)](https://www.bilibili.com/video/BV1gQ4y1e7SS) => 

中高阶 [Unity Learn(Unity官方课程，支持中文翻译)](https://learn.unity.com/) [Unity文档](https://docs.unity.cn/cn/2020.3/Manual/index.html)
:::
#### 模型、动画制作

::: details 可以代表这项技能的软件
[Blender](https://mirrors.aliyun.com/blender/release/)（如果你想在这个游戏做MOD就必须用Blender😡）
:::

::: details 描述
这项技能我们同样无需完全掌握，速通即可，然后在实际项目中不断提升能力（除非你能找到美术资源，版权的话一般来说只要不盈利都是允许的。不提倡高模，模型面数最好低于8万，推荐使用Blender版本2.93）
:::

:::: details 学习路线（仅参考）
初阶 [建模(速通请跳P1\~23)](https://www.bilibili.com/video/BV1qq4y1772P) [动画(速通请跳P1\~18)](https://www.bilibili.com/video/BV13y4y1H75J)

中阶 [动画(速通请跳P1\~18)](https://www.bilibili.com/video/BV13y4y1H75J) [硬表面建模(速通请看完)](https://www.bilibili.com/video/BV14A411n76J)
:::warning
**请不要花费大量时间学习Blender的材质节点，了解材质槽等基础概念即可，Unity的材质并不与Blender兼容，有这时间不如学一下Unity的Shader**
:::
::::

:::tip
无论您使用何种版本的Blender（2.79b除外），都请使用乌鸦的[FBX导出预设(*.blend不兼容)](https://steamcommunity.com/sharedfiles/filedetails/?id=2690680489)！

或者更进一步，在Blender导出fbx模型时使用[Better FBX Importer & Exporter插件](https://blendermarket.com/products/better-fbx-importer--exporter)以最大化兼容性(付费，自行搜索破解版)
:::


### 你可以额外掌握的技能

#### 音频制作
::: details 可以代表这项技能的软件
[Audition](www.adobe.com)、[Audacity](https://www.audacityteam.org/)
:::

::: details 描述
用于剪辑音效，同样速通
::: 

#### C#、Lua(Ravenscript基于此)

::: details 可以代表这项技能的软件
[VS Code](https://code.visualstudio.com/)、[JetBrains' apps](www.jetbrains.com)（Visual studio还是别了）
::: 

::: details 描述
除非你不想干高级一点的MOD开发，不然就要学，可速通（至少包括基本语法、简单理解面向对象、会打Helloworld以及一部分实例）
:::
        
::: details 学习路线（仅参考）
初阶（速通级，需要一定编程基础） [C#](https://www.bilibili.com/video/BV1sy4y1u7cw)、[Lua](https://www.bilibili.com/video/BV1vf4y1L7Rb)

中高阶 [Unity文档(毕竟万物基于Unity，除了编程语言不同，开发逻辑完全一致)](https://docs.unity.cn/cn/2020.3/Manual/) [菜鸟教程](https://www.runoob.com/)
:::
        
:::tip
相比C#，我们更建议学Lua，它相比C#更友好且目前在RF开发Mod写脚本用得更多的还是Lua(Ravenscript)

最重要的一点是，**从EA27开始，游戏开始限制外来C#脚本的导入**，RFTools在实际C#开发中缺少API支持，开发环境不友好，游戏导入机制极其*B，导致开发体验糟糕

因此，除非你想使用[BepInEx](https://bepinex.dev)这类高级UnityMOD开发框架，否则不建议C#
:::

**看不懂可以硬着头皮看，实际开发过程有不会可以重新回来看相应内容，没有谁在实操中可以直接一下记下所有技能点**

**多看RFTools里的官方预制件**

## 文档正文

<= 在侧边栏

## 其他

**Ravenfield官方支持页面**：[链接](http://ravenfieldgame.com/modding.html)

**Ravenscript与Unity文档**：[1](http://ravenfieldgame.com/ravenscript/)、[2](https://docs.unity3d.com/cn/2020.3/Manual/)

**官方Discord（纯英文!）**：[Discord链接](http://discord.gg/ravenfield)

**非官方QQ频道号**：9pmc179t29

**非官方QQ群**：771055407（modder几乎没有但能保证回答你的问题并提供干净的环境）、672972617（modder多但是不是专业群） 

## 附:如何更聪明地问他人问题
原文链接：https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way

！！！萌 新 ＭＯＤＤＥＲ特 供！！！

希望能帮到你！

1. 在开始询问他人之前，尽可能嘗試通过其他渠道來找到答案，如搜索引擎、论坛已有文章，不要问不该问的SB问题（自己明明可以解决非要问别人），如：

“我该怎样安装Unity？”“我找不到Unity”

2. 不要使用过度的修饰词，例如：

“救命！！！”“救救孩子！！”“緊急”

3. 仔細、清楚地描述问题而并非猜測，讲明需求，为他人提供准确的线索与文件，以帮助他人复现问题。例如：

SB问的问题：“救命！我的Unity无法启动！我怀疑电脑出了问题...”（你都怀疑了你自己就不会去查吗？？？而且什么信息也没提供...）

聪明人问的问题：“我的Unity在（什么情况下）...无法启动，报错‘Couldn't find main.dll’，这是出现错误时的日志文件[文件]，运行环境与程序版本是Win10 22H2 64bit、2022.3.23f1，我尝试过重装Unity与sfc /SCANNOW但没有用，我该如何修复它？”

因此，描述问题请包括：发生问题时的环境与行为、问题出现时的报错信息与日志、**工程文件**，程式信息、尝试过的方法、解决问题的具体要求

4. 別用低聲下氣取代你真正該做的事，尤其是伴隨著與實際問題含糊不清的描述時这更令人反感

（虽然我好像就是这样...当然礼貌性的用语还是可以的！)

5. 多给创意工坊的内容一个赞！！！

**这有助于维护良好的社区氛围**