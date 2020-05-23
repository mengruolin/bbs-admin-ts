import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFromNow', (date: Date) => {
  moment.locale('zh-cn')
  return moment(date).fromNow()
})

Vue.filter('DateFormat', (date: Date) => {
  return moment(date).format('YYYY-MM-DD HH:mm')
})

Vue.filter('DateZnFormat', (date: Date) => {
  return moment(date).format('YYYY年MM月DD日')
})
