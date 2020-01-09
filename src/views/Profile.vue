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
                    <div class="container" id="optionsContainer">
                        <b-img src="../assets/settingsIcon.png" id="settingsImg"></b-img>
                        <router-link to="/" class="options" style="color:black">Mensagens</router-link>
                        <router-link to="/" class="options" style="color:black">Notificações |</router-link>
                        <router-link to="/" class="options" style="color:black">Reservas |</router-link>
                    </div>
                </div>
            </div>
        </div>
        <br>

        <!-- PARA PASSAR PARA COMPONENTE DEPOIS -->
        <div class="container">
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-row no-gutters>
                    <b-col md="5">
                        <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="7">
                        <b-card-body title="Coffe Break - MENU A">
                            <h5>12/12/12</h5>
                            <b-card-text style="margin-top: 20px;">
                                This is a wider card with supporting text as a natural lead-in to additional
                                content.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </div>


        <br>
        <br>
        <button v-if="this.$store.state.loggedUser.length != 0" v-on:click="logout()"
            style="background-color:#0A2463; color:white" squared>
            Logout</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                firstNameUser: "",
                lastNameUser: ""
            }
        },
        created() {
            if (localStorage.getItem("loggedUser")) {
                this.$store.state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
            }
            this.firstNameUser = this.$store.getters.getName
            this.lastNameUser = this.$store.getters.getLastName
        },
        methods: {
            logout() {
                this.$store.commit('LOGOUT')
            }
        }, 
        computed: {
            getFullName() {
                return this.firstNameUser + " " + this.lastNameUser
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
    }
</style>