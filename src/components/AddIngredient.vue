<template>
    <div>
        <div class="container-full title" style="padding-top: 150px; padding-bottom: 30px;">

            <h1 id="redTitle">GERIR INGREDIENTES</h1>
            <hr class="back-line">
            <div class="container box">
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <form @submit.prevent="addIngredient()">
                        <b-input type="text" v-model="name" id="txtIngredient" placeholder="Ingrediente" required>
                        </b-input>
                        <b-select id="chooseType" v-model="type" required>
                            <option value="" disabled selected>Escolher tipo</option>
                            <option>Comida</option>
                            <option>Bebida</option>
                        </b-select>
                        <b-button type="submit" value="Adicionar" class="addBtn rounded-0">Adicionar</b-button>
                    </form>
                </div>
                <div class="col-sm-6">
                    <div class="container table" v-if="this.ingredients.length != 0">
                        <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
                        <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small
                            hover head-variant="dark" responsive="sm" :items="this.ingredients" :fields="fields">
                            <template v-slot:cell(actions)="row">
                                <b-button size="sm" @click="deleteIngredient(row.item.ingredient_id)"
                                    class="mr-1 deleteBtn"><i class="fas fa-trash-alt"></i></b-button>
                            </template>
                        </b-table>
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                            aria-controls="my-table" style="float:right;"></b-pagination>
                    </div>
                    <div class="container" v-else>
                        <img class="image" src="../assets/bookit_BLUE.svg" alt="" srcset="">
                        <h4> Não existem Ingredientes</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters
    } from "vuex";
    export default {
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
                        key: 'type',
                        label: "Categoria",
                        sortable: true
                    },
                    {
                        key: 'actions',
                        label: "Ações",
                        sortable: false
                    },
                ],
                x: "",
                name: "",
                type: "",
            }
        },
        created() {
            this.getAllIngredients();
            this.ingredients = this.$store.state.ingredients;
        },
        updated() {
            this.ingredients = this.$store.state.ingredients;
        },
        methods: {
            async getAllIngredients() {
                try {
                    await this.$store.dispatch("fetchIngredients");
                    this.ingredients = this.getIngredients.data;
                } catch (err) {
                    alert(err);
                }
            },
            async addIngredient() {
                try {
                    await this.$store.dispatch("postIngredient", {
                        name: this.name,
                        type: this.type
                    });
                } catch (err) {
                    alert(err);
                }
                this.getAllIngredients();
                this.name = ""
                this.type = ""
            },
            async deleteIngredient(ID) {
                try {
                    await this.$store.dispatch("deleteIngredient", {
                        id: ID
                    });
                } catch (err) {
                    alert(err);
                }
                this.getAllIngredients();
            }
        },
        computed: {
            ...mapGetters(["getIngredients"]),
            rows() {
                return this.ingredients.length
            }
        }
    }
</script>

<style lang="scss" scoped>
    .image {
        width: 150px;
        margin: 20px;
    }


    .box {
        background-color: white;
        margin-top: -35px;
        height: 35px;
        width: 560px;
        position: relative;
        display: block;
        z-index: 6
    }

    #txtIngredient {
        border-radius: 0;
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
        margin-top: 56px;
    }

    #chooseType {
        border-radius: 0;
        height: 40px;
        margin-bottom: 20px;
    }


    .addBtn {
        height: 40px;
        font-size: 18px;
        background-color: #0A2463;
        color: white;
        margin: auto;
    }

    .col-sm-6 {
        display: flex;
        flex-direction: column;
        align-items: center;
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
        height: 1px;
    }

    .deleteBtn {
        background-color: #B91C3B;
        border: none;
        border-radius: 0;
    }
</style>