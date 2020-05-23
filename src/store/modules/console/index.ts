import { MutationTree } from 'vuex'
import actions from './actions'
import getters from './getters'
import {
  SETCONSOLEINFO,
} from './mutations-type'

const state = {
  consoleInfo: [],
};

const mutations: MutationTree<any> = {
  [SETCONSOLEINFO](states, res) {
    states.consoleInfo = res.data
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
