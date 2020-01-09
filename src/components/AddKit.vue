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
                    <option v-for="type in types">{{type}}</option>
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
                img: ""
            }
        },
        created() {
            window.addEventListener('unload', this.saveStorage)
<<<<<<< HEAD
=======
            if (localStorage.getItem("kits")) {
                this.$store.state.kits = JSON.parse(localStorage.getItem("kits"))
            }
>>>>>>> c310bc49f0adfddbca7b638858beddb8d3c77b3a
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
                this.$store.commit('ADD_KIT', {
                    id: this.getLastId(),
                    name: this.name,
                    type: this.type,
                    drinks: this.checkedDrink,
                    food: this.checkedFood,
                    img: this.img
                })
                location.reload()
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>