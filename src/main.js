import Vue from 'vue';
import App from './App.vue';
import './styles/main.css';
import ChatPlugin from '@/plugins/chat';

Vue.config.productionTip = false;

Vue.use(ChatPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app');
