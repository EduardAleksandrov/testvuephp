<template>
    <div class="header">
        <div class="header__wrapper">
            <div class="header__logo" @click="gotoHome">T</div>
            <div class="header__logo-text">
                <div class="header__text-logo__up">Моя</div>
                <div>Третьяковка</div> 
            </div>
            <div class="header__sponsor">МИР</div>
            <div class="header__menu"> 
                <span class="header__menu-up"></span>
                <span class="header__menu-center"></span>
                <span class="header__menu-bottom"></span>
            </div>
        </div>
        <div class="header__aut">
            <img src="@/assets/images/autor.png" alt="Войти" class="header__aut-img">
            <span class="header__aut-text">войти</span>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'MainHeader',
    methods: {
        gotoHome() {
            this.$router.push({name: 'home'});
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100wh;
    height: 80px;
    background-color: rgb(54, 54, 54);

    &__wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 80%;
        @include for-size(xs-only) {
            width: 100%;
        }
    }

    &__aut {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 60px;
        width: 140px;
        cursor: pointer;
        &-img {
            width: 40px;
            height: 40px;
            margin-right: 10px;
        }
        &-text {
            color: $white;
        }
        @include for-size(xs-only) {
            display: none;
        }

    }

    &__logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: Lato, Avenir, Helvetica, Arial, sans-serif;
        font-size: 44px;
        font-weight: 900;
        height: 60px;
        color: $white;
        margin-left: 40px;
        margin-right: 10px;
        cursor: pointer;
        @include for-size(xs-only) {
            margin-left: 20px;
        }
    }

    &__logo-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100px;
        height: 60px;
        color: $white;
        font-weight: 600;
        &__up {
            margin-bottom: 3px;
        }
    }

    &__sponsor {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        font-size: 26px;
        font-weight: 900;
        height: 60px;
        color: $white;
        margin-left: 10%;
        margin-bottom: 19px;
    }

    &__menu {
        display: flex;
        flex-direction: column;
        width: 30px;
        height: 30px;
        margin-left: 35%;
        cursor: pointer;
        &-up {
            border-bottom: 2px solid $white;
            margin-bottom: 10px;
        }
        &-center {
            border-bottom: 2px solid $white;
            margin-bottom: 10px;
        }
        &-bottom {
            border-bottom: 2px solid $white;
        }
        @include for-size(xs-only) {
             margin-left: 20%;
        }
        @include for-size(xss-only) {
             margin-left: 5%;
        }
    }
}
</style>
