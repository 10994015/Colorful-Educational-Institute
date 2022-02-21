
<script>
import {reactive} from "vue";
export default {
    setup(){
        const post = reactive([
            {id:"1",title:"2021/7/23 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉",content:"內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文"},
            {id:"2",title:"2021/7/24《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉",content:"1"},
            {id:"3",title:"2021/7/25 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉",content:"2"},
            {id:"4",title:"2021/7/26 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉",content:"3"},
            {id:"5",title:"2021/7/26 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉",content:"4"},
            {id:"6",title:"2021/7/26 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉",content:"5"},
            {id:"7",title:"2021/7/26 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉",content:"6"},
            {id:"8",title:"2021/7/26 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉",content:"7"},
            {id:"9",title:"2021/7/26 《冰芬帶孩子繽紛一夏》2021暑期線上夏令營即將在8月開始囉",content:"8"},
        ])

        return {post};
    }
}
</script>
<template>
  <div id="text">
      <img src="@/assets/images/a.jpg" alt="">
      <h2>{{post[0].title}}</h2>
      <p>{{post[0].content}}</p>
  </div>
</template>

<style lang="scss" scoped>
#text{
    display: flex;
    flex-direction: column;
    width:56%;
    margin:auto;
    padding-top: 8em;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    @media screen and (max-width:1024px){
        width:80%;
    }
    > img{
        width:100%;
        margin:25px auto;
        height: 450px;
        object-fit: cover;
         @media screen and (max-width:550px){
            height: 300px;
        }
    }
    > h1{
        font-size: 21px;
        color:#333;
        margin:auto;
        width:100%;
        display: block;
    }
    > p{
        width:100%;
        color:#666;
        margin:25px auto;
        @media screen and (max-width:1024px){
            margin:25px auto 75px;
        }
    }
}
</style>