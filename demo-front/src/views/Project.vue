<template>
  <div class="page project">
    <h1>项目</h1>
    <p>共 {{ cards.length }} 个项目</p>

    <section class="blog-grid">
      <router-link
        v-for="post in cards"
        :key="post.id"
        :to="`/post/${post.id}`"
        class="card"
      >
        <h3>{{ post.title }}</h3>
        <p class="desc">{{ post.desc }}</p>
        <time>{{ post.date }}</time>
      </router-link>
    </section>

    <router-link to="/" class="back">< 返回</router-link>
  </div>
</template>

<script setup>
import { posts } from '@/data/posts'

// 只展示允许出现在项目页的项目
const cards = posts.filter(p => p.showInProject)
</script>

<style scoped>
/* 卡片样式 */
.page{ padding: 24px; color: #fff; }
.blog-grid{ display: grid; gap: 20px; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
.card{ background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.12);
  border-radius: 8px; padding: 20px; color: #fff; text-decoration: none; transition: .5s}
.card:hover{
  background: rgba(255,255,255,.15);
  transform: translateY(-2px);
}
.back{ color: #fff; display: inline-block;
  background: rgba(0,0,0,.25);
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 8px;
  padding: 1px 10px;            /* 上下留一点呼吸感 */
  box-shadow: 0 4px 20px rgba(0,0,0,.9);
  margin: 24px 0 0 0;
  transition: .5s;
}
.back:hover{
  background: rgba(255,255,255,.15);
}

</style>
