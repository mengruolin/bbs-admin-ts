import { GetterTree } from 'vuex';

const getteres: GetterTree<GlobalStates, any> = {
  statistics: (state) => state.statistics,
  pageLoading: (state) => state.pageLoading,
};

export default getteres;
