import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: import("@/views/common/HomeView.vue"),
  },
  {
    path: "/404",
    name: "NotFound",
    component: import("@/views/common/404View.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

