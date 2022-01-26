import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// auth0
import VueAuth0Plugin from "vue-auth0-plugin";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(VueAuth0Plugin, {
  domain: "our-shared-key.us.auth0.com",
  client_id: "lRjomGno3ycd0N8PEVXwT6EmOmseaabY",
  redirect_uri:
    window.location.hostname === "localhost"
      ? "http://localhost:8080"
      : "https://our-shared-key.herokuapp.com",
});

app.mount("#app");
