import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n'
// 导入Element-UI 语言包
import jpLocale from 'element-ui/lib/locale/lang/ja'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from 'element-ui/lib/locale/lang/en'

// icon图标
import './assets/icon/iconfont.css'


import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import store from '@/store';
//切换主题
// import './assets/css/theme/409eff/index.css'; //默认颜色 蓝色
import './assets/css/theme/E9461F/index.css'; 

import './assets/css/icon.css';

import './components/common/flex.scss'
import './components/common/common.scss'






Vue.prototype.openLoading = function() {
    const loading = this.$loading({           // 声明一个loading对象
      lock: true,                             // 是否锁屏
      text: '正在加载...',                     // 加载动画的文字
      spinner: 'el-icon-loading',             // 引入的loading图标
      background: 'rgba(0, 0, 0, 0.3)',       // 背景颜色
      target: '.sub-main',                    // 需要遮罩的区域
      body: true,                              
      customClass: 'mask'                     // 遮罩层新增类名
    })
    setTimeout(function () {                  // 设定定时器，超时5S后自动关闭遮罩层，避免请求失败时，遮罩层一直存在的问题
      loading.close();                        // 关闭遮罩层
    },5000)
    return loading;
}
import animated from 'animate.css' // npm install animate.css --save安装，在引入
Vue.use(animated)



// 翻译
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'ch',
    messages:{
        'ch': Object.assign(require('./assets/lang/zh'),zhLocale),
        'jp': Object.assign(require('./assets/lang/jp'),jpLocale),
        'en': Object.assign(require('./assets/lang/en'),enLocale)

    
    }
});
Vue.use(ElementUI, {
    size: 'small',
    i18n: (key,value) => i18n.t(key,value)
});




//使用钩子函数对路由进行权限跳转
// Vue.Cancel = [];
// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title}`;
//     const role = localStorage.getItem('ms_username');
//     if( !role && to.path !== '/login'){
//         next('/login');
//     }else{
//         while (Vue.Cancel.length > 0) {
//             Vue.Cancel.shift()('cancel');
//         }
//         next()
//     }
// });

new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount('#app');
