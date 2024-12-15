+++
date = '2024-12-16T01:00:07+08:00'
draft = false
title = 'Utterance'
comments = true
+++
# 序言
要做博客 怎么能没有评论呢

所以我折腾了一晚上 想把gitalk放上去 但是半天每用

不过我发现Hugo里,Utteranc可以非常方便的配置

于是就有了评论

# 实施

非常简单

只需要在hugo.toml里加上以下字段

```toml
[params.utteranc]
  enable = true
  repo = "safe049/safe049.github.io" 
  issueTerm = "pathname"
  theme = "github-dark"
```

把repo部分换成你自己的repo

theme那里自己选一个好看的主题

# 总结

配置hugo.toml