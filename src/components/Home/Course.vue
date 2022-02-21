<script>
export default {
     props:{
        title:{
            tpye:Array,
            default:[],
        },
        lorem:{
            type:String,
            default:"",
        }
    },
    setup(props){
        return {props};
    }
}
</script>
<template>
   <section id="course">
            <h1>{{props.title[0].title}}</h1>
            <div class="content">
                <img src="@/assets/images/pic01.png" alt="">
                <div class="contentText">
                    <h2>實現孩子的夢想</h2>
                    <p>{{props.lorem}}</p>
                    <router-link to="/Course">SEE MORE</router-link>
                </div>
                
            </div>
            
        </section>
</template>
<style lang="scss" scoped>
#course{
    background-color: #30415D;
    > h1{
        width:100%;
        text-align: center;
        color:#EEC71C;
        
        font-size: 30px;
    }
    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width:960px){
            flex-direction: column;
        }
        > img{
            margin: 10px 50px;
            width:450px;
            @media screen and (max-width:500px){
                width:90%;
                margin:10px auto;
                
            }
        }
        .contentText{
            font-family: '微軟正黑體';
            margin: 10px 50px;
            h2{
                font-size: 24px;
                color:#ff0;
                margin-bottom: 15px;
                @media screen and (max-width:500px){
                    text-align: center;
                }
            }
            p{
                width:400px;
                color:#fff;
                @media screen and (max-width:500px){
                    width:95%;
                    margin:10px auto;
                }
            }
            a{
                display: block;
                width: 150px;
                height: 50px;
                background-color: #EEC71C;
                color: #fff;
                text-align: center;
                line-height: 50px;
                font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
                border-radius: 6px;
                margin-top: 20px;
                font-weight: 600;
                &:hover{
                    transform: scale(1.1);
                    transition: .5s;
                }
            }
        }
    }
}
</style>