<template>
  <div class="kitDetail">

    <h3 class="display-2">{{getWorkshopById($route.params.workshopId).name}}</h3>
    <div class="container">
      <b-card no-body class="overflow-hidden border-0" style="max-width: 1100px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="getWorkshopById($route.params.workshopId).img" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body align="left" title="Informação">
              <p><b>Data:</b> {{getWorkshopById($route.params.workshopId).date}}
                <b id="b">Duração:</b> {{getWorkshopById($route.params.workshopId).time}} <b id="b">Vagas:</b>
                {{getWorkshopById($route.params.workshopId).vacancies}} </p>
              <p><b>Locutor:</b> {{getWorkshopById($route.params.workshopId).teacher}}</p>
              <p> {{getWorkshopById($route.params.workshopId).description}}</p>
            </b-card-body>


          </b-col>

        </b-row>

      </b-card>
      <b-button class="btn-book border-0" squared>
        <router-link to="/workshops" style="color:white"> Voltar </router-link>
      </b-button>
      <b-button @click="sendInfo()" class="btn-book border-0" squared>Inscrever
      </b-button>
    </div>
  </div>

</template>

<script>
  export default {
    data: function () {
      return {
        workshops: [],
        currentWS: [],
        workshopName: "",
        clientName: "",
        date: "",
        time: "",
        userName: "",
        userEmail: "",
        inscriptions: [],
      };
    },
    methods: {
      getWorkshopById(id) {

        this.workshopName = this.workshops.filter(
          workshop => workshop.id === id
        )[0].name

        this.inscriptions = this.workshops.filter(
          workshop => workshop.id === id
        )[0].inscriptions

        this.date = this.workshops.filter(
          workshop => workshop.id === id
        )[0].date

        this.time = this.workshops.filter(
          workshop => workshop.id === id
        )[0].time

        return this.workshops.filter(
          workshop => workshop.id === id
        )[0]

      },
      sendInfo() {
        for (let j = 0; j < this.workshops.length; j++) {
          if (this.workshops[j].name === this.workshopName) {
            let inscriptions = this.workshops[j].inscriptions
            let verifyEmail = false;
            for (let i = 0; i < inscriptions.length; i++) {
              if (inscriptions[i].email === this.$store.getters.getEmail) {
                verifyEmail = true
              }
            }
            if (!verifyEmail) {
              inscriptions.push({
                email: this.$store.getters.getEmail
              })
              this.workshops[j].vacancies = this.workshops[j].vacancies - 1
              localStorage.setItem("workshops", JSON.stringify(this.workshops));
              alert("Inscrito com sucesso!")
            } else {
              alert("Já inscrito")
            }
          }
        }
      }
    },
    created() {
      window.addEventListener('unload', this.saveStorage)
      if (localStorage.getItem("inscriptions")) {
        this.$store.state.inscriptions = JSON.parse(localStorage.getItem("inscriptions"))
      }
      this.workshops = JSON.parse(localStorage.getItem("workshops"))
      this.clientName = sessionStorage.getItem("userOn")
      this.userName = this.$store.getters.getName + " " + this.$store.getters.getLastName
      this.userEmail = this.$store.getters.getEmail
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
    padding-bottom: 10px;
    font-size: 25px;
    font-weight: bold;
    color: #0A2463;


  }

  .card-img {
    border-radius: 0 !important;
  }


  .card {
    border-radius: 0 !important;
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

  #b {
    padding-left: 10px;
  }
</style>