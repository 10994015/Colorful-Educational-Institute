import { createStore } from 'vuex'
import { ref } from '@vue/reactivity';

export default createStore({
  state: {
    openMenu:ref(false),
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
    }
  },
  modules: {
  }
})
