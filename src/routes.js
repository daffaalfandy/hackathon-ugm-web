import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home";
import Subtema from './pages/Subtema'
import Timeline from './pages/Timeline'
import Prizes from './pages/Prizes'
import Judges from './pages/Judges'
import Sk from './pages/Sk'
import About from './pages/About'
import Faq from './pages/Faq'
import Sponsor from './pages/Sponsor'

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
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/faq',
    component: Faq
  },
  {
    path: '/sponsor',
    component: Sponsor
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
});

export default router;