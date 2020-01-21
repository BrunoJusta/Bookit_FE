<template>
    <div>

        <div class="container col-sm-4">
            <form @submit.prevent="addKit()">
                <!-- NOME -->
                <label for="name" id="title">Nome:</label>
                <input id="name" v-model="name">
                <br>
                <br>
                <!-- Tipo de Menu -->
                <p id="title">Tipo de Menu:</p>
                <div class="row">
                    <div class="col-sm-6">
                        <b-form-input list="my-list-id" v-model="type" placeholder="Tipo de Menu"></b-form-input>
                        <datalist id="my-list-id">
                            <option v-for="type in this.menuTypes" :key="type">{{type}}</option>
                        </datalist>
                    </div>
                    <div class="col-sm-6">
                        <input type="text" v-model="newType" @click="teste()" placeholder="outro...">
                    </div>
                </div>
                <br>
                <!-- NOME -->
                <label for="name" id="title">Image link:</label>
                <input id="img" v-model="img">
                <!-- INGREDIENTES -->
                <div class="row" style="width:300px; margin: auto;">
                    <div class="col-sm-6">
                        <label for="ing" id="title">Comidas:</label>
                        <div class="container" id="ing" v-for="i in filteredFood" :key="i.id">
                            <input type="checkbox" :value="i.name" v-model="checkedFood">{{i.name}}
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <label for="ing2" id="title">Bebidas:</label>
                        <div class="container" id="ing2" v-for="j in filteredDrinks" :key="j.id">
                            <input type="checkbox" :value="j.name" v-model="checkedDrink">{{j.name}}
                        </div>
                    </div>
                </div>  
                <br>
                <br>
                <img :src="img" style="height:100px;">
                <br>
                <br>
                <button type="submit" value="Adicionar" class="btn btn-primary">Adicionar</button>
            </form>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
    export default {
        name: "addKit",
        data: function () {
            return {
                name: "",
                checkedFood: [],
                checkedDrink: [],
                ingredients: [],
                type: "",
                types: ['Coffee Break', 'Jantar de Gala', 'Porto de Honra'],
                newType: "",
                img: "",
                users: [],
                menuTypes: []
            }
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
                }
                alert("adicionado")
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
</style>