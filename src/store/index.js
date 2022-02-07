import { createStore } from 'vuex'
import { ref } from '@vue/reactivity';

export default createStore({
  state: {
    openMenu:ref(false),
    totop:()=>{
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  mutations: {
    handopenMenu(state){
      state.openMenu = !state.openMenu;
    }
  },
  actions: {
    handopenMenu(context){
      context.commit('handopenMenu');
    }
    
  },
  getters:{
    openMenu(state){
      return state.openMenu;
    },
    totop(state){
      return state.totop;
    }
  },
  modules: {
  }
})
