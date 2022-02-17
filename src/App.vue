<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Scroll from "@/components/Scroll.vue";
import {ref} from "vue"
export default {
    components:{
      Header,
      Footer,
      Scroll,
    },
    setup(){
       const Title="冰芬文教";
      const top = ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
      return {top,Title};
    }
    
}
</script>
<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" >
  <Header />
  <router-view v-wechat-title="Title"></router-view>
  <Scroll :top="top" />
  <Footer />
</template>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    scroll-behavior: smooth;
}
section{
    padding: 50px 0;
    h1{
        width:100%;
        text-align: center;
        color:#1484c4;
        margin-bottom: 40px;
        font-size: 30px;
    }
}
</style>
