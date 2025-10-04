<template>
  <div class="post-page">
    <h1>{{ post.title }}</h1>
    <div class="gray-card">
    <h2>{{ post.title }}</h2>
    <time>时间：{{ post.date }}</time>
    <!-- Markdown 正文 -->
    <div class="markdown-body" v-html="html"></div>

    <router-link to="/project" class="back">< 返回列表</router-link>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router"
import { posts } from '@/data/posts'
import MarkdownIt from 'markdown-it'

const route = useRoute()
const md = new MarkdownIt()

const post = posts.find(p => p.id === Number(route.params.id))
if (!post) throw new Error('文章不存在')

// 把渲染结果赋给 html
const html = md.render(post.md)
</script>

<style scoped>
/* 页面容器 */
.post-page {
  padding: 24px;
  color: #fff;
  overflow: auto;          /* 允许滚动 */
  scrollbar-width: none;   /* Firefox */
}
.post-page::-webkit-scrollbar {
  display: none;           /* Chrome/Edge/Safari */
}
/* 灰色卡片核心 */
.gray-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  max-width: 1200px;
  margin: 0 auto;
}

/* 返回按钮 */
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
/* Markdown 样式 */
.markdown-body {
  line-height: 1.8;
  color: rgba(255, 255, 255, .9);
  margin-top: 16px;
}
.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  margin: 24px 0 12px;
}
.markdown-body pre {
  background: rgba(0, 0, 0, 0.3);
  padding: 16px;
  border-radius: 6px;
  overflow: auto;
}
.markdown-body code {
  background: rgba(0, 0, 0, 0.2);
  padding: 2px 4px;
  border-radius: 3px;
}

</style>
