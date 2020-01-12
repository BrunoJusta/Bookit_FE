<template>
  <div class="kitDetail">
    <h3 class="display-2">{{getKitById($route.params.kitId).type}}</h3>
    <div class="container">
      <b-card no-body class="overflow-hidden border-0" style="max-width: 1100px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="getKitById($route.params.kitId).img" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="getKitById($route.params.kitId).name">
              <div class="row">

                <div class="col-sm-6 drinks">
                  <h6>BEBIDA</h6>
                  <p> {{ drinks.length == 0 ? 'Fechar' : '' + drinks }}</p>
                </div>

                <div class="col-sm-6 food">
                  <h6>COMIDA</h6>
                  <p> {{ food.length == 0 ? 'Fechar' : '' + food }}</p>
                </div>


              </div>
            </b-card-body>

          </b-col>

        </b-row>

      </b-card>
      <b-button class="btn-book border-0" squared>
        <router-link to="/menuKits" style="color:white"> Voltar </router-link>
      </b-button>
      <b-button @click="saveCurrentKit()" class="btn-book border-0" squared>
        <router-link to="/booking" style="color:white"> Reservar </router-link>
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
        currentKit: {},
        kitImg: "",
      };
    },
    created() {
      this.kits = JSON.parse(localStorage.getItem("kits"))
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
        this.currentKit = ({
          kitname: this.kitname,
          kitType: this.kitType,
          kitImg: this.kitImg,
        });
        localStorage.setItem("currentKit", JSON.stringify(this.currentKit));
        this.$store.state.currentKit = this.currentKit
      }

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

  .card-title {
    padding-top: 20px;
    font-family: bookMan;
    font-size: 30px;
    color: #B91C3B;


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