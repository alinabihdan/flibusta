<template>
    <div class="popup-wrapper" ref="popup-wrapper">
        <div class="popup">
            <p class="popup__title">{{popup_data.volumeInfo.title}}</p>
            <span class="popup__icon">
                <i 
                    class="material-icons"
                    @click="closePopup"
                    style="cursor: pointer;"
                >close</i>
            </span>

            <div class="popup__content">
                <template v-if="popup_data.volumeInfo.imageLinks">
                    <img :src="popup_data.volumeInfo.imageLinks.thumbnail" :alt="popup_data.volumeInfo.title" height="200">
                </template>
                <template v-else>
                    <img
                    src="https://upittpress.org/wp-content/themes/pittspress/images/no_cover_available.png"
                    :alt="popup_data.volumeInfo.title"
                    height="200"
                    >
                </template>

                <p class="popup__description">{{popup_data.volumeInfo.description}}</p>
            </div>

            <form @submit.prevent="checkForm()" novalidate="true" class="popup__form">
                <p v-if="errors.length" class="popup__form-errors">
                    <b>Please correct your mistakes:</b>
                    <ol>
                    <li v-for="(error, index) in errors" :key="index + error" class="errors-item"> {{ error }} </li>
                    </ol>
                </p>
                <label class="popup__label">Name:</label>
                <input v-model="name" type="text" class="popup__input">
                <label class="popup__label">Email:</label>
                <input v-model="email" type="email" class="popup__input">
                <label class="popup__label">Phone:</label>
                <input v-model="phone" type="tel" class="popup__input">
           
                <button class="submit-btn" @click="checkForm">
                    Add to cart
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'popup',
    props: {
        popup_data: {
            type: Object,
            default() {
            return {}
        }
        }
    },
    data() {
        return {
            errors: [],
            name: '',
            email: '',
            phone: '',
        }
    },
    methods: {
        closePopup() {
            this.$emit('closePopup');
        },
        checkForm() {
            this.errors = [];

            if(!this.name || this.name.length<2) this.errors.push("Name required or should contains more than 2 chars.");
            if(!this.email) {
                this.errors.push("Email required.");
            } else if(!this.validEmail(this.email)) {
                this.errors.push("Valid email required.");        
            }
            if(!this.phone) {
                this.errors.push("Phone required.")
            } else if(!this.validPhone(this.phone)) {
                this.errors.push("Valid phone required.");        
            }
            if(!this.errors.length) {
                this.$emit('checkForm');
            } 
           
        },
        validEmail: function (email) {
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(email);
        },
        validPhone: function(phone) {
            const regexPhoneNumber = /^((\+)380|0)[1-9](\d{2}){4}$/;
            return regexPhoneNumber.test(phone);
        }
    },
    mounted() {
        let vm = this;
        document.addEventListener('click', function(item) {
            if(item.target === vm.$refs['popup-wrapper']) {
                vm.closePopup()
            }
        })
    }
}
</script>

<style lang="scss">
    .popup-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        background: rgba(64, 64, 64, 0.4);
        overflow: hidden;
    }
    .popup {
        position: relative;
        padding: 20px;
        width: 600px;
        background: #fff;
        box-shadow: 0 0 17px 0 #e7e7e7;


        &__title {
            color: #446699;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 20px;
        }

        &__description {
            margin: 10px 0;
            font-size: 12px;
        }
        &__icon {
            position: absolute;
            top: 10px;
            right: 10px;
        }

        &__form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            & input {
                margin-bottom: 16px;
            }
        }
        &__form-errors {
            color: red;
        }
        .popup__input {
            min-width: 200px;
            border-color: #446699;
            border-radius: 2px;

        }
        .popup__label {
            color: #446699;
            font-weight: 500;
        }
        .errors-item {
            text-align: left;
        }
        .submit-btn {
            text-shadow: 0 -1px 0 rgb(0 0 0 / 30%);
            background-color: #f87a00;
            background-image: linear-gradient(to bottom, #ff9300, #ed5500);
            background-repeat: repeat-x;
            color: #fff;
            border-radius: 4px;
            border: none;
            padding: 8px;
        }
    }
  
    
    
</style>