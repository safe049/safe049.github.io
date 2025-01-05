+++
date = '2024-12-16T01:00:07+08:00'
draft = false
title = 'Hugo上配置Utterance'
tags = ['博客','Hugo']
comments = true
+++
# 序言
要做博客 怎么能没有评论呢

所以我折腾了一晚上 想把gitalk放上去 但是半天没用

不过我发现Hugo里,Utteranc可以非常方便的配置

于是就有了评论

# 实施

非常简单

只需要修改主题的layouts/_default/single.html里的如下处

```html
    <div class="post-footer">
      {{ template "_internal/disqus.html" . }}
      <script src="https://utteranc.es/client.js"
        repo="safe049/safe049.github.io"
        issue-term="pathname"
        label="Utterances"
        theme="github-dark"
        crossorigin="anonymous"
        async>
      </script>
    </div>
  </article>
{{ end }}
```

把repo部分换成你自己的repo

theme那里自己选一个好看的主题

# 总结

配置hugo.toml