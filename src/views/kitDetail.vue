<template>
  <div class="kitDetail">
    <br>
    <br><br>
    <br>
    <div class="jumbotron">
      <h1 class="display-3">{{getKitById($route.params.kitId).type}}</h1>

      <h1 class="display-3">{{getKitById($route.params.kitId).name}}</h1>
      <p>{{this.drinks.length===0 ? 'sem bebida' : 'Bebidas: ' + this.drinks}}</p>
      <p>{{this.food.length===0 ? 'sem comida' : 'Comida: ' + this.food}}</p>

      <!--  <b-button @click="sendInfo()" class="btn-book" squared>Enviar</b-button> -->
      <b-button @click="saveCurrentKit()" class="btn-book" squared>
        <router-link to="/booking" class="teste" style="color:white"> Escolher </router-link>
      </b-button>
    </div>
  </div>

</template>

<script>
  export default {
    data: function () {
      return {
        kits: [],
        drinks: [],
        food: [],
        kitname: "",
        kitType: "",
        currentKit: []
      };
    },
    methods: {
      getKitById(id) {

        this.food = this.kits.filter(
          kit => kit.id === id
        )[0].food

        this.drinks = this.kits.filter(
          kit => kit.id === id
        )[0].drinks

        this.kitname = this.kits.filter(
          kit => kit.id === id
        )[0].name

        this.kitType = this.kits.filter(
          kit => kit.id === id
        )[0].type

        return this.kits.filter(
          kit => kit.id === id
        )[0]
      },
      saveCurrentKit() {
        this.currentKit.push({
          kitname: this.kitname,
          kitType: this.kitType,
        });
        localStorage.setItem("currentKit", JSON.stringify(this.currentKit));
      }

    },
    created() {
      this.kits = JSON.parse(localStorage.getItem("kits"))
    },
  }
</script>
<style lang="scss" scoped>
  .btn-book {
    font-size: 18px;
    background-color: #0A2463;
    margin-bottom: -60px;
  }
</style>