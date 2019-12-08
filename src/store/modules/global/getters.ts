import { GetterTree } from 'vuex';

const getteres: GetterTree<GlobalStates, any> = {
  statistics: (state) => state.statistics,
};

export default getteres;
