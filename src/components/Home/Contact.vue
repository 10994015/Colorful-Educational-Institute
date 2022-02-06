
<script>
export default {
    props:{
        title:{
            type:Array,
            default:[],
        }
    },
    setup(props){
        return {props,};
    }
}
</script>
<template>
  <section id="contact">
      <h1>{{props.title[3].title}}</h1>
  </section>
</template>

<style lang="scss" scoped>

</style>