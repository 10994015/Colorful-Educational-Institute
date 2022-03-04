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
      <!-- content 左邊放課表，右邊放教室的圖片 -->
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
          <!-- 照片放到場地租借 -->
          
           
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
            @media screen and (max-width:768px){
                flex-direction: column;
            }
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
                @media screen and (max-width:768px){
                    width:80%;
                    margin-top: 30px;
                }
            }
        }
        > .center{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            width:80%;
            margin:30px 0;
            @media screen and (max-width:520px){
                width:90%;
            }
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
        
    }
}

</style>