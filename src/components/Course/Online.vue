

<script>
export default {

}
</script>
<template>
<div class="online">
  <h1>線上課程</h1>
  <div class="content">
      <div class="live">
          <h2>直播課程</h2>
          <p class="text">完成五步驟輕鬆上課去~</p>
          <ul class="step">
                <li>報名上課</li>
                <li>安排上課時間</li>
                <li>安排專業教師</li>
                <li>選擇一對一或一對多教學</li>
                <li>立即上課</li>
          </ul>
      </div>
      <div class="line"></div>
      <div class="prepare">
          <h2>預錄課程</h2>
          <p class="text">完成五步驟輕鬆上課去~</p>
          <ul class="step">
                <li>報名上課</li>
                <li>安排上課時間</li>
                <li>安排專業教師</li>
                <li>選擇一對一或一對多教學</li>
                <li>立即上課</li>
          </ul>
      </div>
  </div>
  <div class="where">
  </div>
</div>
</template>
<style lang="scss" scoped>
.online{
    padding: 60px 0;
    width:100%;
    margin:auto;
    background-color: #F5F5F5;
    >h1{
        text-align: center;
        color:#222;
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
            background-color: #555;
        }
    }
    > .content{
        width:80%;
        height: auto;
        padding: 80px 50px;
        margin:auto;
        background-color: #fff;
        display: flex;
        justify-content: center;
        >.line{
            width:1px;
            height: 300px;
            background-color: #333;
            margin:0 20px;
        }
        > .live{
            width:50%;
            > h2{
                text-align: center;
                font-weight: 500;
                font-size: 26px;
            }
            > p{
                text-align: center;
                font-size: 23px;
                color:#1484c4;
            }
            > .step{
                width:70%;
                margin:auto;
                li{
                    font-size: 22px;
                    margin:15px 0;
                }
            }
        }
        > .prepare{
            width:50%;
            > h2{
                text-align: center;
                font-size: 26px;
                font-weight: 500;
            }
             > p{
                text-align: center;
                font-size: 23px;
                color:#1484c4;
            }
            > .step{
                width:70%;
                margin:auto;
                li{
                    font-size: 22px;
                    margin:15px 0;
                }
            }
        }
    }
    > .where{
        width:80%;
        height: auto;
        padding: 80px 50px;
        margin:auto;
        >h2{
            text-align: center;
            font-weight: 500;
            font-size: 26px;
            width:100%;
        }
    }
}
</style>