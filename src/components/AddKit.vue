<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
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
                <!-- INGREDIENTES -->
                <label for="ing">Ingredientes:</label>
                <input type="checkbox" value="Café" v-model="checkedDrink">Café
                <br>
                <input type="checkbox" value="Chá" v-model="checkedDrink">Chá
                <br>
                <input type="checkbox" value="Bolo" v-model="checkedFood">Bolo
                <br>
                <input type="checkbox" value="Bolachas" v-model="checkedFood">Bolachas
                <!-- <div class="container" id="ing" v-for="i in searchKits" :key="i.id" >
                    <input type="checkbox" value="" v-model="checkedIng">{{i.name}}
                </div> -->
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
                types: ['cB', 'Jantar de Gala', 'Porto de Honra'],
            }
        },
        created() {
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
                    food: this.checkedFood
                })
                alert(this.checkedDrink)
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>