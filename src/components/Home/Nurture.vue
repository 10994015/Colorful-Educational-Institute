<script>
import {reactive} from "vue";
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
            {class:'far fa-building',text:'參加見習',rightopen:true},
            {class:'fas fa-stamp',text:'取得證明',rightopen:true},
            {class:'fas fa-chalkboard-teacher',text:'成為專業教師',rightopen:false},
        ]);
        return {props, stepItem};
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
                    <h2>專業派師</h2>
                    <p>{{props.lorem}}</p>
                </div>
                </div>
        </section>
</template>
<style lang="scss" scoped>
#nurture{
    padding: 80px 0 100px 0;
    .content{
        .contentText{
            width:600px;
            margin:auto;
            font-family: "微軟正黑體";
            margin-top: 100px;

            @media screen and (max-width:650px){
                width:90%;
            }
            h2{
                color:#1484c4;
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