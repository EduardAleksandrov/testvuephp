<template>
    <div>
        <div class="red-square" @click="pointerEvents"/>
    </div>
</template>

<script>
export default {
    name: 'one',
    methods: {
        pointerEvents() {
            console.log('pointer-events', 'work');
        }
    }
}
</script>

<style lang="scss">
.red-square {
    background: rgb(219, 14, 14);
    width: 100px;
    height: 100px;
    cursor: pointer;
    //pointer-events: none;
}
</style>