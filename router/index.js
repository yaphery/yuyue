import Vue from "vue";
import vueRouter from "vue-router";

import routes from "./test/test";
Vue.use(vueRouter);

export default new vueRouter({
  routes,
});
