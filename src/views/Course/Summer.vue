<script>
export default {

}
</script>
<template>
    <div class="camp">
        <div class="weekday">
        <h1 class="title"><span class="titleline"></span>平日營</h1>
        <p>讓孩子在課後能持續加強英文也充實自己，全力幫助孩子取得語文檢定證照，透過外師生活會話，訓練孩子們勇敢開口說英文，未來在升學或就業的道路上，能非常有自信地拿出光彩的成果~</p>
        <h4>◎雅思營</h4>
            <li>閱讀、寫作、口說、聽力</li>
            <li>模擬考試及講解</li>
        <h4>◎外師美語會話營：</h4>
        <p>由外師教導學生如何使用英文做自我介紹，以及如何向別人介紹自己的國家，還有一些日常生活問候、鼓勵、感謝等對話，讓同學在遇到外國人的當下，能把所學的英文都派上用場</p>
    </div>
    <div class="holiday">
        <h1 class="title"><span class="titleline"></span>假日營</h1>
        <p>我們觀察到有很多孩子，平日下課後忙著寫作業及讀書，或者是住校假日才能回家，想參與營隊活動卻沒有多餘的時間，所以我們在週末特別開設假日營，希望每個孩子都能有機會和我們一起快樂學習~</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.camp{
    width:100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f1f1f1;
    > .weekday{
        width:700px;
        margin-bottom: 50px;
        >h1{
            margin-bottom: 6px;
        }
        >p{
            font-size: 18px;
        }
        >h4{
            font-size: 20px;
            margin-bottom: 4px;
        }
        >li{
            font-size: 17px;
        }
    }
    > .holiday{
        width:700px;
        >h1{
            margin-bottom: 6px;
        }
        >p{
            font-size: 18px;
        }
        >h4{
            font-size: 20px;
            margin-bottom: 4px;
        }
        >li{
            font-size: 17px;
        }
    }
}
.title{
    display: flex;
    align-items: center;
    > .titleline{
        width:6px;
        height: 35px;
        background-color: #1484c4;
        display: block;
        margin-right: 10px;
    }
}
</style>