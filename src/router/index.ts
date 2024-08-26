// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../src/views/Home.vue';
import Home from '../views/Home.vue';
import Table from '../views/tables/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
      icon: 'el-icon-s-home'
    }
  },
  {
    path: '/table',
    name: 'About',
    component: () => import('../views/tables/index.vue'),
    meta: {
      title: 'About',
      icon: 'el-icon-user-solid'
    }
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/form/index.vue'),
    meta: {
      title: 'Form',
      icon: 'el-icon-user-solid'
    }
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('../views/chart/index.vue'),
    meta: {
      title: 'Chart',
      icon: 'el-icon-user-solid'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;