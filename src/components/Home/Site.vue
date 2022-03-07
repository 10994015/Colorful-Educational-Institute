<script>
import {reactive} from "vue";
export default {
    props:{
        title:{
            tpye:Array,
            default:[],
        }
    },
    setup(props){
        const siteItem = reactive([
            {img:"/a.jpg",title:"冰芬美語"},
            {img:"/b.jpg",title:"約翰小學"},
            {img:"/c.jpg",title:"卡爾中學"},
        ])
        return {props, siteItem};
    }
}
</script>
<template>
  <section id="site">
            <h1>{{props.title[2].title}}</h1>
            <div class="content">
                <div class="siteItem" v-for="item in siteItem" :key="item.title">
                    <div class="imgBox"><img :src="item.img" alt=""></div>
                    <h2>{{item.title}}</h2>
                </div>
              
            </div>
            <a href="###" class="seemore">SEE MORE</a>
        </section>
</template>

<style lang="scss" scoped>
#site{
    background-color: #30415D;
    
    h1{
        color:#EEC71C;
    }
    a.seemore{
        display: block;
        width:150px;
        height: 50px;
        background-color: #EEC71C;
        color:#fff;
        text-align: center;
        line-height: 50px;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        margin:auto;
        border-radius: 6px;
        font-weight: 600;
        &:hover{
            transform: scale(1.1);
            transition: .5s;
        }
    }
    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width:850px){
            flex-direction: column;
        }
        > .siteItem{
            width:300px;
            height: 280px;
            margin:20px 30px;
            @media screen and (max-width:1100px){
                width:250px;
                height: 280px;
                margin:20px 20px;
            }
            @media screen and (max-width:850px){
                width:350px;
                height: 300px;
                margin:20px auto;
            }
            @media screen and (max-width:400px){
                width:90%;
            }
            > .imgBox {
                width:300px;
                height: 200px;
                overflow: hidden;
                border-radius: 6px;
                @media screen and (max-width:1100px){
                    width:250px;
                }
                @media screen and (max-width:850px){
                    width:350px;
                    height: 250px;
                }
                @media screen and (max-width:400px){
                    width:90%;
                    margin: auto;
                }
                >img{
                    width:100%;
                    height: 100%;
                    object-fit: cover;
                    cursor: pointer;
                    border-radius: 6px;
                    &:hover{
                        transform: scale(1.1);
                        transition: all .5s ease;
                    }
                }
            }
            > h2{
                text-align: center;
                color:#fff;
                margin-top: 10px;
                font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
            }
        }
    }
}
</style>