<template>
  <div class="upload1">
      <div class="containera1">
        <el-carousel height="300px">
          <el-carousel-item class="switchItem" v-for="item in itemImages" :key="item.id">
            <img class="cItem" :src="item.imgSrc"  alt="轮播图"/>
          </el-carousel-item>
        </el-carousel>
      </div>
        <div class="containera5">
      <el-upload
          action="#"
          :http-request="uploadFile"
          :headers="headers"
          :on-preview="handlePreview"
          :on-remove="handleRemove"

          :on-success = "handleApiSuccess"
          :before-upload = "beforeAvatarUpload"
          :limit="1"
          :on-exceed="handleExceed"
          list-type="picture"
          :file-list="fileList"
          :on-change="handleChange"
      >
        <el-button size="large" type="primary" >点击上传</el-button>
        <div slot="tip" class="el-upload__tip" style="color: #fcfcfc">只能上传jpg/png文件，且不超过500M!</div>
      </el-upload>
    </div>
    <div class="containera4">
      <div class="resultImg">
        <div class="showImga">
          <img  :src="uploadImage" alt="">
        </div>
        <div class="showImga">
          <img  :src="resultImage" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      itemImages:[
        {id:0,imgSrc:require('../../src/static/img/bg5.jpg')},
        {id:1,imgSrc:require('/src/static/img/bg6.jpg')},
        {id:2,imgSrc:require('/src/static/img/bg3.jpg')},
        {id:3,imgSrc:require('/src/static/img/bg7.jpg')}
      ],
      uploadImage:'',
      resultImage:'',
      fileList: [],//上传文件的列表{name:'',url:''}
      headers: { "Content-Type": "multipart/form-data" },//请求头
      }
    },
  methods: {
    handleRemove(file) {
      console.log(file);
      console.log('remove');
    },
    uploadFile(file) {
      axios({
        method: 'post',
        url: 'http://localhost:8083/upload/upFileAndGetResult',
        headers: this.headers,
        timeout: 900000,
        data: file,
      }).then(res => {
        console.log(res.data);
        this.resultImage = 'data:image/png;base64,' + res.data.extend
      }).catch(function (error) { // 请求失败处理
        console.log(error);
      })
    },
    handleApiSuccess(res, file) {
      if (res === 200) {
        console.log(file)
        console.log("success")
      } else {
        console.log("error")
      }
    },
    handleChange(file,) {
      this.uploadImage = file.url;
      this.$message.success("正在处理，需等待5-10分钟");
    },
    handlePreview(file) {
      this.uploadImage = file.url;
      console.log(file);
      console.log("Preview");
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeAvatarUpload(file){
      const img = file.name.substring(file.name.lastIndexOf('.') + 1)
      const suffix = img === 'jpg'
      const suffix2 = img === 'png'
      const suffix3 = img === 'jpeg'
      const isLt1M = file.size / 1024 / 1024 < 500;
      if (!suffix && !suffix2 && !suffix3 ) {
        this.$message.error("只能上传图片！");
        return false
      }
      // 可以限制图片的大小
      if (!isLt1M) {
        this.$message.error('上传图片大小不能超过 500MB!');
      }
      return suffix || suffix2 || suffix3
    },
    // beforeRemove(file) {// :before-remove="beforeRemove"
    //   return this.$confirm(`确定移除 ${ file.name }？`);
    // }
  }
}
</script>

<style>
.upload1 {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
  flex-flow: row wrap;
  text-align: center;
  background:url("/src/static/img/bgImg.jpg");
  background-size:100% 100%;
}
.containera1{
  margin-top: 3%;
  width: 100%;
}
.cItem{
  width: 90%;
  height: 100%;
}
.switchItem {
  line-height: 150px;
  margin: 0;
  text-align: center;
}
.containera4{
  flex-basis: 100%;
  text-align: center;
  flex-flow: row nowrap;
  margin-bottom: 3%;
}
.resultImg{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
}
.showImga{
  width: 45%;
  height: 60%;
  padding: 2%;
}
.showImga img{
  width: auto;
  height: auto;
  max-width:100%;
  max-height:100%;
}
.containera5{
  margin-top: 3%;
  margin-bottom: 2%;
}
</style>
