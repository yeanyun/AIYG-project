<template>
  <div class="home">
    <div class="container1">
      <el-carousel height="300px">
        <el-carousel-item class="switchItem" v-for="item in itemImages" :key="item.id">
          <img class="cItem" :src="item.imgSrc"  alt="轮播图"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container2">
      <div class="intro">

          <div class="explain">随着2012年AlexNet在计算机视觉上的优秀表现，深度学习再一次走进大众视野。2016年谷歌公司研发的Alpha Go击败韩国九段棋手李世石，深度学习再次迎来爆发式发展。图像分类、图像检测、图像分割，作为计算机视觉领域的三大任务，模型复杂度和计算开销依次增加。2020年10月，Vision Transformer的提出，使得图像领域的整体架构从Convelution开始逐渐偏向Transformer，并取得了完全不输卷积甚至超越卷积网络的效果。</div>
          <div class="explain">遥感图像与自然图像有很大的不同，同一场景中具有较大的变动性，不同场景之间却有较大的相似性，也可以认为是类间方差小，类内方差大。这使得在进行遥感图像的语义分割时，图片的全局信息显得极为重要。同时，从模型输入的角度来说，自然图像大多为RGB三通道图像，但是高分辨率的多光谱遥感图像包含更多通道，这些通道包含了更多的地物信息，这也是传统卷积分割网络的重大挑战。</div>
          <div class="explain">传统的分割网络大多基于FCN（Fully Convlutional Network）结构，尽管池化层可以增加感受野，但是会降低分辨率，分辨率对于分割小尺寸物体是很重要的，所以基于FCN的模型大多在处理小目标时效果不太理想。</div>
          <div class="explain">对于遥感图像的语义分割，除了像传统图像分割一样要求每个像素都具有语义意义之外，还对具有语义意义的背景（如河流、道路、田野等）提出了分割要求。同时，在高空间分辨率的遥感图像中，物体与物体之间有着更大尺度的变化，不同地物边界的分割精度是遥感图像语义分割的最大目标。</div>

      </div>
      <div class="sfImg">
        <div class="about">通知公告</div>
        <li><a href="https://www.kankanews.com/a/2022-10-25/00310266093.shtml?page_name=%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%A7%E5%85%9A%E7%AC%AC%E4%BA%8C%E5%8D%81%E6%AC%A1%E5%85%A8%E5%9B%BD%E4%BB%A3%E8%A1%A8%E5%A4%A7%E4%BC%9A">
          特稿：新征程领路人习近平
        </a></li>
        <li><a href="https://www.kankanews.com/a/2022-10-25/00310266330.shtml?page_name=%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%A7%E5%85%9A%E7%AC%AC%E4%BA%8C%E5%8D%81%E6%AC%A1%E5%85%A8%E5%9B%BD%E4%BB%A3%E8%A1%A8%E5%A4%A7%E4%BC%9A">
          习近平总书记在中国共产党第二十次全国代表大会上的报告
        </a></li>
        <li><a href="https://export.shobserver.com/baijiahao/html/549007.html">
          上海市委中心组学习会集体学习贯彻党的二十大精神
        </a></li>
        <li><a href="https://baijiahao.baidu.com/s?id=1749108302730982216&wfr=spider&for=pc&qq-pf-to=pcqq.group">
          学习贯彻党的二十大精神中央宣讲团在北京大学宣讲
        </a></li>
        <li><a href="https://news.sciencenet.cn/htmlnews/2022/11/488974.shtm" target="_blank">我国高分遥感共性产品真实性检验系统投入试运行</a></li>
        <li><a href="https://redian.news/wxnews/132853" target="_blank">「多模态处理技术」最新2022研究进展综述</a></li>
        <li><a href="https://www.eet-china.com/mp/a172983.html">
          云计算开发者的自我修养
        </a></li>
      </div>
    </div>
      <div class="container6">
      <div class="container6Img" v-for="item in itemPictures" :key="item.id">
        <img class="cItem" :src="item.imgSrc"  alt=""/>
      </div>
    </div>

    <div class="container7">
      <div v-for=" item in divs" :key="item.id">
        <div  :class="item.text"></div>
        <span> {{item.name}}</span>
      </div>

    </div>
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return{
      itemImages:[
        {id:0,imgSrc:require('../../src/static/img/bg5.jpg')},
        {id:1,imgSrc:require('/src/static/img/bg6.jpg')},
        {id:2,imgSrc:require('/src/static/img/bg3.jpg')},
        {id:3,imgSrc:require('/src/static/img/bg7.jpg')}
      ],
      itemPictures:[
        {id:0,imgSrc:require('/src/static/img/yt1.png')},
        {id:1,imgSrc:require('/src/static/img/yt2.png')},
        {id:2,imgSrc:require('/src/static/img/yt3.png')},
        {id:3,imgSrc:require('/src/static/img/yt4.png')},
        {id:4,imgSrc:require('/src/static/img/UNetFormer1.png')},
        {id:5,imgSrc:require('/src/static/img/UNetFormer2.png')},
        {id:6,imgSrc:require('/src/static/img/UNetFormer3.png')},
        {id:7,imgSrc:require('/src/static/img/UNetFormer4.png')},
      ],
      info: null,
      fileList: [],//上传文件的列表{name:'',url:''}
      headers: { "Content-Type": "multipart/form-data" },//请求头
      divs:[
        {id:1,text:"divs1",name:"车"},
        {id:2,text:"divs2",name:"房屋"},
        {id:3,text:"divs3",name:"草地"},
        {id:4,text:"divs4",name:"树"},
        {id:5,text:"divs5",name:"湖"},
        {id:6,text:"divs6",name:"道路"}
      ],
    }
  },
}
</script>
<style>
.home{
  display: flex;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
  flex-flow: row wrap;
  text-align: center;
  background:url("/src/static/img/bgImg.jpg");
  background-size:100% 100%;
}
.container1{
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
.container2{
  display: flex;
  justify-content: space-around;
  align-content: flex-start;
  width: 100%;
  flex-flow: row nowrap;
  text-align: center;
  padding: 3%;
}
.intro{
  flex-basis: 50%;
  display: flex;
  margin-top: 5%;
  flex-flow: column;
  box-sizing: border-box;
  width: 100%;
}
.explain{
  text-align: left;
  width: 90%;
  height: auto;
  word-wrap:break-word;
  margin: 0 auto;
  padding: 1%;
  background-color: rgba(25, 42, 84, 0.69);
  color: rgb(101, 238, 234);
  border: 1px rgba(141, 166, 82, 0.61) solid ;
  border-radius: 5px;
  font-size: 18px;
}
.sfImg{
  flex-basis: 50%;
  display: flex;
  margin-top: 5%;
  box-sizing: border-box;
  flex-wrap: wrap;
  width: 100%;
}
.sfImg li{
  color: #fcfcfc;
}
.about{
  color: #b7936a;
  font-size: 33px;
  font-weight: bold;
  text-align: center;
  border-bottom: 5px solid #f6a576;
  width: 100%;
  height: 50px;
}
.sfImg a{
  width: 100%;
  text-align: left;
  color: #fff29b;
  font-size: 22px;
}
.showImg img{
  width: auto;
  height: auto;
  max-width:100%;
  max-height:100%;
}
.container6{
  width: 100%;
  display: flex;
  flex-flow: row  wrap;
  justify-content: center;
  margin-bottom: 1%;
}
.container6Img{
  flex: 0 0 25%;
  height: 200px;
  margin: 0 5px 5px 0;
  width: calc((100% - 10px)/5);
  min-width: calc((100% - 10px)/5);
  max-width: calc((100% - 10px)/5);
}
.container7{
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  color: #fcfcfc;
  text-align: center;
  margin-bottom: 2%;
}
.divs1{
  width: 80px;
  height:50px;
  background-color: #fcd765;
  margin-left: 10px;
}
.divs2{
  width: 80px;
  height:50px;
  background-color: #0000fc;
  margin-left: 10px;
}
.divs3{
  width: 80px;
  height:50px;
  background-color: #00cacb;
  margin-left: 10px;
}
.divs4{
  width: 80px;
  height:50px;
  background-color: #00fd01;
  margin-left: 10px;
}
.divs5{
  width: 80px;
  height:50px;
  background-color: #fc0000;
  margin-left: 10px;
}
.divs6{
  width: 80px;
  height:50px;
  background-color: #fdfdfd;
  margin-left: 10px;
}

</style>