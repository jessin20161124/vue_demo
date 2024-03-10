
import { createApp } from 'vue'
// vue3，都需要添加后缀.vue/.ts
import App from './App.vue'
import router from './router/index.ts'

// 创建一个app实例，并挂载app，设置路由
createApp(App).use(router).mount('#app')
