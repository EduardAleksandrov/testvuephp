<template>
    <div>
        <router-view/>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'App',
    data() {
        return {

        }
    },
    created() {
        this.fetchPics();
    },
    computed: {
    },
    methods: {
        ...mapActions('pictures', ['fetchPics']),
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
