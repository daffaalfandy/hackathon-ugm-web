import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home";
import Subtema from './pages/Subtema'
import Timeline from './pages/Timeline'
import Prizes from './pages/Prizes'

Vue.use(VueRouter);

const routes = [{
    path: "/",
    component: Home,
  },
  {
    path: '/subtema',
    component: Subtema
  },
  {
    path: '/timeline',
    component: Timeline
  },
  {
    path: '/prizes',
    component: Prizes
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;