<template>
    <div class="filter">
        
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'MainFilter',
    methods: {
    },
    computed: {
        ...mapState('pictures', ['pictures']),
        filterOptionsAuthor() {
            let options = [];
            for(let i = 0; i<this.pictures.length; i++) {
                options[i] = this.pictures[i].Author;
            }
            options.unshift('Все авторы');
            let set = new Set(options);
            options = Array.from(set);
            return options;
        },
        filterOptionsType() {
            let options = [];
            for(let i = 0; i<this.pictures.length; i++) {
                options[i] = this.pictures[i].ImgType;
            }
            options.unshift('Все направления');
            let set = new Set(options);
            options = Array.from(set);
            return options;
        },
    }
}
</script>

<style lang="scss" scoped>
.filter {
    width: 100vw;
    height: 200px;
}
</style>
