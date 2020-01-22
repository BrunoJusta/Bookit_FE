<template>
    <div>
        <div class="container-full title" style="padding-top: 150px; padding-bottom: 30px;">
            <h1 id="redTitle">GERIR INGREDIENTES</h1>
            <hr class="back-line">
            <div class="container"
                style="background-color:white; margin-top:-35px; height:35px; width:560px;position: relative;display: block; z-index:6">
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div align="center" id="AddIng" class="col-sm-6">
                    <form @submit.prevent="addIng()">
                        <input type="text" v-model="name" name="" id="ingNome" placeholder="Ingrediente">
                        <b-form-input id="ingType" list="my-list-id" v-model="type" placeholder="Tipo de Menu">
                        </b-form-input>
                        <datalist id="my-list-id">
                            <option> Comida </option>
                            <option>Bebida</option>
                        </datalist>
                        <button type="submit" value="Adicionar" class="btn btn-book rounded-0">Adicionar</button>
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
                searchWorkshops: "",
                name: "",
                type: "",
                kits: [],
                types: [{
                    name: "Coffee Break"
                }],
            }
        },
        created() {
            if (JSON.parse(localStorage.getItem("ingredients"))) {
                this.$store.state.ingredients = JSON.parse(localStorage.getItem("ingredients"))
            }
            this.ingredients = this.$store.state.ingredients

            if (JSON.parse(localStorage.getItem("kits"))) {
                this.$store.state.kits = JSON.parse(localStorage.getItem("kits"))
            }
            this.kits = this.$store.state.kits

        },
        methods: {
            addIng() {
                let ingType
                if (this.type == "Comida") {
                    ingType = "Food"
                }
                if (this.type == "Bebida") {
                    ingType = "Drink"
                }
                this.ingredients.push({
                    id: this.$store.getters.ingredientLastId + 1,
                    name: this.name,
                    type: ingType
                })
                localStorage.setItem("ingredients", JSON.stringify(this.ingredients));
                Swal.fire({
                    icon: 'success',
                    text: 'Adicionado!',
                })
            },
            remove(id) {
                for (let i in this.ingredients) {
                    if (this.ingredients[i].id === id) {
                        this.ingredients = this.ingredients.filter(ingredient => this.ingredients[i].id != ingredient
                            .id);
                        localStorage.setItem("ingredients", JSON.stringify(this.ingredients));
                        Swal.fire({
                            icon: 'success',
                            text: 'Removido!',
                        })
                    }
                }
            },
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
    #ingNome {
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
        margin-top: 56px;
    }

    #ingType {
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
    }


    .btn-book {
        font-size: 18px;
        background-color: #0A2463;
        color: white;
        margin: 20px;
        margin-top: 50px;

    }

    #redTitle {
        font-family: "bookMan";
        font-size: 45px;
        color: #B91C3B;
        display: block;
        z-index: 7;
        position: relative;
    }

    .back-line {
        background-color: #0A2463;
        margin-top: -35px;
        width: 90%;
        display: block;
        z-index: 5;
        position: relative;
    }
</style>