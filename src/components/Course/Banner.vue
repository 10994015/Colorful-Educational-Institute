<script>
export default {

}
</script>
<template>
  <div class="banner">
      <img src="@/assets/images/class.jpg" alt="">
      <div class="text">
          <h2>幫助您進行課程規劃</h2>
          <p>課程引入、線上課程、實體課程、遊留學</p>
      </div>
  </div>
</template>
<style lang="scss" scoped>
.banner{
    width:100%;
    height:500px;
    position: relative;
    > img {
        width:100%;
        height: 100%;
        object-fit: cover;
    }
    > .text {
        position: absolute;
        top: 250px;
        right:200px;
        color:#fff;
        background-color: #333;
        padding:25px;
        border-radius: 8px;
        @media screen and (max-width:768px){
            left:50px;
            width:250px;
        }
        > h2{
            text-shadow: 0.1em 0.1em 0.2em #000;
            font-size: 40px;
        }
        > p{
            text-shadow: 0.1em 0.1em 0.2em #000;
        }
    }
}
</style>