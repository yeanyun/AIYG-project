<template>
<div class="head"  >
  <div class="name">
      <router-link to="/"  >AI遥感</router-link>|
      <router-link to="/UpLoad "  >上传图片</router-link>
  </div>

</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header"
}
</script>

<style scoped>
.head{
  position: fixed;
  width: 100%;
  top: 0;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #fcfcfc;
  background-color: rgba(37, 40, 47);
  display: flex;
  text-align: center;
}
.name{
  width:300px;
  padding-left: 30px;
  font-weight: bold;
  color: #fdfdfd;
  font-size: 24px;
  font-family: 新宋体;
}

.name a {
  font-weight: bold;
  color: #9dc5ee;
}

.name a.router-link-exact-active {
  color: #42b983;
}
</style>