<script>
import {reactive, ref} from "vue";
export default {
    setup(){
        const stepItem = reactive([
            {class:'fas fa-user-graduate',text:'大學以上學歷',rightopen:true},
            {class:'fas fa-glasses',text:'參加培訓課程',rightopen:true},
            {class:'far fa-building',text:'參加見習活動',rightopen:true},
            {class:'fas fa-stamp',text:'取得證明',rightopen:true},
            {class:'fas fa-chalkboard-teacher',text:'成為專業教師',rightopen:false},
        ]);
        const lorem = ref('Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente sequi rem maxime aliquid quod adipisci odit! Iusto, doloribus. Quo sed ratione dolorum dolores amet hic harum, eius aperiam aut. Odit eaque inventore quae molestiae unde et quis numquam natus harum, voluptas ipsum quibusdam necessitatibus, deserunt modi consectetur sequi ut nulla mollitia. Laboriosam, sapiente quisquam incidunt quam quod laborum animi.')
        return {stepItem, lorem};
    }
}
</script>
<template>
  <div class="step">
        <div class="stepItem" v-for="item in stepItem" :key="item.text">
            <div>
                <i :class="item.class"></i>
                <p>{{item.text}}</p>
            </div>
            <i class="fas fa-long-arrow-alt-right" v-show="item.rightopen"></i>
        </div>
    </div>
    <!-- 開會中說先拿掉 -->
    <!-- <div class="text">
        <h2>專業派師</h2>
        <p >{{lorem}}</p>
    </div> -->
</template>
<style lang="scss" scoped>
.text{
    width:500px;
    margin:auto;
    font-size: 18px;
    color:#222;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    text-align: center;
    margin-bottom: 50px;
    @media screen and (max-width:768px){
        width:90%;
    }
    >h2{
        text-align: center;
        font-weight: 500;
        margin-bottom: 20px;
        color:#222;
    }
    > p{
        color:#555;
        width:90%;
        margin:auto;
    }
}
.step{
    display: flex;
    justify-content: center;
    margin:auto;
    align-items: center;
    width:100%;
    padding:50px 0;
    @media screen and (max-width:920px){
        flex-direction: column;
    }
    .stepItem{
        display: flex;
        align-items: center;
        justify-content: center;
        > i{
            font-size: 60px;
            color:#E93A55;
            @media screen and (max-width:1200px){
                font-size: 40px;
            }
            @media screen and (max-width:920px){
                display: none;
            }
        }
        > div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width:200px;
            @media screen and (max-width:1200px){
                width:150px;
            }
            @media screen and (max-width:920px){
                margin: 20px 0;
            }
            > i {
                font-size: 60px;
                color:#E93A55;
                width:120px;
                height: 120px;
                text-align: center;
                line-height: 120px;
                border:1px #E93A55 solid;
                border-radius: 50%;
                @media screen and (max-width:1200px){
                    font-size: 40px;
                    width:80px;
                    height: 80px;
                    line-height: 80px;
                }
                @media screen and (max-width:920px){
                    font-size: 60px;
                    width:120px;
                    height: 120px;
                    line-height: 120px;
                }
            }
            > p {
                font-size: 21px;
                font-weight: 600;
                color:#E93A55;
                margin-top: 15px;
            }
        }
    }
}
</style>