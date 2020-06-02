<template>
    <div style="padding-bottom: 100px;">
        <div class="container-full title">
            <h1 id="redTitle">RESERVAS</h1>
            <hr class="back-line">
            <div class="container" id="whiteRect">
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
                head-variant="dark" responsive="sm" :items="this.filteredBookings.slice().reverse()" :fields="fields">
                <template v-slot:cell(actions)="row">
                    <b-button size="sm" class="mr-1 showBtn" @click="row.toggleDetails">
                        {{ row.detailsShowing ? 'Fechar' : ' Ver Mais' }}
                    </b-button>
                    <b-button size="sm" v-if="row.item.state == 'Pendente'"
                        @click="acceptBooking(row.item.id, row.item.userEmail)" class="mr-1 acceptBtn">Aceitar
                    </b-button>
                    <b-button size="sm" v-if="row.item.state == 'Pendente'"
                        @click="refuseBooking(row.item.id, row.item.userEmail)" class="mr-1 refuseBtn">Recusar
                    </b-button>
                    <b-button size="sm" @click="deleteMenuBooking(row.item.id)" v-if="row.item.state !== 'Pendente'"
                        class="mr-1 deleteBtn"><i class="fas fa-trash-alt"></i></b-button>
                </template>
                <template v-slot:row-details="row">
                    <b-card>
                        <ul>
                            <h9 v-for="(value, key) in row.item" :key="key">
                                <p id="listItem" v-if="key === 'reason'"> <b>Motivo:</b> {{value}}</p>
                                <p id="listItem" v-if="key === 'date'"> <b>Data:</b> {{value}}</p>
                                <p id="listItem" v-if="key === 'duration'"> <b>Duração:</b> {{value}}</p>
                                <p id="listItem" v-if="key === 'numberPeople'"> <b>Nº Pessoas:</b> {{value}}</p>
                                <p id="listItem" v-if="key === 'school'"> <b>Local:</b> {{value}}</p>
                                <p id="listItem" v-if="key === 'drinks'"> <b>Bebidas Complementares:</b>
                                    {{value.length == 0? 'Nada' : '' + value}}</p>
                                <p id="listItem" v-if="key === 'food'"> <b>Comida Complementar:</b>
                                    {{value.length == 0? 'Nada' : '' + value}}</p>
                                <p id="listItem" v-if="key === 'extras'"> <b>Extras:</b>
                                    {{value.length == 0? 'Nada' : '' + value}}</p>
                                <p id="listItem" v-if="key === 'decor'"> <b>Decoração:</b>
                                    {{value.length == 0? 'Nada' : '' + value}}</p>
                                <p id="listItem" v-if="key === 'outfit'"> <b>Farda:</b>
                                    {{value.length == 0? 'Nada' : '' + value}}</p>
                                <p id="listItem" v-if="key === 'observations'"> <b>Observações:</b>
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
                head-variant="dark" responsive="sm" :items="this.filteredAreas.slice().reverse()" :fields="fields2">
                <template v-slot:cell(actions)="row2">
                    <b-button size="sm" class="mr-1 showBtn" @click="row2.toggleDetails">
                        {{ row2.detailsShowing ? 'Fechar' : ' Ver Mais' }}
                    </b-button>
                    <b-button size="sm" v-if="row2.item.state == 'Pendente'"
                        @click="acceptAreaBooking(row2.item.id, row2.item.userEmail)" class="mr-1 acceptBtn">Aceitar
                    </b-button>
                    <b-button size="sm" v-if="row2.item.state == 'Pendente'"
                        @click="refuseAreaBooking(row2.item.id, row2.item.userEmail)" class="mr-1 refuseBtn">Recusar
                    </b-button>
                    <b-button size="sm" v-if="row2.item.state !== 'Pendente'" @click="deleteAreaBooking(row2.item.area_booking_id)"
                        class="mr-1 deleteBtn"><i class="fas fa-trash-alt"></i></b-button>
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
    </div>
