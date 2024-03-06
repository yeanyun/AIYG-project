<template>
  <div id="app">
    <div class="header">
      <div class="name">
        <router-link to="/"  >AI遥感</router-link>|
        <router-link to="/UpLoad"  >上传图片</router-link>
      </div>
    </div>
      <router-view style="flex: 1"/>
    <Foot/>
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header{
  flex: 0;
  background-color: rgba(37, 40, 47);
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #fcfcfc;
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
<script>

// import Foot from "@/components/Foot";
import Foot from "@/components/Foot";
export default {
  components: {
    Foot
    // Foot

  }
}
</script>