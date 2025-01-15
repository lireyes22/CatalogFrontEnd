import { createApp } from 'vue';
import App from './App.vue';
//PiniaStore
import { createPinia } from 'pinia';
//VueRouter
import router from './shared/router';
//ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//PrimeVue
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'
//VueQuery
import { VueQueryPlugin } from '@tanstack/vue-query';
//Components
import { Button, Image, IconButton, Rating, LoadingPage, ProgressSpinner } from '@components/index';
import ToastService from 'primevue/toastservice';
import "./index.css";
const app = createApp(App);
VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                gcTime: 1000 * 60 * 2, // 2 minutes
            }
        }
    }
});
app.use(ElementPlus);
app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            },
            darkModeSelector: false || 'none',
        }
    }
});
app.use(ToastService);
app.component('Button', Button);
app.component('Image', Image);
app.component('IconButton', IconButton);
app.component('Rating', Rating);
app.component('LoadingPage', LoadingPage);
app.component('ProgressSpinner', ProgressSpinner);
app.mount('#app');
