<script>
export default {

}
</script>
<template>
  <div class="camp">
      <h1>講師派遣</h1>
      <div class="content">
          <div class="left">
              <p>想要為學生多安排外師或是專業的人才，增加學習的廣度，卻苦無適合的人才，冰芬讓你不用大海撈針，有效率地幫你找到心目中的NO.1。</p>
          </div>
          <div class="right">
              <img src="@/assets/images/camp.jpg" alt="">
          </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.camp{
    font-family: sans-serif, "微軟正黑體","Helvetica Neue", Helvetica, ;
    width:100%;
    > h1 {
        color:#1484C4;
        text-align: center;
        margin:25px 0;
    }
    > .content{
        width:85%;
        display: flex;
        justify-content: center;
        margin:auto;
        >.left{
            padding: 10px 25px;
            width:50%;
        }
        >.right{
            width:50%;
            padding: 10px 25px;
            > img{
                width:100%;
                height: 400px;
                object-fit: cover;
            }
        }
    }
}
</style>