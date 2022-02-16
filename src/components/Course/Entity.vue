<script>
export default {

}
</script>
<template>
  <div class="entity">
      <h1>冰芬美語</h1>
  </div>
</template>
<style lang="scss" scoped>
.entity{
    width:100%;
    background-color: #1C1C1C;
    height: 500px;
    padding: 60px 0;
    > h1 {
        text-align: center;
        color:#fff;
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 25px;
        position: relative;
        &::before{
            content:'';
            position: absolute;
            top: 60px;
            left:calc(50% - 50px);;
            width:100px;
            height: 2px;
            background-color: #fff;
        }
    }
}

</style>