<template>
  <div class="kitDetail">
    <br>
    <br>
    <br>
    <br>
    <div class="jumbotron">
      <h1 class="display-3">{{getWorkshopById($route.params.workshopId).name}}</h1>
      <b-img v-bind:src="getWorkshopById($route.params.workshopId).img" alt="Image" bottom></b-img>
      <h3>Data:{{getWorkshopById($route.params.workshopId).date}}
        Hora:{{getWorkshopById($route.params.workshopId).time}} </h3>
      <h3>Professor:{{getWorkshopById($route.params.workshopId).teacher}}</h3>
      <b-button @click="sendInfo()" class="btn-book" squared>Inscrever</b-button>
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
        inscriptions: []
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
        this.$store.commit('ADD_WORKSHOP_ATENDER', {
          workshopName: this.workshopName,
          date: this.date,
          time: this.time,
          clientName: this.clientName
        })
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
  .btn-book {
    font-size: 18px;
    background-color: #0A2463;
    margin-bottom: -60px;
  }
</style>