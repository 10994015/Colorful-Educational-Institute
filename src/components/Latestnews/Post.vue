

<script>
import {reactive, ref } from "vue";
export default {
 setup(){
        const post = reactive([
            {id:1,title:"【冰芬學習園地】",
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
                img:"/01.png",
                smallimg:{
                    img:"/01.png",
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
                img:"/error.png",
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
                img:"/03.png",
                smallimg:{
                    img:"/03.png",
                }},

        ])
        const searchText = ref('');
        const newsearchArr = reactive([]);
        const searchClick = ()=>{
            // console.log(searchText.value);
            newsearchArr.length = 0;
            post.forEach((item)=>{
               if(item.title.includes(searchText.value)){
                   newsearchArr.push(item);
               }
            })
            
        }
        searchClick();
        // console.log("rerere".includes("re"));
        
        return {post, searchText, searchClick, newsearchArr};
    }
}
</script>
<template>
  <div id="latestnews">
      <div class="search">
          <input type="text" placeholder="搜尋文章..." v-model="searchText" @keyup="searchClick">
          <button @click="searchClick"><i class="fas fa-search"></i></button>
      </div>
      <div class="post">
          <div class="post-item" v-for="item in newsearchArr" :key="item.title">
              <img :src="item.img" alt="">
              <div class="content">
                  <h2 class="title">{{item.title}}</h2>
                  <p v-html="item.content"></p>
                  <router-link :to="`/Latestnews/${item.id}`" class="continue"><span>CONTINUE READING</span> <i class="fas fa-arrow-right"></i></router-link>
              </div>
          </div>
      </div>
      <div class=""></div>
  </div>
</template>
<style lang="scss" scoped>
#latestnews{
    padding-top: 8em;
    min-height: 600px;
    height: auto;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    padding-bottom: 3em;
    >.search {
        width:60%;
        margin:auto;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width:1024px) {
            width:80%;
        }
        > input{
            width:95%;
            height: 40px;
            padding:0 10px;
            outline: none;
            border:1px #666 solid;
            font-size: 16px;
        }
        > button {
            width:40px;
            height: 40px;
            background-color:rgb(9, 76, 116);
            color:#fff;
            outline: none;
            border:none;
            cursor: pointer;
            &:hover{
                background-color: rgb(6, 56, 85);
            }
        }
    }
    > h1{
        text-align: center;
        margin-bottom: 25px;
        color:#1484c4;
    }
    > .post{
        width:60%;
        margin: auto;
        display: flex;
        flex-direction: column-reverse;
        @media screen and (max-width:1024px){
            width:80%;
        }
        @media screen and (max-width:500px){
            width:90%;
        }
        .post-item{
            display: flex;
            border-bottom: 1px #ccc solid;
            padding:15px 0;
            @media screen and (max-width:1024px){
                flex-direction: column;
                width:90%;
                margin: auto;
            }
            >img{
                width:350px;
                height: 210px;
                object-fit: cover;
                margin-right: 25px;
                @media screen and (max-width:1024px){
                    width:100%;
                    margin-right: 0px;
                }
            }
            @media screen and (max-width:1024px){
                width:90%;
            }
            > .content{
                width:500px;
                padding: 8px;
                position: relative;
                @media screen and (max-width:1024px){
                    width:90%;
                    padding-bottom: 80px; 
                    margin: auto;
                }
                >p{
                    color:#777;
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }
                > .continue{
                    position: absolute;
                    bottom: 15px;
                    right:15px;
                    width:200px;
                    height: 40px;
                    padding:0 12px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #fff;
                    border:2px #333 solid;
                    color:#333;
                    font-size: 14px;
                    &:hover{
                        background-color: #333;
                        color:#fff;
                        transition: all .5s ease;
                    }
                }
            }
        }
        .title{
            height: 70px;
            line-height: 70px;
            font-size: 22px;
            padding: 0 10px;
            color:#333;
            font-weight: 600;
            display: block;
            position: relative;
            overflow : hidden;
            text-overflow : ellipsis;
            white-space : nowrap;
        }
    }
}
</style>