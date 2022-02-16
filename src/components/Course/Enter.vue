<script>
export default {

}
</script>
<template>
  <div class="enter">
      <h1>將課程帶入你們家</h1>
      <div class="item">
          <img src="@/assets/images/a.jpg" alt="">
          <div class="text">
              <h2>標題標題標題標題標題標題</h2>
              <p>點選此處並開始輸入。 聞臺加 相玩 處我麼 他生戰女取 因頭同 樓活生歡 從得 的起研 不綠她節了 念來 生示 留相都 確兒可石 己特 出老正告 絕</p>
          </div>
      </div>
      <div class="item">
          <div class="text">
              <h2>標題標題標題標題標題標題</h2>
              <p>點選此處並開始輸入。 聞臺加 相玩 處我麼 他生戰女取 因頭同 樓活生歡 從得 的起研 不綠她節了 念來 生示 留相都 確兒可石 己特 出老正告 絕</p>
          </div>
          <img src="@/assets/images/a.jpg" alt="">
      </div>
  </div>
</template>

<style lang="scss" scoped>
.enter{
    width:100%;
    height: auto;
    background-color: #1C1C1C;
    padding: 60px 0;
    > h1 {
        text-align: center;
        color:#fff;
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 25px;
        position: relative;
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
        > img{
            width:300px;
            height: 100%;
            object-fit: cover;
            margin:30px 10px;
        }
        > .text{
            width:600px;
            height: 100%;
            margin:30px 10px;
            background-color: #fff;
            padding: 15px;
            h2{
                font-size: 24px;
                font-weight: 500;
                color:#223;

            }
            > p {
                width:320px;
                margin-top: 10px;
            }
        }
    }
}
</style>