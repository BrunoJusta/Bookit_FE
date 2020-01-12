<template>
  <div class="areasDetail">
    <h3 class="display-2">{{getAreaById($route.params.areaId).name}}</h3>
    <div class="container">
      <b-card no-body class="overflow-hidden" style="max-width: 1100px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src=" getAreaById($route.params.areaId).img" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body align="left" title="Descrição">
                  <p> {{getAreaById($route.params.areaId).description}}</p>
            </b-card-body>
            
          </b-col>

        </b-row>

      </b-card>
      <b-button class="btn-book border-0" squared>
              <router-link to="/areas"  style="color:white"> Voltar </router-link>
            </b-button>
      <b-button @click="saveCurrentArea()" class="btn-book border-0" squared>
              <router-link to="/areasbooking" class="teste" style="color:white"> Reservar </router-link>
            </b-button>
    </div>
  </div>

</template>

<script>
  export default {
    data: function () {
      return {
        areas: [],
        areaName: "",
        currentArea: {},
        areaImg: ""
      };
    },
    created() {
      this.areas = JSON.parse(localStorage.getItem("areas"))
    },
    methods: {
      getAreaById(id) {
        this.areaName = this.areas.filter(
          area => area.id === id
        )[0].name

          this.areaImg = this.areas.filter(
          area => area.id === id
        )[0].img

        return this.areas.filter(
          area => area.id === id
        )[0]
      },     
      saveCurrentArea(){
       this.currentArea = ({
          areaName: this.areaName,
          areaImg: this.areaImg
        });
        localStorage.setItem("currentArea", JSON.stringify(this.currentArea));
        this.$store.state.currentArea = this.currentArea
      }
    }
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
    padding-bottom: 10px;
    font-size: 25px;
    font-weight: bold;
    color: #0A2463;


  }

  img {
    border-right: solid 10px #0A2463;

  }

  .btn-book {
    font-size: 18px;
    background-color: #0A2463;
    margin: 20px;
    margin-top: 50px;

  }

  .overflow-hidden {
    -webkit-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
  }
</style>