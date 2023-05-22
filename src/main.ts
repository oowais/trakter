import App from "@/App.vue";
import { loadFonts } from "@/plugins/webfontloader";
import router from "@/router";
import { createPinia } from "pinia";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-dark-teal/theme.css";
import { createApp } from "vue";

loadFonts();

createApp(App).use(PrimeVue).use(router).use(createPinia()).mount("#app");
