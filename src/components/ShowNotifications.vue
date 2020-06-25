<template>
    <div>
        <div class="container" style="justify-content: center;">
            <b-button v-on:click="displayB()" class="border-0"
                style="  padding: 6px;
     background-color: white;
    color: black;
    font-size: 20px;
    border-color: transparent;
    border-radius: 5px;
    margin: 10px;"
                v-bind:style="{fontWeight: notifyFont}">
                Notificações
            </b-button>
            <b-button v-on:click="displayA()" class="border-0"
                style="  padding: 6px;
     background-color: white;
    color: black;
    font-size: 20px;
    border-color: transparent;
    border-radius: 5px;
    margin: 10px;"
                v-bind:style="{fontWeight: archiveFont}">
                Arquivo
            </b-button>
        </div>


        <div class="container" v-bind:style="{display:  notifyTable}">
            <div v-if="this.userNotifications.length != 0">
                <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
                <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small hover
                    head-variant="dark" responsive="sm" :items="this.userNotifications.slice().reverse()"
                    :fields="fields">
                    <template v-slot:cell(actions)="row">
                        <b-button size="sm" @click="archive(row.item.user_id, row.item.notification_id)"
                            class="mr-1 blackBtn">Arquivar
                        </b-button>
                        <b-button size="sm"
                            @click="deleteNotification(row.item.user_id, row.item.notification_id)"
                            class="mr-1 deleteBtn"><i class="fas fa-trash-alt"></i>
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


        <div class="container" v-if="this.userArchivations.length !=0" v-bind:style="{display: archiveTable}">
            <p class="mt-3" style="float:left">Página Atual: {{ currentPage2 }}</p>
            <b-table :per-page="perPage" :current-page="currentPage2" id="my-table" striped bordered small hover
                head-variant="dark" responsive="sm" :items="this.userArchivations.slice().reverse()" :fields="fields2">
                <template v-slot:cell(actions)="row2">
                    <b-button size="sm"
                        @click="deleteNotification(row2.item.user_id, row2.item.notification_id)"
                        class="mr-1 deleteBtn"><i class="fas fa-trash-alt"></i></b-button>
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
    import {
        mapGetters
    } from "vuex";
    export default {
        name: "notifyTable",
        data: function () {
            return {
                perPage: 10,
                currentPage: 1,
                currentPage2: 1,
                fields: [{
                        key: 'description',
                        label: "Notificações Novas",
                        sortable: true
                    },
                    {
                        key: 'actions',
                        label: "Ações",
                        sortable: false
                    },
                ],
                fields2: [{
                        key: 'description',
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
                userNotifications: [],
                userArchivations: [],
            }
        },
        created() {
            this.getMyNotifications();
            this.getMyArchivations();
        },
        methods: {
            async getMyNotifications() {
                try {
                    await this.$store.dispatch("fetchUserNotifications");
                    this.userNotifications = this.getUserNotifications.data
                } catch (err) {
                    alert(err);
                }
            },
            async getMyArchivations() {
                try {
                    await this.$store.dispatch("fetchUserArchivations");
                    this.userArchivations = this.getUserArchivations.data
                } catch (err) {
                    alert(err);
                }
            },
            async archive(userID, id) {
                try {
                    await this.$store.dispatch("archiveNotification", {
                        userID: userID,
                        id: id
                    })
                } catch (err) {
                    alert(err)
                }
                this.getMyNotifications();
                this.getMyArchivations();
            },
            async deleteNotification(userID, id) {
                try {
                    await this.$store.dispatch("deleteNotification", {
                        userID: userID,
                        id: id
                    })
                } catch (err) {
                    alert(err)
                }
                this.getMyNotifications();
                this.getMyArchivations();
            },
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
            }
        },
        computed: {
            ...mapGetters(["getUserNotifications"]),
            ...mapGetters(["getUserArchivations"]),
            rows() {
                return this.userNotifications.length
            },
            rows2() {
                return this.userArchivations.length
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