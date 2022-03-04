<script>
import {reactive } from "vue";
import PhotoBox from "@/components/Site/PhotoBox.vue"
import Photo from "@/components/Site/Photo.vue"
export default {
    components:{
        PhotoBox,
        Photo,
    },
    setup(){
       
        return {};
    }
}
</script>
<template>
  <PhotoBox />
  <Photo />
</template>

<style lang="scss" scoped>

           
</style>