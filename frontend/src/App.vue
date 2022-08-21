<template>
    <div>
        {{ datas }}
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/one">One</router-link> | 
            <router-link to="/form">Form</router-link>
        </nav>
        <router-view/>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'App',
    data() {
        return {

        }
    },
    created() {
        this.fetchPics();
        //this.updatePic();
    },
    computed: {
        ...mapState('pictures', ['pictures']),
        datas() {
            return this.pictures;
        }
    },
    methods: {
        ...mapActions('pictures', ['fetchPics','updatePic']),
    }
}
</script>

<style lang="scss">
#app {
    font-family: Lato, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    //text-align: center;
    color: #2c3e50;
}

nav {
    padding-bottom: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
