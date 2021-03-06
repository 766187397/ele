import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 加载提示框，支持自定义文本和加载图标。
import { Indicator } from 'mint-ui';
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
// 安装qs防止PSOT请求失效
// import qs from 'qs'

// 根路径
// axios.defaults.baseURL = 'https://ele-interface.herokuapp.com/';

// 请求拦截
axios.interceptors.request.use(config => {
  // 对post请求进行处理
  // if (config.method == 'post') {
  //   config.data = qs.stringify(config.data);
  // }
  // 加载动画
  Indicator.open()
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
  Indicator.close()
  return response
}, error => {
  Indicator.close()
  return Promise.reject(error)
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
