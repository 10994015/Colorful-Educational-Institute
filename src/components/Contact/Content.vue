
<script>
export default {

}
</script>
<template>
   <div class="content">
            <form action="" method="post">
                <h2>有什麼話想說?</h2>
                <span>你的全名</span>
                <input type="text" required>
                <span>你的電子郵件</span>
                <input type="email" required>
                <span>主旨</span>
                <input type="text" required>
                <span>你的訊息(選填)</span>
                <textarea name="" id="" cols="30" rows="10" placeholder="報名課程、場地租借、進行培育..."></textarea>
                <button type="submit">送出</button>
            </form>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.386173646672!2d121.01740541483659!3d24.78222678409088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468363ae7276ba5%3A0x4e22c2db67d6fe92!2zMzAw5paw56u55biC5p2x5Y2A5YWJ5b6p6Lev5LiA5q61Mjcx6JmfM-aokw!5e0!3m2!1szh-TW!2stw!4v1645111991019!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            <div class="text">
                <p>聯絡人 : 03-5670081</p>
                <p>地址 : 300台灣新竹市東區光復路一段271號3樓</p>
                <p>營業時間 : 周一至周五10:00-17:00</p>
            </div>
        </div>
</template>

<style lang="scss" scoped>
.content{
        width:80%;
        margin:auto;
        padding-bottom: 100px;
        background-color: #F4F4F4;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        @media screen and (max-width:768px){
            padding-top: 350px;
        }
        > form {
            box-shadow: 0 5px 25px #aaa;
            display: flex;
            flex-direction: column;
            max-width:1200px;
            width:100%;
            background-color: #fff;
            margin:auto;
            padding:20px 50px;
            @media screen and (max-width:414px){
                padding:20px 25px;
            }
            > h2{
                text-align: center;
                color:#333;
                font-size: 20px;
            }
            > span {
                font-weight: 600;
                margin-bottom: 3px;
            }
            > input[type="text"] ,> input[type="email"] {
                outline: none;
                border:1px #aaa solid; 
                width:100%;
                height: 40px;
                border-radius: 8px;
                margin-bottom: 20px;
                padding:0 10px;
                font-size: 16px;
                font-family: "微軟正黑體";
                box-shadow: 0 5px 25px #f4f4f4;
            }
            > textarea{
                resize: none;
                resize: vertical;
                outline: none;
                border:1px #aaa solid;
                border-radius: 8px;
                padding:10px;
                font-size: 16px;
                margin-bottom: 30px;
            }
            > button {
                width:100px;
                height: 40px;
                background-color: #1B4F7D;
                color:#fff;
                font-weight: 600;
                outline: none;
                border:none;
                cursor: pointer;
                margin:auto;
            }

        }
        > iframe{
                width:100%;
                height: 300px;
                margin:25px auto;
            }
        > .text {
            margin:30px 0;
            > p {
                font-size: 21px;
                margin: 3px 0;
                font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
            }
        }
    }
</style>