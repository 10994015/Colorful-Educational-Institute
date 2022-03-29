

<script>
export default {

}
</script>
<template>
<footer>
    <div class="contact">
        <div class="footerLogo">
            <img src="@/assets/images/logo.png" alt="">
            <p>
                色彩一直是療育人心的良藥
                繽紛=冰芬 意旨戒掉呆板數學及爛英文的學習方式
                利用國外的學習模式 "更高的自由度、更強的互動性和更深的參與感" 讓學習更加放鬆、快樂
            </p>
        </div>
        <div class="contactus">
            <h2>聯絡資訊</h2>
            <p>聯絡電話:03-5670018</p>
            <p>客服中心:<br>Jenny.Peng@ice-finland.pro</p>
            <p>地址:<br>300新竹市東區光復路一段271號3樓(原聯合補習班址、台新銀行樓上)</p>
            <p>企業合作:
                <!-- cuclass -->
                清大Stem Shcool
                憶旺智慧
            </p>
        </div>
        <div class="about">
            <h2>關於冰芬</h2>
            <a href="###">關於我們</a>
            <a href="###">聯絡我們</a>
            <a href="###">常見問題</a>
            <a href="###">加入會員</a>
            <a href="###">隱私政策</a>
            <a href="###">服務條款</a>
        </div>
        <div class="link">
            <h2>追蹤我們</h2>
            <div>
                <a href="https://www.facebook.com/icefinland/" class="icon"><i class="fab fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/colorful.institute/" class="icon"><i class="fab fa-instagram"></i></a>
                <a href="https://lin.ee/7TPK9Fd" class="icon"><i class="fab fa-line"></i></a>
            </div>
            <img src="@/assets/images/LINE.png" alt="" class="lineqrcode">
        </div>
    </div>
    <div class="copyright">
        Copyright @2022 <a href="./">冰芬.</a>  All Rights Reserved.
    </div>
</footer>
</template>
<style lang="scss" scoped>
footer{
    background-color: #3A3A3A;
    width:100%;
    height: 380px;
    color:#fff;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif,"微軟正黑體";
    @media screen and (max-width:850px){
        height: 880px;
    }
    .contact{
        display: flex;
        justify-content: space-evenly;
        align-items: start;
        padding-top: 50px;
        width:100%;
        height: 300px;
        @media screen and (max-width:850px){
            flex-direction: column;
            align-items:start;
            height: 800px;
            padding-left: 50px;
        }
        h2{
            font-weight: normal;
            margin-bottom: 10px;
        }
        .footerLogo{
            img{
                width:250px;
            }
            p{
                width:300px;
                margin-top: 20px;
            }
        }
        .contactus{
            text-align: left;
            
            p{
                margin: 3px 0;
            }
        }
        .about{
            text-align: left;
            a{
                display: block;
                color:#fff;
                margin: 3px 0;
            }
        }
        .link{
            text-align: left;
            .icon{
                display: inline-block;
                color:#fff;
                margin: 0px 7px;
                >i{
                    font-size: 40px;
                }
            }
            .lineqrcode{
                width:133px;
                margin:auto;
                display: block;
                margin-top: 12px;;
            }
        }
    }
    .copyright{
        width:100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        >a{
            color:#1484c4;
            font-weight: 600;
            font-size: 17px;
        }
    }
}
</style>