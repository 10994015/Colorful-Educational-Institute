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
    photoSrc:'',
    isnewsModule:false,
    simgsrc:'',
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
    },
    handnewsClickModule(state, simgsrc){
      state.simgsrc = simgsrc;
      state.isnewsModule = !state.isnewsModule;
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
    },
    handnewsClickModule({commit}, src){
      let simg = src;
      commit('handnewsClickModule', simg);
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
    },
    isnewsModule(state){
      return state.isnewsModule;
    },
    simgsrc(state){
      return state.simgsrc;
    },
    photoSrc(state){
      return state.photoSrc;
    }
  },
  modules: {
  }
})
