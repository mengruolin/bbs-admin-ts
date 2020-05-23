import { ActionTree } from 'vuex'
import { createAction } from '@/store/helper/index'
import {
  apiGetBbsTopicList,
  SETBBSTOPICLIT,
  apiDeleteBbsTopic,
} from './mutations-type'

const actions: ActionTree<any, any> = {
  getBbsTopicList: createAction('getl', apiGetBbsTopicList, SETBBSTOPICLIT),
  deleteBbsTopic: createAction('postl', apiDeleteBbsTopic),
}

export default actions
