<template>
  <div>
    <div class="container" id="perfilContainer" v-bind:style="{display: showProfile}">


  <div class="container-full" id="profileCard">
  <div class="row">
      <div class="card  border-0" >
        <img class="card-img-top" style="min-height:80px" src="../assets/bannerProfile.jpg" alt="Bologna">
        <div class="card-body text-center">
          <img class="avatar rounded-circle"  :src="this.userImage" alt="Bologna">
          <h2 style="font-weight:bold">{{this.$store.state.loggedUser.name + " " + this.$store.state.loggedUser.lastName}}</h2>
  <h6 class="card-subtitle mb-2">  <i class="fas fa-envelope" id="iconProfile" ></i>{{this.$store.state.loggedUser.email}}

              <i class="fas fa-phone" id="iconProfile" ></i>
              {{this.$store.state.loggedUser.number}}
      
           
          </h6>
          
            <button v-on:click="displayBookings()" class="options "
              v-bind:style="{fontWeight: bookingsFont, boxShadow: bookingsColor, color: bookingsColor2}">
              <i class="fas fa-cocktail" id="icon"></i>Reservas
            </button>
            <button v-on:click="displayNotifications()" class="options"
              v-bind:style="{fontWeight: notificFont,  boxShadow: notifiColor, color: notifiColor2}">
              <i class="fas fa-thumbtack" id="icon"></i>
              Notificações
            </button>
            <button v-on:click="displaySettings()" class="optionsSet ">
              <i class="fas fa-user-cog" id="icon"></i>Opções
            </button>
        
            </div>
    </div>
  </div>
</div>


