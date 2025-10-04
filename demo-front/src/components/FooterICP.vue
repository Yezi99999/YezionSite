<template>
  <footer class="footer-icp">
    <div class="icp-card">
      <p>·
        © {{ year }} 叶子小站 &
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">
          {{ icp }}
        </a>
        ·
        <a href="https://www.beian.gov.cn/" target="_blank" rel="noopener">
          {{ police }}
        </a>

      </p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
const icp  = '冀ICP备2023045888号-2'
const police = '' // 公安备案号，没有可留空
</script>

<style scoped>
.footer-icp {
  margin-top: auto;        /* 贴底 */
  padding: 12px;
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, .65);
}

.icp-card {
  display: inline-block;
  background: rgba(255, 255, 255, .08);
  border: 1px solid rgba(255, 255, 255, .12);
  border-radius: 8px;
  padding: 0 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, .25);
}

.icp-card a {
  color: #73bfe8;
  text-decoration: none;
}
.icp-card a:hover {
  text-decoration: underline;
}

/* 手机端缩小 */
@media (max-width: 600px) {
  .icp-card {
    font-size: 12px;
    padding: 8px 12px;
  }
}
</style>
