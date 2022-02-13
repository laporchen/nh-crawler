import { createStore } from 'vuex'
import axios from 'axios';
const blacklist = [
    // copy from reddit
    "snuff",
    "eye penetration",
    "cum in eye",
    "vore",
    "piss drinking",
    "ear fuck",
    "gyaru-oh",
    "smegma",
    "necrophilia",
    "guro",
    "bbm",
    "males only",
    "yaoi",
];
const store = createStore({
    state() {
        return {
            pages: [],
            id: null,
            page_setting: 2,
            hide: false, // if someone walks in
        }
    },
    getters: {
        getPages: state => {
            return state.pages;
        },
        getId: state => {
            return state.id;
        },
        getPageSetting: state => {
            return state.page_setting;
        },
        getHide: state => {
            return state.hide;
        },
    },
    actions: {
        setPages(context, id) {
            context.commit('setPages', id);
        },
        setRandom(context) {
            context.commit('setRandom');
        },
        setView(context, mode) {
            context.commit('setView', mode);
        },
        setHide(context) {
            context.commit('setHide');
        }
    },
    mutations: {
        async setPages(state, id) {
            state.pages = [];
            const response = await axios.get("search", {
                params: {
                    id: id,
                },
            });
            if (response.status === 200) {
                if (!response.data.exists) {
                    alert("Doujin not found");
                    return;
                }
                state.pages = response.data.pages;
                state.id = id;
            }
        },
        async setRandom(state) {
            state.pages = [];
            const response = await axios.get("random");
            if (response.status === 200) {
                const tags = response.data.details.tags;
                blacklist.forEach((element) => {
                    if (tags.includes(element)) {
                        this.setRandom(state);
                        return;
                    }
                });
                state.pages = response.data.pages;
                state.id = response.data.id
            }
        },
        setView(state, mode) {
            state.page_setting = mode;
        },
        setHide(state) {
            state.hide = !state.hide;
        },
    }
})

export default store;