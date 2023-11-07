import './index.css';
import 'tw-elements';
import 'flowbite';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import {
    Validation,
    Ripple,
    Input,
    Select,
    Datepicker,
    initTE,
} from "tw-elements";

initTE({ Validation, Ripple, Input, Select, Datepicker });

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
