<script>
import { reactive } from "vue";
export default {
  setup(){
    const card = reactive([
      {class:'fas fa-paint-brush',title:'TESOL課程',text:'不止是英語的實力，更強調的是「教學」。專業學術訓練範圍包括：語言學、語言教學法、方法學、外語教學理論與方法、教材設計、課程設計、課程管理、跨國文化的溝通與認識以及各種測驗評量、研究及教學實習。'},
      {class:'fas fa-vote-yea',title:'STEAM教育',text:'STEAM是指跨域整合科學、科技、工程、藝術與數學。課程結束，必須參與教學演示檢定及通過檢核。為維持師資水準，定期參與師培與回訓機制，培訓新科技素材與技術，開發新課程與相關評量機制，並期望帶給學生們更高品質跨域教育。'},
      {class:'fas fa-handshake',title:'參加對象',text:'1. 職前教師<br />2. 在職教師<br />3. 想增進教學技能的各方人才'},
    ])
    return {card};
  }
}
</script>
<template>
<div class="bigtitle">
  <h4>人才培育</h4>
  <p>一身的才華，就差一點點的火候，讓冰芬文教助你一臂之力！我們提供加拿大專業Tesol課程、實作演練及考核測驗，並且實習一個月，最終取得專業證照，一整套的教學，讓你發揮自己的天賦，成為有影響力的專業講師，透過難得的機會，使更多有志於多元教育的人才能被看見。</p>
</div>
  <div class="cardbox">
      <div class="card" v-for="item in card" :key="item.title">
        <i :class="item.class"></i>
        <h2>{{item.title}}</h2>
        <p v-html="item.text"></p>
      </div>
  </div>
</template>
<style lang="scss" scoped>
.bigtitle{
  margin-top: 80px;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h4{
    font-size: 36px;
    color:#1484c4;
    margin-bottom: 10px;
    text-align: center;
  }
  p{
    width:700px;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 18px;
    margin:auto;
    text-align: center;
    @media screen and (max-width:700px){
      width:90%;
    }
  }
}
.cardbox{
    width:100%;
    height: auto;
    display: flex;
    padding-top: 4em;
    padding-bottom: 50px;
    justify-content: center;
    @media screen and (max-width:768px){
      flex-direction: column;
      align-items: center;
    }
    > .card{
      width:300px;
      height: 420px;
      border: 1px #ccc solid;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding:30px 20px;
      box-shadow: 0px 5px 10px #ccc;
      transition: all .5s ease;
      margin:20px 25px;
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      @media screen and (max-width: 1024px){
        width:280px;
      }
      @media screen and (max-width:768px){
        width:350px;
        height: 400px;
      }
       @media screen and (max-width:414px){
          width:90%;
          height: 400px;
        }
      &:hover{
        transform: translateY(-10px);
        transition: all .5s ease;
      }
      > i {
        font-size: 80px;
        color:#1484c4;
        margin-bottom: 30px;
      }
      > h2{
        color:#333;
        font-weight: 500;
        margin-bottom: 30px;
      }
      > p{
        color:#222;
        line-height: 1.6;
      }
    }
}
</style>