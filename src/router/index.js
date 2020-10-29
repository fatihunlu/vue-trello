import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../pages/Home.vue';
import Board from '../pages/Board.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/board/:id',
    name: 'Board',
    component: Board
  },
];

const router = new VueRouter({
  routes
});

export default router;
