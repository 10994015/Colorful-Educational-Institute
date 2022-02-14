<script>
import {reactive, ref} from "vue";
import {useStore} from "vuex";
export default {
    setup(){
        const store = useStore();
        const handLightbox = (e)=>{
            store.dispatch('handLightbox', e.target.src);
        }
        const isKarl = ref(false);
        const isKarlover = () =>{
            isKarl.value = true;
        }
        const isKarlout = () =>{
            isKarl.value = false;
        }
        const karlIdx = ref(0);
        const handLeftMethod = ()=>{
            const karlimg = document.getElementsByClassName('karlimg');
            karlIdx.value --;
            if(karlIdx.value < 0 ){
                karlIdx.value = karlimg.length - 1;
            }
            for(let i=0;i<karlimg.length;i++){
                karlimg[i].style.transform = `translateX(-${karlIdx.value}00%)`;
            }
        }
        const handRightMethod = ()=>{
            const karlimg = document.getElementsByClassName('karlimg');
            karlIdx.value ++;
            if(karlIdx.value > karlimg.length - 1){
                karlIdx.value = 0;
            }
            for(let i=0;i<karlimg.length;i++){
                karlimg[i].style.transform = `translateX(-${karlIdx.value}00%)`;
            }
        }
        const imgbox = reactive([
            {src:'https://www.karlschool.org/uploads/karlschool/images/202105122207243668.jpg'},
            {src:'https://www.ice-finland.club/styles/images/english/about.jpg'},
            {src:'https://www.ice-finland.club/styles/images/summer/00.jpg'},
            {src:'https://www.ice-finland.club/styles/images/summer/da2.png'},
            {src:'https://www.ice-finland.club/styles/images/banner/class-2.jpg'},
        ])
        return {imgbox, handLightbox, isKarl, isKarlover, isKarlout, handLeftMethod, handRightMethod};
    }
}
</script>
<template>
  <div class="karl">
      <div class="left">
          <h2>卡爾中學</h2>
          <p>位於新竹縣竹東鎮的卡爾中學</p>
      </div>
      <div class="right" @mouseenter="isKarlover" @mouseleave="isKarlout">
          <div class="imgbox">
              <img @click="handLightbox($event)" v-for="item in imgbox" :src="item.src" :key="item.src" class="karlimg">
          </div>
        <Transition  name="fade">
            <i class="fa-solid fa-circle-chevron-left leftbtn" v-show="isKarl" @click="handLeftMethod"></i>
        </Transition >
        <Transition  name="fade">
            <i class="fa-solid fa-circle-chevron-right rightbtn" v-show="isKarl" @click="handRightMethod"></i>
        </Transition >
      </div>
  </div>
</template>

<style lang="scss" scoped>
.karl{
    display: flex;
    justify-content: center;
    padding: 30px 0;
    >.left {
        width:500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    >.right{
        width:500px;
        position: relative;
        > .imgbox {
            width:500px;
            height: 350px;
            display: flex;
            overflow: hidden;
            > img {
                min-width: 100%;
                height: 100%;
                cursor: pointer;
                object-fit: cover;
                transition: all .5s ease;
                transform: translateX(0%);
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