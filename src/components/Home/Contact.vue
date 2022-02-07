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
      <div class="content">
        <img src="@/assets/images/start.jpg" alt="">
        <div class="form">
            <input type="text" placeholder="姓名*" required>
            <input type="text" placeholder="聯絡電話*" required>
            <input type="email" placeholder="信箱*" required>
            <textarea name="" id="" cols="30" rows="10" placeholder="messages"></textarea>
            <button>確認送出</button>
        </div>
      </div>
  </section>
</template>

<style lang="scss" scoped>
#contact{
    width:90%;
    min-height: 600px;
    height: auto;
    padding:100px 0;
    margin:auto;
    h1{
        color:#FF876E;
    }
    .content{
        display: flex;
        justify-content: center;
        padding: 0 10px;
        @media screen and (max-width:768px){
            flex-direction: column;
        }
        > img{
            width:60%;
            margin:0 20px;
            @media screen and (max-width:768px){
                width:90%;
                margin:auto;
            }
        }
        > .form{
            width:40%;
            margin:0 20px;
            display: flex;
            flex-direction: column;
            @media screen and (max-width:768px){
                width:90%;
                margin:auto;
            }
            > input{
                width:320px;
                height: 45px;
                border-radius: 20px;
                padding: 0 15px;
                font-size: 16px;
                margin:10px auto;
                outline: none;
                border:1px #666 solid;
                &:focus{
                    border:2px #23A8F2 solid;
                    transition: all .3s ease;
                }
            }
            > textarea{
                width:320px;
                padding: 5px 15px;
                font-size: 16px;
                margin:10px auto;
                border:1px #666 solid;
                border-radius: 20px;
                outline: none;
                resize: none;
                &:focus{
                    border:2px #23A8F2 solid;
                    transition: all .3s ease;
                }
            }
            > button{
                width:320px;
                height: 50px;
                border:none;
                outline: none;
                background-color: #FF876E;
                color:#fff;
                font-weight: 600;
                font-size: 17px;
                margin:10px auto;
                border-radius: 25px;
                cursor: pointer;
                &:hover{
                    font-size: 18px;
                    transition: .5s;
                }
            }
        }
    }
}
</style>