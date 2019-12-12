import { MutationTree } from 'vuex';
import actions from './actions';
import getters from './getters';
import {statistic} from './const';

const state: GlobalStates = {
  statistics: statistic,
  pageLoading: false,
};

const mutations: MutationTree<any> = {
  closePageLoading(states): void {
    states.pageLoading = false;
  },
  openPageLoading(states): void {
    states.pageLoading = true;
  },
};

export {
  state,
  actions,
  mutations,
  getters,
};
