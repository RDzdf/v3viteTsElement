// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 引入 Element Plus 的样式

const app = createApp(App);

app.use(ElementPlus);
app.use(router);

app.mount('#app');