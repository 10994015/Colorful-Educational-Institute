<script>
import {reactive, onMounted } from "vue";
import {useStore} from "vuex";
export default {
    setup(){
        const store = useStore();
        const imgbox = reactive([
            {src:'http://localhost:8080/colorful/LINE_ALBUM_冰芬_220222_0.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_1.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_2.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_3.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_4.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_5.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_6.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_7.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_8.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_9.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_10.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_11.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_12.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_13.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_14.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_15.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_16.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_17.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_18.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_19.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_20.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_21.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_22.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_23.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_24.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_25.jpg'},
            {src:'/colorful/LINE_ALBUM_冰芬_220222_26.jpg'},
        ])
            const handOpenPhoto = (e) =>{
            console.log(e.target.src);
            store.dispatch('handOpenPhoto',e.target.src)
        }
        return {imgbox, handOpenPhoto}
    }
}
</script>
<template>
  <div class="bottom">
        <h2>照片牆</h2>
        <div class="imgbox">
                <img :src="item.src" alt="" :key="item.src" v-for="item in imgbox" @click="handOpenPhoto($event)">
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