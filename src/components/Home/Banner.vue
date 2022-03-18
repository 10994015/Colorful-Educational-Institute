

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
            <span>
                實現孩子的夢想<br>
                Success by Choice 選擇冰芬，使你的未來繽紛！<br>
                夢想是動力的來源，想要闖出一片屬於自己的天空，需要有高度的競爭力，冰芬在此提供雙語學習、Steam科學、程式設計、表演藝術及國際證照等專業課程，給予孩子多元學習與發展的機會，並開創無限可能。
            </span>
            <a href="javascript:;" class="start">立即開始</a>
            <a href="javascript:;" class="imgslide" v-for="item in imglist" :key="item.url">
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
        font-size: 28px;
        width:800px;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        @media screen and (max-width:720px){
            left:5%;
            width:400px
        }
    }
   .start{
        position: absolute;
        top: 500px;
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
            top: 500px;
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