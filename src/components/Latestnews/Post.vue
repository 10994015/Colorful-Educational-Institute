

<script>
import {reactive, ref, onMounted } from "vue";
import axios from "axios";
export default {
 setup(){
        let post = reactive([]);
        onMounted(()=>{
            axios.get('http://localhost:5000/newsrouter/').then(res=>{
                console.log(res.data);
            })
        })
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