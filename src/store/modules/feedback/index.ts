import { MutationTree } from 'vuex'
import actions from './actions'
import getters from './getters'
import {
  SETFEEDBACKLIST
} from './mutations-type'

const state = {
  feedbackList: [],
  feedbackListCount: 0,
}

const mutations: MutationTree<any> = {
  [SETFEEDBACKLIST](states, res) {
    states.feedbackList = res.list
    states.feedbackListCount = res.count
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
}
