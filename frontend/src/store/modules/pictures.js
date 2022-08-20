import axios from "axios";

export default {
    namespaced: true,
    actions: {
        async fetchPics({commit}) {
            const pictures = await axios.get('http://127.0.0.1/pics');
            commit('getPics', pictures.data);
            console.log(pictures.data);
        }
            
    },
    mutations: {
        getPics(state, pics) {
            state.pictures = pics;
        }
    },
    state: {
        pictures: [],
        example: 50,
    },
    getters: {


    }
}