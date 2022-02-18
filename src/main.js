import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueWechatTitle from 'vue-wechat-title'
router.afterEach((to,from,next) => {
    window.scrollTo({ 
      top:0,
    })
  })
createApp(App).use(VueWechatTitle).use(store).use(router).mount('#app')
