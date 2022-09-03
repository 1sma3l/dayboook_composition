import { createStore } from 'vuex'
import journalModule from "../modules/daybook/store/journal";
import authModule from '@/modules/auth/store/auth';

// Create a new store instance.
const store = createStore({ 

    modules: {
        auth: authModule,
        journal: journalModule
    }
})

export default store