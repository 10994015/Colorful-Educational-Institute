<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
    components:{
      Header,
      Footer,
    },
    
}
</script>
<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" >
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
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
