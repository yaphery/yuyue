const TestOne = () => import("@/components/test.vue");

const routes = [
  {
    path: "/test",
    component: TestOne,
  },
  {
    path: "/waterfall",
    component: () => import("@/components/waterfall.vue"),
  },
  {
    path: "/waterfallrestfull",
    component: () => import("@/components/waterfallrestfull.vue"),
  },
  {
    path: "/vueseamlessscroll",
    component: () => import("@/views/vueseamlessscroll.vue"),
  },
  {
    path: "/vueseamlessscrollself",
    component: () => import("@/views/vueseamlessscrollself.vue"),
  },
  {
    path: "/magnificpopup",
    component: () => import("@/views/magnificpopup.vue"),
  },
];

export default routes;
