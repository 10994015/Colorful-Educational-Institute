<script>
export default {

}
</script>
<template>
  <div class="banner">
      <img src="@/assets/images/site.jpg" alt="">
      <h2>場地租借</h2>
      <p>我們與很多文教機構合作，並提供場地的租借使用</p>
  </div>
</template>
<style lang="scss" scoped>
.banner{
    width:100%;
    height: 600px;
    position: relative;
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
    }
    > p {
        position: absolute;
        top:320px;
        left:150px;
        color:#fff;
        font-weight: 600;
        font-size: 20px;
        text-shadow: 0px 2px 5px #000;
    }
}
</style>