+++
date = '2025-02-02T17:11:23+08:00'
draft = false
title = 'Arch Linux Hyprland设置Windows动态鼠标指针'
comments = true
tags = ['Arch Linux', 'Linux', '鼠标', 'Hyprland', '美化']
+++

# 序

最近看Windows的桃香指针有些馋

所以我便开始寻思

能不能在Arch Linux下也整一个?

# 准备工作

1. 首先你当然要有Hyprland,因为我们今天只说Hyprland的设置方法
2. 下载桃香指针包 [河原木桃香](https://pan.quark.cn/s/5a227ef72dea#/list/share/3520010f3d174b889d81dab8c6163303-%E6%B2%B3%E5%8E%9F%E6%9C%A8%E6%A1%83%E9%A6%99/f855031dc0fe494aba62c3e6712b4a5d-%E9%BC%A0%E6%A0%87%E6%8C%87%E9%92%88)


# 设置方法

为了在Linux下使用Windows指针主题,需要将Windows的指针格式[ani,cur]转换为`xcur`格式

要这么做,我们需要一个叫`ani2xcur`的脚本,他基于`win2xcur`,可以直接转换inf
1. 安装

```bash
git clone https://github.com/licyk/ani2xcur
cd ani2xcur
chmod +x ani2xcur.sh
```
2. 转换指针文件
```bash
./ani2xcur.sh --inf "/path/to/your/pointer.inf"
```

替换路径为你的指针inf安装文件

3. 把`output`内的日期目录内的主题复制到`/usr/share/icons`下
4. 在`hyprland.conf`配置文件下将鼠标主题设置为你导出的文件夹名
```conf
env = HYPRCURSOR_THEME,default
```
将 `default`设置为你导出的文件夹名

5. 为GTK设置指针
	打开GTK设置GUI,进入鼠标指针菜单内,选择你转换的主题并应用
6. 为QT设置
	建议使用KDE Settings,进入后打开外观选项,选择鼠标主题为转换的主题
7. 重启或注销

# 我踩的坑

我开始时是通过gsettings进行的设置,然而,这使得我的副屏鼠标不变,QT窗口下指针不变,主屏和gtk则是修改后的

然后我用kde设置选中了Windows的指针应用,还是这样

然后我苦思冥想,想到: 我靠! Hyprland会不会有自己的鼠标配置项啊

然后我打开文档看了看

在hyprland.conf下进行了配置,重启后万物正常