<!-- 

      <div class="row">
        <div class="col-sm-7">
          <b-img :src="this.userImage" id="imgPerfil"></b-img>
          <div id="infoDiv">
            <span
              id="nameTxt">{{this.$store.state.loggedUser.name + " " + this.$store.state.loggedUser.lastName}}</span>
            <span id="schoolTxt">
              <i class="fas fa-graduation-cap" id="icon"></i>
              {{this.$store.state.loggedUser.school}}
            </span>
            <span id="contactTxt">
              <i class="fas fa-phone" id="icon"></i>
              {{this.$store.state.loggedUser.number}}
            </span>
            <span id="emailTxt">
              <i class="fas fa-envelope" id="icon"></i>
              {{this.$store.state.loggedUser.email}}
            </span>
            <span id="birthDateTxt">
              <i class="fas fa-calendar-alt" id="icon"></i>
              {{this.$store.state.loggedUser.birthDate}}
            </span>
          </div>
        </div>
        <div class="col-sm-5">
          <div class="row" id="desktopSettings">
            <button v-on:click="displaySettings()" class="options border-0">
              <i class="fas fa-user-cog" id="icon"></i>Opções
            </button>
          </div>
          <div class="row" id="rightColumn">
            <button v-on:click="displayBookings()" class="options border-0"
              v-bind:style="{fontWeight: bookingsFont,color: bookingsColor}">
              <i class="fas fa-cocktail" id="icon"></i>Reservas
            </button>
            <button v-on:click="displayNotifications()" class="options border-0"
              v-bind:style="{fontWeight: notificFont, color: notifiColor}">
              <i class="fas fa-thumbtack" id="icon"></i>
              Notificações
            </button>
            <button v-on:click="displaySettings()" class="options mobileSettings border-0">
              <i class="fas fa-user-cog" id="icon"></i>Opções
            </button>
          </div>
        </div>
      </div>
    --></div> 
    <br />
    <!-- MOSTRA AS RESERVAS -->
    <div class="container">
      <div v-bind:style="{display: showBookings}">
        <div class="container">
         
          <button v-on:click="displayAreas()" v-bind:style="{fontWeight: AreasFont}"
            class="bookingOptions border-0">Espaços</button>
             <button v-on:click="displayEvents()" v-bind:style="{fontWeight: eventsFont}"
            class="bookingOptions border-0">Eventos & Catering</button>
          <button v-on:click="displayWorkshops()" v-bind:style="{fontWeight: WorkshopsFont}"
            class="bookingOptions border-0">Workshops</button>
        </div>

        <!-- CARDS DOS EVENTOS -->
        <div class="container" id="cardSpace"  v-bind:style="{display: showEvents}">
          <div class="row" v-if="this.bookings.length !== 0">
            <div class="col-sm-3" v-for="k in bookings" :key="k.booking_id" style="padding-top: 20px;">
              <b-card no-body class="overflow-hidden cardBox" style="max-width: 16rem; height: 20rem;" :img-src="k.img"
                img-height="120rem">
                <b-card-body align="left" :title="k.name + ' - ' + k.description">
                  <b-card-text style="margin: auto;">
                    <b>Data:</b>
                    {{k.date}}
                  </b-card-text>
                  <b-card-text style="margin: auto;">
                    <b>Hora:</b>
                    {{k.duration}}
                  </b-card-text>
                  <b-card-text style="margin: auto;">
                    <b>Local:</b>
                    {{k.school}}
                  </b-card-text>
                  <b-card-text style="margin: auto;">
                    <b>Estado:</b>
                    {{k.state}}
                  </b-card-text>
                  <div v-if="k.state == 'Concluído' && (k.opinion =='' || k.opinion ==null || k.opinion ==undefined)">
                    <b-button id="opinion" class="btn-book" @click="giveBookingOpinion(k.booking_id)" squared>Dar
                      Opinião</b-button>
                  </div>
                  <div
                    v-if="k.state == 'Recusado' && (k.decline_txt !='' || k.decline_txt !=null || k.decline_txt !=undefined)">
                    <b-button id="motive" class="btn-book" @click="showDeclineTxt(k.decline_txt)" squared>Ver Motivo
                    </b-button>
                  </div>
                  <b-card-text id="opinionTXT"
                    v-if="k.state == 'Concluído' && (!(k.opinion =='' || k.opinion ==null || k.opinion ==undefined))"
                    style="margin: auto;">
                    <b>Opinião:</b> Enviada
                  </b-card-text>
                   <div v-if="k.state == 'Aprovado' || k.state == 'Pendente' ">
                    <b-button class="btn-book" @click="editMenuBooking(k.booking_id, 4, '', '')" squared>
                      Cancelar</b-button>
                  </div>
                </b-card-body>
              </b-card>
            </div>
          </div>
          <div v-else>
            <img style="width: 150px;  margin:20px" src="../assets/bookit_BLUE.svg" alt srcset />
            <h4>Não existem reservas de Eventos & Catering.</h4>
          </div>
        </div>

        <!-- CARDS DOS ESPAÇOS -->
        <div class="container" id="cardSpace" v-bind:style="{display: showAreas}">
          <div class="row" v-if="this.areaBookings.length !== 0">
            <div class="col-sm-3" v-for="k in areaBookings" :key="k.area_booking_id" style="padding-top: 20px;">
              <b-card no-body class="overflow-hidden cardBox" style="max-width: 16rem;" :img-src="k.img" img-height="120rem">
                <b-card-body align="left" :title="k.name">
                  <b-card-text style="margin: auto;">
                    <b>Data:</b>
                    {{k.date}}
                  </b-card-text>
                  <b-card-text style="margin: auto;">
                    <b>Hora:</b>
                    {{k.duration}}
                  </b-card-text>
                  <b-card-text style="margin: auto;">
                    <b>Estado:</b>
                    {{k.state}}
                  </b-card-text>
                  <div v-if="k.state == 'Concluído' && (k.opinion =='' || k.opinion ==null || k.opinion ==undefined)">
                    <b-button class="btn-book" @click="giveAreasOpinion(k.area_booking_id)" squared>Dar Opinião
                    </b-button>
                  </div>
                  <div
                    v-if="k.state == 'Recusado' && (!(k.decline_txt =='' || k.decline_txt ==null || k.decline_txt ==undefined))">
                    <b-button class="btn-book" @click="showDeclineTxt(k.decline_txt)" squared>Ver Motivo</b-button>
                  </div>
                  <b-card-text
                    v-if="k.state == 'Concluído' && (!(k.opinion =='' || k.opinion ==null || k.opinion ==undefined))"
                    style="margin: auto;">
                    <b>Opinião:</b> Enviada
                  </b-card-text>
                   <div v-if="k.state == 'Aprovado'  || k.state == 'Pendente' ">
                    <b-button class="btn-book" @click="editAreaBooking(k.area_booking_id, 4, '', '')" squared>
                      Cancelar</b-button>
                  </div>
                </b-card-body>
              </b-card>
            </div>
          </div>
          <div v-else>
            <img style="width: 150px;  margin:20px" src="../assets/bookit_BLUE.svg" alt srcset />
            <h4>Não existem reservas de Espaços.</h4>
          </div>
        </div>

        <!-- CARDS DOS WORKSHOPS -->
        <div class="container" id="cardSpace" v-bind:style="{display: showWorkshops}">
          <div class="row" v-if="this.userWorkshops.length !== 0">
            <div class="col-sm-3" v-for="k in this.userWorkshops" :key="k.workshop_id" style="padding-top: 20px;">
              <b-card no-body class="overflow-hidden cardBox" style="max-width: 16rem;" :img-src="k.img" img-height="120rem">
                <b-card-body align="left" :title="k.name">
                  <b-card-text style="margin: auto;">
                    <b>Data:</b>
                    {{k.date}}
                  </b-card-text>
                  <b-card-text style="margin: auto;">
                    <b>Hora:</b>
                    {{k.duration}}
                  </b-card-text>
                </b-card-body>
              </b-card>
            </div>
          </div>
          <div v-else>
            <img style="width: 150px;  margin:20px" src="../assets/bookit_BLUE.svg" alt srcset />
            <h4>Não existem inscrições em Workshops.</h4>
          </div>
        </div>
      </div>

      <!-- MOSTRA AS NOTIFICACOES -->
      <div v-bind:style="{display: showNotifications}">
        <show-notifications />
      </div>

      <!-- DEFINIÇOES -->
      <div class="container teste" v-bind:style="{display: showSettings}">
        <show-settings />
        <button v-on:click="hideSettings()" class="border-0  btn-p2" id="goBackBtn">Voltar ao Perfil</button>
      </div>
    </div>
  </div>
