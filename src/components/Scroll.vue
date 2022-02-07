<script>
import {onMounted, ref} from "vue";
export default {
    props:{
        top:{
            type:Function,
            default:()=>{},
        },
    },
    setup(props){
       const upBtn = ref(null);
       const isShow = ref(false);
       onMounted(()=>{
            window.addEventListener("scroll", ()=>{
                if(window.scrollY > 500){
                    isShow.value = true;
                }else{
                    isShow.value = false;
                }
            });
       })
        return {props, upBtn, isShow};
    }
}
</script>
<template>
  <div id="scroll-top" @click="props.top" ref="upBtn" :class="{active:isShow}">
      <i class="fas fa-chevron-circle-up"></i>
  </div>
</template>
<style lang="scss" scoped>

    #scroll-top{
        position: fixed;
        bottom:30px;
        right:-100px;
        text-align: center;
        z-index: 999;
        cursor: pointer;
        transition: all 1s ease;
        &.active{
            right:30px;
            transition: all 1s ease;
        }
        > i{
            font-size: 45px;
            color:#1484c4;
            &:hover{
                color:#10669a;
                transition: .3s;
            }
        }
    }
</style>