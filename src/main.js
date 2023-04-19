import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import {Button, Swipe, SwipeItem} from "vant";

createApp(App)
    .use(store)
    .use(router)
    .use(Button)
    .use()
    .mount('#app')
