import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from "./routes";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./style.scss";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
