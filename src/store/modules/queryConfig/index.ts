import { MutationTree } from 'vuex'
import actions from './actions'
import getters from './getters'
import {
  SETBBSTOPICLIT,
} from './mutations-type'

const state = {
  bbsTopicList: [],
  bbsTopicListCount: 0,
}

const mutations: MutationTree<any> = {
  [SETBBSTOPICLIT](states, res) {
    states.bbsTopicList = res.list
    states.bbsTopicListCount = res.count
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
