<template>
    <div class="main">
        <MainHeader />
        <MainFilter />
    </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import MainFilter from '@/components/MainFilter';

export default {
    name: 'home',
    components: {
        MainHeader,
        MainFilter
    },
}
</script>

<style lang="scss" scoped>
.main {
    position: absolute;
    // top: 0;
    // left: 0;
    width: 100%;
    height: 100%;
    background-color:rgb(252, 248, 233);
}
</style>