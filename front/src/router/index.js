import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProjectPage from "../views/ProjectPage.vue";
import ProjectReservia from "../views/ProjectReservia";
import ProjectOhmyfood from "../views/ProjectOhmyfood";
import ProjectKanap from "../views/ProjectKanap";
import ProjectGroupomania from "../views/ProjectGroupomania";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/project",
    name: "ProjectPage",
    component: ProjectPage,
    meta: { transition: "slide-up" },
  },
  {
    path: "/reservia",
    name: "ProjectReservia",
    component: ProjectReservia,
  },
  {
    path: "/ohmyfood",
    name: "ohmyfood",
    component: ProjectOhmyfood,
  },
  {
    path: "/kanap",
    component: ProjectKanap,
  },
  {
    path: "/groupomania",
    component: ProjectGroupomania,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
