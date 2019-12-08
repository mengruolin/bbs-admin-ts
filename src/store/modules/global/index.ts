import { MutationTree } from 'vuex';
import actions from './actions';
import getters from './getters';
import {statistic} from './const';

const state: GlobalStates = {
  statistics: statistic,
};

const mutations: MutationTree<any> = {

};

export {
  state,
  actions,
  mutations,
  getters,
};
