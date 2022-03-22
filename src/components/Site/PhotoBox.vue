<script>
import {reactive, onMounted } from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
export default {
    setup(){
        const route = useRoute();
        const routenum = Number(route.params.id);
        console.log(routenum);
        
        const store = useStore();
        const imgbox = reactive([
            {src:'/colorful/LINE_ALBUM_冰芬_220222_0.jpg',id:1},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_1.jpg',id:1},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_2.jpg',id:1},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_5.jpg',id:1},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_6.jpg',id:1},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_8.jpg',id:1},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_9.jpg',id:1},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_10.jpg',id:1},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_15.jpg',id:1},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_17.jpg',id:1},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_19.jpg',id:1},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_20.jpg',id:1},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_21.jpg',id:1},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_22.jpg',id:1},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_25.jpg',id:1},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_26.jpg',id:1},
            {src:'/images/b.jpg',id:3},
           
        ])
            const handOpenPhoto = (e) =>{
            console.log(e.target.src);
            store.dispatch('handOpenPhoto',e.target.src)
        }
        return {imgbox, handOpenPhoto, routenum}
    }
}
</script>
<template>
  <div class="bottom">
        <h2>照片牆</h2>
        <div class="imgbox">
                <img :src="item.src" alt="" :key="item.src" v-for="item in imgbox" @click="handOpenPhoto($event)" v-show="item.id === routenum">
        </div>
    </div>
</template>
<style lang="scss" scoped>
.bottom{
    padding: 100px 0;
     width:100%;
            > h2 {
                text-align: center;
                font-weight: 500;
                margin: 25px 0;
                font-size: 24px;
            }
            > .imgbox {
                    display: grid;
                    grid-template-columns: 300px 300px 300px;
                    grid-template-rows: 300px 300px 300px;
                    grid-column-gap: 30px;
                    grid-row-gap: 30px;
                    justify-content: center;
                    @media screen and (max-width:1024px){
                        grid-template-columns: 200px 200px 200px;
                        grid-template-rows: 200px 200px 200px;
                    }
                    @media screen and (max-width:768px){
                        grid-template-columns: 250px 250px ;
                        grid-template-rows: 250px 250px 250px 250px;
                    }
                    @media screen and (max-width:520px){
                        grid-template-columns: 90% ;
                        grid-template-rows: repeat(9,300px);
                        grid-row-gap: 100px;
                        margin-bottom: 50px;
                    }
                >img {
                    width:100%;
                    height: 100%;
                    object-fit: cover;
                    cursor: pointer;
                }

            }
        }
</style>