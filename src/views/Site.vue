<script>
import Banner from "@/components/Site/Banner.vue";
import Benfen from "@/components/Site/Benfen.vue";
import John from "@/components/Site/John.vue";
import Lightbox from "@/components/Site/Lightbox.vue";
export default {
    components:{
        Banner,
        Benfen,
        John,
        Lightbox,
    }
}
</script>
<template>
  <div id="site">
      <Banner />
      <Benfen />
      <John />
      <Lightbox />
  </div>
</template>
<style lang="scss" scoped>
#site{
}
</style>