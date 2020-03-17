<template>
    <div>
        <div class="container" id="perfilContainer" v-bind:style="{display: showProfile}">
            <div class="row" style="height: 180px">
                <div class="col-sm-2">
                    <b-img :src="this.$store.getters.getUserImg" id="imgPerfil"></b-img>
                </div>
                <div class="col-sm-2" id="nameColumn">
                    <p id="nameTxt">{{getFullName}}</p>
                    <div align="left" style="margin-left:-39px;">
                        <p id="schoolTxt"><i class="fas fa-graduation-cap" id="icon"></i>{{getSchool}}</p>
                        <p id="contactTxt"><i class="fas fa-phone" id="icon"></i>{{getContact}}</p>
                        <p id="emailTxt"><i class="fas fa-envelope" id="icon"></i>{{getEmail}}</p>
                        <p id="birthDateTxt"><i class="fas fa-calendar-alt" id="icon"></i>{{this.birthDate}}</p>
                    </div>
                </div>
                <div class="col-sm-8">
                    <button v-on:click="displaySettings()" class="options border-0" style="margin-top: 0px;">
                        <i class="fas fa-user-cog" id="icon"></i>Opções
                    </button>
                    <div>
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
        </div>
        <br>

        <!-- MOSTRA AS RESERVAS -->
        <div class="container">
            <div v-bind:style="{display: showBookings}">
                <div class="container" style="justify-content: center;">
                    <button v-on:click="displayEvents()" v-bind:style="{fontWeight: eventsFont}" style="fontSize: 20px;"
                        class="bookingOptions border-0">Eventos & Catering
                    </button>
                    <span class="bookingOptions" style="padding: 10px">|</span>
                    <button v-on:click="displayAreas()" v-bind:style="{fontWeight: AreasFont}" style="fontSize: 20px;"
                        class="bookingOptions border-0">
                        Espaços</button>
                    <span class="bookingOptions" style="padding: 10px; padding-bottom: 30px;">|</span>
                    <button v-on:click="displayWorkshops()" v-bind:style="{fontWeight: WorkshopsFont}"
                        style="fontSize: 20px;" class="bookingOptions border-0">Workshops
                    </button>
                </div>

                <!-- CARDS DOS EVENTOS -->
                <div class="container" v-bind:style="{display: showEvents}">
                    <div class="row" v-if="this.filteredBookings.length !== 0">
                        <div class="col-sm-3" v-for="k in filteredBookings" :key="k.id" style="padding-top: 20px;">
                            <b-card no-body class="overflow-hidden" style="max-width: 16rem; height: 20rem;"
                                :img-src="k.kitImg" img-height="120rem">
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
                                    <div v-if="k.state == 'Concluído' && !k.opinion">
                                        <b-button class="btn-book" @click="giveBookingOpinion(k.id)" squared>
                                            Dar Opinião
                                        </b-button>
                                    </div>
                                    <b-card-text v-if="k.state == 'Concluído' && k.opinion" style="margin: auto;">
                                        <b>Opinião:</b> Enviada
                                    </b-card-text>
                                </b-card-body>
                            </b-card>
                        </div>
                    </div>
                    <div v-else>
                        <img style="width: 150px;  margin:20px" src="../assets/bookit_BLUE.svg" alt="" srcset="">
                        <h4> Não existem reservas de Eventos & Catering.</h4>
                    </div>
                </div>

                <!-- CARDS DOS ESPAÇOS -->
                <div class="container" v-bind:style="{display: showAreas}">
                    <div class="row" v-if="this.filteredAreas.length !== 0">
                        <div class="col-sm-3" v-for="k in filteredAreas" :key="k.id" style="padding-top: 20px;">
                            <b-card no-body class="overflow-hidden" style="max-width: 16rem;" :img-src="k.areaImg"
                                img-height="120rem">
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
                                    <div v-if="k.state == 'Concluído' && !k.opinion">
                                        <b-button class="btn-book" @click="giveAreasOpinion(k.id)" squared>
                                            Dar Opinião
                                        </b-button>
                                    </div>
                                    <b-card-text v-if="k.state == 'Concluído' && k.opinion" style="margin: auto;">
                                        <b>Opinião:</b> Enviada
                                    </b-card-text>
                                </b-card-body>
                            </b-card>
                        </div>
                    </div>
                    <div v-else>
                        <img style="width: 150px;  margin:20px" src="../assets/bookit_BLUE.svg" alt="" srcset="">
                        <h4> Não existem reservas de Espaços.</h4>
                    </div>
                </div>

                <!-- CARDS DOS WORKSHOPS -->
                <div class="container" v-bind:style="{display: showWorkshops}">
                    <div class="row" v-if="this.userWorkshops.length !== 0">
                        <div class="col-sm-3" v-for="k in this.userWorkshops" :key="k.id" style="padding-top: 20px;">
                            <b-card no-body class="overflow-hidden" style="max-width: 16rem;" :img-src="k.img"
                                img-height="120rem">
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
                        <img style="width: 150px;  margin:20px" src="../assets/bookit_BLUE.svg" alt="" srcset="">
                        <h4> Não existem inscrições em Workshops.</h4>
                    </div>
                </div>
            </div>

            <!-- MOSTRA AS NOTIFICACOES -->
            <div v-bind:style="{display: showNotifications}">
                <show-notifications />
            </div>

            <!-- DEFINIÇOES -->
            <div class="container" v-bind:style="{display: showSettings}">
                <show-settings />
            </div>

            <div class="container" v-bind:style="{display: showSettings}">
                <button v-on:click="hideSettings()" class="border-0 options btn-p2" style="fontSize: 16px;"
                    id="goBackBtn">Voltar ao Perfil
                </button>
            </div>
        </div>

    </div>
