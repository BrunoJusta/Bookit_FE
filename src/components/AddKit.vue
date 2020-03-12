<template>
    <div>

        <form @submit.prevent="addKit()">
            <div class="container">
                <div class="text-center my-3" v-if="name != ''">
                    <b-button id="popover-target-1" class="border-0"
                        style="width: 550px; background-color: transparent">
                        <b-button class="btn btn-2 rounded-0 border-0">
                            Pre-visualizar o Menu
                        </b-button>
                    </b-button>
                    <b-popover target="popover-target-1" triggers="hover" placement="leftbottom"
                        style="margin-left: -500px">
                        <preview v-if="name != ''" :name="name" :type="type" :newType="newType" :img="img"
                            :food="checkedFood" :drinks="checkedDrink" />
                    </b-popover>
                </div>

                <div class="row" style="margin:auto; width:500px;">
                    <input type="text" style="margin:auto;" id="name" v-model="name" placeholder="Nome do Menu"
                        required>
                    <input type="link" style="margin:auto;" id="img" v-model="img" placeholder="Link da Imagem"
                        required>
                </div>
                <div class="row" style="margin:auto;padding-top:20px; width:500px;">
                    <div class="col-sm-6">
                        <b-form-input style="margin-left:15px; width:192px; height:30px;" list="my-list-id"
                            v-model="type" placeholder="Tipo de Menu">
                        </b-form-input>
                        <datalist id="my-list-id">
                            <option v-for="type in this.menuTypes" :key="type">{{type}}</option>
                        </datalist>
                    </div>
                    <div class="col-sm-6">
                        <input type="text" v-model="newType" placeholder="outro...">
                    </div>
                </div>
                <div class="row" style="width:400px; margin:auto; padding-top:20px;">
                    <div align="left" class="col-sm-6">
                        <label for="ing" id="title">Comidas:</label>
                        <div class="container" id="ing" v-for="i in filteredFood" :key="i.id">
                            <input type="checkbox" :value="i.name" v-model="checkedFood">{{i.name}}
                        </div>
                    </div>
                    <div align="left" class="col-sm-6">
                        <label for="ing2" id="title">Bebidas:</label>
                        <div class="container" id="ing2" v-for="j in filteredDrinks" :key="j.id">
                            <input type="checkbox" :value="j.name" v-model="checkedDrink">{{j.name}}
                        </div>
                    </div>
                </div>
            </div>
            <!-- INGREDIENTES -->
            <button type="submit" value="Adicionar" class="btn btn-primary rounded-0 border-0">Adicionar</button>
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

    .btn-primary {
        font-size: 18px;
        background-color: #0A2463;
        margin: 20px;
        margin-top: 50px;
    }
    .btn-2 {
        font-size: 18px;
        background-color: #0A2463;
        margin-bottom: 20px;

    }

    .popover {
        border-color: transparent;
        
    }
</style>