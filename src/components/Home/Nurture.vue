<script>
import {reactive, ref} from "vue";
export default {
    props:{
        title:{
            type:Array,
            default:[],
        },
        lorem:{
            type:String,
            default:"",
        }
    },
    setup(props){
        const stepItem = reactive([
            {class:'fas fa-user-graduate',text:'大學以上學歷',rightopen:true},
            {class:'fas fa-glasses',text:'參加培訓課程',rightopen:true},
            {class:'far fa-building',text:'參加見習活動',rightopen:true},
            {class:'fas fa-stamp',text:'取得證明',rightopen:true},
            {class:'fas fa-chalkboard-teacher',text:'成為專業教師',rightopen:false},
        ]);
        const introtext = ref(`
        一身的才華，就差一點點的火候，讓冰芬文教助你一臂之力！我們提供加拿大專業Tesol課程、實作演練及考核測驗，並且實習一個月，最終取得專業證照，一整套的教學，讓你發揮自己的天賦，成為有影響力的專業講師，透過難得的機會，使更多有志於多元教育的人才能被看見。`)
        return {props, stepItem, introtext};
    }
}
</script>
<template>
   <section id="nurture">
            <h1>{{props.title[1].title}}</h1>
            <div class="content">
                <div class="step">
                    <div class="stepItem" v-for="item in stepItem" :key="item.text">
                        <div>
                            <i :class="item.class"></i>
                            <p>{{item.text}}</p>
                        </div>
                        <i class="fas fa-long-arrow-alt-right" v-show="item.rightopen"></i>
                   </div>
                </div>
                
                <div class="contentText">
                    <div>
                        <h2>Tesol</h2>
                        <p>不止是英語的實力，更強調的是「教學」。
                        專業學術訓練範圍包括：語言學、語言教學法、方法學、外語教學理論與方法、教材設計、課程設計、課程管理、跨國文化的溝通與認識以及各種測驗評量、研究及教學實習。
                        </p>
                    </div>
                    <div>
                        <h2>Steam</h2>
                        <p>STEAM是指跨域整合科學、科技、工程、藝術與數學。課程結束，必須參與教學演示檢定及通過檢核。為維持師資水準，定期參與師培與回訓機制，培訓新科技素材與技術，開發新課程與相關評量機制，並期望帶給學生們更高品質跨域教育。</p>
                    </div>
                </div>
                </div>
        </section>
</template>
<style lang="scss" scoped>
#nurture{
    padding: 80px 0 100px 0;
    .content{
        .contentText{
            width:900px;
            margin:auto;
            font-family: "微軟正黑體";
            margin-top: 100px;
            display: flex;
            justify-content: space-around;

            @media screen and (max-width:650px){
                width:90%;
                flex-direction: column;
                margin:50px auto;
                
            }
            > div{
                width:400px;
                height: 220px;
                text-align: center;
                margin: 0 50px;
                border: 1px #ddd solid;
                border-radius: 8px;
                padding: 15px;
                box-sizing: border-box;
                box-shadow: 0px 5px 15px #ccc;
                &:hover{
                    transform: translateY(-5px);
                    transition: all .5s ease;
                }
                @media screen and (max-width:650px){
                width:95%;
                flex-direction: column;
                margin:20px auto;
                
            }
            }
            h2{
                color:#1484c4;
                margin-bottom: 5px;
            }
        }
        .step{
            display: flex;
            justify-content: center;
            margin:auto;
            align-items: center;
            @media screen and (max-width:920px){
                flex-direction: column;
            }
            .stepItem{
                display: flex;
                align-items: center;
                justify-content: center;
                > i{
                    font-size: 60px;
                    color:#E93A55;
                    @media screen and (max-width:1200px){
                        font-size: 40px;
                    }
                    @media screen and (max-width:920px){
                        display: none;
                    }
                }
                > div{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width:200px;
                    @media screen and (max-width:1200px){
                        width:150px;
                    }
                    @media screen and (max-width:920px){
                        margin: 20px 0;
                    }
                    > i {
                        font-size: 60px;
                        color:#E93A55;
                        width:120px;
                        height: 120px;
                        text-align: center;
                        line-height: 120px;
                        border:1px #E93A55 solid;
                        border-radius: 50%;
                        @media screen and (max-width:1200px){
                            font-size: 40px;
                            width:80px;
                            height: 80px;
                            line-height: 80px;
                        }
                        @media screen and (max-width:920px){
                            font-size: 60px;
                            width:120px;
                            height: 120px;
                            line-height: 120px;
                        }
                    }
                    > p {
                        font-size: 21px;
                        font-weight: 600;
                        color:#E93A55;
                        margin-top: 15px;
                    }
                }
            }
        }
    }
}
</style>