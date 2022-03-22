<script>
export default {
    setup(){
        return {};
    }
}
</script>
<template>
  <div class="camp">
      <div class="winter">
          <h1 class="title"> <span class="titleline"></span> 冬令營</h1>
          <p>寒假來臨之際，冰芬希望能帶給大家繽紛的特色營隊，讓孩子們在遊戲中也能持續學習不間斷，啟發新潛能及培養課外才藝。點入參考更多活動課程，加快腳步報名加入我們的行列！</p>
          <h4>◎國際領袖外師營：</h4>
          <p>帶學生認識世界各國文化、旅遊英文單字及對話應用、希臘神話故事延伸及常用英文俚語、國際管理及領導能力訓練、以Response to Covid-19為主題，進行聯合國模擬會議活動</p>
            <li>1. 培訓領導技能、批判思考</li>
            <li>2. 強化團隊合作</li>
            <li>3. 執行計畫的能力</li>
            <li>4. 進度及目標管理的能力</li>
            <li>5. 問題解決的能力</li>
      </div>
      <div class="summer">
          <h1 class="title"><span class="titleline"></span>夏令營</h1>
          <p>炎炎夏日，讓冰芬帶孩子繽紛一夏，從雙語學習、Steam 科學、程式設計、樂高機器人到表演藝術等多元課程，為孩子開創無限可能。點入參考更多活動課程，加快腳步報名加入我們的行列！</p>
      </div>
      
  </div>
</template>

<style lang="scss" scoped>
.camp{
    width:100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f1f1f1;
    > .winter{
        width:700px;
        margin-bottom: 50px;
        >h1{
            margin-bottom: 6px;
        }
        >p{
            font-size: 18px;
        }
        >h4{
            font-size: 20px;
            margin-bottom: 4px;
        }
        >li{
            font-size: 17px;
        }
    }
    > .summer{
        width:700px;
        >h1{
            margin-bottom: 6px;
        }
        >p{
            font-size: 18px;
        }
        >h4{
            font-size: 20px;
            margin-bottom: 4px;
        }
        >li{
            font-size: 17px;
        }
    }
}
.title{
    display: flex;
    align-items: center;
    > .titleline{
        width:6px;
        height: 35px;
        background-color: #1484c4;
        display: block;
        margin-right: 10px;
    }
}
</style>