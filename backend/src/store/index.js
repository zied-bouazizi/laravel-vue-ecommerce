import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            token: 'test',
            data: {}
        }
    },
    getters: {},
    actions: {},
    mutations: {},
})

export default store
