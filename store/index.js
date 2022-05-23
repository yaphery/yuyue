import Vue from "vue";

import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "xiaoyue",
  },
  mutations: {},
  actions: {},
  getters: {
    name: (state) => {
      return state.name;
    },
  },
  modules: {},
});