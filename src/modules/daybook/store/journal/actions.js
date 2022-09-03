/*export const myAction = async ( { commit }) => {

}*/

import journalApi from "@/api/journalApi"

export const loadEntries = async ( { commit } ) => {

    const { data } = await journalApi.get('/entries.json')

    if( !data ){
        commit('setEntries', [])
        return 
    }

    const entries = []
    for (let id of Object.keys( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
    }

    //Mando a ejecutar la mutacion para que modifique el state
    commit('setEntries', entries)
}

export const updateEntry = async ( { commit }, fila ) => {

    const { date, picrure, text } = fila
    const dataToSave = { date, picrure, text } //Payload

    await journalApi.put(`/entries/${ fila.id }.json`, dataToSave)

    commit('updateEntry', {...fila})
}

export const createEntry = async ( { commit }, fila ) => {

    const { date, picture, text } = fila
    const dataToSave = { date, picture, text } //Payload

    const { data } = await journalApi.post('/entries.json', dataToSave )

    dataToSave.id = data.name

    commit('addEntry', dataToSave)

    return data.name
}

export const deleteEntry = async ( { commit }, id ) => {

    await journalApi.delete(`/entries/${ id }.json`)
    commit('deleteEntry', id)
    return id
}

