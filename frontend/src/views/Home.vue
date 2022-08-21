<template>
    <div class="main">
        <MainHeader />
        <MainFilter />
        <MainImgs />
    </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import MainFilter from '@/components/MainFilter';
import MainImgs from '@/components/MainImgs';

export default {
    name: 'Home',
    components: {
        MainHeader,
        MainFilter,
        MainImgs
    },
}
</script>

<style lang="scss" scoped>
.main {
    position: absolute;
    // top: 0;
    // left: 0;
    width: 100%;
    min-height: 100%;
    background-color:rgb(252, 248, 233);
}
</style>