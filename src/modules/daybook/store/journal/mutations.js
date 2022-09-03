/*export const myAction = ( state ) => {
    
}*/

export const setEntries = ( state, entries ) => {
    //Creo un nuevo arreglo con los valores anteriores
    //mas los nuevos valores

    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = ( state, fila ) => { //entry actualizada
    
    const idx = state.entries.map( e => e.id ).indexOf( fila.id )
    state.entries[idx] = fila
}

export const addEntry = ( state, fila ) => {
    
    state.entries = [fila, ...state.entries]
}

export const deleteEntry = ( state, id ) => {
    
    state.entries = state.entries.filter ( e => e.id !== id)
}

export const clearEntries = ( state ) => {
    
    state.entries = []
}