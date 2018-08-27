<template>
  <div class="col-md-4">
    <h5>{{ title }}</h5>
    <div class="card text-white" :class="bgColor" v-if="task.status == status" v-for="(task, index) in tasks" :key="index">
      <div class="card-body">
        <h5 class="card-title">{{ task.title }}</h5>
        <p class="card-text">{{ task.content }}</p>
      </div>
      <div class="card-footer">
        <button v-if="prevBtn" @click="previous(task, index)" class="btn btn-primary">Prev</button>
        <button v-if="deleteBtn" @click="remove(index)" class="btn btn-danger">Delete</button>
        <button v-if="nextBtn" @click="next(task, index)" class="btn btn-primary">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'tasks', 'status', 'nextBtn', 'prevBtn', 'deleteBtn'],
  data () {
    return {
      bgColor: ''
    }
  },
  computed: {
    cardColor () {
      if (this.title == 'Todo') { this.bgColor = 'bg-info' } 
      else if (this.title == 'Doing') { this.bgColor = 'bg-warning' } 
      else if (this.title == 'Done') { this.bgColor = 'bg-success' }
    }
  },
  methods: {
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
  }
}
</script>

<style scoped>
.card-footer > button {
  margin-left: 6px;
  margin-right: 6px;
}

.card {
  margin-bottom: 12px;
}
</style>
