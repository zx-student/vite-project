import { createApp } from 'vue'
// import './style.css'
import App from '@/App.vue'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// svg插件需要配置代码
import 'virtual:svg-icons-register'

// 引入自定义插件对象:注册整个项目的全局组件
import globalComponent from '@/components/index'

// 引入全局样式
import '@/styles/index.scss'
// 引入路由
import router from './router'
// 引入仓库
import pinia from './store'

// // 测试代码，测试mock接口
// import axios from 'axios'
// // 登录接口
// axios({
//   url: '/api/user/login',
//   method: 'post',
//   data: {
//     username: 'admin',
//     password: '12122',
//   },
// })

// 获取应用的实例对象
const app = createApp(App)
// 安装element-plus插件
// app.use(ElementPlus)
app.use(ElementPlus, {
  locale: zhCn,
})
// 安装仓库
app.use(pinia)
// 注册模板路由
app.use(router)
// 安装自定义插件
app.use(globalComponent)
// 将应用挂载到挂载点上
app.mount('#app')