</template>

<script>
  import ShowSettings from "@/components/ShowSettings.vue";
  import ShowNotificationsVue from "@/components/ShowNotifications.vue";
  import {
    mapGetters
  } from "vuex";

  export default {
    components: {
      "show-settings": ShowSettings,
      "show-notifications": ShowNotificationsVue
    },
    data: function () {
      return {
        users: [],
        userImage: "",
        bookings: [],
        areaBookings: [],
        areas: [],
        workshops: [],
        userWorkshops: [],
        showBookings: "block", //mostrar reservas
        showNotifications: "none", //mostrar notificaçoes
        showSettings: "none", //mostrar as definiçoes
        showEvents: "block", //mostrar eventos dentro das reservas
        showAreas: "none", //mostrar areas dentro das reservas
        showWorkshops: "none", //mostrar workshops dentro das reservas
        bookingsColor: " -2px 0px 10px -4px rgba(0,0,0,0.5)", //muda a cor da fonte escolhida
        notifiColor: " 0px 0px 0px 0px rgba(0,0,0,0)", //muda a cor da fonte escolhida
        bookingsColor2: "#b91c3b", //muda a cor da fonte escolhida
        notifiColor2: " #0a2463", //muda a cor da fonte escolhida
        settingsOn: require("../assets/settingsIcon.png"), //imagem das definições
        bookingsFont: "bold", //muda a cor da fonte escolhida
        notificFont: "normal", //muda a cor da fonte escolhida
        eventsFont: "bold",
        AreasFont: "normal",
        WorkshopsFont: "normal",
        showProfile: "block"
      };
    },
    created() {
      this.getMyBookings()
      this.getMyAreaBookings()
      this.getMyWorkshops()
      this.getUserImg()
    },
    updated() {
      this.getUserImg()
    },
    methods: {
      async getMyBookings() {
        try {
          await this.$store.dispatch("fetchUserBookings");
          this.bookings = this.getUserBookings.data
        } catch (err) {
          alert(err);
        }
      },
      async getMyAreaBookings() {
        try {
          await this.$store.dispatch("fetchUserAreaBookings");
          this.areaBookings = this.getUserAreaBookings.data
        } catch (err) {
          alert(err);
        }
      },
      async getMyWorkshops() {
        try {
          await this.$store.dispatch("fetchUserWorkshops");
          this.userWorkshops = this.getUserWorkshops.data
        } catch (err) {
          alert(err);
        }
      },
      async getUserImg() {
        try {
          await this.$store.dispatch("fetchUserImage", {
            id: this.$store.state.loggedUser.id
          });
          this.userImage = this.getUserImage.data
        } catch (err) {
          alert(err);
        }
      },
      displayEvents() {
        this.showEvents = "block";
        this.showAreas = "none";
        this.showWorkshops = "none";
        this.eventsFont = "bold";
        this.AreasFont = "normal";
        this.WorkshopsFont = "normal";
      },
      displayAreas() {
        this.showEvents = "none";
        this.showAreas = "block";
        this.showWorkshops = "none";
        this.eventsFont = "normal";
        this.AreasFont = "bold";
        this.WorkshopsFont = "normal";
      },
      displayWorkshops() {
        this.showEvents = "none";
        this.showAreas = "none";
        this.showWorkshops = "block";
        this.eventsFont = "normal";
        this.AreasFont = "normal";
        this.WorkshopsFont = "bold";
        this.filteredWorkshops();
      },
      displayBookings() {
        this.showBookings = "block";
        this.showNotifications = "none";
        this.showSettings = "none";
        this.bookingsColor = "-2px 0px 10px -4px rgba(0,0,0,0.5)";
        this.notifiColor = "0px 0px 0px 0px rgba(0,0,0,0)";
        this.bookingsColor2 = "#b91c3b", 
        this.notifiColor2 = " #0a2463", 
        this.bookingsFont = "bold";
        this.notificFont = "normal";
      },
      displayNotifications() {
        this.showBookings = "none";
        this.showNotifications = "block";
        this.showSettings = "none";
        this.bookingsColor = "0px 0px 0px 0px rgba(0,0,0,0)";
        this.notifiColor = "-2px 0px 10px -4px rgba(0,0,0,0.5)";
        this.bookingsColor2 = "#0a2463", 
        this.notifiColor2 = " #b91c3b", 
        this.bookingsFont = "normal";
        this.notificFont = "bold";
      },
      displaySettings() {
        this.showProfile = "none";
        this.showBookings = "none";
        this.showNotifications = "none";
        this.showSettings = "block";
        this.bookingsColor = "0px 0px 0px 0px rgba(0,0,0,0)";
        this.notifiColor = "0px 0px 0px 0px rgba(0,0,0,0)";
        this.bookingsFont = "normal";
        this.notificFont = "normal";
      },
      hideSettings() {
        this.showProfile = "block";
        this.showSettings = "none";
        this.showBookings = "block";
        this.showNotifications = "none";
        this.showSettings = "none";
        this.bookingsColor = "-2px 0px 10px -4px rgba(0,0,0,0.5)";
        this.notifiColor = "0px 0px 0px 0px rgba(0,0,0,0)";
        this.bookingsColor2 = "#b91c3b", 
        this.notifiColor2 = " #0a2463", 
        this.bookingsFont = "bold";
        this.notificFont = "normal";
      },
      giveBookingOpinion(id) {
        // eslint-disable-next-line no-undef
        Swal.fire({
          title: "Opinião",
          input: "textarea",
          inputAttributes: {
            autocapitalize: "off"
          },
          showCancelButton: true,
          cancelButtonText: "Cancelar",
          confirmButtonText: "Submeter"
        }).then(result => {
          if (result.value && result.value != "") {
            this.editMenuBooking(id, '', '', result.value)
          }
        });
      },
      giveAreasOpinion(id) {
        // eslint-disable-next-line no-undef
        Swal.fire({
          title: "Opinião",
          input: "textarea",
          inputAttributes: {
            autocapitalize: "off"
          },
          showCancelButton: true,
          cancelButtonText: "Cancelar",
          confirmButtonText: "Submeter"
        }).then(result => {
          if (result.value && result.value != "") {
            this.editAreaBooking(id, '', '', result.value)
          }
        });
      },
      async editMenuBooking(ID, state, decline, opinion) {
        try {
          await this.$store.dispatch("editMenuBookings", {
            id: ID,
            state: state,
            decline: decline,
            opinion: opinion
          })
        } catch (err) {
          alert(err);
        }
        this.getMyBookings();
      },
      async editAreaBooking(ID, state, decline, opinion) {
        try {
          await this.$store.dispatch("editAreaBookings", {
            id: ID,
            state: state,
            decline: decline,
            opinion: opinion
          })
        } catch (err) {
          alert(err)
        }
        this.getMyAreaBookings();
      },
      showDeclineTxt(txt) {
        // eslint-disable-next-line no-undef
        Swal.fire({
          title: "Motivo: " + txt,
          confirmButtonText: 'Fechar'
        })
      },
    },
    computed: {
      ...mapGetters(["getUserBookings"]),
      ...mapGetters(["getUserAreaBookings"]),
      ...mapGetters(["getUserWorkshops"]),
      ...mapGetters(["getUserImage"]),
    }
  };
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: bookMan;
    src: url(../assets/bookman.ttf);
  }


