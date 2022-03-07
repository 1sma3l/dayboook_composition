import { createStore } from 'vuex'
import journalModule from "../modules/daybook/store/journal";

// Create a new store instance.
const store = createStore({ 

    modules: {
        journal: journalModule
    }
    
})

export default store