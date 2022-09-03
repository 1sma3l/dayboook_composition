import { computed } from 'vue'
import { useStore } from 'vuex'


const useAuth = () => {

    const store = useStore()

    const createUser = async ( user ) => {

        const resp = await store.dispatch('auth/createUser', user ) //Ejecuto accion
        return resp
    }

    const loginUser = async ( user ) => {

        const resp = await store.dispatch('auth/signInUser', user ) //Ejecuto accion
        return resp
    }

    const checkAuthStatus = async() =>{

        //Ejecuto accion
        const resp = await store.dispatch('auth/checkAuthentication' ) 
        return resp
    }

    const logout = () => {
        debugger
        //Ejecuto la mutacion
        store.commit('auth/logout') //Se ejecuta el logout
        store.commit('journal/clearEntries') //Limpio entradas
    }

    return { 

        //Funciones
        createUser,
        loginUser,
        checkAuthStatus,
        logout,

        //Propiedades computadas
        authStatus: computed(() => store.getters['auth/currentStatus']),
        username: computed(()=> store.getters['auth/username'])
    }
}

export default useAuth