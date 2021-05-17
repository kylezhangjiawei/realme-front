import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { m } from './lang/en';


const app = createApp(App);
app.config.globalProperties.$m = m;
app.use(store).use(router).mount('#app');

// createApp(App).use(store).use(router).mount('#app')
