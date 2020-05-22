import { GetterTree } from 'vuex'

const getteres: GetterTree<any, any> = {
  consoleInfo: states => states.consoleInfo,
}

export default getteres
