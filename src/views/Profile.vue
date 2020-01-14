<template>
    <div>
        <div class="container" id="perfilContainer">
            <div class="row" style="height: 150px">
                <div class="col-sm-2">
                    <b-img :src="this.$store.getters.getUserImg" id="imgPerfil"></b-img>
                </div>
                <div class="col-sm-2" id="nameColumn">
                    <p id="nameTxt">{{getFullName}}</p>
                </div>
                <div class="col-sm-8" id="optionsColumn">
                    <a v-on:click="displaySettings()" class="options border-0">
                        <b-img v-bind:src="settingsOn" id="settingsImg"></b-img>
                    </a>
                    <button v-on:click="displayNotifications()" class="options border-0"
                        v-bind:style="{fontWeight: notificFont, color: notifiColor}">
                        Notificações</button>
                    <p class="options" style="padding: 10px">|</p>
                    <button v-on:click="displayBookings()" class="options border-0"
                        v-bind:style="{fontWeight: bookingsFont,color: bookingsColor}">Reservas
                    </button>
                </div>
            </div>
        </div>
        <br>

        <!-- MOSTRA AS RESERVAS -->
        <div class="container">
            <div v-bind:style="{display: showBookings}">
                <div class="container" style="justify-content: center;">
                    <button v-on:click="displayEvents()" v-bind:style="{fontWeight: eventsFont}"
                        style="fontSize: 20px;" class="bookingOptions border-0">Eventos & Catering
                    </button>
                    <span class="bookingOptions" style="padding: 10px">|</span>
                    <button v-on:click="displayAreas()" v-bind:style="{fontWeight: AreasFont}" style="fontSize: 20px;"
                        class="bookingOptions border-0">
                        Espaços</button>
                    <span class="bookingOptions" style="padding: 10px">|</span>
                    <button v-on:click="displayWorkshops()" v-bind:style="{fontWeight: WorkshopsFont}"
                        style="fontSize: 20px;" class="bookingOptions border-0">Workshops
                    </button>
                </div>

                <!-- CARDS DOS EVENTOS -->
                <div class="container" v-bind:style="{display: showEvents}">
                    <div class="row" v-if="this.filteredBookings.length !== 0">
                        <div class="col-sm-3" v-for="k in filteredBookings" :key="k.id" style="padding-top: 20px;">
                            <b-card no-body class="overflow-hidden" style="max-width: 16rem;" :img-src="k.kitImg">
                                <b-card-body align="left" :title="k.kitName + ' - ' + k.kitType">
                                    <b-card-text style="margin: auto;">
                                        <b>Data:</b> {{k.date}}
                                    </b-card-text>
                                    <b-card-text style="margin: auto;">
                                        <b>Hora:</b> {{k.duration}}
                                    </b-card-text>
                                    <b-card-text style="margin: auto;">
                                        <b>Local:</b> {{k.location}}
                                    </b-card-text>
                                    <b-card-text style="margin: auto;">
                                        <b>Estado:</b> {{k.state}}
                                    </b-card-text>
                                </b-card-body>
                            </b-card>
                        </div>
                    </div>
                    <div v-else>
                        <br>
                        <p>NÃO EXISTEM RESERVAS FEITAS!</p>
                    </div>
                </div>

                <!-- CARDS DOS ESPAÇOS -->
                <div class="container" v-bind:style="{display: showAreas}">
                    <div class="row" v-if="this.filteredAreas.length !== 0">
                        <div class="col-sm-3" v-for="k in filteredAreas" :key="k.id" style="padding-top: 20px;">
                            <b-card no-body class="overflow-hidden" style="max-width: 16rem;" :img-src="k.areaImg">
                                <b-card-body align="left" :title="k.areaName">
                                    <b-card-text style="margin: auto;">
                                        <b>Data:</b> {{k.date}}
                                    </b-card-text>
                                    <b-card-text style="margin: auto;">
                                        <b>Hora:</b> {{k.duration}}
                                    </b-card-text>
                                    <b-card-text style="margin: auto;">
                                        <b>Estado:</b> {{k.state}}
                                    </b-card-text>
                                </b-card-body>
                            </b-card>
                        </div>
                    </div>
                    <div v-else>
                        <br>
                        <p>NÃO EXISTEM RESERVAS DE ESPAÇOS FEITAS!</p>
                    </div>
                </div>

                <!-- CARDS DOS WORKSHOPS -->
                <div class="container" v-bind:style="{display: showWorkshops}">
                    <div class="row" v-if="this.userWorkshops.length !== 0">
                        <div class="col-sm-3" v-for="k in this.userWorkshops" :key="k.id" style="padding-top: 20px;">
                            <b-card no-body class="overflow-hidden" style="max-width: 16rem;" :img-src="k.img">
                                <b-card-body align="left" :title="k.name">
                                    <b-card-text style="margin: auto;">
                                        <b>Data:</b> {{k.date}}
                                    </b-card-text>
                                    <b-card-text style="margin: auto;">
                                        <b>Hora:</b> {{k.time}}
                                    </b-card-text>
                                </b-card-body>
                            </b-card>
                        </div>
                    </div>
                    <div v-else>
                        <br>
                        <p>NÃO EXISTEM INSCRIÇÕES EM WORKSHOPS FEITAS!</p>
                    </div>
                </div>
            </div>

            <!-- MOSTRA AS NOTIFICACOES -->
            <div v-bind:style="{display: showNotifications}">
                <h1>TESTE PARA AS NOTIFICACOES</h1>
                <h1>TESTE PARA AS NOTIFICACOES</h1>
            </div>

            <!-- DEFINIÇOES -->
            <div class="container" v-bind:style="{display: showSettings}">
                <show-settings/>
            </div>
        </div>

    </div>
