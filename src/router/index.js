import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {  // 首页
    path: '/',
    name: 'homes',
    component: () => import('../views/home/HomesView'),
    meta: {
      title: '图书兄弟'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/CategoryView')
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import('../views/login/LoginView')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: ()=> import('../views/detail/DetailView')
  },
  {
    path: '/setUp',
    name: 'SetUp',
    component: ()=> import('../views/setup/SetUpView')
  }

]





/*
格式一
import HomeView from '../views/HomesView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  样本  格式二
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/AboutView.vue')
  }
]*/

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   // 如果访问需要登录的界面，在这里判断有没有登录就跳转到登录页
//   document.title = to.meta.title;
// })

export default router
