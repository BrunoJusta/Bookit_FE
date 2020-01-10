<template>
    <div>

        <div class="container-full title">
            <h1 id="redTitle">RESERVAS</h1>
            <hr class="back-line">
            <div class="container" id="whiteRect">
                <p id="space">space</p>
            </div>
        </div>

        <div class="container">
            <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
            <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small hover
                head-variant="dark" responsive="sm" :items="this.users" :fields="fields">
                <template v-slot:cell(actions)="row">
                    <b-button size="sm" v-if="row.item.userType == 'cliente'" @click="changeToAdmin(row.item.id)"
                        class="mr-1">Tornar Admin</b-button>
                    <b-button size="sm" v-if="row.item.userType == 'admin'" @click="changeToClient(row.item.id)"
                        class="mr-1">Tornar User</b-button>
                    <b-button size="sm" @click="remove(row.item.id)" class="mr-1">X</b-button>

                </template>
            </b-table>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"
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
                perPage: 10,
                currentPage: 1,
                fields: [{
                        key: 'name',
                        label: "Nome",
                        sortable: true
                    }, {
                        key: 'lastName',
                        label: "Apelido",
                        sortable: true
                    }, {
                        key: 'email',
                        label: "E-mail",
                        sortable: true
                    },
                    {
                        key: 'number',
                        label: "Contacto",
                        sortable: false
                    },
                    {
                        key: 'userType',
                        label: "Tipo",
                        sortable: false
                    },
                    {
                        key: 'actions',
                        label: "Ações",
                        sortable: false
                    },


                ],
                users: [],
                areas: [],
                bookingTable: "block",
                areasTable: "none",

                x: ""
            }
        },
        created() {

            if (localStorage.getItem("users")) {
                this.users = JSON.parse(localStorage.getItem("users"))
            }
        },
        computed: {
            rows() {
                return this.users.length
            },
        },
        methods: {
            remove(id) {

                for (let i in this.users) {

                    if (this.users[i].id === id) {
                        this.users = this.users.filter(user => this.users[i].id != user.id);
                        localStorage.setItem("users", JSON.stringify(this.users));

                        alert("Removido")
                    }
                }

            },
            changeToAdmin(id) {
                for (let i in this.users) {

                    if (this.users[i].id === id) {
                        this.users[i].userType = "admin"
                        localStorage.setItem("users", JSON.stringify(this.users));
                        alert("aprovado")
                    }
                }
            },
            changeToClient(id) {
                for (let i in this.users) {

                    if (this.users[i].id === id) {
                        this.users[i].userType = "cliente"
                        localStorage.setItem("users", JSON.stringify(this.users));
                        alert("aprovado")
                    }
                }
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