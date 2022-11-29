import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import PrimeVue from "primevue/config";
import "/node_modules/primeflex/primeflex.css";

import DataTable from "primevue/datatable";

const app = createApp(App);

app.use(PrimeVue);
app.use(store);
app.use(router);

app.component("DataTable", DataTable);

app.mount("#app");
