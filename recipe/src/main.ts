import { createApp } from "vue";
import { createPinia } from "pinia";
import { Lazyload } from "vant";
import "@/assets/iconfont/iconfont.css";
import "@/assets/iconfont/iconfont.js";
import "animate.css";

import "./index.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(Lazyload);
app.use(createPinia());
app.use(router);

app.mount("#app");
