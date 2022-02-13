
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
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button type="submit">送出</button>
            </form>
        </div>
</template>

<style lang="scss" scoped>
.content{
        width:100%;
        padding-bottom: 100px;
        background-color: #F4F4F4;
        > form {
            box-shadow: 0 5px 25px #aaa;
            display: flex;
            flex-direction: column;
            max-width:1200px;
            background-color: #fff;
            margin:auto;
            padding:20px 50px;
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
    }
</style>