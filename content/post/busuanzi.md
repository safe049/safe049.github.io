+++
date = '2024-12-16T01:43:16+08:00'
draft = false
title = 'Hugo中配置不蒜子'
comments = true
tags = ['博客','Hugo']
+++

# 序言
是的,我又连夜来写博客了

刚刚给博客加上了不蒜子计数

# 实施

对于m10c主题,配置不蒜子需要分别在layouts/_default中的list.html和single.html中配置

不蒜子的代码是这些:

```html
<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
      
      <span id="busuanzi_container_site_pv">--本站总访问量<span id="busuanzi_value_site_pv"></span>次--</span>
      <span id="busuanzi_container_site_uv">--本站总访客数<span id="busuanzi_value_site_uv"></span>人--</span>
      <span id="busuanzi_container_page_pv">--本文总阅读量<span id="busuanzi_value_page_pv"></span>次--</span>
```
*我加了几个 -- 用来美化*

# list.html

list.html是m10c主题中的文章列表

编辑list.html中的
` {{ partial "pagination.html" $ }}`
部分为如下样式:

```html
    </ul>
    {{ partial "pagination.html" $ }}
    <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>

    <span id="busuanzi_container_site_pv">--本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
    <span id="busuanzi_container_site_uv">本站总访客数<span id="busuanzi_value_site_uv"></span>人--</span>

  </article>
{{ end }}

```

现在你的博客的主页下方应该会出现

 --本站总访问量xx次-- --本站总访客数xx人--

# single.html

single.html是m10c主题中的单文章页面

编辑其中的
`  <div class="post-content">` 和 ` <div class="post-footer">` 的下方的内容

为了好看 我还加了一个分割线[那个---------------------------]

```html
   <div class="post-content">
      {{ .Content }}
      <span>------------------------------------------------------------------------</span>
    </div>
    <div class="post-footer">
      {{ template "_internal/disqus.html" . }}
      <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
      
      <span id="busuanzi_container_site_pv">--本站总访问量<span id="busuanzi_value_site_pv"></span>次--</span>
      <span id="busuanzi_container_site_uv">--本站总访客数<span id="busuanzi_value_site_uv"></span>人--</span>
      <span id="busuanzi_container_page_pv">--本文总阅读量<span id="busuanzi_value_page_pv"></span>次--</span>
      <script src="https://utteranc.es/client.js"
        utteranc内容
      </script>
      
      
    </div>
  </article>
{{ end }}
```

我觉得把不蒜子放在utteranc上更好看 所以就这么做了

# 总结

修改主题文件中的list.html & single.html以实现功能

# 注

后来我对样式进行了调整 可见 [https://github.com/safe049/hugo-theme-m10c/](https://github.com/safe049/hugo-theme-m10c/)