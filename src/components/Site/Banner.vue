<script>
export default {

}
</script>
<template>
  <div class="banner">
      <img src="@/assets/images/site.jpg" alt="">
      <h2>想上課卻沒有場地嗎?</h2>
      <p>我們眾多文教機構合作，並提供場地的租借使用，歡迎各大文教機構使用</p>
  </div>
</template>
<style lang="scss" scoped>
.banner{
    width:100%;
    height: 600px;
    position: relative;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    > img{
        width:100%;
        height: 100%;
        object-fit: cover;
    }
    >h2{
        position: absolute;
        top: 250px;
        left:150px;
        color:#fff;
        font-weight: 600;
        font-size: 48px;
        text-shadow: 0px 2px 5px #000;
        @media screen and (max-width:1024px){
            left:100px;
        }
        @media screen and (max-width:700px){
            left:50px;
        }
    }
    > p {
        position: absolute;
        top:320px;
        left:150px;
        color:#fff;
        font-weight: 600;
        font-size: 20px;
        text-shadow: 0px 2px 5px #000;
        @media screen and (max-width:1024px){
            left:100px;
        }
        @media screen and (max-width:700px){
            left:50px;
        }
        @media screen and (max-width:500px){
            top:400px;
        }
    }
}
</style>