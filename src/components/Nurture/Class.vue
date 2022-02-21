<script>
import {reactive} from "vue";
export default {
  setup(){
    const box = reactive([
      {class:'far fa-thumbs-up',name:'國中小數學'},
      {class:'far fa-thumbs-up',name:'國中小英文'},
      {class:'far fa-thumbs-up',name:'國中小國文'},
      {class:'far fa-thumbs-up',name:'多益培訓班'},
      {class:'far fa-thumbs-up',name:'英檢培訓班'},
      {class:'far fa-thumbs-up',name:'程式設計班'},
    ])
    return {box };
  }
}
</script>
<template>
  <div class="class">
    <h2>開課不受限，開始傳授您擅長的技術</h2>
      <div class="classBox">
          <div class="box" v-for="item in box" :key="item.name">
          <i :class="item.class"></i>
          <h3>{{item.name}}</h3>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.class{
 
  background-color: #1c1c1c;
  color:#fff;
  padding:70px 0;
  > h2{
    text-align: center;
    font-weight: 500;
    color:#fff;
    margin-bottom: 50px;
    font-size: 30px;
  }
  > .classBox{
      display: grid;
      grid-template-columns: 180px 180px 180px;
      grid-template-rows: 180px 180px;
      justify-content: center;
      align-items: center;
      grid-column-gap:80px;
      grid-row-gap: 30px;
      @media screen and (max-width:768px){
        grid-template-columns: 150px 150px 150px;
        grid-template-rows: 150px 150px;
      }
      @media screen and (max-width:650px){
        grid-template-columns: 150px 150px ;
        grid-template-rows: 150px 150px 150px;
      }
      @media screen and (max-width:500px){
        grid-column-gap:35px;
      }
    >.box{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f1f1f1;
        border-radius: 50%;
        width:180px;
        height: 180px;
        @media screen and (max-width:768px){
          width:150px;
          height: 150px;
        }
        > i{
          color:#FF6662;
          font-size: 60px;
           @media screen and (max-width:768px){
            font-size: 50px;
          }
        }
        > h3{
          font-size: 22px;
          color:#000;
          @media screen and (max-width:768px){
            font-size: 20px;
          }
        }
      }
  }
  
}
</style>