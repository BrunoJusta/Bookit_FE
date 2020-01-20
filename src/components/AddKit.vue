<template>
    <div>

        <div class="container col-sm-4">
            <form @submit.prevent="addKit()">
                <!-- NOME -->
                <label for="name">Nome:</label>
                <input id="name" v-model="name">
                <br>
                <br>
                <!-- Tipo de Menu -->
                <p>Tipo de Menu:</p>
                <b-form-input list="my-list-id" v-model="type" placeholder="Tipo de Menu"></b-form-input>
                <datalist id="my-list-id">
                    <option v-for="type in this.menuTypes" :key="type">{{type}}</option>
                </datalist>
                <br>
                <br>
                <!-- NOME -->
                <label for="name">Image link:</label>
                <input id="img" v-model="img">
                <!-- INGREDIENTES -->
                <label for="ing">Ingredientes:</label>
                <div class="container" id="ing" v-for="i in searchKits" :key="i.id">
                    <div v-if="i.type == 'Food'">
                        <input type="checkbox" :value="i.name" v-model="checkedFood">{{i.name}}
                    </div>
                    <div v-if="i.type == 'Drink'">
                        <input type="checkbox" :value="i.name" v-model="checkedDrink">{{i.name}}
                    </div>
                </div>
                <input type="text" name="" v-model="newType" id="" placeholder="outro...">
                <br>
                <br>
                <img :src="img" alt="" srcset="">
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
        computed: {
            searchKits() {

                return this.ingredients;


            }
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
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>