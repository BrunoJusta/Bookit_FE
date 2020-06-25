<template>
    <div>
        <form @submit.prevent="addMenu()">
            <div class="container">
                <div class="row">
                    <div class="col-sm-1">
                    </div>
                    <div class="col-sm-5">
                        <b-input type="text" v-model="name" id="txtName" placeholder="Nome do Menu" required></b-input>
                        <b-input type="link" v-model="img" id="txtName" placeholder="Link da Imagem" required></b-input>
                    </div>
                    <div class="col-sm-5">
                        <b-select id="selectTxt" v-model="type" required>
                            <option value="" disabled selected>Tipo de Menu</option>
                            <option v-for="t in this.menuTypes" :key="t.menu_type_id" :value="t.menu_type_id">
                                {{t.description}}</option>
                            <option value="Outro...">Outro...</option>
                        </b-select>
                        <b-input v-if="this.type === 'Outro...'" type="text" id="txtName" v-model="newType"
                            placeholder="Novo tipo de Menu"></b-input>
                    </div>
                    <div class="col-sm-1">
                    </div>
                </div>
                <div class="row" v-if="this.img != ''">
                    <img :src="img" id="imgMenu">
                </div>
                <div class="row">
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-4" align="left" id="foodColumn">
                        <label id="title">Comida:</label>
                        <div v-for="i in filteredFood" :key="i.ingredient_id">
                            <b-form-group>
                                <b-form-checkbox-group v-model="checkedFood">
                                    <b-form-checkbox :value="i.ingredient_id"> {{i.name}}</b-form-checkbox>
                                </b-form-checkbox-group>
                            </b-form-group>
                        </div>
                    </div>
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-4" align="left" id="drinkColumn">
                        <label id="title">Bebida:</label>
                        <div v-for="i in filteredDrinks" :key="i.ingredient_id">
                            <b-form-group>
                                <b-form-checkbox-group v-model="checkedDrink">
                                    <b-form-checkbox :value="i.ingredient_id"> {{i.name}}</b-form-checkbox>
                                </b-form-checkbox-group>
                            </b-form-group>
                        </div>
                    </div>
                </div>
            </div>
            <b-button type="submit" value="Adicionar" class="addBtn rounded-0 border-0">Adicionar</b-button>
        </form>
    </div>
</template>

<script>
    import {
        mapGetters
    } from "vuex";

    export default {
        name: "addMenu",
        data: function () {
            return {
                ingredients: [],
                menuTypes: [],
                checkedFood: [],
                checkedDrink: [],
                menuIng: [],
                name: "",
                type: "",
                newType: "",
                img: "",
            }
        },
        created() {
            this.getAllIngredients();
            this.getMyMenuTypes();
        },
        methods: {
            async getAllIngredients() {
                try {
                    await this.$store.dispatch("fetchIngredients");
                    this.ingredients = this.getIngredients.data;
                    this.ingredients = this.$store.state.ingredients;
                } catch (err) {
                    alert(err);
                }
            },
            async getMyMenuTypes() {
                try {
                    await this.$store.dispatch("fetchMenuTypes");
                    this.menuTypes = this.getMenuTypes.data;
                } catch (err) {
                    alert(err);
                }
            },
            async addMenu() {
                this.menuIng = this.checkedFood.concat(this.checkedDrink)
                if (this.type !== "Outro...") {
                    try {
                        await this.$store.dispatch("postMenu", {
                            name: this.name,
                            type: this.type,
                            newType: this.newType,
                            img: this.img,
                            menuIng: this.menuIng
                        });
                    } catch (err) {
                        alert(err);
                    }
                    this.name = ""
                    this.img = ""
                    this.type = ""
                    this.checkedFood = []
                    this.checkedDrink = []
                    this.menuIng = []
                } else {
                    try {
                        await this.$store.dispatch("postMenu", {
                            name: this.name,
                            type: this.type,
                            newType: this.newType,
                            img: this.img,
                            menuIng: this.menuIng
                        });
                    } catch (err) {
                        alert(err);
                    }
                    this.getMyMenuTypes();
                    this.name = ""
                    this.img = ""
                    this.type = ""
                    this.checkedFood = []
                    this.checkedDrink = []
                    this.menuIng = []
                }
            }
        },
        computed: {
            ...mapGetters(["getIngredients"]),
            ...mapGetters(["getMenuTypes"]),
            filteredFood() {
                return this.ingredients.filter(
                    (x) => x.type == "Comida"
                )
            },
            filteredDrinks() {
                return this.ingredients.filter(
                    (x) => x.type == "Bebida"
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

    #food,
    #drinks {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 100px;
    }

    .popover {
        border-color: transparent;
        border-radius: 0;
    }

    .showBtn {
        background-color: #0A2463;
        display: inline;
    }

    #drinkColumn {
        margin-left: -94px;
    }

    #foodColumn {
        margin-left: -22px;
    }

    #imgMenu {
        width: 400px;
        height: 200px;
           box-shadow: -2px 0px 10px -4px rgba(0,0,0,0.5);
        object-fit: cover;

        margin: auto;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 1096px) {
        .showBtn {
            width: 200px;
            background-color: #0A2463;
            display: none;
        }

        #drinkColumn,
        #foodColumn {
            margin-left: 100px;
        }
    }
</style>