import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueWechatTitle from 'vue-wechat-title'
createApp(App).use(VueWechatTitle).use(store).use(router).mount('#app')
