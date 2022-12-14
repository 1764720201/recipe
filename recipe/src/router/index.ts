import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/community",
      name: "community",
      component: () => import("../views/Community/index.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login/index.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register/index.vue"),
    },
    {
      path: "/category",
      name: "category",
      component: () => import("../views/Home/Classify/Category/index.vue"),
    },
    {
      path: "/messageCenter",
      name: "messageCenter",
      component: () => import("../views/Mine/Header/MessageCenter/index.vue"),
    },

    {
      path: "/collect",
      name: "collect",
      component: () =>
        import("../views/Mine/Header/MessageCenter/Collect/index.vue"),
    },
    {
      path: "/praises",
      name: "praises",
      component: () =>
        import("../views/Mine/Header/MessageCenter/Praise/index.vue"),
    },
    {
      path: "/reply",
      name: "reply",
      component: () =>
        import("../views/Mine/Header/MessageCenter/Reply/index.vue"),
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("../views/FoodDetail/index.vue"),
    },
    {
      path: "/cooking",
      name: "cooking",
      component: () => import("../views/Cooking/index.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/Search/index.vue"),
    },
    {
      path: "/message",
      name: "message",
      component: () => import("../views/Message/index.vue"),
    },
    {
      path: "/option",
      name: "option",
      component: () => import("../views/Mine/Option/index.vue"),
    },
    {
      path: "/mine",
      name: "mine",
      component: () => import("../views/Mine/index.vue"),
      children: [
        {
          path: "",
          name: "opinion",
          component: () => import("../views/Mine/Opinion/index.vue"),
        },
        {
          path: "/mine/collection",
          name: "collection",
          component: () => import("../views/Mine/Collection/index.vue"),
        },
        {
          path: "/mine/praise",
          name: "praise",
          component: () => import("../views/Mine/Praise/index.vue"),
        },
      ],
    },

    {
      path: "/home",
      redirect: "/",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition && to.path == "/") {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
