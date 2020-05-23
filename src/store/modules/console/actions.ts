import { ActionTree } from 'vuex';
import { createAction } from '@/store/helper/index'
import {
  ApiGetConsoleInfo,
  SETCONSOLEINFO,
} from './mutations-type'

const actions: ActionTree<any, any> = {
  getConsoleInfo: createAction('getl', ApiGetConsoleInfo, SETCONSOLEINFO),
}

export default actions;
