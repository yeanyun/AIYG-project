<template>
  <div  class="foot">
    <div class="footAbout">
      <p>
        版权所有 &copy; AI遥感 <br />
        比赛方地址：山东省济南市超算中心科技园
     </p>
      <p >邮箱：zhenhao__li@163.com</p>
      <p>电话：17838779781</p>
    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Foot",
}
</script>

<style scoped>
.foot{
  position: relative;
  bottom: 0;
  width: 100%;
  height: auto;
  background-color: rgb(8, 29, 59);
  border-top: 1px solid #c3bec1;
}
.footAbout{
  height: auto;
  width:auto;
  text-align: center;
  padding-top: 1%;
  padding-bottom: 1%;
  font-size: 17px;
  line-height: 150%;
  left: 50%;
  right: 50%;
}
.footAbout p{
  color: white;
}

</style>