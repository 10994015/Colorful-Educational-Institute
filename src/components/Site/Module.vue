<script>
import {useStore} from "vuex";
import { computed, ref , watch, onUpdated} from 'vue';
export default {
    setup(){
        const store = useStore();
        // const isSchool = computed(()=>{
        //     return store.getters.isSchool;
        // })
        // console.log(isSchool);
        const lendModule = computed(()=>{
            return store.getters.lendModule;
        })
        const handCloseModule = ()=>{
            store.dispatch('handOpenModule');
            
        }
        const school  = computed(()=>{
            return store.state.isSchool;
        })
     
        return {lendModule, handCloseModule, school};
    }
}
</script>
<template>
  <div class="module" v-if="lendModule">
      <div class="back"></div>
      <div class="box">
          <div class="header">我要租借<i class="fa-solid fa-xmark" @click="handCloseModule"></i></div>
          <form action="" method="post" class="centent">
              <label for="">
                  <p>租借場地(必填)</p>
                  <input type="text" :placeholder="school" disabled>
              </label>
              <label for="">
                  <p>您的大名(必填)</p>
                  <input type="text" required placeholder="ex:王大明">
              </label>
              <label for="">
                  <p>聯絡電話(必填)</p>
                  <input type="text" required placeholder="">
              </label>
              <label for="">
                  <p>電子信箱(必填)</p>
                  <input type="email" required>
              </label>
              <label for="">
                  <p>租借時間</p>
                  <div class="date">
                      <input type="date"><span>至</span><input type="date">
                  </div>
              </label>
              <label for="">
                  <p>租借用途</p>
                  <textarea name="" placeholder="請簡短描述" id="" cols="20" rows="10"></textarea>
              </label>
              <button>租借</button>
          </form>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.module{
    width:100%;
    height: 100%;
    position: fixed;
    top: 0;
    left:0;
    z-index: 9999999999999999999999;
    display: flex;
    justify-content: center;
    align-items: center;
    > .back{
        width:100%;
        height: 100%;
        position: absolute;top: 0;
        left:0;
        background-color: rgba(0, 0, 0, .5);
    }
    > .box{
        width:350px;
        min-height: 520px;
        height: auto;
        background-color: #fff;
        z-index: 999999999999999999999999;
        border-radius: 8px;
        overflow: hidden;
        > .header{
            width:100%;
            height: 50px;
            text-align: center;
            background-color: #FF876E;
            line-height: 50px;
            font-size: 17px;
            font-weight: 600;
            position: relative;
            color:#223;
            > i {
                position: absolute;
                top: calc(50% - 12.4px);
                right:10px;
                font-size: 25px;
                cursor: pointer;
            }
        }
        > .centent{
            width:100%;
            display: flex;
            flex-direction: column;
            > label{
                display: flex;
                flex-direction: column;
                width:90%;
                margin:5px auto 0px;
                > p{
                    font-size: 16px;
                    font-weight: 600;
                    color:#223;
                }
                input{
                    width:100%;
                    height: 30px;
                    outline: none;
                    border:1px #666 solid;
                    border-radius: 6px;
                    padding: 0 10px;
                    font-size: 16px;
                }
                > textarea{
                    width:100%;
                    height: 50px;
                    max-height: 150px;
                    resize: none;
                    resize: vertical;
                }
                > .date{
                    
                    > span{
                        margin: 0 5px;
                    }
                }
            }
            > button{
                width:200px;
                height: 35px;
                background-color: #FF876E;
                outline: none;
                border:none;
                font-weight: 600;
                color:#444;
                margin:20px auto;
                cursor: pointer;

            }
        }
    }
}
</style>