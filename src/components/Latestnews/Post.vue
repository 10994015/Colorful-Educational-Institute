

<script>
import {reactive } from "vue";
export default {
 setup(){
        const post = reactive([
            {title:"2021/7/23 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉",content:"內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文"},
            {title:"2021/7/24《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉"},
            {title:"2021/7/25 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉"},
            {title:"2021/7/26 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉"},
            {title:"2021/7/26 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉"},
            {title:"2021/7/26 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉"},
            {title:"2021/7/26 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉"},
            {title:"2021/7/26 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉"},
            {title:"2021/7/26 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉"},
        ])
        return {post};
    }
}
</script>
<template>
  <div id="latestnews">
      <div class="search">
          <input type="text" placeholder="搜尋文章...">
          <button><i class="fas fa-search"></i></button>
      </div>
      <div class="post">
          <div class="post-item" v-for="item in post" :key="item.title">
              <img src="@/assets/images/a.jpg" alt="">
              <div class="content">
                  <h2 class="title">{{item.title}}</h2>
                  <p>{{item.content}}</p>
                  <a href="###" class="continue"><span>CONTINUE READING</span> <i class="fas fa-arrow-right"></i></a>
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
        .post-item{
            display: flex;
            border-bottom: 1px #ccc solid;
            padding:15px 0;

            >img{
                width:350px;
                height: 210px;
                object-fit: cover;
                margin-right: 25px;
            }
            > .content{
                width:500px;
                padding: 8px;
                position: relative;
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