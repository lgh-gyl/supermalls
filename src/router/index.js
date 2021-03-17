import Vue from 'vue'
import VueRouter from  'vue-router'

  // 导入
const Home = () => import('../views/home/home');
const Category = () => import('../views/category/category');
const Cart =() => import('../views/cart/cart')
const Profile = () => import('../views/profile/profile')


    // 安装插件
Vue.use(VueRouter);

     //创建 router 对象
    const router = [
        {
            path:'',
            redirect:'/home'
           },
           {
             path:'/home',
             component:Home
           },
           {
             path:'/category',
             component:Category
           },
           {
             path:'/cart',
             component:Cart
           },
           {
             path:'/profile',
             component:Profile
           }
 
    ] 
  const router = new VueRouter({
          router,
        mode:'history'
 })

    //    
export default router