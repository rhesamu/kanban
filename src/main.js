import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const config = {
  databaseURL: 'https://kanban-2edf7.firebaseio.com/',
  projectId: 'kanban-2edf7'
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
Vue.prototype.$tasksRef = db.ref('tasks')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
