import { createRouter, createWebHashHistory } from "vue-router";
// @ is an alias to /src
import Home from "@/views/Home.vue";
import { AuthenticationGuard } from "vue-auth0-plugin";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    beforeEnter: [AuthenticationGuard],
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    beforeEnter: [AuthenticationGuard],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
