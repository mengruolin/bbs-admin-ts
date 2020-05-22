import { GetterTree } from 'vuex'

const getteres: GetterTree<any, any> = {
  bbsTopicList: states => states.bbsTopicList,
  bbsTopicListCount: states => states.bbsTopicListCount,
}

export default getteres
