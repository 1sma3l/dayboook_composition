import axios from 'axios'

const authApi = axios.create( { 
    baseURL : 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyDZeXQKNub4dEq_OlP3SYBb9ej98JirNGo'
    }
 })

 export default authApi