</template>

<script>
  import ShowSettings from '@/components/ShowSettings.vue';
    export default {
        components: {
            "show-settings": ShowSettings
        },
        data: function () {
            return {
                bookings: [],
                areas: [],
                workshops: [],
                userWorkshops: [],
                firstNameUser: "",
                lastNameUser: "",
                userEmail: "",
                showBookings: "block", //mostrar reservas
                showNotifications: "none", //mostrar notificaçoes
                showSettings: "none", //mostrar as definiçoes
                showEvents: "block", //mostrar eventos dentro das reservas
                showAreas: "none", //mostrar areas dentro das reservas
                showWorkshops: "none", //mostrar workshops dentro das reservas
                bookingsColor: "#B91C3B", //muda a cor da fonte escolhida                   
                notifiColor: "black", //muda a cor da fonte escolhida
                settingsOn: require('../assets/settingsIcon.png'), //imagem das definições
                bookingsFont: "bold", //muda a cor da fonte escolhida                   
                notificFont: "normal", //muda a cor da fonte escolhida
                eventsFont: "bold",
                AreasFont: "normal",
                WorkshopsFont: "normal"
            }
        },
        created() {
            if (localStorage.getItem("loggedUser")) {
                this.$store.state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
            }
            if (localStorage.getItem("bookings")) {
                this.bookings = JSON.parse(localStorage.getItem("bookings"))
            }
            if (localStorage.getItem("areaBookings")) {
                this.areas = JSON.parse(localStorage.getItem("areaBookings"))
            }
            if (localStorage.getItem("workshops")) {
                this.workshops = JSON.parse(localStorage.getItem("workshops"))
            }
            this.firstNameUser = this.$store.getters.getName
            this.lastNameUser = this.$store.getters.getLastName
            this.userEmail = this.$store.getters.getEmail

        },
        methods: {
            logout() {
                this.$store.commit('LOGOUT')
            },
            filteredWorkshops() {
                this.userWorkshops = []
                for (let i = 0; i < this.workshops.length; i++) {
                    for (let j = 0; j < this.workshops[i].inscriptions.length; j++) {
                        if (this.workshops[i].inscriptions[j].length !== 0) {
                            if (this.workshops[i].inscriptions[j].email === this.userEmail) {
                                this.userWorkshops.push(this.workshops[i])
                            }
                        }
                    }
                }
            },
            displayEvents() {
                this.showEvents = "block"
                this.showAreas = "none"
                this.showWorkshops = "none"
                this.eventsFont = "bold"
                this.AreasFont = "normal"
                this.WorkshopsFont = "normal"
            },
            displayAreas() {
                this.showEvents = "none"
                this.showAreas = "block"
                this.showWorkshops = "none"
                this.eventsFont = "normal"
                this.AreasFont = "bold"
                this.WorkshopsFont = "normal"
            },
            displayWorkshops() {
                this.showEvents = "none"
                this.showAreas = "none"
                this.showWorkshops = "block"
                this.eventsFont = "normal"
                this.AreasFont = "normal"
                this.WorkshopsFont = "bold"
                this.filteredWorkshops()
            },
            displayBookings() {
                this.showBookings = "block"
                this.showNotifications = "none"
                this.showSettings = "none"
                this.bookingsColor = "#B91C3B"
                this.notifiColor = "black"
                this.bookingsFont = "bold"
                this.notificFont = "normal"
                this.settingsOn = require('../assets/settingsIcon.png')
            },
            displayNotifications() {
                this.showBookings = "none"
                this.showNotifications = "block"
                this.showSettings = "none"
                this.bookingsColor = "black"
                this.notifiColor = "#B91C3B"
                this.bookingsFont = "normal"
                this.notificFont = "bold"
                this.settingsOn = require('../assets/settingsIcon.png')
            },
            displaySettings() {
                this.showBookings = "none"
                this.showNotifications = "none"
                this.showSettings = "block"
                this.bookingsColor = "black"
                this.notifiColor = "black"
                this.bookingsFont = "normal"
                this.notificFont = "normal"
                this.settingsOn = require('../assets/settingsIconRed.png')
            }
        },
        computed: {
            getFullName() {
                return this.firstNameUser + " " + this.lastNameUser
            },
            getEmail() {
                return this.userEmail
            },
            filteredBookings() {
                return this.bookings.filter(
                    booking => booking.userEmail === this.userEmail
                )
            },
            filteredAreas() {
                return this.areas.filter(
                    area => area.userEmail === this.userEmail
                )
            }
        }
    }
