

<template>
  <Navbar/>
  <div class="d-flex">
      <div class="col-4">
          <EntrList/>
      </div>
      <div class="col">
          <router-view/>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar-C.vue'
import EntrList from '../components/EntryList.vue'

export default {

    components: {
        Navbar,
        EntrList
    }
}
</script>

<style>

</style>
