<template>
    <div style="padding-bottom: 100px;">
        <div class="container-full title">
            <h1 id="redTitle">UTILIZADORES</h1>
            <hr class="back-line">
            <div class="container" id="whiteRect">
            </div>
        </div>

        <div class="container">
            <b-input class="rounded-0" type="text" v-model="searchUsers" style="max-width: 300px; margin: auto;"
                placeholder="Pesquisar..."></b-input>
            <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
            <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small hover
                head-variant="dark" responsive="sm" :items="this.filteredUsers" :fields="fields">
                <template v-slot:cell(actions)="row">
                    <b-button size="sm"
                        v-if="row.item.userType == 'cliente' && row.item.email != $store.getters.getEmail"
                        @click="changeToAdmin(row.item.id)" class="mr-1 border-0 rounded-0">Tornar Admin</b-button>
                    <b-button size="sm" v-if="row.item.userType == 'admin' && row.item.email != $store.getters.getEmail"
                        @click="changeToClient(row.item.id) " class="mr-1 border-0 rounded-0">Tornar User</b-button>
                    <b-button size="sm"
                        v-if="row.item.email != $store.getters.getEmail && row.item.userType !== 'bloqueado'"
                        @click="block(row.item.id)" class="mr-1 border-0 rounded-0">Bloquear</b-button>
                    <b-button size="sm"
                        v-if="row.item.email != $store.getters.getEmail && row.item.userType === 'bloqueado'"
                        @click="block(row.item.id)" class="mr-1 border-0 rounded-0">Desbloquear</b-button>
                    <b-button size="sm" @click="remove(row.item.id)" v-if="row.item.email != $store.getters.getEmail"
                        class="mr-1 border-0 rounded-0">X</b-button>
                    <span v-else>Sem Ações</span>

                </template>
            </b-table>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"
                style="float:right;"></b-pagination>
        </div>
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
                x: "",
                searchUsers: ""
            }
        },
        created() {
            if (localStorage.getItem("users")) {
                this.users = JSON.parse(localStorage.getItem("users"))
            }
        },
        methods: {
            remove(id) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Deseja remover este utilizador?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        for (let i in this.users) {
                            if (this.users[i].id === id) {
                                this.users = this.users.filter(user => this.users[i].id != user.id);
                                localStorage.setItem("users", JSON.stringify(this.users));
                                Swal.fire({
                                    icon: 'success',
                                    text: 'Utilizador removido!'
                                })
                            }
                        }
                    }
                })
            },
            block(id) {
                for (let i in this.users) {
                    if (this.users[i].id === id) {
                        if (this.users[i].userType !== "bloqueado") { //bloquear
                            Swal.fire({
                                icon: 'warning',
                                text: 'Deseja bloquear este utilizador?',
                                showCancelButton: true,
                            }).then((result) => {
                                if (result.value) {
                                    this.users[i].userType = "bloqueado"
                                    localStorage.setItem("users", JSON.stringify(this.users));
                                    Swal.fire({
                                        icon: 'success',
                                        text: 'Utilizador bloqueado!'
                                    })
                                }
                            })
                        } else if (this.users[i].userType === "bloqueado") { //desbloquear
                            Swal.fire({
                                icon: 'warning',
                                text: 'Deseja desbloquear este utilizador?',
                                showCancelButton: true,
                            }).then((result) => {
                                if (result.value) {
                                    this.users[i].userType = "cliente"
                                    localStorage.setItem("users", JSON.stringify(this.users));
                                    Swal.fire({
                                        icon: 'success',
                                        text: 'Utilizador desbloqueado!'
                                    })
                                }
                            })
                        }
                    }
                }
            },
            changeToAdmin(id) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Tornar este utilizador em "Admin"?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        for (let i in this.users) {
                            if (this.users[i].id === id) {
                                this.users[i].userType = "admin"
                                localStorage.setItem("users", JSON.stringify(this.users));
                                Swal.fire({
                                    icon: 'success',
                                    text: 'Tipo de utilizador alterado!'
                                })
                            }
                        }
                    }
                })
            },
            changeToClient(id) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Tornar este utilizador em "cliente"?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        for (let i in this.users) {
                            if (this.users[i].id === id) {
                                this.users[i].userType = "cliente"
                                localStorage.setItem("users", JSON.stringify(this.users));
                                Swal.fire({
                                    icon: 'success',
                                    text: 'Tipo de utilizador alterado!'
                                })
                            }
                        }
                    }
                })
            }
        },
        computed: {
            filteredUsers() {
                return this.users.filter(
                    (user) => {
                        let filterRunResult = true
                        if (this.searchUsers == "") {
                            return filterRunResult
                        }
                        //por nome
                        if (user.name.toLowerCase().includes(this.searchUsers.toLowerCase())) {
                            filterRunResult = user.name.toLowerCase().includes(this.searchUsers.toLowerCase())
                            return filterRunResult
                        }
                        //por apelido
                        if (user.lastName.toLowerCase().includes(this.searchUsers.toLowerCase())) {
                            filterRunResult = user.lastName.toLowerCase().includes(this.searchUsers.toLowerCase())
                            return filterRunResult
                        }
                        //por email
                        if (user.email.toLowerCase().includes(this.searchUsers.toLowerCase())) {
                            filterRunResult = user.email.toLowerCase().includes(this.searchUsers.toLowerCase())
                            return filterRunResult
                        }
                        //por contacto
                        if (user.number.includes(this.searchUsers)) {
                            filterRunResult = user.number.includes(this.searchUsers)
                            return filterRunResult
                        }
                        //por tipo
                        if (user.userType.toLowerCase().includes(this.searchUsers.toLowerCase())) {
                            filterRunResult = user.userType.toLowerCase().includes(this.searchUsers.toLowerCase())
                            return filterRunResult
                        }
                    }
                )
            }
        },
        rows() {
            return this.users.length
        },
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
        width: 380px;
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