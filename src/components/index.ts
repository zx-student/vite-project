// 引入svg图标组件
import SvgIcon from '@/components/SvgIcon/index.vue'
// 引入pagination分页组件
import Pagination from '@/components/Pagination/index.vue'
import type { App, Component } from 'vue'
//全局组件的对象
const components: { [name: string]: Component } = { SvgIcon, Pagination }
// 对外暴露插件对象
export default {
  install(app: App) {
    // 注册项目全部的全局组件
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
