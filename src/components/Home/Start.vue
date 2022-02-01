
<script>
export default {
    setup(){
        return {};
    }
}
</script>
<template>
  <section id="start">
           <div>
                <h1>Want to try it now</h1>
                <a href="###" class="startBtn">START</a>
           </div>
           <div>
               <img src="@/assets/images/start.jpg" alt="">
           </div>
        </section>
</template>

<style lang="scss" scoped>
#start{
    width: 100%;
    height: 600px;
    padding-top: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (max-width:720px){
        justify-content: center;
    }
    h1{
        text-align: center;
        color:#FF876E;
        font-size: 50px;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        @media screen and (max-width:900px){
            font-size: 40px;
        }
        @media screen and (max-width:720px){
            font-size: 50px;
        }
        
    }
    .startBtn{
        display: block;
        width:200px;
        height: 50px;
        background-color: #FF876E;
        color:#fff;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        margin: auto;
        line-height: 50px;
        text-align: center;
        border-radius: 25px;
        font-size: 18px;
        &:hover{
            font-size:21px;
            transition: all .5s ease;
        }
    }
    >div{
        >img{
            width:800px;
            @media screen and (max-width:1000px){
                width:500px;
            }
            @media screen and (max-width:720px){
                display: none;
            }
        }
    }
}

</style>