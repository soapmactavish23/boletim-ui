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
import Menubar from 'primevue/menubar';
import TabMenu from 'primevue/tabmenu';

import DataTable from "primevue/datatable";
import Column from 'primevue/column';
import Row from 'primevue/row';
import Panel from "primevue/panel";
import Toolbar from 'primevue/toolbar';
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Dialog from 'primevue/dialog';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';
import Message from 'primevue/message';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Carousel from 'primevue/carousel';
import Fieldset from 'primevue/fieldset';



const app = createApp(App);

app.use(PrimeVue);
app.use(store);
app.use(router);
app.use(ConfirmationService);
app.use(ToastService);
app.use(Toast);
app.use(Carousel);

app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Row", Row);
app.component("Panel", Panel);
app.component("Toolbar", Toolbar);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("InputMask", InputMask);
app.component("InputNumber", InputNumber);
app.component("Dialog", Dialog);
app.component("ConfirmDialog", ConfirmDialog);
app.component("Message", Message);
app.component("ToastService", ToastService);
app.component("Toast", Toast);
app.component("Menubar", Menubar);
app.component("Carousel", Carousel);
app.component("TabMenu", TabMenu);
app.component("Fieldset", Fieldset);

app.mount("#app");
