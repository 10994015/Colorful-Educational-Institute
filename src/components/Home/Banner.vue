

<script>
import {reactive} from "vue";
export default {
   
    setup(){
        
        const imglist = reactive([
            {url:'./assets/images/banner.jpg'},
        ])
        return {imglist, };
    }
}
</script>
<template>
  <div id="banner">
            <!-- <i class="fas fa-chevron-circle-left" @click="leftimg"></i>
            <i class="fas fa-chevron-circle-right" @click="rightimg"></i> -->
            <span>以互動參與感為原則，透過多元教學經驗<br>
                讓學習更多 "冰芬" 色彩</span>
            <a href="###" class="start">立即開始</a>
            <a href="###" class="imgslide" v-for="item in imglist" :key="item.url">
                <img src="@/assets/images/banner.jpg" alt="">
            </a>
            <!-- <div ref="dot" id="dots" v-html="dotsHtml"></div> -->
        </div>
</template>
<style lang="scss" scoped>
#banner{
    display: flex;
    min-width:100%;
    overflow: hidden;
    height: 650px;
    position: relative;
    > .fa-chevron-circle-left{
        position: absolute;
        top: calc(50% - 21.1px);
        left: 20px;
        z-index: 99;
        font-size: 42px;
        color:#fff;
        opacity: .8;
        cursor: pointer;
    }
    > .fa-chevron-circle-right{
        position: absolute;
        top: calc(50% - 21.1px);
        right: 20px;
        z-index: 99;
        font-size: 42px;
        color:#fff;
        opacity: .8;
        cursor: pointer;
    }
    span{
        position: absolute;
        top: 250px;
        left:10%;
        z-index: 9999;
        color:#fff;
        text-shadow: black 0.1em 0.1em 0.2em;
        font-weight: 600;
        font-size: 36px;
        @media screen and (max-width:720px){
            left:5%;
        }
    }
   .start{
        position: absolute;
        top: 360px;
        left:10%;
        display: block;
        width:180px;
        height: 60px;
        color:#fff;
        border:gold 2px solid;
        background-color: gold;
        text-align: center;
        line-height: 60px;
        border-radius: 8px;
        z-index: 9999;
        font-size: 21px;
        text-shadow: black 0.1em 0.1em 0.2em;
        font-weight: 600;
        &:hover{
            transform: translateX(10px);
            transition: all .5s ease;
        }
        @media screen and (max-width:720px){
            top: 420px;
        }
        @media screen and (max-width:400px){
            top: 500px;
        }
        
    }
    .imgslide{
        transition: all .5s ease;
        min-width:100%;
        height: 100%;
        img{
            object-fit: cover;
            min-width:100%;
            height: 100%;
        }
    }
    #dots{
        position: absolute;
        bottom:0;
        left:0;
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height: 30px;
        background-color: transparent;
        > .dot{
            border-radius:50%;
            width:18px;
            height: 18px;
            color:#fff;
            display: block;
            background-color: #fff;
            cursor: pointer;
            margin: 0 5px;
        }
    }
}
</style>