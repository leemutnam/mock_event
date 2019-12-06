import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Temp from '../components/Temp'
import Temp2 from '../components/Temp2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'Temp',
      component: Temp
    },
    {
      path: '/b',
      name: 'Temp2',
      component: Temp2
    }
  ]
})
