
<script>
import {reactive, onMounted} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
export default {
    setup(){
        const route = useRoute();
        const store = useStore();
        const data = reactive({data:{}});
        const post = reactive([
            {id:1,title:"【Slang俚語教學】】",
            content:`英文俚語這是一個有趣好玩的主題🥳<br/><br/>

            相信大家都知道希臘神話中的特洛伊戰爭<br/>
            從故事中涵義延伸出了一些俚語<br/><br/>

            👇以下提供6個俚語給大家學習喔~<br/><br/>

            The Trojan War特洛伊戰爭<br/>
            1. An apple of discord 禍根<br/>
            2. Helen of Troy 傾國傾城、紅顏禍水<br/>
            3. Trojan horse 隱藏的危險、奸細<br/>
            4. Greek gift 陰謀<br/>
            5. A Judgement of Paris 一個困難的決定<br/>
            6. Achilles' heel 罩門<br/><br/>

            冰芬文教帶領大家快樂學習~~<br/><br/>

            👉生活美語、美語會話、外師美語、有效學習<br/><br/>

            🎉更多課程內容資訊等你來詢問<br/>
            歡迎立即聯絡我們🙂<br/>
                `,
                img:"/images/01.png",
                smallimg:[
                    {img:"/images/01.png"},
                ],smallvidio:{
                },videoshow:false
                },
                {id:2,title:"【國際領袖營International Leadership Winter Camp】",
                content:`🌏Your first step towards globalization.<br/><br/>

                大家好久不見👋<br/>
                過了個寒假大家有把英文都還給老師了嗎?😂<br/>
                冰芬文教這個寒假過得很充實呢！<br/><br/>

                🌟在這邊跟大家分享這次國中小冬令營活動紀錄小短片<br/><br/>


                🎉更多課程內容資訊等你來詢問<br/>
                歡迎立即聯絡我們🙂<br/><br/>

                📩線上立即報名：https://forms.gle/Re42rSd7ZSUZJ9gx5
                `,
                img:"/images/1647832103346.jpg",
                smallimg:[
                ],
                smallvidio:[
                    {video:"/video/study.MOV"},
                ],
                videoshow:true},
                {id:3,title:"【凡出示加入官方Line@證明，報名課程享免費多送一堂課！】",
                content:`冰芬美語文理補習班開課嘍~~~<br/><br/>

                🥳凡出示加入官方Line@證明 <br/>
                報名課程享免費多送一堂課！<br/><br/>

                🏆SuccessByChoice<br/>
                讓孩子贏在起跑點🏃♀️<br/><br/>

                實體課程<br/>
                ◎國小課後照顧 (免費課後小點心)<br/>
                一二年級$5500/月<br/>
                三四年級$5200/月<br/>
                五六年級$4800/月<br/>
                ◎國小美語<br/>
                一期$3200/4堂<br/>
                ◎國小數學<br/>
                一期$3200/4堂<br/><br/>

                ⭐️一次報名符合以下任一條件，學費再享折扣⭐️<br/>
                1.多科<br/>
                2.多期<br/>
                3.親友揪團<br/>
                4.領有低收證明<br/>
                📣優惠 名額有限，報名從速~<br/><br/>


                🎉更多課程內容資訊等你來詢問<br/>
                歡迎立即聯絡我們🙂<br/><br/>

                📩線上立即報名：https://forms.gle/Re42rSd7ZSUZJ9gx5
                `,
                img:"/images/03.png",
                smallimg:[
                    {img:"/images/03.png"},
                ],
                smallvidio:{
                },
                videoshow:false},
                {id:4,title:"【清大STEAM教育課程一堂只需500元！！】",
                content:`👨🔬STEAM SCHOOL<br/>
                國小、國中STEAM專班🧪<br/>
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
                歡迎立即聯絡我們🙂<br/><br/>

                📩線上立即報名：https://docs.google.com/forms/d/e/1FAIpQLScatc_x1idtFYbqkr59NtDr-Xf06efWwiE1gPIMk--ea_WS_w/viewform?usp=pp_url
                `,
                img:"/images/004.png",
                smallimg:[
                    {img:"/images/004.png"},
                    {img:"/images/0001.png"},
                    {img:"/images/0002.png"},
                    {img:"/images/0003.png"},
                    {img:"/images/0004.png"},
                    {img:"/images/0005.png"},
                    {img:"/images/0006.png"},
                    {img:"/images/0007.png"},
                    {img:"/images/0008.png"},
                ],
                smallvidio:{
                },
                videoshow:false},
                {id:5,title:"【機器人STEAM教室，全國機器人大賽等著你！】",
                content:`
                🥳冰芬跟祥儀機器人合作開班在新竹嘍~<br/>
                就在3月的每週日即將開課🎉<br/><br/>

                這次我們針對國小學生開設了機器人入門課程<br/><br/>

                👇以下為場次時間、課程主題及課程費用<br/><br/>

                ◎2022/03/06(日) 上午09:00~12:00 <br/>
                主題：機器人的秘密~太陽能仿生暴<br/>
                費用：1500元/人<br/>
                ◎2022/03/13(日) 上午09:00~12:00 <br/>
                主題：航空小飛手<br/>
                費用：2599元/人<br/>
                ◎2022/03/20(日) 上午09:00~12:00 <br/>
                主題：急速彈射器<br/>
                費用：2599元/人<br/>
                ◎2022/03/27(日) 上午09:00~12:00 <br/>
                主題：機器人防疫小幫手<br/>
                費用：3280元/人<br/>
                授課地點：Johan School 新竹縣竹北市勝利八街一段181號<br/><br/>

                ⭐️揪同學一起報名，前十位學費還享100元折扣喔⭐️<br/>
                📣優惠名額有限，報名從速~~<br/><br/>

                ⚠️注意事項<br/>
                1.每場次滿20人開課，未達20人全額退費<br/>
                2.可帶回主題DIY<br/>
                3.實際課程內容依照班級進度彈性調整<br/><br/>

                ※參加此部分課程的同學將有資格參加今年度11月全國機器人大賽！<br/><br/>

                🎉更多課程內容資訊等你來詢問<br/>
                歡迎立即聯絡我們🙂
                `,
                img:"/images/001.png",
                smallimg:[
                    {img:"/images/00001.png"},
                    {img:"/images/00002.png"},
                    {img:"/images/00003.png"},
                    {img:"/images/00004.png"},
                    {img:"/images/00005.png"},
                ],
                smallvidio:{
                },
                videoshow:false},
                {id:6,title:"【TVBS擁有主播夢的同學機會來了】",
                content:`
                2022 TVBS主播營<br/>
                4月營隊課程來嘍～<br/><br/>

                🗣說話不僅技術，也是門藝術，讓孩子學習自信表達！<br/>
                培養孩子口語表達能力、邏輯思考力、臨場應變、國際觀，以及增加孩子自信心👍🏼<br/>
                最後一天活動也將由專業主播及記者，帶著孩子體驗電視台模擬播報，讓他們有難忘回憶❤️<br/><br/>

                👇以下為報名資格、課程時間、授課地點<br/>
                報名資格：國三～高三<br/>
                授課時間：<br/>
                4/7、4/8 晚上18:00～21:00<br/>
                4/9 上午9:00～下午17:00<br/>
                4/10 上午10:00～下午17:00<br/>
                授課地點：<br/>
                4/7-4/9 卡爾實驗中學（新竹縣竹北市縣政二路596號）<br/>
                4/10 內湖總部大樓攝影棚（台北市內湖區瑞光路451號）<br/><br/>

                📌活動費用及詳細內容請洽<br/>
                聯絡信箱：service@karlschool.org<br/>
                聯絡電話：03-5589868<br/><br/>

                ⚠️注意事項<br/>
                1.滿15人開課，至多20人，未達15人則不開課<br/>
                2.上課地點請自行前往<br/><br/>

                🎉更多課程內容資訊等你來詢問<br/>
                歡迎立即聯絡我們🙂
                `,
                img:"/images/002.png",
                smallimg:[
                    {img:"/images/101.jpg"},
                    {img:"/images/102.jpg"},
                    {img:"/images/103.jpg"},
                    {img:"/images/104.jpg"},
                    {img:"/images/105.jpg"},
                    {img:"/images/106.jpg"},
                    {img:"/images/107.jpg"},
                    {img:"/images/108.jpg"},
                    
                ],
                smallvidio:{
                },
                videoshow:false},
        ])
        const handnewsClickModule = (e)=>{
            console.log(e.target.src);
            store.dispatch('handnewsClickModule',e.target.src);
        }
        onMounted(()=>{
            post.forEach((item)=>{
                if(item.id == route.params.id){
                    data.data = item;
                }
            })
        })

        return {post, handnewsClickModule, data};
    }
}
</script>
<template>
  <div id="text">
      <h2>{{data.data.title}}</h2>
      <img :src="data.data.img" alt="">
      <p v-html="data.data.content"></p>
      <div class="smallImgBox">
          <img v-for="simg in data.data.smallimg" :src="simg.img" :key="simg.img" alt="" @click="handnewsClickModule($event)">
      </div>
      <div class="smallVideoBox" v-if="data.data.videoshow">
          <video  width="320" height="240" v-for="svideo in data.data.smallvidio" controls :key="svideo.video" v-show="data.data.videoshow">
                <source  :src="svideo.video" type="video/mp4" >
          </video>
      </div>
  </div>