</script>

<style lang="scss" scoped>
    #perfilContainer {
        -webkit-box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
        -moz-box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
        margin-top: 180px;
    border-bottom: solid 8px #0A2463;

    }

    .options {
        float: right;
        margin-top: 110px;
        background-color: transparent;
        color: black;
        padding: 10px;
    }

    .card-title {
        font-size: 16px;
        font-weight: bold;
    }

    .card-img {
        border-radius: 0 !important;
    }

    #settingsImg {
        margin-top: -107px;
        margin-right: -25px;
        width: 50px;
        float: right;
        cursor: pointer;
    }

    #imgPerfil {
        height: 140px;
        width: 140px;
        float:left;
        margin-left: -8px;
        margin-top: 6px;
    }

    #nameTxt {
        margin-top: 118px;
        margin-left: -90px;
        font-size: 25px;
        font-weight: bold;
        color: black;
    }

    @font-face {
        font-family: bookMan;
        src: url(../assets/bookman.ttf);
    }

    .option2 {
        padding-top: 60px;
        padding-bottom: 150px;
    }

    #link {
        color: black;
        font-size: 25px;
        background-color: transparent;
        border: none;
    }

    .bookingOptions {
        background-color: transparent;
        color: black;
        padding: 10px
    }

    .options[data-v-ced23842]:focus {
        outline: 0;
    }

    .bookingOptions[data-v-ced23842]:focus {
        outline: 0,
    }
</style>