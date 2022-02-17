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
    lendModule:false,
    isSchool:'',
    isPhoto:false,
    PhotoSrc:'',
  },
  mutations: {
    handopenMenu(state){
      state.openMenu = !state.openMenu;
    },
    handLightbox(state, imgsrc){
      state.isSiteImg = !state.isSiteImg;
      state.lightboxsrc = imgsrc;
    },
    handOpenModule(state, school){
      state.isSchool = school;
      // console.log("school=>" , text);
      // console.log("val=>",school);
      
      state.lendModule = !state.lendModule;
    },
    handOpenPhoto(state, src){
      state.photoSrc = src;
      state.isPhoto = !state.isPhoto;
    }

  },
  actions: {
    handopenMenu(context){
      context.commit('handopenMenu');
    },
    handLightbox(context,src){
      let imgsrc = src;
      context.commit('handLightbox', imgsrc);
    },
    handOpenModule(context, text){
      let school = text;
      // console.log("newtext=>", text);
      
      context.commit('handOpenModule',school);
    },
    handOpenPhoto({commit}, src){
      let photoSrc = src;
      commit('handOpenPhoto', photoSrc);
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
    },
    lendModule(state){
      return state.lendModule;
    },
    isSchool(state){
      return state.isSchool;
    },
    isPhoto(state){
      return state.isPhoto;
    }
  },
  modules: {
  }
})