</template>

<style lang="scss" scoped>
#text{
    display: flex;
    flex-direction: column;
    width:56%;
    margin:auto;
    padding-top: 8em;
    padding-bottom: 50px;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    @media screen and (max-width:1024px){
        width:80%;
    }
    > img{
        width:100%;
        margin:25px auto;
        min-height: 200px;
        height: auto;
        object-fit: cover;
         @media screen and (max-width:550px){
            height: 300px;
        }
    }
    > h2{
        font-size: 30px;
        color:#333;
        margin:auto;
        width:100%;
        display: block;
    }
    > p{
        width:100%;
        color:#666;
        margin:25px auto;
        font-size: 18px;
        @media screen and (max-width:1024px){
            margin:25px auto 75px;
        }
    }
    > .smallVideoBox{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        width:100%;
        > video{
            margin:5px 0;
            margin-right: 5px;
        }
    }
    > .smallImgBox{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        width:100%;
        margin:auto;
         @media screen and (max-width:500px){
                justify-content: center;
            }
        > img{
            width:30%;
            height: 250px;
            margin:5px 0;
            margin-right: 10px;
            object-fit: cover;
            display: block;
            cursor: pointer;
            @media screen and (max-width:768px){
                width:48%;
            }
            @media screen and (max-width:500px){
                width:100%;
                margin-right: 0;
                margin: 10px 0;
            }
        }
    }
}
</style>