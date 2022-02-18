<script>
import { reactive } from "vue";
export default {
  setup(){
    const card = reactive([
      {class:'fas fa-handshake',title:'標題標題標題1',text:'冰芬致力打造專業教學平台，受眾皆為想認真學習及增強英文能力的人，讓您的教學能精準地被看見。'},
      {class:'fas fa-paint-brush',title:'標題標題標題2',text:'冰芬致力打造專業教學平台，受眾皆為想認真學習及增強英文能力的人，讓您的教學能精準地被看見。'},
      {class:'fas fa-vote-yea',title:'標題標題標題3',text:'冰芬致力打造專業教學平台，受眾皆為想認真學習及增強英文能力的人，讓您的教學能精準地被看見。'},
    ])
    return {card};
  }
}
</script>
<template>
  <div class="cardbox">
      <div class="card" v-for="item in card" :key="item.title">
        <i :class="item.class"></i>
        <h2>{{item.title}}</h2>
        <p>{{item.text}}</p>
      </div>
  </div>
</template>
<style lang="scss" scoped>
.cardbox{
    width:100%;
    height: auto;
    display: flex;
    padding-top: 8em;
    padding-bottom: 50px;
    justify-content: center;
    > .card{
      width:300px;
      height: 350px;
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
      }
    }
}
</style>