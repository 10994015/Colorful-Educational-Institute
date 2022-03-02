<script>
import {ref } from "vue";
export default {
     props:{
        title:{
            tpye:Array,
            default:[],
        },
        lorem:{
            type:String,
            default:"",
        }
    },
    setup(props){
        const introtext = ref(`Success by Choice 選擇冰芬，使你的未來繽紛！
                            夢想是動力的來源，想要闖出一片屬於自己的天空，需要有高度的競爭力，冰芬在此提供雙語學習、Steam科學、程式設計、表演藝術及國際證照等專業課程，給予孩子多元學習與發展的機會，並開創無限可能。
                            `)
        return {props, introtext};
    }
}
</script>
<template>
   <section id="course">
            <h1>{{props.title[0].title}}</h1>
            <div class="content">
                <div>
                    <h2>標題</h2>
                    <img src="http://localhost:8080/03.png" alt="">
                </div>
                <div>
                    <h2>標題</h2>
                    <img src="http://localhost:8080/03.png" alt="">
                </div>
                <div>
                    <h2>標題</h2>
                    <img src="http://localhost:8080/03.png" alt="">
                </div>

                <!-- <div class="contentText">
                    <h2>實現孩子的夢想</h2>
                    <p>{{introtext}}</p>
                    <router-link to="/Course">SEE MORE</router-link>
                </div> -->
                
            </div>
            
        </section>
        
       
        
</template>
<style lang="scss" scoped>
#course{
    background-color: #30415D;
    > h1{
        width:100%;
        text-align: center;
        color:#EEC71C;
        
        font-size: 30px;
    }
    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width:960px){
            flex-direction: column;
        }
        h2{
            text-align: center;
            color:#fff;
        }
         img{
            margin: 10px 50px;
            width:250px;
            @media screen and (max-width:500px){
                width:90%;
                margin:10px auto;
                
            }
        }
        .contentText{
            font-family: '微軟正黑體';
            margin: 10px 50px;
            h2{
                font-size: 24px;
                color:#ff0;
                margin-bottom: 15px;
                @media screen and (max-width:500px){
                    text-align: center;
                }
            }
            p{
                width:400px;
                color:#fff;
                @media screen and (max-width:500px){
                    width:95%;
                    margin:10px auto;
                }
            }
            a{
                display: block;
                width: 150px;
                height: 50px;
                background-color: #EEC71C;
                color: #fff;
                text-align: center;
                line-height: 50px;
                font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
                border-radius: 6px;
                margin-top: 20px;
                font-weight: 600;
                &:hover{
                    transform: scale(1.1);
                    transition: .5s;
                }
            }
        }
    }
}
</style>