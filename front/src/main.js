import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDownload,
  faEnvelope,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";
import router from "./router";

library.add(faDownload, faLinkedin, faGithub, faEnvelope, faPhoneSquare);
createApp(App).component("fa", FontAwesomeIcon).use(router).mount("#app");
