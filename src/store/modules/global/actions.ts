import { ActionTree } from 'vuex';

const actions: ActionTree<any, any> = {
  showLoading({commit}): void {
    commit('openPageLoading');
  },
};

export default actions;
