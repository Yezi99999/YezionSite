<script setup>

</script>

<template>
  <div class="page about">
    <h1>关于我</h1>
    <p>一名热爱折腾的全栈，欢迎交流。</p>
    <!-- 社交媒体卡片 -->
    <ul class="social-cards">
      <li>
        <a href="https://github.com/Yezi99999" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.68-4.57 4.9.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          <span>GitHub</span>
        </a>
      </li>

      <li>
        <a href="https://space.bilibili.com/435289695" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24"><path d="M21.71 5.43a2.87 2.87 0 0 0-2.09-.87H4.38a2.87 2.87 0 0 0-2.09.87A2.93 2.93 0 0 0 2 7.91v8.18a2.93 2.93 0 0 0 2.38 2.48l6.68 2.23 4.09.82a1 1 0 0 0 1-.82l4.09-2.23 6.68-2.23A2.93 2.93 0 0 0 22 16.09V7.91a2.93 2.93 0 0 0-.29-2.48zM8 11.5v-3l6 3-6 3v-3z"/></svg>
          <span>Bilibili</span>
        </a>
      </li>

      <li>
        <a href="mailto:zeroixc@outlook.com" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          <span>邮箱</span>
        </a>
      </li>
    </ul>
    <router-link to="/" class="back">< 返回</router-link>
  </div>
</template>

<style scoped>
.page{ padding: 24px; color: #fff; }
.back{ color: #fff; text-decoration: none;
  background: rgba(0,0,0,.25);
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 8px;
  padding: 1px 10px;            /* 上下留一点呼吸感 */
  box-shadow: 0 4px 20px rgba(0,0,0,.9);
  margin: 12px;
  transition: .5s;
}
.back:hover{
  background: rgba(255,255,255,.15);
}
 /* 社交媒体卡片列表 */
.social-cards{
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 24px 0;
  padding: 0;
  list-style: none;
}
.social-cards li{
  width: 160px;         /* 固定卡片宽度 */
  flex: none;           /* 不再自动放大 */
}
@media (max-width: 480px) {
  .social-cards li{
    width: 100%;        /* 一列占满 */
  }
}
.social-cards a{
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0,0,0,.25);
  transition: transform .2s, background .2s;
}
.social-cards a:hover{
  background: rgba(255,255,255,.15);
  transform: translateY(-2px);
}
.social-cards svg{
  width: 20px;
  height: 20px;
  fill: currentColor;
}

</style>
