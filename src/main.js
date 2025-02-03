import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import "@/assets/css/bootstrap.min.css";
import "@/assets/css/demo.css";
// import "@/assets/css/demo.css.map";
import "@/assets/css/fonts.css";
import "@/assets/css/fonts.min.css";
import "@/assets/css/kaiadmin.css";
// import "@/assets/css/kaiadmin.css.map";
import "@/assets/css/kaiadmin.min.css";
// import "@/assets/css/plugins.css";
// import "@/assets/css/plugins.css.map";
// import "@/assets/css/plugins.min.css";

createApp(App).use(router).mount('#app');
axios.defaults.baseURL = "http://localhost:8081";
const app = createApp(App);
app.config.globalProperties.axios = axios;