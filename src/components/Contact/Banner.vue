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
                <p>
                    冰芬美語文理補習班<br />
                    300新竹市東區光復路一段271號3樓(原聯合補習班址、台新銀行樓上)<br />
                    連絡電話：03-567-0018
                </p>
                <span>03-567-0018</span>
            </div>
            <div class="item">
                <i class="fa-solid fa-comments"></i>
                <h2>線上詢問</h2>
                <p>歡迎於以下官方臉書專頁、Instagram及line@訊息詢問更多優惠課程及相關資訊內容喔！</p>
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
            @media screen and (max-width:768px){
                flex-direction: column;
                align-items: center;
            }
            .item{
                width:500px;
                height: 350px;
                background-color: #fff;
                margin:0 100px;
	            box-shadow: 0 5px 25px #aaa;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding:40px 20px 30px;
                font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
                @media screen and (max-width:1024px){
                    margin:0 20px;
                }
                @media screen and (max-width:768px){
                    margin:10px 0;
                    width:90%;
                }
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
                    text-align: center;
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