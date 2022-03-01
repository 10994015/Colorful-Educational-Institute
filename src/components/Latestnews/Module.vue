<script>
import {useStore} from "vuex";
import { computed, ref } from 'vue';
export default {
    setup(){
        const store = useStore();
        const isnewsModule = computed(()=>{
            return store.getters.isnewsModule;
        })
        const src = computed(()=>{
          return store.getters.simgsrc;
        })
        const isClose = ref(false);
        const enterClose = ()=>{
            isClose.value = true;
        }
        const leaveClose = ()=>{
            isClose.value = false;
        }
        const handnewsClickModule = ()=>{
            store.dispatch('handnewsClickModule');
        }
        return {isnewsModule, handnewsClickModule, isClose, enterClose, leaveClose, src};
    }
}
</script>
<template>
  <div class="module" v-if="isnewsModule">
      <div class="back" @click="handnewsClickModule"></div>
      <div class="img" @mouseenter="enterClose" @mouseleave="leaveClose">
          <img :src="src" alt="">
          <Transition name="fade">
            <i class="fas fa-times" v-show="isClose" @click="handnewsClickModule"></i>
          </Transition>
      </div>
  </div>
</template>

<style lang="scss" scoped>
    .module{
        position: relative;
        position: fixed;
        top: 0;
        left:0;
        width:100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99999999999999999;
        > .back{
            width:100%;
            height: 100%;
            position: absolute;
            top: 0;
            left:0;
            background-color: rgba(0, 0, 0, .5);
            z-index: 99999999999999999;
        }
        >.img{
            width:auto;
            height: 650px;
            z-index: 9999999999999999999;
            position: relative;
            > img{
                width:100%;
                height: 100%;
                object-fit: cover;
                border:10px #fff solid;
                z-index: 9999999999999999999;
                outline: none;
            }
             > i {
                position: absolute;
                top: 15px;
                right:15px;
                color:#000;
                z-index: 999999999999999999;
                font-size: 36px;
                cursor: pointer;
            }
        }
    }

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>