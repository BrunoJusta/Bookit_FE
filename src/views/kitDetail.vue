<template>
  <div class="kitDetail">
    <h3 class="display-2" v-bind:style="{display:show3}">{{getKitById($route.params.kitId).type}}</h3>
    <input type="text" v-model="newKitType" name="" :placeholder="kitType" id="editTitle" v-bind:style="{display:show}">
    <div class="container">
      <b-card no-body class="overflow-hidden border-0" style="max-width: 1100px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="getKitById($route.params.kitId).img" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <h3 class="display-3" v-bind:style="{display:show3}">{{getKitById($route.params.kitId).name}}</h3>
              <input type="text" v-model="newKitName" name="" :placeholder="kitname" v-bind:style="{display:show}">
              <div class="row">

                <div class="container" id="showIngredients" v-bind:style="{display: show}">
                  <div class="row">
                    <div align="right" class="col-sm-5">
                      <h6 class="subtitle">Bebidas</h6>
                      <div v-for="i in searchKits" :key="i.id">
                        <b-form-group v-if="i.type=='Drink'">
                          <b-form-checkbox-group id="checkbox-group-2" v-model="checkedDrinks">
                            <b-form-checkbox :value="i.name"> {{i.name}}</b-form-checkbox>
                          </b-form-checkbox-group>
                        </b-form-group>
                      </div>
                    </div>

                    <div class="col-sm-2">
                    </div>

                    <div align="left" class="col-sm-5">
                      <h6 class="subtitle">Comida</h6>
                      <div v-for="i in searchKits" :key="i.id">
                        <b-form-group v-if="i.type=='Food'">
                          <b-form-checkbox-group id="checkbox-group-2" v-model="checkedFood">
                            <!-- <div v-if="this.menuDrinks.some(drink => drink === i.name)">
                              <b-form-checkbox checked :value="i.name"> {{i.name}}</b-form-checkbox>
                            </div> -->
                            <b-form-checkbox :value="i.name" unchecked-value=""> {{i.name}}</b-form-checkbox>
                          </b-form-checkbox-group>
                        </b-form-group>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 drinks" v-bind:style="{display: show2}">
                  <h6>BEBIDA</h6>
                  <p> {{ drinks.length == 0 ? 'Fechar' : '' + drinks }}</p>
                </div>
                <div class="col-sm-6 food" v-bind:style="{display: show2}">
                  <h6>COMIDA</h6>
                  <p> {{ food.length == 0 ? 'Fechar' : '' + food }}</p>
                </div>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <b-button v-bind:style="{display:show}" @click="cancelEdit()" class="btn-book border-0" squared>
        Cancelar
      </b-button>
      <b-button v-bind:style="{display:show}" @click="saveEdit()" class="btn-book border-0" squared>
        Guardar
      </b-button>

      <b-button class="btn-book border-0" v-bind:style="{display:show2}" squared>
        <router-link to="/menuKits" style="color:white"> Voltar </router-link>
      </b-button>
      <b-button v-if="this.$store.getters.getUserType !== 'admin'" @click="saveCurrentKit()"
        v-bind:style="{display:show2}" class="btn-book border-0" squared>
        <router-link to="/booking" style="color:white"> Reservar </router-link>
      </b-button>
      <b-button v-bind:style="{display:show2}" v-else @click="activateEdit()" class="btn-book border-0" squared>
        Editar
      </b-button>
    </div>
  </div>

</template>

