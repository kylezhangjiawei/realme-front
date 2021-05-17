import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { m } from './lang/en';

import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);
app.config.globalProperties.$m = m;
app.use(Vant);
app.use(store).use(router).mount('#app');

// createApp(App).use(store).use(router).mount('#app')
