<template>
  <div class="kitDetail">
    <h3 class="display-2">{{getKitById($route.params.kitId).type}}</h3>
    <div class="container">
      <b-img v-bind:src="getKitById($route.params.kitId).img" alt="Image" bottom></b-img>
    <h3 class="display-3">{{getKitById($route.params.kitId).name}}</h3>
      
      <div class="row">

         <div class="drinks">
        <h6>BEBIDA</h6>
        <b-list-group v-for="d in this.drinks" :key="d.id">
          <b-list-group-item class="border-0" style="background-color: transparent; margin-bottom:-23px;">{{d}}
          </b-list-group-item>
        </b-list-group>
      </div>

      <div class="food">

        <h6>COMIDA</h6>
        <b-list-group v-for="f in this.food" :key="f.id">
          <b-list-group-item class="border-0" style="background-color: transparent; margin-bottom:-23px">{{f}}
          </b-list-group-item>
        </b-list-group>
      </div>

      </div>
     

      <b-button @click="saveCurrentKit()" class="btn-book" squared>
        <router-link to="/booking" class="teste" style="color:white"> Escolher </router-link>
      </b-button>

    </div>

    <!--  <b-button @click="sendInfo()" class="btn-book" squared>Enviar</b-button> -->


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
  @font-face {
    font-family: bookMan;
    src: url(../assets/bookman.ttf);
  }


 .display-2 {
    padding-top: 160px;
    padding-bottom: 20px;
    font-family: bookMan;
    font-size: 40px;
    color: #B91C3B;

  }

  .display-3 {
    padding-top:20px;
    font-family: bookMan;
    font-size: 30px;
    color: #B91C3B;

  }

  h6{
    color: #0A2463;
    font-weight: bold;
    
  }

  img {
    margin-left: -15px;
    float: left;
    width: 600px;
    height: 450px;
    border-right: solid 10px #0A2463;
  }

  .btn-book {
    font-size: 18px;
    background-color: #0A2463;
    margin-top: 100px;
  }

  .container {
    max-width: 1100px;
    height: 450px;
    -webkit-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
  }

  .col-sm-1 {
    background-color: #0A2463;
  }

  .row{
    padding-left: 75px;
  }

  .food, .drinks{
    padding: 50px;
  }
</style>