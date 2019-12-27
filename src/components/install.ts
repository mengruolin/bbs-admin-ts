import Vue from 'vue';
import PagingCard from './PagingCard.vue';
import RotateCard from './card/RotateCard.vue';
import LineCharts from './charts/LineCharts.vue';
import BarCharts from './charts/BarCharts.vue';
import SvgIcon from './SvgIcon.vue';
import LoadingPage from './loading/Default.vue';
import MaterialInput from './form/MaterialInput.vue';

console.log((RotateCard as any).options.name);

Vue.component((PagingCard as any).options.name, PagingCard);
Vue.component((RotateCard as any).options.name, RotateCard);
Vue.component((LineCharts as any).options.name, LineCharts);
Vue.component((BarCharts as any).options.name, BarCharts);
Vue.component((SvgIcon as any).options.name, SvgIcon);
Vue.component((LoadingPage as any).options.name, LoadingPage);
Vue.component((MaterialInput as any).options.name, MaterialInput);
