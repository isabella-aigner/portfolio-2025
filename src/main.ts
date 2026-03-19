import { createApp } from 'vue';
import { createHead } from '@unhead/vue/client';
import { createRouter, createWebHistory } from 'vue-router';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';
import SelectButton from 'primevue/selectbutton';
import Dialog from 'primevue/dialog';
import { i18n } from './i18n';
import './style.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',                  component: () => import('./views/Home.vue') },
    { path: '/projects',          component: () => import('./views/Projects.vue') },
    { path: '/personal-projects', component: () => import('./views/PersonalProjects.vue') },
    { path: '/career',            component: () => import('./views/Career.vue') },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0, behavior: 'instant' };
  },
});

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(PrimeVue);
app.use(router);
app.use(i18n);
app.use(gsap);
app.component('Button', Button);
app.component('Card', Card);
app.component('SelectButton', SelectButton);
app.component('Dialog', Dialog);

app.mount('#app');
