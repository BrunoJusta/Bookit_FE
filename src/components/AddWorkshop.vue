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
                <!-- PROFESSOR -->
                <label for="name">Nome:</label>
                <input id="name" v-model="name">
                <br>
                <br>
                <input type="date">
                <!-- MOTIVAÇÃO -->
                <label for="description">Descrição</label>
                <br>
                <textarea id="description" v-model="description" rows="4" cols="50"></textarea>
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