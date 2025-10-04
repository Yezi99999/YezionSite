<template>
  <div class="top">
      <div id="site-info">
        <ul class="site-info">
          <router-link class="li" to="/">主页</router-link>
          <router-link class="li" to="/tech">技术</router-link>
          <router-link class="li" to="/project">项目</router-link>
          <router-link class="li" to="/about">关于</router-link>
        </ul>

        <div id="search" class="top-card search-card">
          <input type="search" id="search-input" >
          <button id="search-button" >搜索</button>
        </div>
      </div>
    <!-- 页面主体 -->
    <main class="content">
      <router-view />
    </main>
    <!-- 备案信息 -->
    <FooterICP />
  </div>

</template>
<script>

import Home from "@/views/Home.vue";
import FooterICP from '@/components/FooterICP.vue'

export default {
  name: 'App',
  components: {
    FooterICP,
    Home
  },
}
</script>
<style>
body,html{
  margin: auto;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  scrollbar-width: none;

}
body{
  min-height: 100vh;   /* 撑满可视区高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-image: url("@/assets/background.png");
  background-size: cover;        /* 铺满 + 不变形 */
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;  /* 视口固定，内容滚动 */
  position: relative;
}
body::before {
  content: "";
  position: absolute;
  inset: 0;                      /* top/right/bottom/left:0 */
  background: rgba(0, 0, 0, 0.3);/* 想再暗就提高最后一位 */
  z-index: 1;
}
body > * {
  position: relative;
  z-index: 2;
}
html::-webkit-scrollbar {
  display: none;           /* Chrome/Edge/Safari */
}
.top{
  position: fixed;
  inset: 0;
  box-sizing: border-box;
  border: 12px solid rgba(255,255,255,.5);
  border-radius: 0;
  overflow: auto;
  min-height: 100vh;        /* 至少一屏高 */
  display: flex;
  flex-direction: column;   /* 列式排列 */
}
.top-card {                      /* 导航条 */
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 8px;
  padding: 1px 20px;            /* 上下留一点呼吸感 */
  box-shadow: 0 4px 20px rgba(0,0,0,.25);
  margin: 12px;                  /* 与边框保持间距 */
}

/* 让内部继续横向排列 */
.top-card #site-info{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#site-info{
  display: flex;
  flex-wrap: wrap;          /* 不足宽度自动折行 */
  gap: 8px;
  align-items: center;
  padding: 8px;
}
.site-info{
  flex: 1 1 auto;           /* 可压缩，最小内容宽度 */
  min-width: 48px;          /* 拇指热区 ≥ 48 px（Material 标准）[^97^] */
  padding: 8px 12px;        /* 减小左右 padding，留更多空间 */
  white-space: nowrap;      /* 文字不换行 */
  display: flex; /* 横向排列 */
  align-items: center; /* 垂直居中 */
  margin: 0 0 0 2em;
  list-style: none;
  font-size: 1em;
  color: #000;
  height: 100%;
  overflow: hidden;   /* 隐藏横向滚动条 */
  scroll-behavior: smooth; /* 平滑滚动 */
}
@media (max-width: 480px) {
  #site-info{ gap: 6px; padding: 6px; }
  .search-card{ flex: 1 1 160px; max-width: 200px; }
  #search-button{ width: 56px; font-size: 12px; }
  .site-info .li{ padding: 6px 8px; font-size: 12px; }
}
.site-info::-webkit-scrollbar {
  display: none;           /* Chrome/Edge 隐藏滚动条 */
}
@media (max-width: 480px) {
  #site-info{ gap: 6px; padding: 6px; }
  .search-card{ max-width: 200px; }
  #search-button{ width: 48px; font-size: 12px; }
  .site-info .li{ padding: 6px 8px; font-size: 12px; }
}
.li{
  margin-right: 22px;
  display: block;                       /* 占整格 */
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 8px;
  padding: 12px 16px;                   /* 内留呼吸感 */
  box-shadow: 0 4px 20px rgba(0,0,0,.25);
  color: #fff;                          /* 文字白色 */
  text-decoration: none;                /* 去掉下划线 */
  position: relative;
  transition: transform .3s cubic-bezier(.25,.8,.25,1),
  box-shadow .3s cubic-bezier(.25,.8,.25,1);
}
.li.router-link-active {
  transform: scale(1.05);                 /* 轻微放大 */
  box-shadow: 0 8px 24px rgba(115,191,232,.45);
  background: rgba(133, 176, 236, 1) !important;
  color: #fff;
}
.li:hover{
  background: rgba(255,255,255,.15);
  transform: translateY(-2px);
}
.search-card {
  display: flex;
  flex: 1 1 auto;          /* 可放大可缩小，最小 200 px */
  max-width: 260px;         /* 桌面端不超过 260 px */
  height: 40px;
  align-items: center;
  gap: 8px;                    /* 输入与按钮间距 */
  padding: 6px 12px;   /* 与导航按钮同高 */
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,.25);
}
/* 宽度过小时隐藏搜索组 */
@media (max-width: 750px) {
  #search { display: none; }
}
#search-input{
  flex: 1 1 auto;
  min-width: 0;             /* 允许压缩到 0，防止撑破 */
  height: 100%;
  border: none;
  background: transparent;
  color: #fff;
  outline: none;
}
#search-input::placeholder {
  color: rgba(255,255,255,.7);
}
#search-button{
  flex: none;               /* 固定宽 */
  width: 67px;height: 100%;flex: none;
  border: 1px solid rgba(255, 255, 255, .35);
  background: transparent;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background .2s;
}
#search-button:hover{
  background: rgba(255,255,255,.15);
  color: darkseagreen;
}
.content{
  flex: 1 1 auto;           /* 中间撑满剩余高度 */
  overflow: auto;           /* 内容多时出现滚动条 */
  scrollbar-width: none; /* Firefox */
  animation: route-in .4s ease-out;
}
@keyframes route-in {
  0%   { opacity: .6; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
}
.content::-webkit-scrollbar {
  display: none;        /* Chrome/Edge/Safari */
}
a{
  text-decoration:none;
  color:#fff;
  transition: .3s;
}
a:hover{
  color: darkseagreen;
}
</style>
