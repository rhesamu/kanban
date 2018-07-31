<template>
  <div class="container">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a href="#" class="navbar-brand">Kanban</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link :to="'/add'" class="btn btn-default">Add task</router-link>
            </li>
          </ul>
        </div>
     </div>
    </nav>
    <div class="row" id="main-row">
      <div class="col-md-4">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Todo</h3>
          </div>
          <div class="panel-body">
            <div class="panel panel-default" v-for="(task, index) in tasks" :key="index" v-if="task.status===1">
              
              <div class="panel-heading">{{task.title}}</div>
              <div class="panel-body todo">
                {{task.content}}
                <div class="content-fluid">
                  <div class="row visible-md visible-lg">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                      <a @click="remove(index)" class="pull-right btn btn-danger">Remove</a>
                    </div>
                    <div class="col-md-4">
                      <button @click="next(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-chevron-right"></span></button>
                    </div>
                  </div>
                  <div class="row visible-sm visible-xs">
                    <div class="col-xs-4 col-sm-4"></div>
                    <div class="col-xs-4 col-sm-4">
                      <a @click="remove(index)" class="pull-right btn btn-danger">Remove</a>
                    </div>
                    <div class="col-xs-4 col-sm-4">
                      <button @click="next(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-menu-down"></span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h3 class="panel-title">Doing</h3>
          </div>
          <div class="panel-body">
            <div class="panel panel-default" v-for="(task, index) in tasks" :key="index" v-if="task.status===2">
              <div class="panel-heading">{{task.title}}</div>
              <div class="panel-body doing">
                {{task.content}}
                <div class="content-fluid">
                  <div class="row visible-md visible-lg">
                    <div class="col-md-4">
                      <button @click="previous(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-chevron-left"></span></button>
                    </div>
                    <div class="col-md-4">
                      <a @click="remove(index)" class="pull-right btn btn-danger">Remove</a>
                    </div>
                    <div class="col-md-4">
                      <button @click="next(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-chevron-right"></span></button>
                    </div>
                  </div>
                  <div class="row visible-sm visible-xs">
                    <div class="col-xs-4">
                      <button @click="previous(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-menu-up"></span></button>
                    </div>
                    <div class="col-xs-4 col-sm-4">
                      <a @click="remove(index)" class="pull-right btn btn-danger">Remove</a>
                    </div>
                    <div class="col-xs-4">
                      <button @click="next(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-menu-down"></span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title">Done</h3>
          </div>
          <div class="panel-body">
            <div class="panel panel-default" v-for="(task, index) in tasks" :key="index" v-if="task.status===3">
              
              <div class="panel-heading">{{task.title}}</div>
              <div class="panel-body done">
                {{task.content}}
                <div class="content-fluid">
                  <div class="row visible-md visible-lg">
                    <div class="col-md-4">
                      <button @click="previous(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-chevron-left"></span></button>
                    </div>
                    <div class="col-md-4">
                      <a @click="remove(index)" class="pull-right btn btn-danger">Remove</a>
                    </div>
                    <div class="col-md-4"></div>
                  </div>
                  <div class="row visible-sm visible-xs">
                    <div class="col-xs-4">
                      <button @click="previous(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-menu-up"></span></button>
                    </div>
                    <div class="col-xs-4">
                      <a @click="remove(index)" class="pull-right btn btn-danger">Remove</a>
                    </div>
                    <div class="col-xs-4"></div>
                  </div>
                </div>
              </div>
            </div>
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

.panel-primary {
  border-color: #df691a;
}

.panel-primary > .panel-heading {
  background-color: #df691a;
}

.panel-warning {
  border-color: #00ACC1;
}

.panel-warning > .panel-heading {
  background-color: #00ACC1;
}

.panel-success {
  border-color: #23D160;
}

.panel-success > .panel-heading {
  background-color: #23D160;
}

.panel-title {
  color: #FFFFFF
}

.todo {
  color: #df691a;
}
.doing {
  color: #f0ad4e;
}
.done {
  color: #5cb85c
}
</style>
