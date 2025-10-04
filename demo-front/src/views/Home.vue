
<template>
  <div id="user-info">
    <div class="user-info">
      <ul>
        <li>UID：{{uid}}</li>
        <li>昵称：{{uname}}</li>
        <li>等级：{{leave}}</li>
      </ul>
      <img alt="Yezion logo" class="header" src="../assets/logo.png" />
    </div>
  </div>
  <div class="wellcome-info">
    <h1>欢迎来到叶子小站</h1>
    <p>这是一个<b>个人主页</b>包括但不限于</p>
    <b>技术实现</b>、<b>个人介绍</b>、<b>有趣软件</b>、<b>项目收藏</b>
    <br>I'm sure this is a <b>REALLY TRUE</b>
  </div>
</template>

<style>
#user-info{
  float: right;
  width: 20em;
  height: 5em;
  background: rgba(0,0,0,.25);
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 8px;
  padding: 1px 20px;            /* 上下留一点呼吸感 */
  box-shadow: 0 4px 20px rgba(0,0,0,.9);
  margin: 12px;                  /* 与边框保持间距 */
}
@media (max-width: 410px) {
  #user-info{width: 200px;}
}
.header{
  background-color: #505050;
  border-radius: 100%;
  border: 1px solid rgba(255,255,255,.8);
  width: 4em;
  height: 4em;
  transition: .2s;
}
.header:hover{
  transform: translateY(-1px);
}
.user-info{
  display: flex; /* 横向排列 */
  align-items: center; /* 垂直居中 */
  justify-content: space-between; /* 左右贴边 */
  height: 100%;
  padding: 0 8px;

}
.user-info ul {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 12px;
  color: #fff;
}
.wellcome-info{
  margin-left: 20px;
  margin-top: 100px;
}
</style>
<script>
export default {
  props: {
    uid: {type: String, default: '001'},
    uname: {type: String, default: '叶子'},
    leave: {type: String, default: '0'}
  }
}
</script>
