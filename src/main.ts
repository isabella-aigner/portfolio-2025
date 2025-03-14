import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';
import SelectButton from 'primevue/selectbutton';
import Dialog from 'primevue/dialog';
import { i18n } from './i18n';
import './style.css';
import App from './App.vue';

import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import PersonalProjects from './views/PersonalProjects.vue';
import Career from './views/Career.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/personal-projects', component: PersonalProjects },
    { path: '/career', component: Career },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.use(i18n);
app.component('Button', Button);
app.component('Card', Card);
app.component('SelectButton', SelectButton);
app.component('Dialog', Dialog);

app.mount('#app');
