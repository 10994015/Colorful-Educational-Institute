
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
            {id:"1",title:"【冰芬學習園地】",
            content:`#Slang #俚語<br />
                這是一個有趣好玩的主題🥳<br />
                <br />
                相信大家都知道希臘神話中的特洛伊戰爭<br />
                從故事中涵義延伸出了一些俚語<br />
                <br />
                👇以下提供6個俚語給大家學習喔~<br />
                The Trojan War<br />
                1. An apple of discord #根 <br />
                2. Helen of Troy 傾國傾城、紅顏禍水<br />
                3. Trojan horse 隱藏的危險、奸細<br />
                4. Greek gift 陰謀<br />
                5. A Judgement of Paris 一個困難的決定<br />
                6. Achilles' heel 罩門 <br />
                <br />
                冰芬文教帶領大家快樂學習 <br />
                <br />
                👉#生活美語 #美語會話 #外師美語 #有效學習 <br />
                <br />
                📩冰芬官網：https://www.ice-finland.club<br />
                📩歡迎臉書粉絲團私訊報名或詢問 <br />
                📩加入官方line報名或詢問：@516ttumg <br />
                #英文課程 #國小美語 #國中美語 #高中美語 #成人美語 #全民英檢 #證照檢定 #托福 #雅思 #線上課程 #EnglishClass #EnglishLearning #英文 #學英文 #英文課 #線上上課<br />
                `,
                img:"http://localhost:8080/01.png",
                smallimg:{
                    img:"http://localhost:8080/01.png",
                }},
                {id:2,title:"【冰芬文教 課程推薦】",
                content:`🌏Your first step towards #globalization.<br />
                #國際領袖營 #InternationalLeadership <br />
                #WinterCamp<br />
                <br />
                大家好久不見👋<br />
                過了個寒假大家有把英文都還給老師了嗎?😂<br />
                冰芬文教這個寒假過得很充實呢！<br />
                <br />
                🌟在這邊跟大家分享這次國中小冬令營活動紀錄小短片<br />
                <br />
                <br />
                🎉更多課程內容資訊等你來詢問🙂<br />
                📩歡迎臉書粉絲團私訊詢問 <br />
                📩線上立即報名：https://forms.gle/Re42rSd7ZSUZJ9gx5<br />
                📩電子信箱：Jenny.Peng@ice-finland.pro<br />
                📩官方line：@516ttumg<br />
                📩冰芬官網：https://www.ice-finland.club<br />
                #營隊 #外師 #國小 #國中 #高中 #課後照顧  #英文 #數學 #自然 #生活會話  #聽 #讀 #說 #寫 #EnglishLearning #LearningEnglish<br />
                `,
                img:"http://localhost:8080/error.png",
                smallimg:{
                    
                }},
                {id:3,title:"【#冰芬文教 課程推薦】",
                content:`🏆SuccessByChoice<br />
                讓孩子贏在起跑點 🏃♀️ <br />
                <br />
                🥳凡出示加入官方Line@證明 <br />
                報名課程享免費多送一堂課！<br />
                <br />
                #冰芬美語文理補習班 #實體課程 <br />
                <br />
                ◎國小課後照顧 (免費課後小點心)<br />
                一二年級$5500/月<br />
                三四年級$5200/月<br />
                五六年級$4800/月<br />
                ◎國小美語<br />
                一期$3200/4堂<br />
                ◎國小數學<br />
                一期$3200/4堂<br />
                <br />
                ⭐️一次報名符合以下任一條件，學費再享折扣⭐️<br />
                1.多科<br />
                2.多期<br />
                3.親友揪團<br />
                4.領有低收證明<br />
                📣優惠 名額有限，報名從速~~<br />
                <br />
                <br />
                🎉更多課程內容資訊等你來詢問🙂<br />
                📩歡迎臉書粉絲團私訊詢問 <br />
                📩線上立即報名：https://forms.gle/Re42rSd7ZSUZJ9gx5<br />
                📩電子信箱：Jenny.Peng@ice-finland.pro <br />
                📩官方line：@516ttumg<br />
                📩冰芬官網：https://www.ice-finland.club<br />
                #課後照顧 #國小 #英文 #數學 #自然 #生活會話 #外師 #聽 #讀 #說 #寫 #EnglishLearning #LearningEnglish<br />
                `,
                img:"http://localhost:8080/03.png",
                smallimg:{
                    img:"http://localhost:8080/03.png",
                }},

        ])
        const handnewsClickModule = (e)=>{
            console.log(e.target.src);
            store.dispatch('handnewsClickModule',e.target.src);
        }
        onMounted(()=>{
            // console.log(route.params.id);
            post.forEach((item)=>{
                if(item.id == route.params.id){
                    data.data = item;
                }
                
            })
            console.log(data);
            
        })

        return {post, handnewsClickModule, data};
    }
}
</script>
<template>
  <div id="text">
      <img :src="data.data.img" alt="">
      <h2>{{data.data.title}}</h2>
      <p v-html="data.data.content"></p>
      <div class="smallImgBox">
          <img v-for="simg in data.data.smallimg" :src="simg.img" :key="simg.img" alt="" @click="handnewsClickModule($event)">
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
    > h1{
        font-size: 21px;
        color:#333;
        margin:auto;
        width:100%;
        display: block;
    }
    > p{
        width:100%;
        color:#666;
        margin:25px auto;
        @media screen and (max-width:1024px){
            margin:25px auto 75px;
        }
    }
    > .smallImgBox{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width:100%;
        > img{
            width:33%;
            margin:5px 0;
            cursor: pointer;
        }
    }
}
</style>