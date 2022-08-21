<template>
    <div class="imgs">
        <div class="imgs__wrapper" v-for="el in getFilteredPictures" :key="el.Id">
            <img :src="`http://127.0.0.1${el.ImgPath}`" class="imgs__images" alt="">
            <div class="imgs__text-title">{{el.Title}}</div>
            <div class="imgs__text-autor">{{el.Author}}</div>
            <div class="imgs__text-date">{{el.ImgDate}} г.</div>
            <div class="imgs__text-type">{{el.ImgType}}</div>
            <div class="imgs__admin" v-if="admin" @click="getPicId(el.Id)">
                <img src="@/assets/images/admin-pic.png" alt="" class="imgs__admin-pic">
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';

export default {
    name: 'MainImgs',
    methods: {
        ...mapMutations('pictures', ['setPicId','showModal']),
        getPicId(id) {
            this.showModal(true);
            this.setPicId(id);
        }
    },
    computed: {
        ...mapState('pictures', ['pictures', 'filterAuthor', 'filterDirection', 'admin']),
        ...mapGetters('pictures', ['getFilterDirection', 'getFilterAuthor','getFilterAll']),
        getFilteredPictures() {
            if(this.filterAuthor === 'Все авторы' && this.filterDirection === 'Все направления') {
                return this.pictures;
            } else if(this.filterAuthor === 'Все авторы') {
                return this.getFilterDirection(this.filterDirection);
            } else if(this.filterDirection === 'Все направления') {
                return this.getFilterAuthor(this.filterAuthor);
            } else {
                return this.getFilterAll;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.imgs{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    min-height: 200px;
    padding: 0 40px;
    
    &__wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 400px;
        min-height: 250px;
        background-color: aquamarine;
        margin-right: 40px;
        margin-bottom: 50px;
    }

    &__images {
        width: 400px;
        height: auto;
    }

    &__text-title {
        font-weight: 700;
        font-size: 16px;
        margin: 20px 0 10px 0;
        padding-bottom: 10px;
        border-bottom: 2px solid grey;
    }

    &__text-autor {
        font-weight: 500;
        font-size: 16px;
        margin: 10px 0;
        padding-bottom: 10px;
        border-bottom: 2px solid grey;
    }

    &__text-date {
        font-weight: 500;
        font-size: 16px;
        margin: 10px 0;
        padding-bottom: 10px;
        border-bottom: 2px solid grey;
    }

    &__text-type {
        font-weight: 500;
        font-size: 16px;
        margin: 10px 0;
        padding-bottom: 10px;
        border-bottom: 2px solid grey;
    }

    &__admin {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(218, 218, 218);
        opacity: 0.5;
        cursor: pointer;
        &:hover {
            opacity: 0.65;
        }
    }

    &__admin-pic {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 140px;
        height: 140px;
    }
}
</style>
