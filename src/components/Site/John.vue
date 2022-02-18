<script>
import {reactive, ref} from "vue";
import {useStore} from "vuex";
export default {
    setup(){
        const store = useStore();
        const handLightbox = (e)=>{
            store.dispatch('handLightbox', e.target.src);
        }
        const handOpenModule = (e)=>{
            store.dispatch('handOpenModule',e.target.value);
        }
        const isJohn = ref(false);
        const isJohnover = ()=>{
            isJohn.value = true;
        }
        const isJohnout = ()=>{
            isJohn.value = false;
        }
        const johnIdx = ref(0);
        const handLeftClick = ()=>{
            const jhonimg = document.getElementsByClassName('jhonimg');
            johnIdx.value --;
            if(johnIdx.value < 0 ){
                johnIdx.value = jhonimg.length - 1 ;
            }
            for(let i=0;i<jhonimg.length;i++){
                jhonimg[i].style.transform = `translateX(-${johnIdx.value}00%)`;
            }
        }
        const handRightClick = ()=>{
            const jhonimg = document.getElementsByClassName('jhonimg');
            johnIdx.value ++;
            if(johnIdx.value > jhonimg.length - 1 ){
                johnIdx.value = 0;
            }
            for(let i=0;i<jhonimg.length;i++){
                jhonimg[i].style.transform = `translateX(-${johnIdx.value}00%)`;
            }
        }
        const imgbox = reactive([
            {src:'https://10994015.github.io/images/images/b.jpg'},
            {src:'https://www.ice-finland.club/styles/images/summer/da.jpg'},
            {src:'https://www.ice-finland.club/styles/images/summer/00.jpg'},
            {src:'https://www.ice-finland.club/styles/images/summer/da2.png'},
            {src:'https://www.ice-finland.club/styles/images/banner/class-2.jpg'},
        ])
        return {imgbox, handLeftClick, handRightClick, handLightbox, isJohn, isJohnover, isJohnout, handOpenModule};
    }
}
</script>
<template>
  <div class="john">
      <div class="left" @mouseenter="isJohnover" @mouseleave="isJohnout">
          <div class="imgbox">
              <img v-for="item in imgbox" :src="item.src" :key="item.src" alt="" class="jhonimg" @click="handLightbox($event)">
          </div>
          <Transition  name="fade">
            <i class="fa-solid fa-circle-chevron-left leftbtn" @click="handLeftClick" v-show="isJohn"></i>
          </Transition >
          <Transition  name="fade">
            <i class="fa-solid fa-circle-chevron-right rightbtn" @click="handRightClick" v-show="isJohn"></i>
          </Transition >
      </div>
      <div class="right">
          <h2>約翰小學</h2>
          <p>地址：校本部 🚩 新竹縣竹北市勝利八街一段181號<br />
          每周六 參觀日 10:00-16:30 (請先預約)<br />
          預約電話：03-6581938, 0953-755677<br />
            Email: service@johanschool.org</p>
            <button value="約翰小學" @click="handOpenModule($event)">我要租借</button>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.john{
    display: flex;
    justify-content: center;
    padding:30px 0;
    background-color: #2B2C32;
    color:#fff;
    > .left{
        width:500px;
        position: relative;
        > .imgbox {
            width:500px;
            height: 350px;
            display: flex;
            overflow: hidden;
            > img {
                min-width:100%;
                height: 100%;
                cursor: pointer;
                object-fit: cover;
                transform: translateX(0%);
                transition: all .5s ease;
            }
        }
        .leftbtn{
            position: absolute;
            top: calc(50% - 18px);
            left:-36px;
            font-size: 36px;
            cursor: pointer;
            color:rgba(255, 135, 110, .8);
        }
        .rightbtn{
            position: absolute;
            top: calc(50% - 18px);
            right:-36px;
            font-size: 36px;
            cursor: pointer;
            color:rgba(255, 135, 110, .8);
        }
    }
    > .right {
        width:500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        >p{
            text-align: right;
            margin-bottom: 20px;
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