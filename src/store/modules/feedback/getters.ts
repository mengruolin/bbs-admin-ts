import { GetterTree } from 'vuex'

const getteres: GetterTree<any, any> = {
  feedbackList: states => states.feedbackList,
  feedbackListCount: states => states.feedbackListCount,
}

export default getteres
