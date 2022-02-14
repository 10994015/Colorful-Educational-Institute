<script>
import {reactive} from "vue";
export default {
    setup(){
        const imgbox = reactive([
            {src:'https://lh6.googleusercontent.com/LxjyGXbYTcgFQ3iYAqMUZ4a7UVzK42qTT1kYtQKA1pNf-hKACUYWvEon9V0RzTT53BVMToGSArxfhcUG95hfDPBoCOt6CFv_Uq1QXRYJlCOepClrneBKtPssuCzTR2fgYQ=w1280'},
            {src:'https://www.ice-finland.club/styles/images/summer/da.jpg'},
            {src:'https://www.ice-finland.club/styles/images/summer/00.jpg'},
            {src:'https://www.ice-finland.club/styles/images/summer/da2.png'},
            {src:'https://www.ice-finland.club/styles/images/banner/class-2.jpg'},
        ])
        return {imgbox};
    }
}
</script>
<template>
  <div class="john">
      <div class="left">
          <div class="imgbox">
              <img v-for="item in imgbox" :src="item.src" :key="item.src" alt="">
          </div>
          <Transition  name="fade">
            <i class="fa-solid fa-circle-chevron-left leftbtn"></i>
          </Transition >
          <Transition  name="fade">
            <i class="fa-solid fa-circle-chevron-right rightbtn"></i>
          </Transition >
      </div>
      <div class="right">
          <h2>約翰小學</h2>
          <p>位於新竹縣竹東市的約翰小學</p>
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
    }
}
</style>