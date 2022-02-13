<script>
import Banner from "@/components/Contact/Banner.vue";
import Content from "@/components/Contact/Content.vue";
export default {
    components:{
        Banner,
        Content,
    },
    setup(){
        return { };
    }
}
</script>
<template>
    <div id="contact">
        <Banner />
        <Content />
    </div>
</template>

<style lang="scss" scoped>
#contact{
    background-color: #f4f4f4;
}   
</style>