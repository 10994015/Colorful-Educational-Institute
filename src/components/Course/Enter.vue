<script>
export default {

}
</script>
<template>
  <div class="enter">
      <h1>企業學校團班</h1>
      <div class="item">
          <img src="@/assets/images/a.jpg" alt="">
          <div class="text">
              <h2>企業學校團班</h2>
              <p>線上家教：我們將派專業教師，於指定日期時間於線上進行授課</p>
              <p>企業團班：我們將派專業講師團隊至企業團體授課</p>
          </div>
      </div>
      <!-- 一塊就好 -->
      <!-- <div class="item item-reverse">
          <div class="text">
              <h2>這是標題</h2>
              <p>點選此處並開始輸入。 聞臺加 相玩 處我麼 他生戰女取 因頭同 樓活生歡 從得 的起研 不綠她節了 念來 生示 留相都 確兒可石 己特 出老正告 絕</p>
          </div>
          <img src="@/assets/images/a.jpg" alt="">
      </div> -->
  </div>
</template>

<style lang="scss" scoped>
.enter{
    width:100%;
    height: auto;
    background-color: #1C1C1C;
    padding: 60px 0;
    @media screen and (max-width:768px){
        padding: 60px 0;
        min-height: 1000px;
    }
    > h1 {
        text-align: center;
        color:#fff;
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 25px;
        position: relative;
        @media screen and (max-width:768px){
            margin-bottom: 200px;
        }
        &::before{
            content:'';
            position: absolute;
            top: 60px;
            left:calc(50% - 50px);;
            width:100px;
            height: 2px;
            background-color: #fff;
        }
    }
    > .item{
        width:90%;
        margin:40px auto;
        display: flex;
        height: 200px;
        justify-content: center;
        @media screen and (max-width:768px){
            flex-direction: column;
            height: auto;
            width:95%;
        }
        &.item-reverse{
            @media screen and (max-width:768px){
                flex-direction: column-reverse;
            }
        }
        > img{
            width:300px;
            height: 100%;
            object-fit: cover;
            margin:30px 10px;
            @media screen and (max-width:768px){
                width:90%;
            }
        }
        > .text{
            width:600px;
            height: 100%;
            margin:30px 10px;
            background-color: #fff;
            padding: 15px;
            @media screen and (max-width:768px){
                width:95%;
                height: auto;
            }
            h2{
                font-size: 24px;
                font-weight: 500;
                color:#223;

            }
            > p {
                width:320px;
                margin-top: 10px;
                @media screen and (max-width:380px){
                    width:90%;
                }
            }
        }
    }
}
</style>