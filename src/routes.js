import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home";
import Subtema from './pages/Subtema'
import Timeline from './pages/Timeline'
import Prizes from './pages/Prizes'
import Judges from './pages/Judges'
import Sk from './pages/Sk'

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
  },
  {
    path: '/judges',
    component: Judges
  },
  {
    path: '/sk',
    component: Sk
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;