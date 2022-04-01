
<script>
import {useRouter} from "vue-router";
export default {
    components:{
    },
    setup(){
        const router = useRouter();
        const gotoPage = ()=>{
            router.go(-1);
        }
        return {gotoPage};
    }
}
</script>
<template>
  <div class="opacity">

          <h1>關於冰芬</h1>
      <p>【清大STEAM教育課程一堂只需500元！！】</p>
      <p>小、國中STEAM專班🧪<br/>
                🎊 3/16開課啦！<br/><br/>

                為協助清大推廣STEAM教育課程<br/>
                開放體驗實作課程，一堂費用只需500元！！<br/><br/>

                大家對於STEAM教育還是充滿問號嗎❓❓❓<br/>
                藉此機會，讓冰芬帶領你們深入了解STEAM教育<br/><br/>

                體驗實作課程樂趣😁<br/>
                超優質STEAM教育團隊👍<br/>
                打造豐富又有趣的教學內容<br/>
                👣走過路過千萬不要錯過~~<br/><br/>

                跨領域學習，讓孩子自我成長，培養孩子在生活中解決問題的能力💪<br/><br/>

                🧬課程時段：<br/>
                ◎國小STEAM初階班/進階班<br/>
                每週三16：00~17：30<br/>
                ◎國中STEAM專班<br/>
                每週三18：00~19：30<br/>
                課程費用：16800元/期<br/>
                ❗️早鳥優惠：12600元/期 (於3/9前完成報名)<br/>
                授課地點：冰芬美語文理補習班<br/>
                新竹市東區光復路一段271號3樓 (原聯合補習班址，台新銀行樓上)<br/><br/>

                ⭐️課程期滿可取得清大頒發的結業證書，此證書可做為孩子未來學習歷程內容<br/><br/>

                ⚠️注意事項<br/>
                1.滿10人開課，未達10人全額退費<br/>
                2.教材費皆另計<br/><br/>

                🎉更多課程內容資訊等你來詢問<br/>
                歡迎立即聯絡我們🙂<br/><br/></p>
      </div>
  <div class="notfound">
     <div class="content">
            <h1>關於冰芬</h1>
        <p>色彩一直是療育人心的良藥 繽紛=冰芬 意旨戒掉呆板數學及爛英文的學習方式 利用國外的學習模式 "更高的自由度、更強的互動性和更深的參與感" 讓學習更加放鬆、快樂</p>
        <a @click="gotoPage"><i class="fa-solid fa-angle-left"></i>返回上一頁</a>
     </div>
  </div>
</template>

<style lang="scss" scoped>
.opacity{
    position: absolute;
    top: -9999999999999999px;
    left:-999999999999999px;
    opacity: 0;
    z-index: -99999999999999;
}
.notfound{
    background-color: #0E1E25;
    padding-top: 8em;
    width:100%;
    height: 500px;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  .content{
      width:50%;
      background-color: #0E1E25;
      margin:auto;
        > h1 {
        font-size: 48px;
        color:#f00;
        text-align: center;
        }
        >p {
            font-size: 25px;
            text-align: center;
            color:#fff;
            margin-bottom: 25px;
        }
        > a{
            display: block;
            color:#1484c4;
            text-align: center;
            font-size: 25px;
            font-weight: 600;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
            > i {
                margin-right: 5px;
            }
        }
    }
}
</style>