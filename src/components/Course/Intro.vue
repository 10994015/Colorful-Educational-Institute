
<script>
import {reactive } from "vue";
export default {
    setup(){
        const imgItem = reactive([
            {src:"https://www.evoneic.com/img/img1.jpg",title:"冬令營",text:"test1", to:'/Course/Winter'},
            {src:"https://www.evoneic.com/img/img1.jpg",title:"夏令營",text:"test2", to:'/Course/Summer'},
            {src:"https://www.evoneic.com/img/img1.jpg",title:"實體課程",text:"test4", to:'/Course/Entity'},
            {src:"https://www.evoneic.com/img/img1.jpg",title:"線上直播課程",text:"test3", to:'/Course/Live'},
            {src:"https://www.evoneic.com/img/img1.jpg",title:"線上預錄課程",text:"test3", to:'/Course/Prepare'},
            {src:"https://www.evoneic.com/img/img1.jpg",title:"遊留學",text:"test5", to:'/Course/Study'},
        ])
        return {imgItem};
    }
}
</script>
<template>
  <div class="intro">
      <h1>我們的服務</h1>
     <div class="content">
          <div class="grid" v-for="item in imgItem" :key="item.text">
            <div class="item">
                <router-link :to="item.to">
                    <img :src="item.src" alt="">
                    <h2>{{item.title}}</h2>
                </router-link>
                <p>點選此處並開始輸入。 聞臺加 相玩 處我麼 他生戰女取 因頭同 樓活生歡 從得 的起研 不綠她節了 念來 生示 留相都 確兒可石 己特 出老正告 絕 </p>
            </div>
        </div>
     </div>
     
  </div>
</template>

<style lang="scss" scoped>
.intro {
    padding: 60px 0;
    width:80%;
    margin:auto;
    >h1 {
        text-align: center;
        color:#222;
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 25px;
        position: relative;
        &::before{
            content:'';
            position: absolute;
            top: 60px;
            left:calc(50% - 50px);;
            width:100px;
            height: 2px;
            background-color: #555;
        }
    }
    > .content {
        display: grid;
        grid-template-columns: repeat(3,300px);
        grid-gap: 20px;
        justify-content: space-evenly;
            > .grid{
            width:300px;
            height: 300px;
            margin-bottom: 25px;
            > .item {
                width:300px;
                height: 400px;
                margin: 20px 0;
                > a{
                    color:#223;
                    &:hover > h2{
                        text-decoration: underline;
                        transition: all .5s ease;
                    }
                    img{
                        width:100%;
                        height: 180px;
                        object-fit: cover;
                    }
                }
            }
        }
    }
    
}

</style>