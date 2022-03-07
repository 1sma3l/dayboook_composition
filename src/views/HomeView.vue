<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola mundo</h1>
    <button @click="goTodaybook" class="btn btn-primary">Primary</button>
    <button @click="goTodaybook" class="btn btn-secondary">Secondary</button>
    <button @click="goTodaybook" class="btn btn-success">Success</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  },
  methods: {

    goTodaybook(){

      this.$router.push({ name: 'no-entry' })
    }
  }
}
</script>
