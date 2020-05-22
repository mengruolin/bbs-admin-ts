import { ActionTree } from 'vuex'
import { createAction } from '@/store/helper/index'
import {
  apiGetFeedbackList,
  SETFEEDBACKLIST,
  apiDeleteFeedback,
} from './mutations-type'

const actions: ActionTree<any, any> = {
  getFeedbackList: createAction('postl', apiGetFeedbackList, SETFEEDBACKLIST),
  deleteFeedback: createAction('postl', apiDeleteFeedback),
};

export default actions
