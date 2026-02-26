+++
date = '2024-12-21T16:45:55+08:00'
draft = false
title = 'Arch Linux中安装希沃白板5'
comments = true
tags = ['Arch Linux','软件']
+++

# 序言

我的老师上周叫我帮忙做个ppt

但是我的Arch上连个希沃都没有

所以当然要装一个

# 安装

在必应上搜seewo arch linux,出现了这个AUR仓库:[com.seewo.easinote5](https://aur.archlinux.org/packages/com.seewo.easinote5)

使用paru或yay进行安装

```bash
yay -S com.seewo.easinote5
```

等待安装完毕

安装完毕后,你会发现没有任何入口打开希沃,EasiNote5不行,包名也不行

看了看AUR仓库的评论,发现包在opt目录中

```bash
cd /opt/apps/com.seewo.easinote5/files
./EasiNote5
```

希沃启动了,看起来不错

但是还是太不方便了

所以我们做一个桌面入口方便启动

```desktop
[Desktop Entry]
Name=EasiNote5
Exec=/opt/apps/com.seewo.easinote5/files/EasiNote5
Terminal=false
Type=Application
StartupWMClass=EasiNote5
Comment=Seewo EasiNote5
Categories=Application
Comment[zh_CN]=希沃白板5
```

将此文件保存为EasiNote5.desktop

将其复制到/usr/share/applications

```bash
cp EasiNote5.desktop /usr/share/applications
```

大功告成,你也可以把此文件复制到KDE或者什么桌面环境的桌面上,如果你使用KDE什么的,你应该能搜索到希沃白板,如果你在用Hyprland之类的WM,你在Rofi之类的启动器里应该也能搜索到

# 总结

使用yay安装希沃白板AUR包并创建.desktop入口
