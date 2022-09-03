

<template>
  <Navbar/>
      <div v-if="isLoading" class="row justify-content-md-center">
            <div class="col-3 alert-info text-center mt-5">
                Espere por favor...
                <h3 class="mt-2">
                    <i class="fa fa-spin fa-sync"></i>
                </h3>
            </div>
      </div>
      <div v-else class="d-flex">
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
import { mapActions, mapState } from 'vuex'

export default {

    components: {
        Navbar,
        EntrList
    },
    methods: {
        ...mapActions('journal', ['loadEntries']),
        
    },
    created() {
        this.loadEntries()
    }, 
    computed: {
        ...mapState('journal', ['isLoading'])
    }
}
</script>

<style>

</style>
