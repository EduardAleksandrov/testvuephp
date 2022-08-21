<template>
    <div class="form">
        <div class="form__wrapper">
            <div class="form__text-wrapper">
                <h1>
                    Form
                </h1>
                <br>
                <div class="form__text-title">Название</div>
                <input name="title" :class="['form__text',{'yellow-border': !titleYBorder}, {'red-border': titleRBorder}]" v-model="title" autocomplete="off" />
                <div class="form__text-title">Автор</div>
                <input name="author" class="form__text" v-model="author" autocomplete="off" />
                <div class="form__text-title">Тип</div>
                <input name="imgtype" class="form__text" v-model="imgtype" autocomplete="off" />
                <div class="form__text-title">Год</div>
                <input name="imgdate" class="form__text" v-model="imgdate" autocomplete="off" />

                <div style="margin-bottom: 20px;">
                    <button class="form__text-submit" @click="saveChanges">Сохранить</button>
                    <button class="form__text-clear" @click="closeModal">Закрыть модалку</button>
                </div>
                <div class="form__attention" v-if="emptyInputs">Поля не могут быть пустыми</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';
export default {
    name: 'MainModal',
    data() {
        return {
            id: null,
            title: null,
            author: null,
            imgtype: null,
            imgdate: null
        };
    },
    mounted() {
        this.id = this.initModalData[0].Id;
        this.title = this.initModalData[0].Title;
        this.author = this.initModalData[0].Author;
        this.imgtype = this.initModalData[0].ImgType;
        this.imgdate = this.initModalData[0].ImgDate;
    },
    watch: {
        getPicId() {
            this.id = this.initModalData[0].Id;
            this.title = this.initModalData[0].Title;
            this.author = this.initModalData[0].Author;
            this.imgtype = this.initModalData[0].ImgType;
            this.imgdate = this.initModalData[0].ImgDate;
        }
    },  
    methods: {
        ...mapMutations('pictures', ['showModal']),
        ...mapActions('pictures', ['updatePic']),
        closeModal() {
            this.showModal(false);
        },
        saveChanges() {
            if (this.title === '' || this.author === '' || this.imgtype === '' || this.imgdate === '') {
                return
            } else {
                let obj = {
                    id: this.id,
                    title: this.title,
                    author: this.author,
                    imgtype: this.imgtype,
                    imgdate: this.imgdate
                }
                this.updatePic(obj);
                this.showModal(false);
            }
        }
    },
    computed: {
        ...mapGetters('pictures', ['initModalData','getPicId']),
        titleYBorder() {
            return this.initModalData[0].Title === this.title;
        },
        titleRBorder() {
            return this.title === ''
        },
        emptyInputs() {
            return this.title === '' || this.author === '' || this.imgtype === '' || this.imgdate === '';
        }
    }
}
</script>

<style lang="scss" scoped>
.form {
    // width: 100%;
    // height: 100vh;
    // background-color: rgb(201, 201, 201);
    // z-index: 1;
    // display: flex;
    // justify-content: center;
    // align-items: center;

    &__wrapper {
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        background-color:#fff;
        padding: 40px 50px;
        z-index: 12;

        min-width: 500px;
        min-height: 400px;
        //border: 2px solid rgb(136, 136, 136);
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        display: flex;
        flex-direction: column;
        //justify-content: center;
        align-items: center;
        
    }
    &__text-wrapper {
        width: 100%;
        display:flex;
        flex-direction: column;
    }

    &__text {
        width: 100%;
        margin-bottom: 20px;
        border: 3px solid rgb(185, 185, 185);
        border-radius: 4px;
        border-color: green;
        padding: 10px 10px;
    }

    &__text-title {
        margin-bottom: 4px;
    }

    // &__text-desc {
    //     width: 93%;
    //     height: 80px;
    //     margin-bottom: 40px;
    //     border: 1px solid rgb(185, 185, 185);
    //     border-radius: 4px;
    //     padding: 5px 10px;

    //     //margin-right: 80px;

    //     outline: none;
    //     &:focus {
    //         border: none;
    //         border-bottom: 3px solid rgb(207, 235, 50);
    //     }
    // }

    &__text-clear {
        border: 1px solid rgb(255, 251, 0);
        border-radius: 4px;
        color: rgb(0, 0, 0);
        padding: 10px 15px;
        background-color: rgb(247, 230, 139);
        cursor: pointer;
        &:hover {
            background-color: rgb(163, 162, 162);
        }
        &:active {
            color:aqua;
        }
    }

    &__text-submit {
        margin-right: 10px;
        border: none;
        border-radius: 4px;
        color: rgb(255, 255, 255);
        padding: 10px 15px;
        background-color: rgb(72, 100, 253);
        cursor: pointer;
        &:active {
            color:aqua;
        }
    }

    &__attention {
        font-weight: 700;
        color: rgb(109, 11, 11);
    }
}

.yellow-border {
    border-color: rgb(172, 172, 9);
}
.red-border {
    border-color: rgb(109, 11, 11);
}
</style>