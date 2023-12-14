import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './router/router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/icon/iconfont.js' // 图标
import './assets/icon/iconfont.css' // 图标
import * as ElIconModules from '@element-plus/icons'

const app = createApp(App)

for (let iconName in ElIconModules) {
    app.component(iconName, ElIconModules[iconName])
}

const pinia = createPinia()

app.use(pinia)
    .use(routes)
    .use(ElementPlus)
    .mount('#app')
