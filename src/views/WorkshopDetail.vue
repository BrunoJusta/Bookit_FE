<template>
  <div class="kitDetail">
    <h3 class="display-2" v-bind:style="{display:show3}">{{getWorkshopById($route.params.workshopId).name}}</h3>
    <input type="text" :placeholder="workshopName" v-model="newName" v-bind:style="{display:show}" id="editTitle">

    <div class="container">
      <b-card no-body class="overflow-hidden border-0" style="max-width: 1100px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="getWorkshopById($route.params.workshopId).img" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body align="left" title="Informação">
              <input type="text" :placeholder="date" v-model="newDate" v-bind:style="{display:show}">
              <input type="text" :placeholder="time" v-model="newTime" v-bind:style="{display:show}">
              <input type="text" :placeholder="vacancies" v-model="newVac" v-bind:style="{display:show}">
              <input type="text" :placeholder="teacher" v-model="newTeacher" v-bind:style="{display:show}">

              <div class="row">
                <p v-bind:style="{display:show2}" id="b"> <b>Data:</b>
                  {{getWorkshopById($route.params.workshopId).date}}</p>
                <p v-bind:style="{display:show2}" id="b"> <b>Duração:</b>
                  {{getWorkshopById($route.params.workshopId).time}} </p>

              </div>
              <div class="row">


                <p v-bind:style="{display:show2}" id="b"><b>Vagas:</b>
                  {{getWorkshopById($route.params.workshopId).vacancies}} </p>
                <p v-bind:style="{display:show2}" id="b"><b>Locutor:</b>
                  {{getWorkshopById($route.params.workshopId).teacher}}</p>
              </div>

              <p v-bind:style="{display:show2}"> {{getWorkshopById($route.params.workshopId).description}}</p>
              <textarea id="description" rows="4" cols="50" style="resize: none; width: 100%;"
                v-bind:style="{display:show}">{{getWorkshopById($route.params.workshopId).description}}</textarea>
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
        <router-link to="/workshops" style="color:white"> Voltar </router-link>
      </b-button>
      <b-button  v-bind:style="{display:show4}" @click="sendInfo()" class="btn-book border-0"
        squared>Inscrever
      </b-button>
      <b-button v-bind:style="{display:show2}" v-if="this.$store.getters.getUserType == 'admin'" @click="activateEdit()" class="btn-book border-0" squared>
        Editar
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
        vacancies: "",
        teacher: "",
        userName: "",
        userEmail: "",
        show: "none",
        show2: "inline",
        show3: "block",
        show4: "inline",
        inscriptions: [],
        newDate: "",
        newTime: "",
        newVac: "",
        newTeacher: "",
        newName: "",
        id: ""

      };
    },
    methods: {
      getWorkshopById(id) {

        this.workshopName = this.workshops.filter(
          workshop => workshop.id === id
        )[0].name

        this.id = this.workshops.filter(
          workshop => workshop.id === id
        )[0].id

        this.inscriptions = this.workshops.filter(
          workshop => workshop.id === id
        )[0].inscriptions

        this.date = this.workshops.filter(
          workshop => workshop.id === id
        )[0].date

        this.time = this.workshops.filter(
          workshop => workshop.id === id
        )[0].time

        this.vacancies = this.workshops.filter(
          workshop => workshop.id === id
        )[0].vacancies

        this.teacher = this.workshops.filter(
          workshop => workshop.id === id
        )[0].teacher


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
              const toast = swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true
              });

              toast.fire({
                icon: 'success',
                title: 'Inscrito com sucesso!'
              })
            } else {
              Swal.fire({
                icon: 'warning',
                text: 'Já inscrito!'
              })
            }
          }
        }
      },
      activateEdit() {
        this.show = "inline"
        this.show2 = "none"
        this.show3 = "none"
        this.show4 = "none"

      },
      saveEdit() {
        this.show2 = "inline"
        this.show = "none"
        this.show3 = "block"
        this.show4 = "inline"
        let newDesc = document.getElementById('description').value

        for (let a in this.workshops) {
          if (this.workshops[a].id === this.id) {
            if (this.newName == "") {
              this.workshops[a].name = this.workshops[a].name
            } else {
              this.workshops[a].name = this.newName
            }
            if (this.newTime == "") {
              this.workshops[a].time = this.workshops[a].time

            } else {
              this.workshops[a].time = this.newTime

            }
            if (this.newDate == "") {
              this.workshops[a].date = this.workshops[a].date

            } else {
              this.workshops[a].date = this.newDate

            }
            if (this.newVac == "") {
              this.workshops[a].vacancies = this.workshops[a].vacancies

            } else {
              this.workshops[a].vacancies = this.newVac

            }
            if (this.newTeacher == "") {
              this.workshops[a].teacher = this.workshops[a].teacher

            } else {
              this.workshops[a].teacher = this.newTeacher

            }
            this.workshops[a].description = newDesc
            localStorage.setItem("workshops", JSON.stringify(this.workshops));
            Swal.fire({
              icon: 'success',
              text: 'Alterado!'
            })

          }
        }

      },
      cancelEdit() {
        this.show2 = "inline"
        this.show = "none"
        this.show3 = "block"
        this.show4 = "inline"
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


  #editTitle {
    margin: auto;
    margin-top: 200px;
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

    transition: all .2s ease-in-out;
  }

  .btn-book:hover {
    transform: scale(1.1);
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