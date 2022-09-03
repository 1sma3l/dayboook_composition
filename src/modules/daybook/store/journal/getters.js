/*export const myGetter = ( state, args1 ) => {
    return state.algo
}*/

//La funcion va a regresar otra funcion
export const getEntriesByTerm = ( state ) => ( term = '' ) => {

    //Si no viene el termino, retorna todas las entradas
    if( term.length === 0 ) return state.entries
    console.log()
    return state.entries.filter( entry => entry.text.toLowerCase().includes( term.toLocaleLowerCase() ) )
    
}

export const getEntryById = ( state ) => ( id = '') => {
 
    const entry = state.entries.find( entry => entry.id === id)
    if( !entry ) return 

    return { ...entry }
}