<script>
  export default {
    data: function () {
      return {
        kits: [],
        id: "",
        ingredients: [],
        kitname: "",
        kitType: "",
        currentKit: {},
        kitImg: "",
        show: "none",
        show2: "inline",
        show3: "block",
        newKitType: "",
        newKitName: "",
        checkedDrinks: [],
        checkedFood: [],
        menuDrinks: []
      };
    },
    created() {
      this.kits = JSON.parse(localStorage.getItem("kits"))
      this.ingredients = this.$store.state.ingredients
    },
    methods: {
      getKitById(id) {
        this.food = this.kits.filter(
          kit => kit.id === id
        )[0].food

        this.kitImg = this.kits.filter(
          kit => kit.id === id
        )[0].img

        this.drinks = this.kits.filter(
          kit => kit.id === id
        )[0].drinks

        this.menuDrinks = this.kits.filter(
          kit => kit.id === id
        )[0].drinks

        this.kitname = this.kits.filter(
          kit => kit.id === id
        )[0].name

        this.kitType = this.kits.filter(
          kit => kit.id === id
        )[0].type

        this.id = this.kits.filter(
          kit => kit.id === id
        )[0].id

        return this.kits.filter(
          kit => kit.id === id
        )[0]
      },
      saveCurrentKit() {
        this.currentKit = ({
          kitname: this.kitname,
          kitType: this.kitType,
          kitImg: this.kitImg,
        });
        localStorage.setItem("currentKit", JSON.stringify(this.currentKit));
        this.$store.state.currentKit = this.currentKit
      },
      activateEdit() {
        this.show = "inline"
        this.show2 = "none"
        this.show3 = "none"
      },
      cancelEdit() {
        this.show2 = "inline"
        this.show = "none"
        this.show3 = "block"
      },
      saveEdit() {
        this.show2 = "inline"
        this.show = "none"
        this.show3 = "block"

        for (let k in this.kits) {
          if (this.kits[k].id === this.id) {
            if (this.newKitName != "") {
              this.kits[k].name = this.newKitName
            }
            if (this.newKitType != "") {
              this.kits[k].type = this.newKitType
            }
            if (this.checkedFood.length != 0) {
              if (this.checkedFood.length != 1 && this.checkedFood.some(food => food === "Sem Comida")) {
                Swal.fire({
                  icon: 'warning',
                  text: 'Escolha a comida correta!'
                })
              } else {
                this.kits[k].food = this.checkedFood
              }
            }
            if (this.checkedDrinks.length != 0) {
              if (this.checkedDrinks.length != 1 && this.checkedDrinks.some(drink => drink === "Sem Bebida")) {
                Swal.fire({
                  icon: 'warning',
                  text: 'Escolha a bebida correta!'
                })
              } else {
                this.kits[k].drinks = this.checkedDrinks
              }
            }
            localStorage.setItem("kits", JSON.stringify(this.kits));
          }
        }
      },
    },
    computed: {
      searchKits() {
        return this.ingredients;
      }
    }
  }
</script>
<style lang="scss" scoped>
  @font-face {
    font-family: bookMan;
    src: url(../assets/bookman.ttf);
  }

  #editTitle {
    margin: auto;
    margin-top: 180px;
    margin-bottom: 30px;
  }

  .display-2 {
    padding-top: 160px;
    padding-bottom: 20px;
    font-family: bookMan;
    font-size: 40px;
    color: #B91C3B;
  }

  .display-3 {
    padding-bottom: 20px;
    font-family: bookMan;
    font-size: 40px;
    color: #B91C3B;
  }

  .card-title {
    padding-top: 20px;
    font-family: bookMan;
    font-size: 30px;
    color: #B91C3B;
  }

  #showIngredients {
    padding-top: 20px;
  }

  .card-img {
    border-radius: 0 !important;
  }


  .card {
    border-radius: 0 !important;
  }

  h6 {
    color: #0A2463;
    font-weight: bold;
  }

  img {
    border-right: solid 10px #0A2463;
    height: 350px;
  }

  .btn-book {
    font-size: 18px;
    background-color: #0A2463;
    margin: 20px;
    margin-top: 50px;
  }

  .overflow-hidden {
    max-width: 1100px;
    height: 350px;
    -webkit-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
  }


  .food,
  .drinks {
    padding-top: 50px;
  }
</style>