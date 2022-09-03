import store from "@/store"

const isAuthenticatedGuard = async( to, from, next ) => {

    console.log(to, from)
    //disparo la accion, para que ejecute el checkAuthentication
    const { ok } = await store.dispatch('auth/checkAuthentication')
    if ( ok ){
        next()
    }
    else{
        next({ name: 'login' })
    }
}

export default isAuthenticatedGuard