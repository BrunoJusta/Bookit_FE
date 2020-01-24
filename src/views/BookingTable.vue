<template>
    <div>

        <div class="container-full title">
            <h1 id="redTitle">RESERVAS</h1>
            <hr class="back-line">
            <div class="container" id="whiteRect">
                <p id="space">space</p>
            </div>
        </div>

        <div class="container" style="justify-content: center;">
            <b-button v-on:click="displayB()" class="teste border-0"
                style="background-color:transparent; color:black; padding:10px" v-bind:style="{fontWeight: eventsFont}">
                Eventos & Catering
            </b-button>
            <b-button v-on:click="displayA()" class="teste border-0"
                style="background-color:transparent; color:black; padding:10px" v-bind:style="{fontWeight: areasFont}">
                Espaços
            </b-button>
        </div>

        <!-- MOSTRA TABELA DAS RESERVAS -->
        <div class="container" v-if="this.bookings.length != 0" v-bind:style="{display:  bookingTable}">
            <b-input class="rounded-0" type="text" v-model="searchBookings" style="max-width: 300px; margin: auto;"
                placeholder="Pesquisar..."></b-input>
            <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
            <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small hover
                head-variant="dark" responsive="sm" :items="this.filteredBookings" :fields="fields">
                <template v-slot:cell(actions)="row">
                    <b-button size="sm" class="mr-1" @click="row.toggleDetails">
                        {{ row.detailsShowing ? 'Fechar' : ' Ver Mais' }}
                    </b-button>
                    <b-button size="sm" v-if="row.item.state == 'Pendente'"
                        @click="acceptBooking(row.item.id, row.item.userEmail)" class="mr-1">Aceitar</b-button>
                    <b-button size="sm" v-if="row.item.state == 'Pendente'"
                        @click="refuseBooking(row.item.id, row.item.userEmail)" class="mr-1">Recusar</b-button>
                    <b-button size="sm" @click="removeBooking(row.item.id)" class="mr-1">X</b-button>

                </template>
                <template v-slot:row-details="row">
                    <b-card>
                        <ul>
                            <h9 v-for="(value, key) in row.item" :key="key">
                                <p id="listItem" v-if="key === 'reason'"> Motivo: {{value}}</p>
                                <p id="listItem" v-if="key === 'date'"> Data: {{value}}</p>
                                <p id="listItem" v-if="key === 'duration'"> Duração: {{value}}</p>
                                <p id="listItem" v-if="key === 'numberPeople'"> Nº Pessoas: {{value}}</p>
                                <p id="listItem" v-if="key === 'location'"> Local: {{vavalue}}</p>
                                <p id="listItem" v-if="key === 'drinks'"> Bebidas Complementares:
                                    {{value.length == 0? 'Nada' : '' + value}}</p>
                                <p id="listItem" v-if="key === 'food'"> Comida Complementar:
                                    {{value.length == 0? 'Nada' : '' + value}}</p>
                                <p id="listItem" v-if="key === 'extras'"> Extras:
                                    {{value.length == 0? 'Nada' : '' + value}}</p>
                                <p id="listItem" v-if="key === 'decor'"> Decoração:
                                    {{value.length == 0? 'Nada' : '' + value}}</p>
                                <p id="listItem" v-if="key === 'outfit'"> Farda:
                                    {{value.length == 0? 'Nada' : '' + value}}</p>
                            </h9>
                        </ul>
                    </b-card>
                </template>
            </b-table>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"
                style="float:right;"></b-pagination>
        </div>
        <div class="container" v-else v-bind:style="{display:  bookingTable}">
            <img style="width: 150px;  margin:20px" src="../assets/bookit_BLUE.svg" alt="" srcset="">
            <h4> Não existem reservas de Eventos & Catering</h4>
        </div>

        <!-- MOSTRA TABELA DAS AREAS -->
        <div v-if="this.areas.length != 0" class="container" v-bind:style="{display: areasTable}">
            <b-input type="text" class="rounded-0" v-model="searchAreas" style="max-width: 300px; margin: auto;"
                placeholder="Pesquisar..."></b-input>
            <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
            <b-table :per-page="perPage" :current-page="currentPage2" id="my-table" striped bordered small hover
                head-variant="dark" responsive="sm" :items="this.filteredAreas" :fields="fields2">
                <template v-slot:cell(actions)="row2">
                    <b-button size="sm" class="mr-1" @click="row2.toggleDetails">
                        {{ row2.detailsShowing ? 'Fechar' : ' Ver Mais' }}
                    </b-button>
                    <b-button size="sm" v-if="row2.item.state == 'Pendente'"
                        @click="acceptAreaBooking(row2.item.id, row2.item.userEmail)" class="mr-1">Aceitar
                    </b-button>
                    <b-button size="sm" v-if="row2.item.state == 'Pendente'"
                        @click="refuseAreaBooking(row2.item.id, row2.item.userEmail)" class="mr-1">Recusar
                    </b-button>
                    <b-button size="sm" v-if="row2.item.state != 'Pendente'" @click="removeAreaBooking(row2.item.id)"
                        class="mr-1">X</b-button>
                </template>
                <template v-slot:row-details="row2">
                    <b-card>
                        <ul>
                            <h9 v-for="(value, key) in row2.item" :key="key">
                                <p id="listItem" v-if="key === 'reason'"> Motivo: {{value}}</p>
                            </h9>
                        </ul>
                    </b-card>
                </template>
            </b-table>
            <b-pagination v-model="currentPage2" :total-rows="rows2" :per-page="perPage" aria-controls="my-table"
                style="float:right;"></b-pagination>
        </div>
        <div class="container" v-else v-bind:style="{display: areasTable}">
            <img style="width: 150px;  margin:20px" src="../assets/bookit_BLUE.svg" alt="" srcset="">
            <h4> Não existem reservas de Espaços</h4>
        </div>


        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
    export default {
        name: "BookingTable",
        data: function () {
            return {
                bookings: [],
                areas: [],
                perPage: 2,
                currentPage: 1,
                currentPage2: 1,
                fields: [{
                        key: 'kitType',
                        label: "Evento",
                        sortable: true
                    }, {
                        key: 'kitName',
                        label: "Menu",
                        sortable: true
                    },
                    {
                        key: 'date',
                        label: "Data",
                        sortable: false
                    },
                    {
                        key: 'duration',
                        label: "Duração",
                        sortable: false
                    },
                    {
                        key: 'userName',
                        label: "Cliente",
                        sortable: true
                    },
                    {
                        key: 'userEmail',
                        label: "Contacto",
                        sortable: false
                    },
                    {
                        key: 'state',
                        label: "Estado",
                        sortable: false
                    },
                    {
                        key: 'actions',
                        label: "Ações",
                        sortable: false
                    },
                ],
                fields2: [{
                        key: 'areaName',
                        label: "Espaço",
                        sortable: true
                    },
                    {
                        key: 'date',
                        label: "Data",
                        sortable: false
                    },
                    {
                        key: 'duration',
                        label: "Duração",
                        sortable: false
                    },
                    {
                        key: 'userName',
                        label: "Cliente",
                        sortable: true
                    },
                    {
                        key: 'userEmail',
                        label: "Contacto",
                        sortable: false
                    },
                    {
                        key: 'state',
                        label: "Estado",
                        sortable: false
                    },
                    {
                        key: 'actions',
                        label: "Ações",
                        sortable: false
                    },
                ],
                bookingTable: "block",
                areasTable: "none",
                eventsFont: "bold",
                areasFont: "normal",
                x: "",
                users: [],
                searchAreas: "",
                searchBookings: ""
            }
        },
        created() {
            if (localStorage.getItem("bookings")) {
                this.bookings = JSON.parse(localStorage.getItem("bookings"))
            }
            if (localStorage.getItem("areaBookings")) {
                this.areas = JSON.parse(localStorage.getItem("areaBookings"))
            }
            if (localStorage.getItem("users")) {
                this.users = JSON.parse(localStorage.getItem("users"))
            }
        },
        methods: {
            displayA() {
                this.bookingTable = "none"
                this.areasTable = "block"
                this.eventsFont = "normal"
                this.areasFont = "bold"
                this.searchBookings = ""
            },
            displayB() {
                this.areasTable = "none"
                this.bookingTable = "block"
                this.eventsFont = "bold"
                this.areasFont = "normal"
                this.searchAreas = ""
            },
            removeBooking(id) {
                for (let i in this.bookings) {
                    if (this.bookings[i].id === id) {
                        this.bookings = this.bookings.filter(booking => this.bookings[i].id != booking.id);
                        localStorage.setItem("bookings", JSON.stringify(this.bookings));
                        Swal.fire({
                            icon: 'success',
                            text: 'Removido'
                        })
                    }
                }

            },
            removeAreaBooking(id) {
                for (let i in this.areas) {
                    if (this.areas[i].id === id) {
                        this.areas = this.areas.filter(area => this.areas[i].id != area.id);
                        localStorage.setItem("areaBookings", JSON.stringify(this.areas));
                        Swal.fire({
                            icon: 'success',
                            text: 'Removido'
                        })
                    }
                }
            },
            acceptBooking(id, userEmail) {
                for (let i in this.bookings) {
                    if (this.bookings[i].id === id) {
                        this.bookings[i].state = "Aprovado"
                        localStorage.setItem("bookings", JSON.stringify(this.bookings));
                        for (let j in this.users) {
                            if (this.users[j].email === userEmail) {
                                this.users[j].notifications.push({
                                    txt: 'A sua reserva do ' + this.bookings[i].kitName + " - " +
                                        this.bookings[i].kitType + ' para a data ' + this.bookings[i].date +
                                        ' foi aceite!'
                                })
                                localStorage.setItem("users", JSON.stringify(this.users));
                            }
                        }
                        Swal.fire({
                            icon: 'success',
                            text: 'Aprovado'
                        })
                    }
                }
            },
            refuseBooking(id, userEmail) {
                for (let i in this.bookings) {
                    if (this.bookings[i].id === id) {
                        this.bookings[i].state = "Recusado"
                        localStorage.setItem("bookings", JSON.stringify(this.bookings));
                        for (let j in this.users) {
                            if (this.users[j].email === userEmail) {
                                this.users[j].notifications.push({
                                    txt: 'A sua reserva do ' + this.bookings[i].kitName + " - " +
                                        this.bookings[i].kitType + ' para a data ' + this.bookings[i].date +
                                        ' foi recusada!'
                                })
                                localStorage.setItem("users", JSON.stringify(this.users));
                            }
                        }
                        Swal.fire({
                            icon: 'success',
                            text: 'Recusado'
                        })
                    }
                }
            },
            acceptAreaBooking(id, userEmail) {
                for (let i in this.areas) {
                    if (this.areas[i].id === id) {
                        this.areas[i].state = "Aprovado"
                        localStorage.setItem("areaBookings", JSON.stringify(this.areas));
                        for (let j in this.users) {
                            if (this.users[j].email === userEmail) {
                                this.users[j].notifications.push({
                                    txt: 'A sua reserva do ' + this.areas[i].areaName +
                                        ' para a data ' + this.areas[i].date + ' foi aceite!'
                                })
                                localStorage.setItem("users", JSON.stringify(this.users));
                            }
                        }
                        Swal.fire({
                            icon: 'success',
                            text: 'Aprovado'
                        })
                    }
                }
            },
            refuseAreaBooking(id, userEmail) {
                for (let i in this.areas) {
                    if (this.areas[i].id === id) {
                        this.areas[i].state = "Recusado"
                        localStorage.setItem("areaBookings", JSON.stringify(this.areas));
                        for (let j in this.users) {
                            if (this.users[j].email === userEmail) {
                                this.users[j].notifications.push({
                                    txt: 'A sua reserva do ' + this.areas[i].areaName +
                                        ' para a data ' + this.areas[i].date + ' foi recusada!'
                                })
                                localStorage.setItem("users", JSON.stringify(this.users));
                            }
                        }
                        Swal.fire({
                            icon: 'success',
                            text: 'Recusado'
                        })
                    }
                }
            }
        },
        computed: {
            filteredBookings() {
                return this.bookings.filter(
                    (booking) => {
                        let filterRunResult = true
                        if (this.searchBookings == "") {
                            return filterRunResult
                        }
                        //por menu
                        if (booking.kitName.includes(this.searchBookings)) {
                            filterRunResult = booking.kitName.includes(this.searchBookings)
                            return filterRunResult
                        }
                        //por evento
                        if (booking.kitType.includes(this.searchBookings)) {
                            filterRunResult = booking.kitType.includes(this.searchBookings)
                            return filterRunResult
                        }
                        //por cliente
                        if (booking.userName.includes(this.searchBookings)) {
                            filterRunResult = booking.userName.includes(this.searchBookings)
                            return filterRunResult
                        }
                        //por email
                        if (booking.userEmail.includes(this.searchBookings)) {
                            filterRunResult = booking.userEmail.includes(this.searchBookings)
                            return filterRunResult
                        }
                    }
                )
            },
            filteredAreas() {
                return this.areas.filter(
                    (area) => {
                        let filterRunResult = true
                        if (this.searchAreas == "") {
                            return filterRunResult
                        }
                        //por espaço
                        if (area.areaName.includes(this.searchAreas)) {
                            filterRunResult = area.areaName.includes(this.searchAreas)
                            return filterRunResult
                        }
                        //por cliente
                        if (area.userName.includes(this.searchAreas)) {
                            filterRunResult = area.userName.includes(this.searchAreas)
                            return filterRunResult
                        }
                        //por email
                        if (area.userEmail.includes(this.searchAreas)) {
                            filterRunResult = area.userEmail.includes(this.searchAreas)
                            return filterRunResult
                        }
                    }
                )
            },
              rows() {
                return this.bookings.length
            },
            rows2() {
                return this.areas.length
            }
        }
    }
</script>

<style lang="scss" scoped>
    #redTitle {
        font-family: "bookMan";
        font-size: 45px;
        color: #B91C3B;
        display: block;
        z-index: 7;
        position: relative;
    }

    .back-line {
        background-color: #0A2463;
        margin-top: -35px;
        width: 90%;
        display: block;
        z-index: 5;
        position: relative;
    }

    #space {
        color: white;
    }

    .title {
        padding-top: 180px;
        padding-bottom: 80px;
    }

    #whiteRect {
        background-color: white;
        margin-top: -35px;
        height: 35px;
        width: 340px;
        position: relative;
        display: block;
        z-index: 5;
    }

    .mb-2 {
        --webkit-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
        -moz-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
        box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
    }

    .btn-book {
        font-size: 18px;
        background-color: #0A2463;
        margin-bottom: -60px;
    }

    .table {
        padding-bottom: 100px;
    }

    #listItem {
        float: left;
        padding: 20px;
    }
</style>