import { createApp } from "vue";
//import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//import { library } from "@fortawesome/fontawesome-svg-core";
//import { linkedin } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";
import router from "./router";
//library.add(linkedin);
createApp(App).use(router).mount("#app");
