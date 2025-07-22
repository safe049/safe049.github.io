+++
date = '2024-12-15T13:48:19+08:00'
draft = false
title = 'About'
+++
# 你好
我是镝零,外网名Dysprosium，你也可以叫我D0

一个平平无奇的初二生

# 成分
车万人,精神分析,Python,C++,Transformer,AI微调,Arch Linux用户,做音乐的,画速写,数位板长久未用,哲学，主战地一玩家,网安人,等

# 联系方式
- QQ:1329261154
- Email:1329261154@qq.com
- Github: [https://github.com/safe049](https://github.com/safe049)
- HuggingFace: [https://huggingface.co/safe049](https://huggingface.co/safe049)

# 关于本站
本站使用Hugo M10C主题建立,原使用Valaxy框架

你可以通过问我要密钥解开下面的隐藏区域【注：这地方防君子不防小人】



<!-- ===== 动态解锁开始 ===== -->
<!-- ===== PWD:dysprosium_41 ===== -->
<div id="hidden" style="display:none;"></div>

<div id="locker" style="margin-top:2em;">
  <label>
    <input id="secretInput" type="password" placeholder="输入暗号解锁隐藏信息" style="padding:4px 8px;">
    <button onclick="unlock()">解锁</button>
  </label>
  <p id="wrongHint" style="color:#d33;display:none;">暗号不对哦 (´・ω・`)</p>
</div>

<script type="module">
const HASH = '07e5e510820038bfc8e131fb9680f9254671802f827d2c50fcd80cb9bbf99c39';
const NI_GE_XIAO_REN_yougotme = '/private/about-secret.md';

async function sha256(str) {
  const buf = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(hash))
              .map(b => b.toString(16).padStart(2, '0'))
              .join('');
}

window.unlock = async function () {
  const val = document.getElementById('secretInput').value;
  if (await sha256(val) !== HASH) {
    document.getElementById('wrongHint').style.display = 'inline';
    return;
  }
  // 拉取隐藏 Markdown → 转成 HTML → 填进去
  const resp = await fetch(NI_GE_XIAO_REN_yougotme);
  const mdText = await resp.text();
  // 这里用最简 Markdown 解析器 marked（2.5 kB gzip）
  const { marked } = await import('https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js');
  document.getElementById('hidden').innerHTML = marked.parse(mdText);
  document.getElementById('hidden').style.display = 'block';
  document.getElementById('locker').style.display = 'none';
};
</script>
<!-- ===== 动态解锁结束 ===== -->