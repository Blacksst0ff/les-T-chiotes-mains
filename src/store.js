import Vue from 'vue'
import Vuex from 'vuex'

import catalogue from './products'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        catalogue,
    },
    getters: {
        getProduct: state => (id) => {
            return state.catalogue.products.find(product => product.id == id)
        }
    },
})