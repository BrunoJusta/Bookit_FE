<template>
    <div>
        <form @submit.prevent="addKit()">
            <div class="container">
                <div class="text-center my-3" v-if="name != ''">
                    <b-button id="popover-target-1" class="showBtn border-0 rounded-0">
                        Pre-visualizar o Menu
                    </b-button>
                    <b-popover target="popover-target-1" triggers="hover" placement="leftbottom"
                        style="margin-left: -500px">
                        <preview v-if="name != ''" :name="name" :type="type" :newType="newType" :img="img"
                            :food="checkedFood" :drinks="checkedDrink" />
                    </b-popover>
                </div>
                <div class="row">
                    <div class="col-sm-1">
                    </div>
                    <div class="col-sm-5">
                        <b-input type="text" v-model="name" id="txtName" placeholder="Nome do Menu" required></b-input>
                        <b-input type="link" v-model="img" id="txtName" placeholder="Link da Imagem" required></b-input>
                    </div>
                    <div class="col-sm-5">
                        <b-select id="selectTxt" v-model="type">
                            <option disabled selected>Tipo de Menu</option>
                            <option v-for="type in this.menuTypes" :key="type">{{type}}</option>
                        </b-select>
                        <b-input type="text" id="txtName" v-model="newType" placeholder="outro..."></b-input>
                    </div>
                    <div class="col-sm-1">
                    </div>
                </div>
                <div class="row" style="margin:auto; padding-top:20px;">
                    <div class="col-sm-1">
                    </div>
                    <div align="left" class="col-sm-5">
                        <label for="food" id="title">Comidas:</label>
                        <div class="container" id="food" v-for="i in filteredFood" :key="i.id">
                            <input type="checkbox" :value="i.name" v-model="checkedFood">{{i.name}}
                        </div>
                    </div>
                    <div align="left" class="col-sm-5" style="padding-top:20px;">
                        <label for="drinks" id="title">Bebidas:</label>
                        <div class="container" id="drinks" v-for="j in filteredDrinks" :key="j.id">
                            <input type="checkbox" :value="j.name" v-model="checkedDrink">{{j.name}}
                        </div>
                    </div>
                    <div class="col-sm-1">
                    </div>
                </div>
            </div>
            <!-- INGREDIENTES -->
            <b-button type="submit" value="Adicionar" class="addBtn rounded-0 border-0">Adicionar</b-button>
        </form>

    </div>
</template>

<script>
    import preview from "../components/MenuCard.vue";

    export default {
        name: "addKit",
        data: function () {
            return {
                name: "",
                checkedFood: [],
                checkedDrink: [],
                ingredients: [],
                type: "",
                newType: "",
                img: "",
                users: [],
                menuTypes: []
            }
        },
        components: {
            preview
        },
        created() {
            window.addEventListener('unload', this.saveStorage)
            if (localStorage.getItem("kits")) {
                this.$store.state.kits = JSON.parse(localStorage.getItem("kits"))
            }

            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"))
            }

            if (localStorage.getItem("menuTypes")) {
                this.$store.state.menuTypes = JSON.parse(localStorage.getItem("menuTypes"))
            }
            this.menuTypes = this.$store.state.menuTypes
            this.users = this.$store.state.users
            this.ingredients = this.$store.state.ingredients
        },
        methods: {
            getLastId() {
                return this.$store.getters.kitLastId + 1
            },
            addKit() {
                let correctOptions = true
                if (this.checkedFood.length != 0) {
                    if (this.checkedFood.length != 1 && this.checkedFood.some(food => food === "Sem Comida")) {
                        correctOptions = false
                        Swal.fire({
                            icon: 'warning',
                            text: 'Escolha a comida correta!'
                        })
                    }
                }
                if (this.checkedDrink.length != 0) {
                    if (this.checkedDrink.length != 1 && this.checkedDrink.some(drink => drink === "Sem Bebida")) {
                        correctOptions = false
                        Swal.fire({
                            icon: 'warning',
                            text: 'Escolha a bebida correta!'
                        })
                    }
                }
                if (correctOptions == true) {
                    if (this.newType !== "") {
                        for (let j in this.users) {
                            if (this.users[j].userType === "cliente") {
                                this.users[j].notifications.push({
                                    txt: 'O Menu' + this.name + " - " +
                                        this.newType + ' foi adicionado a galeria de menus!'
                                })
                                localStorage.setItem("users", JSON.stringify(this.users));
                            }
                        }
                        this.$store.commit('ADD_KIT', {
                            id: this.getLastId(),
                            name: this.name,
                            type: this.newType,
                            drinks: this.checkedDrink,
                            food: this.checkedFood,
                            img: this.img
                        })
                        //limpar os campos
                        this.name = ""
                        this.type = ""
                        this.checkedDrink = ""
                        this.checkedFood = ""
                        this.img = ""
                        this.newType = ""

                        this.menuTypes.push(this.newType)
                        localStorage.setItem("menuTypes", JSON.stringify(this.menuTypes));
                    } else {
                        for (let j in this.users) {
                            if (this.users[j].userType === "cliente") {
                                this.users[j].notifications.push({
                                    txt: 'O Menu' + this.name + " - " +
                                        this.type + ' foi adicionado a galeria de menus!'
                                })
                                localStorage.setItem("users", JSON.stringify(this.users));
                            }
                        }
                        this.$store.commit('ADD_KIT', {
                            id: this.getLastId(),
                            name: this.name,
                            type: this.type,
                            drinks: this.checkedDrink,
                            food: this.checkedFood,
                            img: this.img
                        })
                        //limpar os campos
                        this.name = ""
                        this.type = ""
                        this.checkedDrink = ""
                        this.checkedFood = ""
                        this.newType = ""
                        this.img = ""
                    }
                    Swal.fire({
                        icon: 'success',
                        text: 'Adicionado!',
                    })
                }
            }
        },
        computed: {
            searchKits() {
                return this.ingredients;
            },
            filteredFood() {
                return this.ingredients.filter(
                    (x) => x.type == "Food"
                )
            },
            filteredDrinks() {
                return this.ingredients.filter(
                    (x) => x.type == "Drink"
                )
            }
        }
    }
</script>

<style lang="scss" scoped>
    #title {
        font-weight: bold;
    }

    #txtName {
        border-radius: 0;
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
    }

    #selectTxt {
        border-radius: 0;
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
    }

    .addBtn {
        font-size: 18px;
        background-color: #0A2463;
        margin: 20px;
        margin-top: 50px;
    }

    #selectType {
        border-radius: 0;
        height: 40px;
    }

    .col-sm-5 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .popover {
        border-color: transparent;
        border-radius: 0;
    }

    .showBtn {
        background-color: #0A2463;
        display: inline;
    }

    @media screen and (max-width: 1096px) {
        .showBtn {
            width: 200px;
            background-color: #0A2463;
            display: none;
        }
    }
</style>