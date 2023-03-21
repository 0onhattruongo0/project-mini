import { defineAsyncComponent } from "vue";

export function registerComponentGlobal(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/auth"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default"))
  );
}
