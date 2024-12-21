+++
date = '2024-12-21T12:11:07+08:00'
draft = false
title = '更改密码无用的解决'
comments = true
tags = ['Linux','Arch Linux']
+++

# 序言

我今天用nvim改hyprland的配置文件,不过因为权限问题保存不了,我尝试用 `:w ! sudo tee %`,他提示我尝试使用-s参数,于是我输入 `:w ! sudo tee -s %`,我看到nvim在为sudo的密码验证输入一些空格,错误了好几次,于是我退出nvim.尝试用sudo nvim 编辑,但是却发现我的密码不管用了

我尝试passwd自己的用户更改密码,然后重试,密码还是错的

于是我su进root用户更改,还是没用

```bash
(base)   dynamo   ~ git-[ main]-  sudo su dynamo
Deploying root access for dynamo. Password pls:
对不起，请重试。
Deploying root access for dynamo. Password pls:
对不起，请重试。
Deploying root access for dynamo. Password pls:
sudo: 3 次错误密码尝试
(base)   dynamo   ~ git-[ main]-  su root
密码：
[root@archyyds dynamo]# passwd dynamo
新的密码：
重新输入新的密码：
passwd：已成功更新密码

(base)   dynamo   ~ git-[ main]-  sudo su
Deploying root access for dynamo. Password pls:
对不起，请重试。
```

# 解决方案

我上万能的Arch论坛查了查,发现一个帖子:

[[SOLVED] Password randomly stops working](https://bbs.archlinux.org/viewtopic.php?id=259862)

我翻了翻,看到了这个评论:

**[Scimmia](https://bbs.archlinux.org/profile.php?id=63385)**

> Sounds more like the account is getting locked. Check out pam_faillock.


于是我在Arch手册查询了[pam_failock](https://man.archlinux.org/man/pam_faillock.8.en)

然后在终端查看了failock状态:

```bash
(base)   dynamo   ~ git-[ main]-  faillock
dynamo:
When                Type  Source                                           Valid
2024-12-21 11:59:04 SVC   sudo                                                 V
2024-12-21 11:59:29 SVC   sudo                                                 V
2024-12-21 11:59:42 SVC   sudo                                                 V
```

我发现我的账户因为在nvim上的多次验证错误被锁定了,所以无法登陆

于是我通过 `faillock --reset` 重置了账号的锁定状态

现在,终于可以正常验证了

```bash
(base)   dynamo   ~ git-[ main]-  faillock
dynamo:
When                Type  Source                                           Valid
(base)   dynamo   ~ git-[ main]-  sudo su
Deploying root access for dynamo. Password pls:
[root@archyyds dynamo]# su dynamo
```

# 总结

账户多次验证失败,会触发pam_faillock锁定用户从而无法验证,此时需要通过 `faillock --reset` 命令重置锁定状态,从而解除锁定
