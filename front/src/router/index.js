import { createRouter, createWebHashHistory } from "vue-router";
import AccueilPage from "../views/AccueilPage.vue";
import ProjectPage from "../views/ProjectPage.vue";

const routes = [
  {
    path: "/",
    name: "AccueilPage",
    component: AccueilPage,
  },
  {
    path: "/project",
    name: "ProjectPage",
    component: ProjectPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
