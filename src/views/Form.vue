<template>
<section class="addkanban">
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
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Add Task</h5>
            <div class="form-group">
              <input v-model="newTask.title" type="text" class="form-control" placeholder="Title">
            </div>
            <div class="form-group">
              <textarea v-model="newTask.content" rows="3" class="form-control" placeholder="Content">
              </textarea>
            </div>
            <div v-if="msg" class="form-group">
              <small style="color: red">{{ msg }}</small>
            </div>
            <button @click="submit" class="btn btn-primary">Add</button>
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
      newTask: {
        title: null,
        content: null,
        status: 1
      },
      msg: null
    }
  },
  methods: {
    submit () {
      if (this.newTask.title == null || this.newTask.title === '' || this.newTask.content == null || this.newTask.content === '') {
        this.msg = 'Title and content required!';
      } else {
        this.$tasksRef.push(this.newTask);
        this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 50%;
}

#main-row {
  padding-top: 80px
}
</style>
