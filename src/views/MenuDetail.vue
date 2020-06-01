<template>
  <div class="menuDetail">
    <h3 class="display-2" v-bind:style="{display:show3}">{{menu.type}}</h3>
    <input type="text" v-model="newKitType" name="" :placeholder="kitType" id="editTitle" v-bind:style="{display:show}">
    <div class="container">
      <b-card no-body class="border-1" style="max-width: 1100px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="menu.img" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <h3 class="display-3" v-bind:style="{display:show3}">{{menu.name}}</h3>
              <input type="text" v-model="newKitName" name="" :placeholder="kitname" v-bind:style="{display:show}">
              <div class="row">
                <div class="container" id="showIngredients" v-bind:style="{display: show}">
                  <div class="row">
                    <div align="right" class="col-sm-5">
                      <h6 class="subtitle">Bebidas</h6>
                      <div v-for="i in this.ingredients" :key="i.ingredient_id">
                        <b-form-group v-if="i.type=='Bebida'">
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
                      <div v-for="i in this.ingredients" :key="i.ingredient_id">
                        <b-form-group v-if="i.type=='Comida'">
                          <b-form-checkbox-group id="checkbox-group-2" v-model="checkedFood">
                            <b-form-checkbox :value="i.name" unchecked-value=""> {{i.name}}</b-form-checkbox>
                          </b-form-checkbox-group>
                        </b-form-group>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 drinks" v-bind:style="{display: show2}">
                  <h6><i class="fas fa-wine-glass-alt" id="icon"></i>BEBIDA</h6>
                  <p>{{ drinks.length == 0 ? 'Fechar' : '' + drinks }}</p>
                </div>
                <div class="col-sm-6 food" v-bind:style="{display: show2}">
                  <h6><i class="fas fa-cheese" id="icon"></i>COMIDA</h6>
                  <p>{{ food.length == 0 ? 'Fechar' : '' + food }}</p>
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
        <router-link to="/menuGallery" style="color:white"> Voltar </router-link>
      </b-button>
        <b-button  @click="saveCurrentKit()"
        v-bind:style="{display:show2}" class="btn-book border-0" squared>
        <router-link to="/booking" style="color:white"> Reservar </router-link>
      </b-button>
      <b-button v-bind:style="{display:show2}" v-if="this.userType == 0" @click="activateEdit()" class="btn-book border-0" squared>
        Editar
      </b-button>
      <br><br><br>
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
        menuIng: [],
        menu: [],
        food:[],
        drinks:[],
        userType: ""
      };
    },
    created() {
      this.menu = JSON.parse(localStorage.getItem("currentMenu"))
      this.userType = this.$store.loggedUser.type 
      this.ingredients = JSON.parse(localStorage.getItem("currentMenuIngs"))
      this.CurrentMenuIngs(this.menu.id)
      for (const i in this.ingredients) {
        if (this.ingredients[i].type == "Bebida") {
          this.drinks.push(this.ingredients[i].name)      
        }
        else{
          this.food.push(this.ingredients[i].name)      
        }
      }
    },
     methods: {
      saveCurrentKit() {
        this.currentKit = ({
          kitname: this.kitname,
          kitType: this.kitType,
          kitImg: this.kitImg,
          menuIng: this.menuIng
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
    async CurrentMenuIngs(id) {
      try {
        await this.$store.dispatch("fetchCurrentMenuIngs", {id: id});
      } catch (err) {
        alert(err);
      }
    }
    },
    computed: {
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
    transition: all .2s ease-in-out;
  }

  .btn-book:hover {
    transform: scale(1.1);
  }

  .border-1 {
    -webkit-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
  }


  .food,
  .drinks {
    padding-top: 0px;
  }

  #icon {
    padding-right: 6px;
  }
</style>