<script>
import {ref, reactive ,onMounted} from "vue";
import {useStore} from "vuex";
export default {
  setup(){
    const store = useStore();
    const handLightbox = (e)=>{
      // console.log(e.target.src);
      let src = e.target.src;
      
      store.dispatch('handLightbox',src);
    }
    const handOpenModule = (e)=>{
        store.dispatch('handOpenModule', e.target.value);
    }
    let imgIdx = ref(0);
    const isbenfen = ref(false);
    const isbenfenover = ()=>{
      isbenfen.value = true;
    }
    const isbenfenout = ()=>{
      isbenfen.value = false;
    }
    const handLeftFn = ()=>{
       const images = document.getElementsByClassName('images');
      imgIdx.value --;
      if(imgIdx.value < 0 ){
        imgIdx.value = images.length - 1 ;
      }
      for(let i=0;i<images.length;i++){
        images[i].style.transform = `translateX(-${imgIdx.value}00%)`;
      }
    }
    const handRightFn = ()=>{
      const images = document.getElementsByClassName('images');
      imgIdx.value ++;
      if(imgIdx.value>images.length - 1){
        imgIdx.value = 0;
      }

      for(let i=0;i<images.length;i++){
        images[i].style.transform = `translateX(-${imgIdx.value}00%)`;
      }
      
      
    }
    const imgbox = reactive([
      {src:'https://www.ice-finland.club/styles/images/english/about.jpg'},
      {src:'https://www.ice-finland.club/styles/images/summer/da.jpg'},
      {src:'https://www.ice-finland.club/styles/images/summer/00.jpg'},
      {src:'https://www.ice-finland.club/styles/images/summer/da2.png'},
      {src:'https://www.ice-finland.club/styles/images/banner/class-2.jpg'},
     
    ])
    
   
    return {isbenfen, handOpenModule, isbenfenover, isbenfenout, imgbox, handLeftFn, handRightFn, handLightbox};
  }
}
</script>
<template>
  <div class="benfen">
    <div class="left">
          <h2>冰芬美語</h2>
          <p>地址：校本部 🚩 新竹縣竹北市縣政二路596號<br />
          每周六 參觀日 10:00-16:30 (請先預約)<br />
          預約電話：03-558-9868<br />
            Email: service@karlschool.org </p>
            <button @click="handOpenModule($event)" value="冰芬美語">我要租借</button>
      </div>
  
    <div class="right" @mouseenter="isbenfenover" @mouseleave="isbenfenout">
      <div class="imgbox">
          <img :src="item.src" alt="" v-for="item in imgbox" :key="item.src" class="images" @click="handLightbox($event)">
      </div>
      <Transition  name="fade">
        <i class="fa-solid fa-circle-chevron-left leftbtn" v-show="isbenfen" @click="handLeftFn"></i>
      </Transition >
      <Transition  name="fade">
        <i class="fa-solid fa-circle-chevron-right rightbtn" v-show="isbenfen" @click="handRightFn"></i>
      </Transition >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.benfen{
  display: flex;
  justify-content: center;
  padding: 30px 25px;
   @media screen and (max-width:768px){
        flex-direction: column-reverse;
    }
  >.left {
        width:500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
         @media screen and (max-width:1024px){
            width:450px;
        }
        @media screen and (max-width:768px){
            margin: 20px auto;
        }
        @media screen and (max-width:600px){
        width:90%;
        }
         > button {
            width:180px;
            height: 40px;
            outline: none;
            border:none;
            font-size: 17px;
            color:#333;
            font-weight: 600;
            background-color: rgba(255, 135, 110, 1);
            cursor: pointer;
        }
       >h2 {
            @media screen and (max-width:1024px){
                padding:0 15px;
            }
        }
        >p{
            text-align: left;
            margin-bottom: 20px;
            @media screen and (max-width:1024px){
                padding:0 15px;
            }
        }
    }
  > .right {
    width:500px;
    position: relative;
     @media screen and (max-width:1024px){
          width:450px;
      }
      @media screen and (max-width:768px){
          margin: 20px auto;
      }
      @media screen and (max-width:600px){
          width:90%;
      }
    >.imgbox{
      width:500px;
      height: 350px;
      display: flex;
      overflow: hidden;
      @media screen and (max-width:1024px){
          width:100%;
      }
      @media screen and (max-width:600px){
          width:95%;
          height: 300px;
      }
      > img{
        min-width:100%;
        height: 100%;
        transform: translateX(0);
        transition: all .5s ease;
        object-fit: cover;
        cursor: pointer;
      }
    } 
     .leftbtn{
        position: absolute;
        top: calc(50% - 18px);
        left:-36px;
        font-size: 36px;
        cursor: pointer;
        color:rgba(27, 79, 125, .8);
      }
     .rightbtn{
        position: absolute;
        top: calc(50% - 18px);
        right:-36px;
        font-size: 36px;
        cursor: pointer;
        color:rgba(27, 79, 125, .8);
      }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
  opacity: .8;
}
.fade-leave-from {
  opacity: .8;
}
.fade-leave-to {
  opacity: 0;
}
</style>