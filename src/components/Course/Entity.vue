<script>
import {useStore} from "vuex";
import {ref, reactive} from "vue";
export default {
    setup(){
       const store = useStore();
       const imgbox = reactive([
           {src:'https://lh3.googleusercontent.com/p/AF1QipMEf5UnSUXkDuS4vDM6BXixES1E_Ef8gp-o2CfW=w768-h768-n-o-v1'},
           {src:'https://lh3.googleusercontent.com/p/AF1QipOlXfwtP8rOgHu16ZqADwsKbwvSTuQI0XCMNtjF=w768-h768-n-o-v1'},
           {src:'https://lh3.googleusercontent.com/p/AF1QipOI-iTF-aqI4Hq11b4Z84nMaBR_Lf-8NARsHh3S=w768-h768-n-o-v1'},
           {src:'https://lh3.googleusercontent.com/p/AF1QipN72swDIgEjvpzS8HazT2P4AamNpgMQ_kBADof6=w768-h768-n-o-v1'},
           {src:'https://lh3.googleusercontent.com/p/AF1QipONzldNKGV2CpvPrGI-oIn4oOUwVIjpb3ZS-m9B=w768-h768-n-o-v1'},
           {src:'https://lh3.googleusercontent.com/p/AF1QipPd8e0-NGJxxsWkYNkRRyBC0YxWI2aCE3U1ohms=w768-h768-n-o-v1'},
           {src:'https://lh3.googleusercontent.com/p/AF1QipPOxk1YzWLa1zK-DwbXlL5V-1InabNkUcMoFztN=w768-h768-n-o-v1'},
           {src:'https://lh3.googleusercontent.com/p/AF1QipMeXSpprYS9nBhKWmKGZvUjlRsZgEUYTsgLJey0=w768-h768-n-o-v1'},
           {src:'https://lh3.googleusercontent.com/p/AF1QipP9iPti6C7W31as8re31YGfL2H-MzYobZy96W40=w768-h768-n-o-v1'},
       ])
       const handOpenPhoto = (e) =>{
           store.dispatch('handOpenPhoto',e.target.src)
       }
        return {imgbox, handOpenPhoto};
    }
}
</script>
<template>
  <div class="entity">
      <h1>實體課程</h1>
      <div class="content">
          <div class="top">
             <div class="text">
                  <h2>冰芬美語補習班</h2>
                  <p>
                      ◎國小課後照顧 (免費課後小點心)<br />
                        一二年級$5500/月<br />
                        三四年級$5200/月<br />
                        五六年級$4800/月<br />
                        ◎國小美語<br />
                        一期$3200/4堂<br />
                        ◎國小數學<br />
                        一期$3200/4堂<br /><br />
                        ⭐️一次報名符合以下任一條件，學費再享折扣⭐️<br />
                        1.多科<br />
                        2.多期<br />
                        3.親友揪團<br />
                        4.領有低收證明<br /><br />
                        📣優惠名額有限，報名從速~~<br />
                        🎉更多課程內容資訊歡迎來詢問🙂
                       
                  </p>
             </div>
             <img src="@/assets/images/benfen.png" alt="">
          </div>
          <div class="bottom">
                <h2>照片牆</h2>
                <div class="imgbox">
                     <img :src="item.src" alt="" :key="item.src" v-for="item in imgbox" @click="handOpenPhoto($event)">
                </div>
            </div>
           <div class="center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.386173646672!2d121.01740541483659!3d24.78222678409088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468363ae7276ba5%3A0x4e22c2db67d6fe92!2zMzAw5paw56u55biC5p2x5Y2A5YWJ5b6p6Lev5LiA5q61Mjcx6JmfM-aokw!5e0!3m2!1szh-TW!2stw!4v1645111991019!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                  <div class="text">
                      <p>聯絡人 : 03-5670081</p>
                      <p>地址 : 300台灣新竹市東區光復路一段271號3樓</p>
                      <p>營業時間 : 周一至周五10:00-17:00</p>
                  </div>
             </div>
      </div>
  </div>
</template>
<style lang="scss" scoped>
.entity{
    width:100%;
    background-color: #1C1C1C;
    height: auto;
    padding: 60px 0;
    color:#fff;
    > h1 {
        text-align: center;
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
    > .content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        > .top{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 30px 0;
            > .text {
                margin:0 25px;
                > h2{
                    font-size: 33px;
                    margin-bottom: 8px;
                }
                > p{
                    font-size: 21px;
                    font-weight: 500;
                    width:300px;
                }
            }
            > img {
                width:50%;
                margin:0 25px;
            }
        }
        > .center{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            width:80%;
            margin:30px 0;
            > iframe{
                width:100%;
                height: 300px;
                margin:25px auto;

            }
            > .text {
                margin:30px 0;
                > p {
                    font-size: 21px;
                    margin: 3px 0;
                    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
                }
            }
        }
        > .bottom{
            width:100%;
            > h2 {
                text-align: center;
                font-weight: 500;
                margin: 25px 0;
                font-size: 24px;
            }
            > .imgbox {
                    display: grid;
                    grid-template-columns: 300px 300px 300px;
                    grid-template-rows: 300px 300px 300px;
                    grid-column-gap: 30px;
                    grid-row-gap: 30px;
                    justify-content: center;
                >img {
                    width:100%;
                    cursor: pointer;
                }

            }
        }
    }
}

</style>