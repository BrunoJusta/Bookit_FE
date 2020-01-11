<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h1>PERFIL</h1>

        <div class="container" id="perfilContainer">
            <div class="row" style="height: 150px">
                <div class="col-sm-2">
                    <b-img src="../assets/logo.png" id="imgPerfil"></b-img>
                </div>
                <div class="col-sm-2" id="nameColumn">
                    <p id="nameTxt">{{getFullName}}</p>
                </div>
                <div class="col-sm-8" id="optionsColumn">
                    <b-img src="../assets/settingsIcon.png" id="settingsImg"></b-img>
                    <b-button v-on:click="displayNotifications()" class="options border-0"
                        v-bind:style="{fontWeight: notificFont, color: notifiColor}">
                        Notificações</b-button>
                    <h9 class="options" style="padding: 10px">|</h9>

                    <b-button v-on:click="displayBookings()" class="options border-0"
                        v-bind:style="{fontWeight: bookingsFont,color: bookingsColor}">Reservas
                    </b-button>
                </div>
            </div>
        </div>
        <br>


        <!-- MOSTRA AS RESERVAS -->
        <div v-bind:style="{display: showBookings}">
            <div class="container" style="justify-content: center;">
                <b-button v-on:click="displayEvents()" v-bind:style="{fontWeight: eventsFont}" style="fontSize: 20px;"
                    class="bookingOptions border-0">Eventos & Catering
                </b-button>
                <b-button v-on:click="displayAreas()" v-bind:style="{fontWeight: AreasFont}" style="fontSize: 20px;"
                    class="bookingOptions border-0">
                    Espaços</b-button>
                <b-button v-on:click="displayWorkshops()" v-bind:style="{fontWeight: WorkshopsFont}"
                    style="fontSize: 20px;" class="bookingOptions border-0">Workshops
                </b-button>
            </div>

            <!-- CARDS DOS EVENTOS -->
            <div class="container" v-bind:style="{display: showEvents}">
                <div class="row">
                    <div class="col-sm-4" v-for="k in filteredBookings" :key="k.id" style="padding-top: 20px;">
                        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                            <b-row>
                                <b-col md="5">
                                    <b-card-img src="https://picsum.photos/400/400/?image=20" img-height="180rem"
                                        class="rounded-0"></b-card-img>
                                </b-col>
                                <b-col md="7">
                                    <b-card-body>
                                        <h3 style="margin-left: auto; margin-top:-14px;">
                                            <b>{{k.kitName}}</b>
                                        </h3>
                                        <h5 style="margin-left: auto; margin-top: -10px;">
                                            <b>{{k.kitType}}</b>
                                        </h5>
                                        <b-card-text style="margin: auto;">
                                            Data: {{k.date}}
                                        </b-card-text>
                                        <b-card-text style="margin: auto;">
                                            Hora: {{k.duration}}
                                        </b-card-text>
                                    </b-card-body>
                                </b-col>
                            </b-row>
                        </b-card>
                    </div>
                </div>
            </div>

            <!-- CARDS DOS ESPAÇOS -->
            <div class="container" v-bind:style="{display: showAreas}">
                <div class="row">
                    <div class="col-sm-4" v-for="k in filteredAreas" :key="k.id" style="padding-top: 20px;">
                        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                            <b-row>
                                <b-col md="5">
                                    <b-card-img src="https://picsum.photos/400/400/?image=20" img-height="180rem"
                                        class="rounded-0"></b-card-img>
                                </b-col>
                                <b-col md="7">
                                    <b-card-body>
                                        <h5 style="margin-left: auto;   ">
                                            <b>{{k.areaName}}</b>
                                        </h5>
                                        <b-card-text style="margin: auto; margin-top: 20px;">
                                            Data: {{k.date}}
                                        </b-card-text>
                                        <b-card-text style="margin: auto;">
                                            Hora: {{k.duration}}
                                        </b-card-text>
                                    </b-card-body>
                                </b-col>
                            </b-row>
                        </b-card>
                    </div>
                </div>
            </div>

            <!-- CARDS DOS WORKSHOPS -->
            <div class="container" v-bind:style="{display: showWorkshops}">
                <div class="row">
                    <div class="col-sm-4" v-for="k in filteredWorkshops" :key="k.id" style="padding-top: 20px;">
                        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                            <b-row>
                                <b-col md="5">
                                    <b-card-img src="https://picsum.photos/400/400/?image=20" img-height="180rem"
                                        class="rounded-0"></b-card-img>
                                </b-col>
                                <b-col md="7">
                                    <b-card-body>
                                        <h5 style="margin-left: auto;   ">
                                            <b>{{k.workshopName}}</b>
                                        </h5>
                                        <b-card-text style="margin: auto; margin-top: 20px;">
                                            Data: {{k.date}}
                                        </b-card-text>
                                        <b-card-text style="margin: auto;">
                                            Hora: {{k.time}}
                                        </b-card-text>
                                    </b-card-body>
                                </b-col>
                            </b-row>
                        </b-card>
                    </div>
                </div>
            </div>
        </div>

        <!-- MOSTRA AS NOTIFICACOES -->
        <div v-bind:style="{display: showNotifications}">
            <h1>TESTE PARA AS NOTIFICACOES</h1>
        </div>
        <br>
        <br>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                bookings: [],
                areas: [],
                workshops: [],
                firstNameUser: "",
                lastNameUser: "",
                userEmail: "",
                showBookings: "block", //mostrar reservas
                showNotifications: "none", //mostrar notificaçoes
                showEvents: "block", //mostrar eventos dentro das reservas
                showAreas: "none", //mostrar areas dentro das reservas
                showWorkshops: "none", //mostrar workshops dentro das reservas
                bookingsColor: "#B91C3B", //muda a cor da fonte escolhida                   
                notifiColor: "black", //muda a cor da fonte escolhida
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
            if (localStorage.getItem("inscriptions")) {
                this.workshops = JSON.parse(localStorage.getItem("inscriptions"))
            }
            this.firstNameUser = this.$store.getters.getName
            this.lastNameUser = this.$store.getters.getLastName
            this.userEmail = this.$store.getters.getEmail
        },
        methods: {
            logout() {
                this.$store.commit('LOGOUT')
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
            },
            displayBookings() {
                this.showBookings = "block"
                this.showNotifications = "none"
                this.bookingsColor = "#B91C3B"
                this.notifiColor = "black"
                this.bookingsFont = "bold"
                this.notificFont = "normal"
            },
            displayNotifications() {
                this.showBookings = "none"
                this.showNotifications = "block"
                this.bookingsColor = "black"
                this.notifiColor = "#B91C3B"
                this.bookingsFont = "normal"
                this.notificFont = "bold"
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
            },
            filteredWorkshops() {
                return this.workshops.filter(
                    workshop => workshop.userEmail === this.userEmail
                )
            }
        }
    }
</script>

<style lang="scss" scoped>
    #perfilContainer {
        box-shadow: 0px 0px 2px;
    }

    .options {
        float: right;
        padding: 5px;
        margin-top: 110px;
        background-color: transparent;
        color: black;
        padding: 10px;
    }

    #settingsImg {
        margin-top: 15px;
        width: 50px;
        float: right;
    }

    #imgPerfil {
        height: 140px;
    }

    #nameTxt {
        margin-top: 115px;
        font-size: 20px;
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

    .card-body {
        padding: 0rem;
        padding-top: 1rem;
    }

    .mb-2 {
        max-width: 24rem;
    }

    .bookingOptions {
        background-color: transparent;
        color: black;
        padding: 10px
    }
</style>