</template>

<script>
    import {
        mapGetters
    } from "vuex";
    export default {
        name: "BookingTable",
        data: function () {
            return {
                bookings: [],
                areas: [],
                perPage: 10,
                currentPage: 1,
                currentPage2: 1,
                fields: [{
                        key: 'menuType',
                        label: "Evento",
                        sortable: true
                    }, {
                        key: 'menuName',
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
                        key: 'email',
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
                        key: 'name',
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
                        key: 'email',
                        label: "Contacto",
                        sortable: false
                    },
                    {
                        key: 'description',
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
            this.getMenuBookings()
            this.getAreaBookings()
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
            async getMenuBookings() {
                try {
                    await this.$store.dispatch("fetchMenuBookings");
                    this.bookings = this.getAllMenuBookings.data;
                } catch (err) {
                    console.log(err)
                    alert(err);
                }
            },
            async getAreaBookings() {
                try {
                    await this.$store.dispatch("fetchAreaBookings");
                    this.areas = this.getAllAreaBookings.data;
                } catch (err) {
                    console.log(err)
                    alert(err);
                }
            },
            async deleteMenuBooking(ID) {
                try {
                    await this.$store.dispatch("deleteMenuBooking", {
                        id: ID
                    });
                } catch (err) {
                    alert(err);
                }
                this.getMenuBookings()
            },
            async deleteAreaBooking(ID) {
                try {
                    await this.$store.dispatch("deleteAreaBooking", {
                        id: ID
                    });
                } catch (err) {
                    alert(err);
                }
                this.getAreaBookings()
            },
            /*acceptBooking(id, userEmail) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Aceitar esta reserva?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        for (let i in this.bookings) {
                            if (this.bookings[i].id === id) {
                                this.bookings[i].state = "Aprovado"
                                localStorage.setItem("bookings", JSON.stringify(this.bookings));
                                for (let j in this.users) {
                                    if (this.users[j].email === userEmail) {
                                        this.users[j].notifications.push({
                                            txt: 'A sua reserva do menu ' + this.bookings[i].kitName +
                                                " - " +
                                                this.bookings[i].kitType + ' para a data ' + this
                                                .bookings[i].date +
                                                ' foi aceite!'
                                        })
                                        localStorage.setItem("users", JSON.stringify(this.users));
                                    }
                                }
                                Swal.fire({
                                    icon: 'success',
                                    text: 'Reserva aceite!'
                                })
                            }
                        }
                    }
                })
            },
            refuseBooking(id, userEmail) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Recusar esta reserva?',
                    showCancelButton: true,
                    cancelButtonText: 'Cancelar',
                    confirmButtonText: 'Recusar',
                }).then((result) => {
                    if (result.value) {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Motivo da recusa',
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
                                        this.bookings[i].state = "Recusado"
                                        localStorage.setItem("bookings", JSON.stringify(this.bookings));
                                        for (let j in this.users) {
                                            if (this.users[j].email === userEmail) {
                                                this.users[j].notifications.push({
                                                    txt: 'A sua reserva do menu ' + this
                                                        .bookings[i].kitName +
                                                        " - " +
                                                        this.bookings[i].kitType +
                                                        ' para a data ' + this
                                                        .bookings[i].date +
                                                        ' foi recusada!',
                                                    reason: result.value
                                                })
                                                localStorage.setItem("users", JSON.stringify(this
                                                    .users));
                                            }
                                        }
                                        Swal.fire({
                                            icon: 'success',
                                            text: 'Reserva recusada!'
                                        })
                                    }
                                }
                            }
                        })
                    }
                })
            },
            acceptAreaBooking(id, userEmail) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Aceitar esta reserva?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        for (let i in this.areas) {
                            if (this.areas[i].id === id) {
                                this.areas[i].state = "Aprovado"
                                localStorage.setItem("areaBookings", JSON.stringify(this.areas));
                                for (let j in this.users) {
                                    if (this.users[j].email === userEmail) {
                                        this.users[j].notifications.push({
                                            txt: 'A sua reserva do espaço ' + this.areas[i]
                                                .areaName +
                                                ' para a data ' + this.areas[i].date +
                                                ' foi aceite!'
                                        })
                                        localStorage.setItem("users", JSON.stringify(this.users));
                                    }
                                }
                                Swal.fire({
                                    icon: 'success',
                                    text: 'Reserva aceite!'
                                })
                            }
                        }
                    }
                })
            },
            refuseAreaBooking(id, userEmail) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Recusar esta reserva?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        for (let i in this.areas) {
                            if (this.areas[i].id === id) {
                                this.areas[i].state = "Recusado"
                                localStorage.setItem("areaBookings", JSON.stringify(this.areas));
                                for (let j in this.users) {
                                    if (this.users[j].email === userEmail) {
                                        this.users[j].notifications.push({
                                            txt: 'A sua reserva do espaço ' + this.areas[i]
                                                .areaName +
                                                ' para a data ' + this.areas[i].date +
                                                ' foi recusada!'
                                        })
                                        localStorage.setItem("users", JSON.stringify(this.users));
                                    }
                                }
                                Swal.fire({
                                    icon: 'success',
                                    text: 'Reserva recusada!'
                                })
                            }
                        }
                    }
                })
            } */
        },
        computed: {
            ...mapGetters(["getAllMenuBookings"]),
            ...mapGetters(["getAllAreaBookings"]),
            filteredBookings() {
                return this.bookings.filter(
                    (booking) => {
                        let filterRunResult = true
                        if (this.searchBookings == "") {
                            return filterRunResult
                        }
                        //por evento
                        if (booking.menuType.toLowerCase().includes(this.searchBookings.toLowerCase())) {
                            filterRunResult = booking.menuType.toLowerCase().includes(this.searchBookings
                                .toLowerCase())
                            return filterRunResult
                        }
                        //por menu
                        if (booking.menuName.toLowerCase().includes(this.searchBookings.toLowerCase())) {
                            filterRunResult = booking.menuName.toLowerCase().includes(this.searchBookings
                                .toLowerCase())
                            return filterRunResult
                        }
                        //por cliente
                        if (booking.userName.toLowerCase().includes(this.searchBookings.toLowerCase())) {
                            filterRunResult = booking.userName.toLowerCase().includes(this.searchBookings
                                .toLowerCase())
                            return filterRunResult
                        }
                        //por email
                        if (booking.email.toLowerCase().includes(this.searchBookings.toLowerCase())) {
                            filterRunResult = booking.email.toLowerCase().includes(this.searchBookings
                                .toLowerCase())
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
                        if (area.name.toLowerCase().includes(this.searchAreas.toLowerCase())) {
                            filterRunResult = area.name.toLowerCase().includes(this.searchAreas
                                .toLowerCase())
                            return filterRunResult
                        }
                        //por cliente
                        if (area.userName.toLowerCase().includes(this.searchAreas.toLowerCase())) {
                            filterRunResult = area.userName.toLowerCase().includes(this.searchAreas
                                .toLowerCase())
                            return filterRunResult
                        }
                        //por email
                        if (area.email.toLowerCase().includes(this.searchAreas.toLowerCase())) {
                            filterRunResult = area.email.toLowerCase().includes(this.searchAreas
                                .toLowerCase())
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

    .showBtn {
        background-color: #343A40;
        border: none;
        border-radius: 0;
    }

    .acceptBtn {
        background-color: #0A2463;
        border: none;
        border-radius: 0;
    }

    .refuseBtn {
        background-color: #B91C3B;
        border: none;
        border-radius: 0;
    }

    .deleteBtn {
        background-color: #B91C3B;
        border: none;
        border-radius: 0;
    }
</style>