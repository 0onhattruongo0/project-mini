import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";
import { registerComponentGlobal } from "./utils/import";
let app;
if (!app) {
  app = createApp(App);
  registerComponentGlobal(app);
  app.use(router);
  app.mount("#app");
}
