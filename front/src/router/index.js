import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProjectPage from "../views/ProjectPage.vue";
import AboutMe from "../views/AboutMe.vue";
import ProjectReservia from "../views/ProjectReservia";
import ProjectOhmyfood from "../views/ProjectOhmyfood";
import ProjectKanap from "../views/ProjectKanap";
import ProjectGroupomania from "../views/ProjectGroupomania";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: {
      hideNavbar: true,
      transition: "slide-down",
    },
  },
  {
    path: "/project",
    name: "ProjectPage",
    component: ProjectPage,
    meta: { transition: "slide-up" },
  },
  {
    path: "/aboutme",
    name: "AboutMe",
    component: AboutMe,
    meta: { transition: "slide-left" },
  },
  {
    path: "/reservia",
    name: "ProjectReservia",
    component: ProjectReservia,
    meta: { transition: "slide-right" },
  },
  {
    path: "/ohmyfood",
    name: "ohmyfood",
    component: ProjectOhmyfood,
    meta: { transition: "slide-right" },
  },
  {
    path: "/kanap",
    component: ProjectKanap,
    meta: { transition: "slide-right" },
  },
  {
    path: "/groupomania",
    component: ProjectGroupomania,
    meta: { transition: "slide-right" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
