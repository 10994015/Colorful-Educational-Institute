
<script>
import {useStore} from "vuex";
import { computed } from 'vue';
export default {
    setup(){
        const store = useStore();
        const openMenu = computed(()=>{
            return store.getters.openMenu;
        })
        const handopenMenu = ()=>{
            store.dispatch('handopenMenu');
        }
        return {handopenMenu, openMenu};
    }
}
</script>
<template>
  <i class="fas fa-bars" :class="{open:openMenu}" id="menu" @click="handopenMenu"></i>
</template>

<style lang="scss" scoped>
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
@media screen and (max-width:1024px){
    #menu{
        display: block;
    }
    ul.open{
        top:0;
    }
}

</style>