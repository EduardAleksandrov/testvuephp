import axios from "axios";

export default {
    namespaced: true,
    actions: {
        async fetchPics({commit}) {
            const pictures = await axios.get('http://127.0.0.1/pics');
            commit('getPics', pictures.data);
            console.log(pictures.data);
        },
        async updatePic() {
            let x = 2;
            await axios.patch(`http://127.0.0.1/pics/${x}`,
            {
                Title: "data8",
                Author: "data9",
                ImgType: "data10",
                ImgDate: 2500
            },{
                headers: {
                    'Content-Type': 'json/application'
                }
            });
        }
    },
    mutations: {
        getPics(state, pics) {
            state.pictures = pics;
        },
        changeFilterAuthor(state, author) {
            state.filterAuthor = author;
        },
        changeFilterDirection(state, direction) {
            state.filterDirection = direction;
        },
        changeFilterAdmin(state, admin) {
            state.admin = admin;
        },
        setPicId(state, id) {
            state.id = id;
        },
        showModal(state, payload) {
            state.modal = payload;
        }
    },
    state: {
        pictures: [],
        filterAuthor: 'Все авторы',
        filterDirection: 'Все направления',
        admin: false,
        id: null,
        modal: false,
        example: 50,
    },
    getters: {
        getFilterDirection: s => id => s.pictures.filter(t => t.ImgType === id),
        getFilterAuthor: s => id => s.pictures.filter(t => t.Author === id),
        getFilterAll(state) {
            let x = state.pictures.filter(t => t.Author === state.filterAuthor);
            x = x.filter(t => t.ImgType === state.filterDirection);
            return x;
        }
    }
}