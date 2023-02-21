import { createStore } from 'vuex'

export default createStore({
    state: {
        currentRegion: 'All',
        total: 0,
        currentPage: 1
    },
    getters: {
        currentRegion: state => state.currentRegion,
        total: state => state.total,
        currentPage: state => state.currentPage
    },
    mutations: {
        SET_REGION: (state, region) => state.currentRegion = region,
        SET_TOTAL: (state, total) => state.total = total,
        SET_CURRENTPAGE: (state, currentPage) => state.currentPage = currentPage
    }
})
