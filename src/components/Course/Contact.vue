<script>
export default {

}
</script>
<template>
  <div class="contact">
      <router-link to="/Contact">
        聯絡我們
      </router-link>
  </div>
</template>
<style lang="scss" scoped>
.contact{
    width:100%;
    height: 300px;
    background-color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    > a{
        width:300px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border-radius: 30px;
        background-color: #FF876E;
        color:#fff;
        font-weight: 600;
        font-size: 20px;
        &:hover{
            background-color: #FF5D2D;
            transition: all .3s ease;
        }
    }
}
</style>