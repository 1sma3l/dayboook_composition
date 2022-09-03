/*export const myAction = async ( { commit }) => {

}*/

import authApi from '@/api/authApi'

export const createUser = async ( { commit }, user ) => {

    const { userName ,email, password } = user

    try {

        const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })

        const { idToken, refreshToken } = data

        await authApi.post(':update', { displayName: userName, idToken })

        //Ejecuto mutacion par que impacte al store

        delete user.password
        commit('loginUser', { user, idToken, refreshToken})

        return { ok: true }
        
    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }
}


export const signInUser = async ( { commit }, user ) => {

    const { email, password } = user

    try {

        const { data } = await authApi.post(':signInWithPassword', { email, password, returnSecureToken: true })
        const { idToken, refreshToken } = data
        
        //Ejecuto mutacion par que impacte al store
        commit('loginUser', { user, idToken, refreshToken})

        return { ok: true }
        
    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }
}

export const checkAuthentication = async ( { commit }) => {

    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    //No esta uatenticado el usuario
    if( !idToken ){
        commit('logOut')
        return { ok: false, message: 'Token invalido '}
    }

    try {

        const { data } = await authApi.post(':lookup', { idToken })
        const { displayName, email } = data.users[0]

        const user = {
            name: displayName,
            email: email
        }
        
        //Ejecuto mutacion par que impacte al store
        commit('loginUser', { user, idToken, refreshToken})
        return { ok: true }

    } catch (error) {
        console.error('checkAuthentication ' + error)
        commit('logOut')
        return { ok: false, message: error.response.data.error.message }
    }
}