import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 解决重复点击路由报错的BUG
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),    
            meta: { title: '文件' },
            children: [
                {
                    path: '/index',
                    component: () => import(/* webpackChunkName: "index" */ '../components/page/index.vue'),
                    meta: { title: '主页' }
                },
                {
                    path: '/lunbo',
                    component: () => import(/* webpackChunkName: "index" */ '../components/page/lunbo.vue'),
                    meta: { title: '轮播' }
                },

                // {
                //     path: '/factoryMess',
                //     component: () => import(/* webpackChunkName: "index" */ '../components/page/baseMess/factoryMess.vue'),
                //     meta: { title: '公司信息' }
                // },
                // {
                //     path: '/factoryMess_view',
                //     component: () => import(/* webpackChunkName: "index" */ '../components/page/baseMess/factoryMess_view.vue'),
                //     meta: { title: '查看' }
                // },
                
                
                
                
                
                
                
                
                
               
                
               

                
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        
        
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
