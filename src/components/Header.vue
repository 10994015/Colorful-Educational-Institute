
<script>
import {reactive} from "vue";
export default {
    setup(){
        const nav = reactive([
            {name:'首頁',url:'/'},
            {name:'關於我們',url:'/about'},
            {name:'課程規劃',url:'###'},
            {name:'人才培育',url:'###'},
            {name:'場地租借',url:'###'},
            {name:'聯絡我們',url:'###'},
        ]);
        return {nav};
    }
}
</script>
<template>
    
    <header id="header">
            <router-link to="/" id="logo"></router-link>
            <i class="fas fa-bars" :class="{open:openMenu}" id="menu" @click="handopenMenu"></i>
            <ul :class="{open:openMenu}">
                <li v-for="item in nav" :key="item.name"><router-link :to="item.url">{{item.name}}</router-link></li>
            </ul>
        </header>
</template>

<style lang="scss" scoped>
#header{
    width:100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 150px;
    position: relative;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999999999999999999;
    background-color: #fff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
    #menu{
        position: absolute;
        top: calc(50% - 20px);
        right:25px;
        font-size: 40px;
        color:#1484c4;
        z-index: 99999;
        cursor: pointer;
        display: none;
    }
    #menu.open{
        color:#fff;
        &::before{
            content : "\f00d";
        }
    }
   
    #logo{
        display: block;
        min-width:180px;
        height: 46px;
        background:url('~@/assets/images/logo.png') center no-repeat;
        background-size: contain;
    }
   
    ul{
        display: flex;
        height: 100%;
        li{
            display: inline-block;
            width:120px;
            height: 100%;
            a{
                color:#616e76;
                font-size: 17px;
                font-weight: 600;
                width:100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                &:hover{
                    background-color: #F1F1F1;
                    border-bottom: 10px #1484c4 solid;
                }
            }
        }
    }

    @media screen and (max-width:1024px){
        justify-content: center;
        padding:0;
        position: fixed;
        z-index: 99999999;
        #menu{
            display: block;
        }
        ul{
            position: fixed;
            top: -100vh;
            left: 0;
            width:100%;
            height: 100vh;
            background-color: rgba(20, 132, 196, .8);
            z-index: 999;
            flex-direction: column;
            justify-content: center;
            transition: .5s;
            li{
                width:100%;
                height: 80px;
                text-align: center;
                a{
                    color:#fff;
                    font-size: 28px;
                    &:hover{
                        background-color: transparent;
                        border-bottom: none;
                    }
                }
            }
        }
        ul.open{
            top:0;
        }
    }
}

</style>