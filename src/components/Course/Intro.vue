
<script>
import {reactive } from "vue";
export default {
    setup(){
        const imgItem = reactive([
            {src:"/0307.jpg",title:"冬令營/夏令營",text:"test1", to:'/Course/Winter'},
            {src:"/0308.jpg",title:"平日營/假日營",text:"test2", to:'/Course/Summer'},
            {src:"https://www.evoneic.com/img/img1.jpg",title:"實體課/線上課",text:"test4", to:'/Course/Entity'},
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
                <p>將於近期更新，請敬請期待。 </p>
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
        @media screen and (max-width:1024px){
            grid-template-columns: repeat(3,200px);
        }
        @media screen and (max-width:768px){
            grid-template-columns: repeat(2,300px);
            grid-gap: 25px;
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1,90%);
        }
            > .grid{
            width:100%;
            height: 300px;
            margin-bottom: 25px;
            > .item {
                width:100%;
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