<template>
    <div>
        <div class="container" style="justify-content: center;">
            <b-button v-on:click="displayB()" class="border-0"
                style="background-color:transparent; color:black; padding:10px; fontSize: 20px;"
                v-bind:style="{fontWeight: notifyFont}">
                Notificações
            </b-button>
            <label class="options" style="padding: 10px">|</label>
            <b-button v-on:click="displayA()" class="border-0"
                style="background-color:transparent; color:black; padding:10px; fontSize: 20px;"
                v-bind:style="{fontWeight: archiveFont}">
                Arquivo
            </b-button>
        </div>


        <div class="container" v-bind:style="{display:  notifyTable}">
            <div v-if="this.notifications.length != 0">
                <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
                <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small hover
                    head-variant="dark" responsive="sm" :items="this.notifications.slice().reverse()" :fields="fields">
                    <template v-slot:cell(actions)="row">
                        <b-button size="sm" @click="archived(row.item.txt)" class="mr-1 blackBtn">Arquivar</b-button>
                        <b-button v-if="row.item.reason" size="sm" @click="showMotive(row.item.reason)"
                            class="mr-1 blueBtn">Ver
                            Motivo</b-button>
                        <b-button v-if="row.item.opinion" size="sm" @click="showOpinion(row.item.opinion)"
                            class="mr-1 blueBtn">
                            Ver
                            Opinião</b-button>
                        <b-button size="sm" @click="removeNotification(row.item.txt)" class="mr-1 deleteBtn">X
                        </b-button>
                    </template>
                </b-table>
                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"
                    style="float:right;"></b-pagination>
            </div>
            <div v-else v-bind:style="{display:  notifyTable}">
                <img style="width: 150px;  margin:20px" src="../assets/bookit_BLUE.svg" alt="" srcset="">
                <h4> Não existem notificações novas.</h4>
            </div>
        </div>


        <div class="container" v-if="this.archivations.length !=0" v-bind:style="{display: archiveTable}">
            <p class="mt-3" style="float:left">Página Atual: {{ currentPage2 }}</p>
            <b-table :per-page="perPage" :current-page="currentPage2" id="my-table" striped bordered small hover
                head-variant="dark" responsive="sm" :items="this.archivations.slice().reverse()" :fields="fields2">
                <template v-slot:cell(actions)="row2">
                    <b-button v-if="row2.item.reason" size="sm" @click="showMotive(row2.item.reason)"
                        class="mr-1 blueBtn">Ver
                        Motivo</b-button>
                    <b-button v-if="row2.item.opinion" size="sm" @click="showOpinion(row2.item.opinion)"
                        class="mr-1 blueBtn">
                        Ver
                        Opinião</b-button>
                    <b-button size="sm" @click="removeArchive(row2.item.txt)" class="mr-1 deleteBtn">X</b-button>
                </template>
            </b-table>
            <b-pagination v-model="currentPage2" :total-rows="rows2" :per-page="perPage" aria-controls="my-table"
                style="float:right;"></b-pagination>
        </div>
        <div v-else v-bind:style="{display: archiveTable}">
            <img style="width: 150px;  margin:20px" src="../assets/bookit_BLUE.svg" alt="" srcset="">
            <h4> Não existem notificações arquivadas.</h4>
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
        name: "notifyTable",
        data: function () {
            return {
                perPage: 10,
                currentPage: 1,
                currentPage2: 1,
                fields: [{
                        key: 'txt',
                        label: "Notificações",
                        sortable: true
                    },
                    {
                        key: 'actions',
                        label: "Ações",
                        sortable: false
                    },
                ],
                fields2: [{
                        key: 'txt',
                        label: "Notificações Arquivadas",
                        sortable: true
                    },
                    {
                        key: 'actions',
                        label: "Ações",
                        sortable: false
                    },
                ],
                notifyTable: "block",
                archiveTable: "none",
                notifyFont: "bold",
                archiveFont: "normal",
                x: "",
                users: [],
                loggedUser: [],
                notifications: [],
                archivations: [],
            }
        },
        created() {
            if (localStorage.getItem("users")) {
                this.users = JSON.parse(localStorage.getItem("users"))
                for (let i in this.users) {
                    if (this.users[i].email === this.$store.getters.getEmail) {
                        this.notifications = this.users[i].notifications
                        this.archivations = this.users[i].archivations
                    }
                }
            }
            if (localStorage.getItem("loggedUser")) {
                this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
            }
        },
        methods: {
            displayA() {
                this.notifyTable = "none"
                this.archiveTable = "block"
                this.notifyFont = "normal"
                this.archiveFont = "bold"
            },
            displayB() {
                this.archiveTable = "none"
                this.notifyTable = "block"
                this.notifyFont = "bold"
                this.archiveFont = "normal"
            },
            removeNotification(txt) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Deseja remover esta notificação?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        for (let i in this.notifications) {
                            if (this.notifications[i].txt === txt) {
                                this.notifications = this.notifications.filter(notification => this
                                    .notifications[i]
                                    .txt !=
                                    notification.txt);
                                for (let i in this.users) {
                                    if (this.users[i].email === this.$store.getters.getEmail) {
                                        this.users[i].notifications = this.notifications
                                        this.loggedUser.notifications = this.notifications
                                        localStorage.setItem("users", JSON.stringify(this.users));
                                        localStorage.setItem("loggedUser", JSON.stringify(this.loggedUser));
                                    }
                                }
                            }
                        }
                    }
                })
            },
            removeArchive(txt) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Deseja remover este arquivo?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        for (let i in this.archivations) {
                            if (this.archivations[i].txt === txt) {
                                this.archivations = this.archivations.filter(notification => this.archivations[
                                        i].txt !=
                                    notification.txt);
                                for (let i in this.users) {
                                    if (this.users[i].email === this.$store.getters.getEmail) {
                                        this.users[i].archivations = this.archivations
                                        this.loggedUser.archivations = this.archivations
                                        localStorage.setItem("users", JSON.stringify(this.users));
                                        localStorage.setItem("loggedUser", JSON.stringify(this.loggedUser));
                                    }
                                }
                            }
                        }
                    }
                })

            },
            archived(txt) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Deseja arquivar esta notificação?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        for (let i in this.notifications) {
                            if (this.notifications[i].txt === txt) {
                                for (let j in this.users) {
                                    if (this.users[j].email === this.$store.getters.getEmail) {
                                        this.users[j].archivations.push({
                                            txt: this.notifications[i].txt,
                                            reason: this.notifications[i].reason,
                                            opinion: this.notifications[i].opinion
                                        })
                                        this.notifications = this.notifications.filter(notification => this
                                            .notifications[i]
                                            .txt != notification.txt);
                                        this.users[j].notifications = this.notifications
                                        this.loggedUser.notifications = this.notifications
                                        localStorage.setItem("users", JSON.stringify(this.users));
                                        localStorage.setItem("loggedUser", JSON.stringify(this.loggedUser));
                                    }
                                }
                                const toast = swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 1000,
                                    timerProgressBar: true
                                });
                                toast.fire({
                                    title: 'Notificação Arquivada'
                                })
                            }
                        }
                    }
                })
            },
            showMotive(reason) {
                Swal.fire({
                    title: "Motivo: " + reason,
                    confirmButtonText: 'Fechar'
                })
            },
            showOpinion(opinion) {
                Swal.fire({
                    title: "Opinião: " + opinion,
                    confirmButtonText: 'Fechar'
                })
            }
        },
        computed: {
            rows() {
                return this.notifications.length
            },
            rows2() {
                return this.archivations.length
            },
            updateNotifications() {
                return this.$store.getters.getNumberNotifications
            }
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

    .table .thead-dark th {
        color: #fff;
        background-color: #0A2463;
        border-color: #0A2463;
    }

    .deleteBtn {
        background-color: #B91C3B;
        border: none;
        border-radius: 0;
    }

    .blackBtn {
        background-color: #343A40;
        border: none;
        border-radius: 0;
    }

    .blueBtn {
        background-color: #0A2463;
        border: none;
        border-radius: 0;
    }
</style>