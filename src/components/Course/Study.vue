<script>
import {reactive, ref} from "vue";
export default {
  setup(){
    const studyitem = reactive([
      {text:'學生留學', src: 'https://10994015.github.io/images/images/study.jpg', idx:"1" },
      {text:'交換學生', src: 'https://10994015.github.io/images/images/study2.jpg',idx:"2"},
      {text:'留學代辦', src: 'https://10994015.github.io/images/images/study3.jpg',idx:"3"},
    ])

    const overBackText = (e)=>{
      document.getElementsByClassName('backText'+e)[0].style.opacity = 1;
    }
    const outBackText = (e)=>{
      document.getElementsByClassName('backText'+e)[0].style.opacity = 0;
    }
    const lorem = ref('點選此處並開始輸入。 聞臺加 相玩 處我麼 他生戰女取 因頭同 樓活生歡 從得 的起研 不綠她節了 念來 生示 留相都 確兒可石 己特 出老正告 絕');
    return {studyitem, lorem, overBackText, outBackText};
  }
}
</script>
<template>
<div class="study">
  <h1>遊留學</h1>
  <div class="studyBox">
    <div class="item" v-for="item in studyitem" :key="item.text" @mouseenter="overBackText(item.idx)" @mouseleave="outBackText(item.idx)">
          <img :src="item.src" alt="" >
          <p>{{item.text}}</p>
          <span :class="['backText', 'backText'+item.idx]">{{lorem}}</span>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.study{
  width:80%;
  margin:auto;
  padding: 80px 0;
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
  > .studyBox{
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:768px){
      flex-direction: column;
    }
    >.item{
      width:350px;
      height: 250px;
      position: relative;
      margin:25px;
      @media screen and (max-width:768px){
        margin:10px;
        width:100%;
      }
      >img{
        width:100%;
        height: 100%;
        object-fit: cover;
        -webkit-filter:brightness(.8);
      }
      > p {
        position: absolute;
        bottom:15px;
        left:15px;
        font-size: 25px;
        font-weight: 600;
        color:#fff;
      }
      > .backText{
        position: absolute;
        top: 0;
        left:0;
        width:100%;
        height: 100%;
        background-color: rgba(255,255,255,.95);
        padding: 20px;
        display: flex;
        align-items: center;
        z-index: 10;
        transition: all .3s ease;
        opacity: 0;
        cursor: default;
      }
    }
  }
}
</style>