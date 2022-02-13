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
  },
  mutations: {
    handopenMenu(state){
      state.openMenu = !state.openMenu;
    },
    handLightbox(state, bool){
      state.isSiteImg = bool;
      
    }

  },
  actions: {
    handopenMenu(context){
      context.commit('handopenMenu');
    },
    handLightbox(context){
      const bool = !context.state.isSiteImg;
      context.commit('handLightbox', bool);
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
    }
  },
  modules: {
  }
})
