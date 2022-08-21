import axios from "axios";

export default {
    namespaced: true,
    actions: {
        async fetchPics({commit}) {
            try {
                const pictures = await axios.get('http://127.0.0.1/pics');
                commit('getPics', pictures.data);
                //console.log(pictures.data);
            } catch (e) {
                console.log(e.message);
            }
        },
        async updatePic({commit, dispatch}, payload) {
            try {
                await axios.patch(`http://127.0.0.1/pics/${payload.id}`,
                {
                    Title: payload.title,
                    Author: payload.author,
                    ImgType: payload.imgtype,
                    ImgDate: payload.imgdate
                },{
                    headers: {
                        'Content-Type': 'json/application'
                    }
                });
                await dispatch("fetchPics");
            } catch (e) {
                console.log(e.message);
            }
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
        pictures: [], // основные данные с бека
        filterAuthor: 'Все авторы', //сортировка
        filterDirection: 'Все направления', //сортировка
        admin: false, //показывать шестеренку
        id: null, //передаем id картинки в модалку
        modal: false, //показывать модалку
        example: 50,
    },
    getters: {
        getFilterDirection: s => id => s.pictures.filter(t => t.ImgType === id),
        getFilterAuthor: s => id => s.pictures.filter(t => t.Author === id),
        getFilterAll(state) {
            let x = state.pictures.filter(t => t.Author === state.filterAuthor);
            x = x.filter(t => t.ImgType === state.filterDirection);
            return x;
        },
        initModalData(state) {
            let x = state.pictures.filter(t => t.Id === state.id);
            return x;
        },
        getPicId(state) {
            return state.id;
        }
    }
}