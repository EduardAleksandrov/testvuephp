<template>
    <div class="filter">
        <div class="filter__admin-wrapper">
            <div class="filter__admin">
                <input type="checkbox" id="cbx" style="display:none" v-model="filterAdmin" />
                <label for="cbx" class="toggle">
                    <span>
                    <svg width="10px" height="10px" viewBox="0 0 10 10">
                        <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
                    </svg>
                    </span>
                </label>    
            </div>
            <div class="filter__admin-text">{{ adminBox }}</div>
        </div>
        <div class="filter__select-wrapper">
            <select class="filter__select-css" v-model="filterAutor"> 
                <option v-for="el in filterOptionsAuthor" :key="el"> {{ el }}</option> 
            </select>
            <select class="filter__select-css" v-model="filterDirection"> 
                <option v-for="el in filterOptionsType" :key="el"> {{ el }}</option> 
            </select>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'MainFilter',
    data() {
        return {
            filterAutor: 'Все авторы',
            filterDirection: 'Все направления',
            filterAdmin: false
        }
    },
    watch: {
        filterAutor(x) {
            this.changeFilterAuthor(x);
        },
        filterDirection(x) {
            this.changeFilterDirection(x);
        },
        filterAdmin(x) {
            this.changeFilterAdmin(x);
        }
    },
    methods: {
        ...mapMutations('pictures', ['changeFilterAuthor', 'changeFilterDirection','changeFilterAdmin']),
    },
    computed: {
        ...mapState('pictures', ['pictures','admin']),
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
        adminBox() {
            if (this.filterAdmin === false) {
                return 'Не админка'
            } else {
                return 'Админка'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.filter {
    width: 100vw;
    height: 200px;

    &__select-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    &__select-css{
        display: block; 
        font-size: 16px; 
        // font-family: sans-serif; 
        font-weight: 700; 
        color: #444; 
        line-height: 1.3; 
        padding: .6em 1.4em .5em .8em; 
        max-width: 100%; 
        box-sizing: border-box; 
        margin: 0; 
        border:none;
        border-bottom: 2px solid #aaa;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-color: #fff; 
        background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, rgb(252, 248, 233) 0%,rgb(252, 248, 233) 100%); 
        background-repeat: no-repeat, repeat;
        background-position: right .7em top 50%, 0 0;
        background-size: .65em auto, 100%; 
        outline: none;
        margin-top: 50px;
        margin-left: 40px;
        width: 250px;
    }
}
.toggle {
  position: relative;
  display: block;
  width: 42px;
  height: 24px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transform: translate3d(0, 0, 0);
}
.toggle:before {
  content: "";
  position: relative;
  top: 1px;
  left: 1px;
  width: 40px;
  height: 22px;
  display: block;
  background: #c8ccd4;
  border-radius: 12px;
  transition: background 0.2s ease;
}
.toggle span {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  display: block;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(154,153,153,0.75);
  transition: all 0.2s ease;
}
.toggle span svg {
  margin: 7px;
  fill: none;
}
.toggle span svg path {
  stroke: #c8ccd4;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 24;
  stroke-dashoffset: 0;
  transition: all 0.5s linear;
}
#cbx:checked + .toggle:before {
  background: #52d66b;
}
#cbx:checked + .toggle span {
  transform: translateX(18px);
}
#cbx:checked + .toggle span path {
  stroke: #52d66b;
  stroke-dasharray: 25;
  stroke-dashoffset: 25;
}
.filter__admin {
  margin-top: 100px;
  margin-left: 40px;
}
.filter__admin-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.filter__admin-text {
    margin-top: 100px;
    margin-left: 20px;
}
</style>
