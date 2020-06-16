import Vue from 'vue';
import App from './App.vue';
import './styles/main.css';
import ChatPlugin from '@/plugins/chat';
import router from '@/router';
import VueRouter from 'vue-router';
import LoButton from '@/components/LoButton.vue';

Vue.config.productionTip = false;

Vue.use(ChatPlugin);
Vue.use(VueRouter);

Vue.component('lo-button', LoButton);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
