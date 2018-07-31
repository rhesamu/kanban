<template>
  <div class="container">
  <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link :to="'/'" class="navbar-brand">Kanban</router-link>
        </div>
     </div>
    </nav>

   <div class="row" id="main-row">
     <div class="col-md-12">
       <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Todo</h3>
          </div>
          <div class="panel-body">
            <div class="panel panel-default">
              <h4 id="warning-msg" v-if="msg">{{msg}}</h4>
              <div class="panel-heading">
                <input type="text" class="form-control" v-model="newTask.title" placeholder="Title">
              </div>
              <div class="panel-body" id="bodycontent">
                <textarea class="form-control" rows="3" v-model="newTask.content" placeholder="Content"></textarea>
              </div>
            </div>
            <button class="btn btn-info" @click="submit">Create</button>
            <router-link :to="'/'" class="btn btn-primary" id="btn-back">Back</router-link>
          </div>
        </div>
      </div>
     </div>
     
   </div>
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
        this.msg = 'You must insert title and content';
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
  width: 70%;
}
#bodycontent {
  margin-bottom: -8px;
}

#warning-msg {
  color:red;
  margin-top:-5px;
}

#main-row {
  padding-top: 80px
}
</style>
