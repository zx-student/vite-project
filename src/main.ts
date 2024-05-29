import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 获取应用的实例对象
const app = createApp(App)
// 安装element-plus插件
app.use(ElementPlus)
// 将应用挂载到挂载点上
app.mount('#app')


