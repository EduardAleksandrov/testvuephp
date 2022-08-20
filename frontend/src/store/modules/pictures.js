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
                title: "data3",
                author: "data4",
                imgType: "data5",
                imgDate: 1800
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
            state.filterAutor = author;
        },
        changeFilterDirection(state, direction) {
            state.filterDirection = direction;
        },
        changeFilterAdmin(state, admin) {
            state.admin = admin;
        }
    },
    state: {
        pictures: [],
        filterAutor: 'Все авторы',
        filterDirection: 'Все направления',
        admin: false,
        example: 50,
    },
    getters: {


    }
}