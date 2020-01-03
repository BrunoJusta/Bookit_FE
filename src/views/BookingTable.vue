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
                style="background-color:transparent; color:black; padding:10px">Eventos & Catering
            </b-button>
            <b-button v-on:click="displayA()" class="teste border-0"
                style="background-color:transparent; color:black; padding:10px">Espaços
            </b-button>
        </div>


        <div class="container" v-bind:style="{display:  bookingTable}">
            <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
            <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered fixed small hover
                head-variant="dark" responsive="sm" :items="this.bookings" :fields="fields">
            </b-table>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"
                style="float:right;"></b-pagination>
        </div>

        <div class="container" v-bind:style="{display: areasTable}">
            <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
            <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered fixed small hover
                head-variant="dark" responsive="sm" :items="this.areas" :fields="fields2">
            </b-table>
            <b-pagination v-model="currentPage" :total-rows="rows2" :per-page="perPage" aria-controls="my-table"
                style="float:right;"></b-pagination>
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
                perPage: 3,
                currentPage: 1,
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


                ],
                bookings: [],
                areas: [],
                bookingTable: "block",
                areasTable: "none",

                x: ""
            }
        },
        created() {
            if (localStorage.getItem("bookings")) {
                this.bookings = JSON.parse(localStorage.getItem("bookings"))
            }
            if (localStorage.getItem("areaBookings")) {
                this.areas = JSON.parse(localStorage.getItem("areaBookings"))
            }
        },
        computed: {
            rows() {
                return this.bookings.length
            },
            rows2() {
                return this.areas.length
            }
        },
        methods: {
            displayA() {
                this.bookingTable = "none"
                this.areasTable = "block"
            },
            displayB() {
                this.areasTable = "none"
                this.bookingTable = "block"
            },
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
</style>