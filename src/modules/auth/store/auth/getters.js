/*export const myGetter = ( state, args1 ) => {
    return state.algo
}*/

export const currentStatus = ( state ) => {
    return state.status
}

export const username = ( state ) => {
    return state.user?.name || ''
}
