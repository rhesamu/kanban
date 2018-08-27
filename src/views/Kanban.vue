<template>
<section class="kanbanmain">
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <router-link to="/" class="navbar-brand">Kanban?</router-link>
    <div class="collapse navbar-collapse">
      <div class="ml-auto">
        <router-link class="btn btn-primary" to="/add">Add Task</router-link>
      </div>
    </div>
  </nav>

  <div class="container">
    <div class="row" id="main-row">
      <div class="col-md-4">
        <h5>Todo</h5>
        <div class="card bg-info text-white" v-if="task.status===1" v-for="(task, index) in tasks" :key="index">
          <div class="card-body">
            <h5 class="card-title">{{ task.title }}</h5>
            <p class="card-text">{{ task.content }}</p>
          </div>
          <div class="card-footer">
            <button @click="remove(index)" class="btn btn-danger">Delete</button>
            <button @click="next(task, index)" class="btn btn-primary">Next</button>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <h5>Doing</h5>
        <div class="card bg-warning text-white" v-if="task.status===2" v-for="(task, index) in tasks" :key="index">
          <div class="card-body">
            <h5 class="card-title">{{ task.title }}</h5>
            <p class="card-text">{{ task.content }}</p>
          </div>
          <div class="card-footer">
            <button @click="previous(task, index)" class="btn btn-primary">Prev</button>
            <button @click="remove(index)" class="btn btn-danger">Delete</button>
            <button @click="next(task, index)" class="btn btn-primary">Next</button>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <h5>Done</h5>
        <div class="card bg-success text-white" v-if="task.status===3" v-for="(task, index) in tasks" :key="index">
          <div class="card-body">
            <h5 class="card-title">{{ task.title }}</h5>
            <p class="card-text">{{ task.content }}</p>
          </div>
          <div class="card-footer">
            <button @click="previous(task, index)" class="btn btn-primary">Prev</button>
            <button @click="remove(index)" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data () {
    return {
      tasks: null,
      keys: null
    }
  },
  methods: {
    getTasks () {
      this.$tasksRef.on('value', (data) => {
        this.tasks = data.val();
      })
    },
    next (task, index) {
      this.$tasksRef.child(index).update({
        status: task.status + 1
      })
    },
    previous (task, index) {
      this.$tasksRef.child(index).update({
        status: task.status - 1
      })
    },
    remove (index) {
      this.$tasksRef.child(index).remove()
    }
  },
  mounted () {
    this.getTasks()
  }
}
</script>

<style scoped>
#main-row {
  padding-top: 80px;
}

.card-footer > button {
  margin-left: 6px;
  margin-right: 6px;
}

.card {
  margin-bottom: 6px;
}
</style>
