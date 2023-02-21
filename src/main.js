import Vue from 'vue'
import App from './App.vue'
import index from '@/assets/css/index.css';

Vue.config.productionTip = false

new Vue({
  index,
  render: h => h(App)
}).$mount('#app')
