<script>
export default {

}
</script>
<template>
  <div class="camp">
      <div class="entity">
          <h1 class="title"><span class="titleline"></span>實體課</h1>
          <p>學校考試不及格、作業好多都不會怎麼辦？交給冰芬，精緻小班制課程，由優秀的老師帶領同學建立好的基礎，及持之以恆的學習態度，一步一步向前邁進，讓你看見未來曙光！</p>
            <li>◎國小課後照顧</li>
            <li>◎國小美語班</li>
            <li>◎國小數學班</li>
            <li>◎國小自然班</li>
            <li>◎國中美語班</li>
            <li>◎高中美語班</li>
            <li>◎成人美語班</li>
            <li>◎外師美語會話班</li>
            <li>◎Steam教育</li>
            <li>◎美語證照檢定班</li>
            <li>◎商用美語班</li>
      </div>
      <div class="online">
          <h1 class="title"><span class="titleline"></span>線上直播課</h1>
          <p>疫情延燒，為避免群聚增加感染風險，線上課程崛起，只須提前做好預約，不僅便利性高，且透過鏡頭及麥克風或耳機，就能和老師進行即時互動，也節省了通勤時間成本。</p>
            <li>◎外師美語會話班</li>
            <li>◎國中小英文班</li>
            <li>◎國中小數學班</li>
            <li>◎Steam school</li>
            <li> ◎即興表演</li>
            <li> ◎藝術賞析</li>
            <li> ◎短片製作</li>
            <li> ◎Scratch遊戲製作</li>
            <li> ◎Html、CSS網頁設計</li>
            <li> ◎科學玩具、3D模型</li>
            <li> ◎3D製圖</li>
            <li> ◎RPG遊戲開發</li>
      </div>
      <div class="pre">
          <h1 class="title"><span class="titleline"></span>線上預錄課</h1>
          <p>因應各行各業人士，上班忙碌，下班時間不固定，但卻非常有上進心，想不斷精進自己的技能及增加社會競爭力，因此我們也推出物超所值的預錄課程，不局限於時間及地點，短短中午吃飯時間、上下班通勤時間，人手一機登入直接上課，不須提前預約，且在購買期限內都能無限次重複播放喔！</p>
            <li>◎外師美語會話班</li>
            <li>◎國中小英文班</li>
            <li>◎國中小數學班</li>
            <li>◎Steam school</li>
            <li>◎即興表演</li>
            <li>◎藝術賞析</li>
            <li>◎短片製作</li>
            <li>◎Scratch遊戲製作</li>
            <li>◎Html、CSS網頁設計</li>
            <li>◎科學玩具、3D模型</li>
            <li>◎3D製圖</li>
            <li>◎RPG遊戲開發</li>

      </div>
  </div>
</template>

<style lang="scss" scoped>
.camp{
    width:100%;
    height: 1500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f1f1f1;
     > .entity,.online{
        width:700px;
        margin-bottom: 50px;
    }
    > .pre{
        width:700px;
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