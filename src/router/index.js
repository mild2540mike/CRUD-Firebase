import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const ipAddress = sessionStorage.getItem('ipAddress');

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/UserLogin.vue'),
    
  },
  {
    path: '/views',
    name: 'views',
    component: () => import('../components/UserList'),
  },
  {
    path: '/list',
    name: 'add',
    component: () => import('../components/UserCreate'),
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/UserEdit'),
  },
]
if(ipAddress == '124.120.25.218'){
  console.log(routes)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
export default router