#profileCard{
  font-family: gotham;
}

.avatar {
  border: 0.3rem solid rgba(#fff, 0.3);
  margin-top: -6rem;
  margin-bottom: 1rem;
  width: 150px;
  height: 150px;
        object-fit: cover;


}
  #cardSpace{
    margin-bottom: 180px;

  }
  #perfilContainer {
    margin-top: 180px;
    border-bottom: solid 8px #0a2463;
    width: 70vw;
  }

  #infoDiv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .col-sm-5 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-left: -20px;
  }

  .col-sm-3 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #rightColumn {
    display: flex;
    align-items: flex-start;
  }

  .options {
    background-color: white;
    color: #0a2463;
    font-size: 16px;
    border-color: transparent;
    border-radius: 5px;
    margin: 10px;
    box-shadow: -2px 0px 10px -4px rgba(0,0,0,0.35);
  }

  .optionsSet {
    background-color: #0a2463;
    color: white;
    font-size: 16px;
    border-color: transparent;
    border-radius: 5px;
    margin: 10px;
  }

  .btn-book {
    font-size: 12px;
    background-color: #0a2463;
    margin-top: 10px;
    margin-left: 50px;
    width: 100px;
  }

  .btn-profile {
    font-size: 16px;
    background-color: #0a2463;
    margin: 10px;
  }

  .btn-profile {
    font-size: 16px;
    background-color: white;
    border:0px solid  #0a2463;
    color:  #0a2463;
    margin: 10px;
  }

  .card-title {
    font-size: 16px;
    font-weight: bold;
  }

  .card-img {
    border-radius: 0 !important;
    object-fit: cover;
  }

