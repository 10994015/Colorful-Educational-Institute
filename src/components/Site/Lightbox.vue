<script>
import {useStore} from "vuex";
import { computed } from 'vue';

export default {
    setup(){
       const store = useStore();
        // console.log(store.getters.isSiteImg);
       const isSiteImg = computed(()=>{
           return store.getters.isSiteImg;
       })
       const imgsrc = computed(()=>{
           return store.getters.lightboxsrc;
       })
       const closeLightbox = ()=>{
           store.dispatch('handLightbox');
       }
        return {
            isSiteImg,
            closeLightbox,
            imgsrc
            };
    }
}
</script>
<template>
<div class="lightbox" v-if="isSiteImg">
    <div class="back" @click="closeLightbox"></div>
    <img  :src="imgsrc" alt="">
</div>
</template>

<style lang="scss" scoped>
.lightbox{
    position: fixed;
    top: 0;
    left:0;
    width:100%;
    height: 100%;
    z-index: 9999999999999999999999;
    display: flex;
    justify-content: center;
    align-items: center;
    .back{
        position: absolute;
        top: 0;
        left:0;
        width:100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
    }
    > img{
        width:800px;
        height: 500px;
        object-fit: cover;
        border:8px #fff solid;
        z-index: 9999999999999999999999999999999;
        transform: scale(1);
        animation: openImg .2s linear;
        @media screen and (max-width:850px){
        width:600px;
        height:500px;
    }
    @media screen and (max-width:768px){
        width:85%;
        height: 450px;
    }
    @media screen and (max-width:600px){
        width:85%;
        height: 350px;
    }
    }
    
}
@keyframes openImg {
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
}

</style>