</template>

<script>
    import ShowSettings from '@/components/ShowSettings.vue';
    import ShowNotificationsVue from '@/components/ShowNotifications.vue';

    export default {
        components: {
            "show-settings": ShowSettings,
            "show-notifications": ShowNotificationsVue
        },
        data: function () {
            return {
                users: [],
                bookings: [],
                areas: [],
                workshops: [],
                userWorkshops: [],
                firstNameUser: "",
                lastNameUser: "",
                birthDate: "",
                userEmail: "",
                userContact: "",
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
                WorkshopsFont: "normal",
                showProfile: "block",
                userScool: ""
            }
        },
        created() {
            if (localStorage.getItem("loggedUser")) {
                this.$store.state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
            }
            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"))
                this.users = this.$store.state.users
            }
            if (localStorage.getItem("bookings")) {
                this.$store.state.bookings = JSON.parse(localStorage.getItem("bookings"))
                this.bookings = this.$store.state.bookings
            }
            if (localStorage.getItem("areaBookings")) {
                this.$store.state.areaBookings = JSON.parse(localStorage.getItem("areaBookings"))
                this.areas = this.$store.state.areaBookings
            }
            if (localStorage.getItem("workshops")) {
                this.$store.state.workshops = JSON.parse(localStorage.getItem("workshops"))
                this.workshops = this.$store.state.workshops
            }
            this.bookings[14].state = "Concluído"
            localStorage.setItem("bookings", JSON.stringify(this.bookings));

            this.firstNameUser = this.$store.getters.getName
            this.lastNameUser = this.$store.getters.getLastName
            this.userEmail = this.$store.getters.getEmail
            this.userContact = this.$store.getters.getContact
            this.userSchool = this.$store.getters.getSchool
            this.birthDate = this.$store.getters.getBirthDate
        },
        updated() {
            this.userContact = this.$store.getters.getContact
            this.$store.state.bookings = JSON.parse(localStorage.getItem("bookings"))
            this.$store.state.areaBookings = JSON.parse(localStorage.getItem("areaBookings"))
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
            },
            displayNotifications() {
                this.showBookings = "none"
                this.showNotifications = "block"
                this.showSettings = "none"
                this.bookingsColor = "black"
                this.notifiColor = "#B91C3B"
                this.bookingsFont = "normal"
                this.notificFont = "bold"
            },
            displaySettings() {
                this.showProfile = "none"
                this.showBookings = "none"
                this.showNotifications = "none"
                this.showSettings = "block"
                this.bookingsColor = "black"
                this.notifiColor = "black"
                this.bookingsFont = "normal"
                this.notificFont = "normal"
            },
            hideSettings() {
                this.showProfile = "block"
                this.showSettings = "none"
                this.showBookings = "block"
                this.showNotifications = "none"
                this.showSettings = "none"
                this.bookingsColor = "#B91C3B"
                this.notifiColor = "black"
                this.bookingsFont = "bold"
                this.notificFont = "normal"
                this.filteredBookings()
            },
            giveBookingOpinion(id) {
                Swal.fire({
                    title: 'Opinião',
                    input: 'textarea',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    cancelButtonText: 'Cancelar',
                    confirmButtonText: 'Submeter',
                }).then((result) => {
                    if (result.value && result.value != "") {
                        for (let i in this.bookings) {
                            if (this.bookings[i].id === id) {
                                this.bookings[i].opinion = result.value
                                localStorage.setItem("bookings", JSON.stringify(this.bookings));
                                for (let j in this.users) {
                                    if (this.users[j].name == "Admin") {
                                        this.users[j].notifications.push({
                                            txt: 'Foi dada uma nova opinião do evento ' + this
                                                .bookings[i].kitName +
                                                " - " +
                                                this.bookings[i].kitType +
                                                ' realizado em ' + this
                                                .bookings[i].date,
                                            opinion: result.value
                                        })
                                        localStorage.setItem("users", JSON.stringify(this
                                            .users));
                                            location.reload();
                                    }
                                }
                                Swal.fire({
                                    icon: 'success',
                                    text: 'Opinião enviada!'
                                })
                            }
                        }
                    }
                })
            },
            giveAreasOpinion(id) {
                Swal.fire({
                    title: 'Opinião',
                    input: 'textarea',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    cancelButtonText: 'Cancelar',
                    confirmButtonText: 'Submeter',
                }).then((result) => {
                    if (result.value && result.value != "") {
                        for (let i in this.areas) {
                            if (this.areas[i].id === id) {
                                this.areas[i].opinion = result.value
                                localStorage.setItem("areaBookings", JSON.stringify(this.areas));
                                for (let j in this.users) {
                                    if (this.users[j].userType === "admin") {
                                        this.users[j].notifications.push({
                                            txt: 'Foi dada uma nova opinião do espaço ' + this
                                                .areas[i].areaName +
                                                ' realizado em ' + this
                                                .areas[i].date,
                                            opinion: result.value
                                        })
                                        localStorage.setItem("users", JSON.stringify(this
                                            .users));
                                    }
                                }
                                Swal.fire({
                                    icon: 'success',
                                    text: 'Opinião enviada!'
                                })
                            }
                        }
                    }
                })
            }
        },
        computed: {
            getFullName() {
                return this.firstNameUser + " " + this.lastNameUser
            },
            getEmail() {
                return this.userEmail
            },
            getContact() {
                return this.userContact
            },
            getSchool() {
                return this.userSchool
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

    .btn-book {
        font-size: 16px;
        background-color: #0A2463;
        margin-top: 10px;
        margin-left: 20%;
    }

    .card-title {
        font-size: 16px;
        font-weight: bold;
    }

    .card-img {
        border-radius: 0 !important;
    }

    #imgPerfil {
        height: 150px;
        width: 150px;
        float: left;
        margin-left: -14px;
        margin-top: -5px;
    }

    #nameTxt {
        margin-top: -13px;
        margin-left: -90px;
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
        margin-bottom: 5px;
    }

    @font-face {
        font-family: bookMan;
        src: url(../assets/bookman.ttf);
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
        padding: 10px;

    }

    .options[data-v-ced23842]:focus {
        outline: 0;
    }

    .bookingOptions[data-v-ced23842]:focus {
        outline: 0,
    }

    .card-body {
        font-size: 14px;
    }

    #goBackBtn {
        margin-top: 20px;
    }

    .btn-p2 {
        font-size: 18px;
        background-color: white;
        color: black;
        margin-right: 468px;
        transition: all .2s ease-in-out;
    }

    .btn-p2:hover {
        transform: scale(1.1);
    }

    #icon {
        padding-right: 6px;
    }
</style>