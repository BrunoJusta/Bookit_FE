<template>
  <div>
    <!---------------- Filtros Admin ---------------->
    <div v-if="this.userType == 0" class="container">
      <div class="row filters" style="margin:auto;max-width: 680px;">
        <!-- Filtrar Por Tipo-->
        <select id="inputGroupSelect01" @change="filteredMenus()" v-model="selectTxt">
          <option selected>Todos</option>
          <option v-for="type in  menuTypes" :key="type.menu_type_id" :value="type.description">{{type.description}}
          </option>
        </select>
        <!----------------Filtrar por Nome  ---------------->
        <b-form-input size="sm" class="mr-sm rounded-0" id="searchInput" v-model="searchTxt"
          placeholder="Nome do Menu..."></b-form-input>
        <!-- Filtrar por Popularidade-->
        <select id="inputGroupSelect02" @change="orderKits()" v-model="orderTxt">
          <option value disabled selected hidden>Ordenar por:</option>
          <option>Data de Criação</option>
          <option>Popularidade</option>
        </select>
      </div>
    </div>
    <!---------------- Filtros User ---------------->
    <div v-else class="container">
      <div class="row filters" style="margin:auto;max-width: 460px;">
        <!---------------- Filtrar Por Tipo ---------------->
        <select id="inputGroupSelect01" @change="filteredMenus()" v-model="selectTxt">
          <option selected>Todos</option>
          <option v-for="type in  menuTypes" :key="type.menu_type_id" :value="type.description">{{type.description}}
          </option>
        </select>
        <!---------------- Filtrar por Nome  ---------------->
        <b-form-input size="sm" class="mr-sm rounded-0" id="searchInput" v-model="searchTxt"
          placeholder="Nome do Menu..."></b-form-input>
        <select v-if="this.userType == 0" id="inputGroupSelect02" @change="orderKits()" v-model="orderTxt">
          <option value disabled selected hidden>Ordenar por:</option>
          <option>Data de Criação</option>
          <option>Popularidade</option>
        </select>
      </div>
    </div>
    <!---------------- Criador de Cartas ---------------->
    <div class="container">
      <!---------------- Cartas Admin ---------------->
      <div v-if="this.userType == 0" class="row">
        <div class="col-sm-4" style="min-width: 16rem" v-for="menu in  filteredMenus" :key="menu.menu_id">
          <div id="card-maker">
            <b-card :title="menu.name + ' - ' + menu.description" style="max-width: 20rem; min-width: 14rem;"
              :img-src="menu.img" img-height="180rem" class="mb-2 border-0">
              <p align="right" style="padding-top:20px; margin-bottom: -40px;">
                <img style="width:20px; padding-bottom: 5px;" src="../assets/star.svg" alt srcset />
                {{menu.popularity}}
              </p>
              <b-button class="btn-book" @click="CurrentMenu(menu.menu_id)" squared>Ver Mais</b-button>
              <b-button @click="deleteMenu(menu.menu_id)" class="btn-remove border-0" :id="menu.menu_id"
                v-bind:style="{visibility: remove}" squared>X</b-button>
            </b-card>
          </div>
        </div>
      </div>
      <!---------------- Cartas User ---------------->
      <div v-else class="row">
        <div class="col-sm-4" style="min-width: 16rem" v-for="menu in filteredMenus" :key="menu.menu_id">
          <div id="card-maker">
            <b-card :title="menu.name + ' - ' + menu.description" style="max-width: 20rem; min-width: 14rem"
              :img-src="menu.img" img-height="180rem" class="mb-2 border-0">
              <b-button class="btn-book" @click="CurrentMenu(menu.menu_id)" squared>Ver Mais </b-button>
            </b-card>
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
    name: "menuCards",
    data: function () {
      return {
        menus: [],
        menuTypes: [],
        remove: "",
        userType: "",
        users: [],
        searchTxt: "",
        selectTxt: "Todos",
        orderTxt: "",
      };
    },
    created() {
      this.getMyMenus();
      this.getMyMenuTypes();
      if (localStorage.getItem("users")) {
        this.$store.state.users = JSON.parse(localStorage.getItem("users"));
      }
      this.users = this.$store.state.users;
      this.menuTypes = this.$store.state.menuTypes;
      this.userType = this.$store.state.loggedUser.type;
    },
    methods: {
      // GET Menus
      async getMyMenus() {
        try {
          await this.$store.dispatch("fetchMenus");
          this.menus = this.getMenus.data;
        } catch (err) {
          alert(err);
        }
      },
      // GET Tipos de Menu
      async getMyMenuTypes() {
        try {
          await this.$store.dispatch("fetchMenuTypes");
          this.menuTypes = this.getMenuTypes.data;
        } catch (err) {
          alert(err);
        }
      },
      // GET Menu Especifico para Ver Mais
      async CurrentMenu(ID) {
        try {
          localStorage.removeItem("currentMenuIngs")
          await this.$store.dispatch("fetchCurrentMenu", {
            id: ID
          });
          this.CurrentMenuIngs(ID)
        } catch (err) {
          this.$router.push({
            name: 'login'
          })
        }
      },
      // GET Ingredientes do Menu Especifico para Ver Mais
      async CurrentMenuIngs(id) {
        try {
          await this.$store.dispatch("fetchCurrentMenuIngs", {
            id: id
          });
          this.$router.push({
            name: "menuDetail"
          })
        } catch (err) {
          alert(err);
        }
      },
      // DElETE Menu
      async deleteMenu(id) {
        try {
          await this.$store.dispatch("deleteMenu", {
            id: id
          });
          this.getMyMenus()
        } catch (err) {
          alert(err);
        }
      },
      // Filtro de Popularidade
      orderKits() {
        if (this.orderTxt == "Data de Criação") {
          this.clearFilters();
        } else if (this.orderTxt == "Popularidade") {
          this.filterByPopularity();
        }
      },
      clearFilters() {
        this.getMyMenus()
        this.selectTxt = "Todos";
        this.searchTxt = "";
      },
      comparePopularity(a, b) {
        if (parseInt(a.popularity) > parseInt(b.popularity)) return -1;
        if (parseInt(a.popularity) < parseInt(b.popularity)) return 1;
        else return 0;
      },
      filterByPopularity() {
        this.menus.sort(this.comparePopularity);
      }
    },
    computed: {
      ...mapGetters(["getMenus"]),
      ...mapGetters(["getMenuTypes"]),
      // Pesquisar pelo nome do Menu
      filteredMenus() {
        if (this.searchTxt != "" || this.selectTxt != "Todos") {
          return this.menus.filter(kit => {
            let filterResult = true;
            if (this.searchTxt == "" && this.selectTxt == "Todos") {
              return filterResult;
            }
            if (kit.name.toLowerCase().includes(this.searchTxt.toLowerCase())) {
              if (this.selectTxt != "Todos") {
                filterResult = kit.description.includes(this.selectTxt);
              } else {
                filterResult = kit.name
                  .toLowerCase()
                  .includes(this.searchTxt.toLowerCase());
              }
              return filterResult;
            }
          });
        } else {
          return this.menus;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  #card-maker {
    padding-bottom: 60px;
    padding-top: 30px;
    transition: all 0.2s ease-in-out;
  }

  #card-maker:hover {
    transform: scale(1.1);
  }

  #redSubTitle {
    font-family: "bookMan";
    font-size: 35px;
    color: #0a2463;
  }

  .mb-2 {
    --webkit-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
    -moz-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
    box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
  }

  .btn-book {
    font-size: 18px;
    background-color: #0a2463;
    margin-bottom: -60px;
  }

  .btn-remove {
    font-size: 10px;
    background-color: #b91c3b;
    margin-top: -220px;
    margin-right: -15px;
    float: right;
  }

  .back-line {
    background-color: #0a2463;
    margin-top: -10px;
    margin-left: -50px;
    width: 1200px;
  }

  #btnClear {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 12px;
    background-color: #0a2463;
    color: white;
    height: 31px;
  }

  .card-title {
    font-size: 20px;
    margin-bottom: 0rem;
  }

  .card-img {
    border-radius: 0 !important;
    object-fit: cover;
  }
  .card {
    border-radius: 0 !important;
  }

  #searchInput {
    width: 200px;
    margin: 10px;
    border: 1px solid #c0c0c0;
  }

  #inputGroupSelect01 {
    width: 200px;
    margin: 10px;
    border: 1px solid #c0c0c0;
    color: #5c5c5c;
  }

  #inputGroupSelect02 {
    width: 200px;
    margin: 10px;
    border: 1px solid #c0c0c0;
    color: #5c5c5c;
  }

  label {
    color: #5c5c5c;
  }

  .col-sm-4 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 1096px) {
    .filters {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>