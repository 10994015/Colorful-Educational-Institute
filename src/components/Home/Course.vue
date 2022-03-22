<script>
import {ref, reactive } from "vue";
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
        const courselist = reactive([
            {title:"STEAM SCHOOL", img:"/images/003.png", id:"/Latestnews/4"},
            {title:"機器人STEAM教室", img:"/images/001.png", id:"/Latestnews/5"},
            {title:"TVBS贏在說話主播營", img:"/images/002.png", id:"/Latestnews/6"},
        ])
        return {props, courselist };
    }
}
</script>
<template>
   <section id="course">
            <h1>{{props.title[0].title}}</h1>
            <div class="content">
                <router-link :to="item.id" v-for="item in courselist" :key="item.title">
                    <h2>{{item.title}}</h2>
                    <img :src="item.img" />
                </router-link>
            </div>
        </section>
        
       
        
</template>
<style lang="scss" scoped>
#course{
    background-color: #30415D;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
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
            margin-bottom: 10px;
        }
         img{
            margin: 10px 50px;
            width:250px;
            @media screen and (max-width:500px){
                width:90%;
                margin:10px auto;
                margin-bottom: 30px;
                display: block;
                
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