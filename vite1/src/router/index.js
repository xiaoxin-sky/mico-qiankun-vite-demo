import home from "../views/Home.vue";
const routes = [
  { path: "/", name: "home", component: home },
  /* {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  }, */
];

export default routes;
