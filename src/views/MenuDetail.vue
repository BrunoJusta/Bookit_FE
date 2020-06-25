<template>
  <div class="menuDetail">
    <h3 class="display-2" v-bind:style="{display:show3}">{{menu.type}}</h3>
    <select id="inputGroupSelect01" v-model="newMenuType" v-bind:style="{display:show}">
      <option v-for="type in  menuTypes" :key="type.menu_type_id" :value="type.description">{{type.description}}</option>
    </select>
    <div class="container">
      <b-card no-body class="border-1" style="max-width: 1100px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="menu.img" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <h3 class="display-3" v-bind:style="{display:show3}">{{menu.name}}</h3>
              <input type="text" v-model="newMenuName" :placeholder="menu.name" v-bind:style="{display:show}"/>
              <div class="row">
                <div class="container" id="showIngredients" v-bind:style="{display: show}">
                  <div class="row">
                    <div align="right" class="col-sm-5">
                      <h6 class="subtitle">Bebidas</h6>
                      <div v-for="i in this.ingredients" :key="i.ingredient_id">
                        <b-form-group v-if="i.type=='Bebida'">
                          <b-form-checkbox-group id="checkbox-group-2" v-model="checkedIngs">
                            <b-form-checkbox :value="i.ingredient_id">{{i.name}}</b-form-checkbox>
                          </b-form-checkbox-group>
                        </b-form-group>
                      </div>
                    </div>
                    <div class="col-sm-2"></div>
                    <div align="left" class="col-sm-5">
                      <h6 class="subtitle">Comida</h6>
                      <div v-for="i in this.ingredients" :key="i.ingredient_id">
                        <b-form-group v-if="i.type=='Comida'">
                          <b-form-checkbox-group id="checkbox-group-2" v-model="checkedIngs">
                            <b-form-checkbox :value="i.ingredient_id" unchecked-value>{{i.name}}</b-form-checkbox>
                          </b-form-checkbox-group>
                        </b-form-group>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 drinks" v-bind:style="{display: show2}">
                  <h6>
                    <i class="fas fa-wine-glass-alt" id="icon"></i>BEBIDA
                  </h6>
                  <p>{{ drinks.length == 0 ? 'Sem bebida' : '' + drinks }}</p>
                </div>
                <div class="col-sm-6 food" v-bind:style="{display: show2}">
                  <h6>
                    <i class="fas fa-cheese" id="icon"></i>COMIDA
                  </h6>
                  <p>{{ food.length == 0 ? 'Sem comida' : '' + food }}</p>
                </div>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <b-button v-bind:style="{display:show}" @click="cancelEdit()" class="btn-book border-0" squared>Cancelar</b-button>
      <b-button v-bind:style="{display:show}" @click="editMenu()" class="btn-book border-0" squared>Guardar</b-button>

      <b-button class="btn-book border-0" v-bind:style="{display:show2}" squared>
        <router-link to="/menuGallery" style="color:white">Voltar</router-link>
      </b-button>

      <b-button @click="saveCurrentKit()" v-bind:style="{display:show2}" class="btn-book border-0" squared>
        <router-link to="/booking" style="color:white">Reservar</router-link>
      </b-button>

      <b-button v-bind:style="{display:show2}" v-if="this.userOn.type== 0" @click="activateEdit()" class="btn-book border-0" squared>Editar</b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      ingredients: [],
      currentKit: {},
      show: "none",
      show2: "inline",
      show3: "block",
      newMenuType: "",
      newMenuName: "",
      checkedIngs: [],
      menuIng: [],
      menu: [],
      food: [],
      drinks: [],
      userOn: [],
      menuTypes: []
    };
  },
  created() {
    this.getAllIngredients();
    this.getMyMenuTypes();
    this.menu = JSON.parse(localStorage.getItem("currentMenu"));
    this.userOn = this.$store.state.loggedUser
    this.ingredients = JSON.parse(localStorage.getItem("currentMenuIngs"));
    for (const i in this.ingredients) {
      if (this.ingredients[i].type == "Bebida") {
        this.drinks.push(this.ingredients[i].name);
      } else {
        this.food.push(this.ingredients[i].name);
      }
    }
    this.newMenuName = this.menu.name;
    this.newMenuType = this.menu.type;
  },
  updated() {
    this.ingredients = this.$store.state.ingredients;
    this.userType = this.$store.state.loggedUser.userType;
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
    async getMyMenuTypes() {
      try {
        await this.$store.dispatch("fetchMenuTypes");
        this.menuTypes = this.getMenuTypes.data;
      } catch (err) {
        alert(err);
      }
    },
    async editMenu() {
      try {
        await this.$store.dispatch("editMenu", {
          id: this.menu.id,
          name: this.newMenuName,
          type: this.newMenuType,
          ings: this.checkedIngs
        });
      } catch (err) {
        alert(err);
      }
    },
    activateEdit() {
      this.show = "inline";
      this.show2 = "none";
      this.show3 = "none";
    },
    cancelEdit() {
      this.show2 = "inline";
      this.show = "none";
      this.show3 = "block";
    },
  },
  computed: {
    ...mapGetters(["getIngredients"]),
    ...mapGetters(["getMenuTypes"])
  }
};
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
  color: #b91c3b;
}

.display-3 {
  padding-bottom: 20px;
  font-family: bookMan;
  font-size: 40px;
  color: #b91c3b;
}

.card-title {
  padding-top: 20px;
  font-family: bookMan;
  font-size: 30px;
  color: #b91c3b;
}

#showIngredients {
  padding-top: 20px;
}

.card-img {
        border-radius: 0 !important;
        object-fit: cover;
    }

.card {
  border-radius: 0 !important;
}

h6 {
  color: #0a2463;
  font-weight: bold;
}

img {
  border-right: solid 10px #0a2463;
  height: 350px;
}

.btn-book {
  font-size: 18px;
  background-color: #0a2463;
  margin: 20px;
  margin-top: 50px;
  transition: all 0.2s ease-in-out;
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

#inputGroupSelect01 {
  margin: auto;
  margin-top: 180px;
  margin-bottom: 30px;
  width: 200px;
  border: 1px solid #c0c0c0;
  color: #5c5c5c;
}
</style>