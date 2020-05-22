import { ActionTree } from 'vuex';
import { createAction } from '@/store/helper/index'
import {
  ApiLogin,
} from './mutations-type'

const actions: ActionTree<any, any> = {
  login: createAction('postl', ApiLogin),
}

export default actions;
