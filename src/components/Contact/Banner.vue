<script>
export default {

}
</script>
<template>
  <div class="banner">
            <img src="@/assets/images/contact.jpg" alt="">
            <div class="box">
                <div class="item">
                    <i class="fa-solid fa-phone"></i>
                    <h2>來電詢問</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias rem voluptatum suscipit ut tempore eaque!</p>
                    <span>03-3012967</span>
                </div>
                <div class="item">
                    <i class="fa-solid fa-comments"></i>
                    <h2>線上詢問</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias rem voluptatum suscipit ut tempore eaque!</p>
                    <div>
                        <a target="_blank" href="https://www.facebook.com/icefinland/" class="icon"><i class="fab fa-facebook-square"></i></a>
                        <a target="_blank" href="https://www.instagram.com/colorful.institute/" class="icon"><i class="fab fa-instagram"></i></a>
                        <a target="_blank" href="https://lin.ee/7TPK9Fd" class="icon"><i class="fab fa-line"></i></a>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
.banner{
        width:100%;
        height: 800px;
        > img{
            width:100%;
            height: 500px;
            object-fit: cover;
        }
        .box{
            display: flex;
            justify-content: center;
            position: absolute;
            width:100%;
            top: 450px;
            left:0;
            background-color: transparent;
            .item{
                width:500px;
                height: 300px;
                background-color: #fff;
                margin:0 100px;
	            box-shadow: 0 5px 25px #aaa;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding:40px 20px 30px;
                font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
                > i{
                    color:#333;
                    font-size: 50px;
                    margin-bottom: 20px;
                }
                > h2{
                    font-size: 20px;
                    margin-bottom: 20px;
                }
                > p{
                    color:#777;
                    margin-bottom: 30px;
                }
                > span{
                    width:130px;
                    height: 40px;
                    background-color: #1B4F7D;
                    color:#fff;
                    text-align: center;
                    line-height: 40px;
                    font-weight: 600;
                    font-family:"微軟正黑體";
                    font-size: 16px;
                }
                > div {
                    display: flex;
                    >a{
                        color:#333;
                        margin:0 8px;
                        i {
                            font-size: 40px;
                        }
                    }
                   
                }
            }
        }
    }
</style>