<script>
import Banner from "@/components/Site/Banner.vue";
import Benfen from "@/components/Site/Benfen.vue";
import John from "@/components/Site/John.vue";
import Karl from "@/components/Site/Karl.vue";
import Lightbox from "@/components/Site/Lightbox.vue";
import Module from "@/components/Site/Module.vue";
export default {
    components:{
        Banner,
        Benfen,
        John,
        Karl,
        Lightbox,
        Module,
    }
}
</script>
<template>
  <div id="site">
      <Banner />
      <Benfen />
      <Lightbox />
      <Module />
  </div>
</template>

<style lang="scss">
.module{
        z-index: 999999999999999999999;
    .box{
        z-index: 99999999999999999999999999999999999999999999;
    }
}

</style>