<script>
import Card from "@/components/Nurture/Card.vue";
import Step from "@/components/Nurture/Step.vue";
import Class from "@/components/Nurture/Class.vue";
import Brochure from "@/components/Nurture/Brochure.vue";
export default {
    components:{
      Card,
      Step,
      Class,
      Brochure,
    },
    setup(){
      return {};
    }
}
</script>
<template>
  <div class="nurture">
    <Card />
    <Step />
    <Class />
    <Brochure />
  </div>
</template>

<style lang="scss" scoped>
.nurture{
  width:100%;
  padding-top:80px; 
  background-color: #f1f1f1;
}
</style>