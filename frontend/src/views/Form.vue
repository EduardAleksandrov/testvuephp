<template>
    <div class="form">
        <div class="form__wrapper">
            <div class="form__text-wrapper">
                <h2>
                    Form
                </h2>
                <input name="phone" class="form__text-phone" placeholder="Phone number" />
                <input name="date" class="form__text-date" type="date" placeholder="Date" />
                <textarea name="comment" class="form__text-desc" placeholder="Description" maxlength="200" v-model="textarea"></textarea>
                {{ textarea }}
                <div style="margin-bottom: 20px;">
                    <button class="form__text-clear">clear</button>
                    <button class="form__text-submit">Submit</button>
                </div>
                
                <select class="select-css" v-model="val" @change="pointerEvents"> 
                    <option v-for="el in sel" :key="el"> {{ el }}</option> 
                </select>
                
                <div class="center">
                    <input type="checkbox" id="cbx" style="display:none" v-model="checkb" @change="checkEvents"/>
                    <label for="cbx" class="toggle">
                        <span>
                        <svg width="10px" height="10px" viewBox="0 0 10 10">
                            <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
                        </svg>
                        </span>
                    </label>    
                </div>
                {{ typeBox }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'form',
    data() {
        return {
            textarea: '',
            val: "This is a native select element",
            sel: [
                'This is a native select element',
                'Apples',
                'Bananas',
                'Grapes',
                'Oranges'
            ],
            checkb: false
        };
    },
    methods: {
        pointerEvents() {
            console.log(this.val);
        },
        checkEvents() {
            console.log(this.checkb);
        }
    },
    computed: {
        typeBox() {
            if (this.checkb === false) {
                return 'Не админка'
            } else {
                return 'Админка'
            }
        }
    }
}
</script>

<style lang="scss">
.form {
    width: 100%;
    height: 100vh;
    background-color: rgb(201, 201, 201);
    z-index: 1;
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

        min-width: 400px;
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

    &__text-phone {
        width: 40%;
        margin-bottom: 20px;
        border: 1px solid rgb(185, 185, 185);
        border-radius: 4px;
        padding: 5px 10px;
    }

    &__text-date {
        width: 40%;
        margin-bottom: 20px;
        border: 1px solid rgb(185, 185, 185);
        border-radius: 4px;
        padding: 5px 10px;
    }

    &__text-desc {
        width: 93%;
        height: 80px;
        margin-bottom: 40px;
        border: 1px solid rgb(185, 185, 185);
        border-radius: 4px;
        padding: 5px 10px;

        //margin-right: 80px;

        outline: none;
        &:focus {
            border: none;
            border-bottom: 3px solid rgb(207, 235, 50);
        }
    }

    &__text-clear {
        margin-left: 63%;
        border: 1px solid red;
        border-radius: 4px;
        color: red;
        padding: 10px 15px;
        background-color: rgb(248, 227, 227);
        cursor: pointer;
        &:hover {
            background-color: rgb(163, 162, 162);
        }
        &:active {
            color:aqua;
        }
    }

    &__text-submit {
        margin-left: 10px;
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
}


.select-css {
    display: block; 
    font-size: 16px; 
    font-family: sans-serif; 
    font-weight: 700; 
    color: #444; 
    line-height: 1.3; 
    padding: .6em 1.4em .5em .8em; width: 100%; 
    max-width: 100%; 
    box-sizing: border-box; 
    margin: 0; 
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04); 
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff; 
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%); 
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%; 
    outline: none;
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
// .center {
//   position: absolute;
//   top: calc(50% - 12px);
//   left: calc(50% - 21px);
// }
</style>