import Home from './components/Home.vue'
import Column from './components/Column.vue'
import Follow from './components/Follow.vue'
import UserInfo from './components/UserInfo.vue'


export default[
   {
     path:'/home',
     component:Home
   },
   {
    path:'/follow',
    component:Follow
  },
  {
    path:'/column',
    component:Column
  },
  {
    path:'/userinfo',
    component:UserInfo
  },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'*',
    redirect:'/home'
  }
]