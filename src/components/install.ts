import Vue from 'vue';
import PagingCard from './PagingCard.vue';
import RotateCard from './card/RotateCard.vue';
import LineCharts from './charts/LineCharts.vue';
import BarCharts from './charts/BarCharts.vue';
import SvgIcon from './SvgIcon.vue';
import LoadingPage from './loading/Default.vue';
import MaterialInput from './form/MaterialInput.vue';

Vue.component(PagingCard.name, PagingCard);
Vue.component(RotateCard.name, RotateCard);
Vue.component(LineCharts.name, LineCharts);
Vue.component(BarCharts.name, BarCharts);
Vue.component(SvgIcon.name, SvgIcon);
Vue.component('LoadingPage', LoadingPage);
Vue.component(MaterialInput.name, MaterialInput);
