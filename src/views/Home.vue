<script>
import {reactive, ref} from "vue";
import Banner from "@/components/Home/Banner.vue";
import Course from "@/components/Home/Course.vue";
import Nurture from "@/components/Home/Nurture.vue";
import Site from "@/components/Home/Site.vue";
import Start from "@/components/Home/Start.vue";
export default {
  components:{
    Banner,
    Course,
    Nurture,
    Site,
    Start,
  },
  setup(){
    const lorem = ref(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente sequi rem maxime aliquid quod adipisci odit! Iusto, doloribus. Quo sed ratione dolorum dolores amet hic harum, eius aperiam aut.
        Odit eaque inventore quae molestiae unde et quis numquam natus harum, voluptas ipsum quibusdam necessitatibus, deserunt modi consectetur sequi ut nulla mollitia. Laboriosam, sapiente quisquam incidunt quam quod laborum animi.`);
    const title = reactive([
            {title:"幫助您進行課程規劃"},
            {title:"人才培育"},
            {title:"場地租借"},
        ]);
    return {title, lorem};
  }
}
</script>
<template>
  <Banner />
  <Course :title="title" :lorem="lorem" />
  <Nurture  :title="title" :lorem="lorem" />
  <Site  :title="title"/>
  <Start />
</template>