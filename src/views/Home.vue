<template>
  <div class="home">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  name: 'home'
}
</script>
