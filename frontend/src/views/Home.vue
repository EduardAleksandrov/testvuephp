<template>
    <div :class="['main', {back: showMainModal}]">
        <MainHeader />
        <MainFilter />
        <MainImgs />
        <MainModal v-if="showMainModal" class="modal"/>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import MainHeader from '@/components/MainHeader';
import MainFilter from '@/components/MainFilter';
import MainImgs from '@/components/MainImgs';
import MainModal from '@/components/MainModal';

export default {
    name: 'Home',
    components: {
        MainHeader,
        MainFilter,
        MainImgs,
        MainModal
    },
    computed: {
        ...mapState('pictures', ['modal']),
        showMainModal() {
            return this.modal;
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    min-height: 100%;
    background-color:rgb(252, 248, 233);
}
.back {
    width: 100%;
    min-height: 100%;
    background-color: rgb(218, 218, 218);
    opacity: 0.7;
    z-index: 10;
}
</style>