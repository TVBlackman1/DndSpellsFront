import moduleMutations from './mutation-types'
import moduleActions from './action-types'

export default {
    state: () => ({
        name: String,
        lvl: Number,
        properties: {},
        description: String
    }),
    mutations: {
        [moduleMutations.setLevel](state, newValue) {
            state.lvl = newValue
        },
        [moduleMutations.setName](state, newName) {
            state.name = newName
        },
        [moduleMutations.setProperty](state, {propertyName, value}) {
            state.properties[propertyName] = value
        },
        [moduleMutations.setDescription](state, newDescription) {
            state.description = newDescription
        }
    },
    actions: {
        [moduleActions.setLevel]({commit}, {newValue}) {
            commit(moduleMutations.setLevel, newValue)
        },
        [moduleActions.setName]({commit}, {newName}) {
            commit(moduleMutations.setName, newName)
        },
        [moduleActions.setProperty]({commit}, {propertyName, value}) {
            commit(moduleMutations.setProperty, {propertyName, value})
        },
        [moduleActions.setDescription]({commit}, {newDescription}) {
            commit(moduleMutations.setDescription, newDescription)
        }
    }
}