import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./pages/HomeView.vue";
import AboutView from "./pages/AboutView.vue";
import CvView from "./pages/CvView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/cv", component: CvView },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
