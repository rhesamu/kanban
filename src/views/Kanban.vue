<template>
<section class="kanbanmain">
  <div class="container">
    <div class="row" id="main-row">
      <KanbanCards
        :title="'Todo'"
        :tasks="tasks"
        :status="1"
        :prevBtn="false" :deleteBtn="true" :nextBtn="true"
      />
      <KanbanCards
        :title="'Doing'"
        :tasks="tasks"
        :status="2"
        :prevBtn="true" :deleteBtn="true" :nextBtn="true"
      />
      <KanbanCards
        :title="'Done'"
        :tasks="tasks"
        :status="3"
        :prevBtn="true" :deleteBtn="true" :nextBtn="false"
      />
      </div>
    </div>
  </div>
</section>
</template>

<script>
import KanbanCards from '@/components/KanbanCards.vue'

export default {
  components: {
    KanbanCards
  },
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
</style>