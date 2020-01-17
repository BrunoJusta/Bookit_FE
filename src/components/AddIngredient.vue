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
        <h2>Gerir Ingredientes</h2>

        <div class="container">

            <div class="row">

                <div class="col-sm-6">
                    <form @submit.prevent="addIng()">
                            <label for="ingNome">Ingrediente</label>
                            <input type="text" name="" id="ingNome">
                            <b-form-input list="my-list-id" v-model="type" placeholder="Tipo de Menu"></b-form-input>
                            <datalist id="my-list-id">
                                <option> Comida </option>
                                <option>Bebida</option>
                            </datalist>
                            <button type="submit" value="Adicionar" class="btn btn-primary">Adicionar</button>
                    </form>
                </div>


                <div class="col-sm-6">




                    <div class="container table" v-if="this.ingredients.length != 0">
                        <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
                        <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small
                            hover head-variant="dark" responsive="sm" :items="this.ingredients" :fields="fields">
                            <template v-slot:cell(actions)="row">
                                <b-button size="sm" @click="remove(row.item.id)" class="mr-1">X</b-button>
                            </template>
                        </b-table>
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                            aria-controls="my-table" style="float:right;"></b-pagination>
                    </div>
                    <div class="container" v-else>
                        <img style="width: 150px;  margin:20px" src="../assets/bookit_BLUE.svg" alt="" srcset="">
                        <h4> Não existem Ingredientes</h4>
                    </div>

                </div>






            </div>

        </div>







    </div>
</template>

<script>
    export default {
        name: "AddOns",
        data: function () {
            return {
                ingredients: [],
                perPage: 3,
                currentPage: 1,
                fields: [{
                        key: 'name',
                        label: "Ingrediente",
                        sortable: true
                    },
                    {
                        key: 'actions',
                        label: "Ações",
                        sortable: false
                    },
                ],
                workshops: [],
                x: "",
                currentDate: "",
                searchWorkshops: ""
            }
        },
        created() {
            if (JSON.parse(localStorage.getItem("ingredients"))) {
                this.$store.state.ingredients = JSON.parse(localStorage.getItem("ingredients"))
            }
            this.ingredients = this.$store.state.ingredients

        },
        methods: {
            remove(id) {
                for (let i in this.ingredients) {
                    if (this.ingredients[i].id === id) {
                        this.ingredients = this.ingredients.filter(ingredient => this.ingredients[i].id != ingredient
                            .id);
                        localStorage.setItem("ingredients", JSON.stringify(this.ingredients));
                        alert("Removido")
                    }
                }
            }
        },
        computed: {
            searchKits() {
                return this.ingredients;
            },
            rows() {
                return this.ingredients.length
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>