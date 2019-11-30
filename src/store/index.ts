import Vue from 'vue';
import Vuex from 'vuex';
import {state, actions, mutations, getters} from './modules/global/index';
import modules from './modules/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules,
});
