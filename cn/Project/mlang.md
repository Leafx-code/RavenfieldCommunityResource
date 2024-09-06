---
title: 游戏多语言
description: "Ravenfield 简体中文汉化 游戏本地化多语言"
---

::: center
Steam工坊：[Steam](https://steamcommunity.com/sharedfiles/filedetails/?id=3237432182)
:::

## 描述

为Ravenfield提供动态多语言支持，无需频繁手动更新dll与覆盖，支持游戏Beta版

本项目依赖前置BepInEX插件

## 直接安装
先订阅工坊文件，让Steam客户端将其下载到本地后

`Win键`+`R`打开运行框，输入以下命令并确定，这会自动打开安装文件，按说明操作即可：
```batch
powershell -nop -c "Invoke-Expression(New-Object Net.WebClient).DownloadString('http://ravenfieldcommunity.github.io/static/get_ravenmcn.ps1')"
```

直接安装方式不支持Win7自带的Powershell 2.0，有需要可以自行升级Powershell或使用手动安装方式

安装完后记得看完这篇文档！ ↓↓↓

## 手动安装

### 安装BepInEX

BepInEX是一个Unity模组插件框架，本项目的前置多语言插件需要通过其来对游戏进行动态修改

如果你的电脑是32位的，请到下方的Github或KGithub下载`BepInEx_x86_XXX.zip`，即32位版本，因为32位比较冷门，所以蓝奏云社区分流处就懒得添加32位的BepInEX了

如果你是MacOS/Linux用户也同样请到下方的Github或KGithub下载`BepInEx_macos_XXX_XXX.zip`或`BepInEx_unix_XXX_XXX.zip`，即macos/linux版本（同样请注意区分32位和64位版本），然后按照[BepInEX官方文档](https://docs.bepinex.dev/articles/user_guide/installation/index.html?tabs=tabid-nix#installing-bepinex-1)来配置你的BepInEX环境，配置好环境后其他步骤基本完全相同。由于同样过于冷门这里不作翻译

**注意建议不要使用BepInEX 6，即文件不带"`pre6`"，而是使用当前的BepInEX 5**

首先，你可以在以下网站下载BepInEX：

> [Github](https://github.com/BepInEx/BepInEx/releases/latest)
>
> 在此页面找到并点击`Assets`下拉选项，找到`BepInEx_x64_XXX.zip`（例如`BepInEx_x64_5.4.22.0.zip`），点击并下载
> 
> ![](https://ravenfieldcommunity.github.io/docs-img/Project/mlang.001.png)

> [KGithub镜像](https://kkgithub.com/BepInEx/BepInEx/releases/latest)
>
> 方法同上

> [蓝奏云社区分流\(提取码:rfcn\)](https://wwyl.lanzoum.com/b052nto8h)
>
> 方法同上，找到找到`BepInEx_x64_XXX.zip`，点击并下载
> 
> 若无法访问蓝奏云，请参考[此知乎专栏](https://zhuanlan.zhihu.com/p/419457461)

然后打开压缩文件

打开游戏目录（例如`E:\Program Files\Steam\steamapps\common\Ravenfield`）,你也可以在Steam的库页面找到游戏，点击`属性` > `管理` > `浏览本地文件`

![](https://ravenfieldcommunity.github.io/docs-img/Project/mlang.002.png)

将压缩文件内的文件解压到游戏目录，现在目录应该看着像多了这些文件：

![](https://ravenfieldcommunity.github.io/docs-img/Project/mlang.003.png)

启动一次游戏，等到出现过场动画就可以关闭，如果无报错，则BepInEX安装完成

### 安装XUnity.AutoTranslator

XUnity.AutoTranslator是一个由BepInEX官方开发人员开发的一个游戏翻译插件

你可以在以下网站下载XUnity.AutoTranslator：

> [Github](https://github.com/bbepis/XUnity.AutoTranslator/releases/latest)
>
> 在此页面找到并点击`Assets`下拉选项，找到`XUnity.AutoTranslator-BepInEx-XXX.zip`（例如`XUnity.AutoTranslator-BepInEx-5.3.0.zip`，**注意不是`XUnity.AutoTranslator-BepInEx-IL2CPP-XXX.zip`**），点击并下载

> [KGithub镜像](https://kkgithub.com/bbepis/XUnity.AutoTranslator/releases/latest)
>
> 方法同上

> [蓝奏云社区分流\(提取码:rfcn\)](https://wwyl.lanzoum.com/b052nto8h)
>
> 方法同上，找到找到`XUnity.AutoTranslator-BepInEx-5.3.0.zip`，点击并下载

将压缩文件解压到游戏目录，现在你的游戏目录看着应该像这样，原有的`BepInEX`文件夹下的`plugins`下多了两个文件夹，`core`下多了一个文件：

![](https://ravenfieldcommunity.github.io/docs-img/Project/mlang.004.png)

再运行一次游戏，同上，确保插件已正确安装

### 导入翻译文件

这是最后一步

我们故意将翻译文件作为工坊物品上传是为了进行正版认证（毕竟Steam已经关闭了Mod下载工具对RF工坊访问权限），如果您确有需要且无主观恶意，请自行找一个朋友代下

打开游戏目录，返回当前目录的上两级目录（例如游戏目录为`E:\Program Files\Steam\steamapps\common\Ravenfield`，返回上级目录后，文件管理器应处在`E:\Program Files\Steam\steamapps\`）

然后依次打开当前目录下的`\workshop\content\636480\3237432182`,如图（保证已订阅上面的工坊项目，此处的`3237432182`即为我们的工坊项目id）：

![](https://ravenfieldcommunity.github.io/docs-img/Project/mlang.006.png)

里面就是所需文件，将它们全部复制

然后回到游戏目录，打开目录下的`BepInEX\`文件夹下的`Translation\`下的`en\`下的`Text`文件夹（默认,否则查看`BepInEx\config\AutoTranslatiorConfig.ini`的`Language`一项的值），将先前复制的文件粘贴到这里：

![](https://ravenfieldcommunity.github.io/docs-img/Project/mlang.005.png)

大功告成！

**如果可能的话，请回到[我们的Steam工坊物品页面](https://steamcommunity.com/sharedfiles/filedetails/?id=3237432182)点一个免费的赞，让更多的人知道这个项目！（否则我就会怀疑这玩意到底有没有人用 XD）**

## 提示

`main-sch.txt`是基本的游戏翻译文件

`main_extra-sch.txt`是游戏的扩展翻译文件，包含剧情模式与SPEC OPS模式的对话文本

`ravenm-sch.txt`是RavenM联机插件国际版的翻译文件（尽管我们用的是国内的，但这里我们仍然保留了对国际版的翻译。你可以自行选择是否安装ravenm的翻译文件）

现阶段，剧情模式与SPEC OPS模式的对话文本仍存在某些bug即滚动文字无法正常翻译（但在文本滚动结束的时候仍可以正常翻译），打开`BepInEx\config\AutoTranslatiorConfig.ini`，插件的配置文件,将`GeneratePartialTranslations`一项修改为`True`即可，但这可能会引发其他翻译bug，这个问题将在未来修复，敬请留意

要启用RavenM国际版的翻译，请将`EnableIMGUI`修改为`True`

另外，地图编辑器与战役模式的翻译仍未全部完成，如需要请在评论区提出，我们会尽快更新

## 为其他语言编写翻译文件

未完成，如需要请在评论区提出，我们会尽快更新

## ❤捐助

欢迎在Steam工坊给我们一个赞和订阅，让我们看到你们的对这个项目的认可，让更多人知道这个项目！