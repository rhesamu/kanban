import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Kanban from './views/Kanban.vue'
import Form from './views/Form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          component: Kanban
        }
      ]
    },
    {
      path: '/add',
      name: 'form',
      component: Form
    }
  ]
})
