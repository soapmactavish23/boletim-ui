import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import PrimeVue from "primevue/config";
import "/node_modules/primeflex/primeflex.css";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";

import DataTable from "primevue/datatable";
import Column from 'primevue/column';
import Row from 'primevue/row';
import Panel from "primevue/panel";
import Toolbar from 'primevue/toolbar';
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';

const app = createApp(App);

app.use(PrimeVue);
app.use(store);
app.use(router);

app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Row", Row);
app.component("Panel", Panel);
app.component("Toolbar", Toolbar);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("InputMask", InputMask);

app.mount("#app");
