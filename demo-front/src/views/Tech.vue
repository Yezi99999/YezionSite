<script setup>

</script>

<template>
  <div class="page tech">
    <h1>技术栈（笔记）</h1>
    <p>这里记录我用过的语言、框架同时也作为笔记。</p>

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
</style>