#iconProfile{
  padding-left: 10px;
  padding-right: 3px;

}

  #imgPerfil {
    height: 150px;
    width: 150px;
    float: left;
    margin-left: 10px;
    margin-top: -5px;
    padding-right: 10px;
  }

  #nameTxt {
    font-size: 25px;
    font-weight: bold;
    color: black;
  }

  #emailTxt,
  #contactTxt,
  #schoolTxt,
  #birthDateTxt {
    font-size: 15px;
    color: black;
  }


  #link {
    color: black;
    font-size: 25px;
    background-color: transparent;
    border: none;
  }

  .bookingOptions {
    padding: 6px;
    background-color: #0a2463;
    color: white;
    border-color: transparent;
    border-radius: 5px;
    margin: 10px;
  }

  .bookingOptions {
    padding: 6px;
     background-color: white;
    color: black;
    font-size: 20px;
    border-color: transparent;
    border-radius: 5px;
    margin: 10px;
    // box-shadow: -2px 0px 8px -4px rgba(0,0,0,0.35);
  }

  .options[data-v-ced23842]:focus {
    outline: 0;
  }

  .bookingOptions[data-v-ced23842]:focus {
    outline: 0;
  }

  .card-body {
    font-size: 14px;
  }

.cardBox{
    box-shadow: -2px 0px 10px -4px rgba(0,0,0,0.35);
border: 0px solid transparent;
}

  #goBackBtn {
    background-color: transparent;
    font-size: 16px;
    margin: auto;
    padding-top: 10px;
  }

  .btn-p2 {
    font-size: 18px;
    background-color: white;
    color: black;
    margin-right: 468px;
    transition: all 0.2s ease-in-out;
  }

  .btn-p2:hover {
    transform: scale(1.1);
  }

  #icon {
    padding-right: 6px;
  }

  .mobileSettings {
    display: none;
  }
  .cardBox:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 1096px) {
    .mobileSettings {
      display: flex;
    }

    #desktopSettings {
      display: none;
    }

    #rightColumn {
      margin: auto;
      padding-top: 20px;
    }

    #perfilContainer {
      width: 90vw;
    }

  
  }
</style>