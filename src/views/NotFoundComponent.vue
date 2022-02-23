
<script>
import {useRouter} from "vue-router";
export default {
    components:{
    },
    setup(){
        const router = useRouter();
        const gotoPage = ()=>{
            router.go(-1);
        }
        return {gotoPage};
    }
}
</script>
<template>
  <div class="notfound">
      <h1>抱歉，找不到此頁面</h1>
      <p>您似乎訪問了一個損壞的鏈接或輸入了該網站上不存在的 URL。</p>
      <a @click="gotoPage"><i class="fa-solid fa-angle-left"></i>返回上一頁</a>
  </div>
</template>

<style lang="scss" scoped>
.notfound{
    background-color: #0E1E25;
    padding-top: 8em;
    width:100%;
    height: 500px;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    > h1 {
        font-size: 48px;
        color:#f00;
        text-align: center;
    }
    >p {
        font-size: 25px;
        text-align: center;
        color:#fff;
        margin-bottom: 25px;
    }
    > a{
        display: block;
        color:#1484c4;
        text-align: center;
        font-size: 25px;
        font-weight: 600;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
        > i {
            margin-right: 5px;
        }
    }
}
</style>