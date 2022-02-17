<script>
import Banner from "@/components/Course/Banner.vue";
import Intro from "@/components/Course/Intro.vue";
import Camp from "@/components/Course/Camp.vue";
import Enter from "@/components/Course/Enter.vue";
import Online from "@/components/Course/Online.vue";
import Entity from "@/components/Course/Entity.vue";
import Study from "@/components/Course/Study.vue";
export default {
  components:{
    Banner,
    Intro,
    Camp,
    Enter,
    Online,
    Entity,
    Study,
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
   <Online />
   <Entity />
   <Study />
   <!-- <Camp /> -->
 </div>
 
</template>

<style lang="scss" scoped>
#course {
  width:100%;
}
</style>