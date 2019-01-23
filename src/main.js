import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/sass/app.scss';

Vue.use(ElementUI);
Vue.component('PaatSearchPage', () => import('./components/PaatSearchPage/PaatSearchPage.vue'));

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
