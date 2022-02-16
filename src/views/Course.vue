<script>
import Banner from "@/components/Course/Banner.vue";
import Intro from "@/components/Course/Intro.vue";
import Camp from "@/components/Course/Camp.vue";
import Enter from "@/components/Course/Enter.vue";
export default {
  components:{
    Banner,
    Intro,
    Camp,
    Enter,
  },
  setup(){

    return {};
  }
}
</script>
<template>
 <div id="course">
   <Banner />
   <Intro />
   <Enter />
   <!-- <Camp /> -->
 </div>
 
</template>

<style lang="scss" scoped>
#course {
  width:100%;
}
</style>