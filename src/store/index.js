import { createStore } from 'vuex'
import { ref } from '@vue/reactivity';

export default createStore({
  state: {
    openMenu:ref(false),
    totop:()=>{
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    isSiteImg:false,
    lightboxsrc:'',
  },
  mutations: {
    handopenMenu(state){
      state.openMenu = !state.openMenu;
    },
    handLightbox(state, imgsrc){
      state.isSiteImg = !state.isSiteImg;
      state.lightboxsrc = imgsrc;
    }

  },
  actions: {
    handopenMenu(context){
      context.commit('handopenMenu');
    },
    handLightbox(context,src){
      let imgsrc = src;
      context.commit('handLightbox', imgsrc);
    }
  },
  getters:{
    openMenu(state){
      return state.openMenu;
    },
    totop(state){
      return state.totop;
    },
    isSiteImg(state){
      return state.isSiteImg;
    },
    lightboxsrc(state){
      return state.lightboxsrc;
    }
  },
  modules: {
  }
})
