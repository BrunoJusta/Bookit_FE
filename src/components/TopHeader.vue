<template>
    <div class="fixed-top">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <router-link to="/"><img src="../assets/navbarLogo2.svg" alt="" id="logoNavbar"></router-link>
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm rounded-0" placeholder="pesquisar..."></b-form-input>
                    <div>
                        <div class="container">
                            <b-button id="logged-btn" squared>
                                <router-link :to="{name:this.path}">{{this.$store.getters.getName}}</router-link>
                            </b-button>
                            <b-button id="logout-btn" v-if="this.$store.getters.getName !== 'Entrar'" v-on:click="logout()" squared>
                                <router-link to="/">Sair</router-link>
                            </b-button>
                        </div>
                    </div>
                </b-nav-form>
            </b-navbar-nav>
        </b-navbar>
        <b-navbar id="jon" toggleable="lg" type="dark" variant="info">
            <div class="container">
                <router-link to="/" class="navOptions" v-bind:style="{display: clientButtons}">Início</router-link>
                <router-link to="/adminHome" class="navOptions" v-bind:style="{display: adminButtons}">Início</router-link>
                <router-link to="/choose" class="navOptions" v-bind:style="{display: clientButtons}">Reservas</router-link>
                <router-link to="/workshops" class="navOptions" v-bind:style="{display: clientButtons}">Workshops</router-link>
                <router-link to="/menuKits" class="navOptions" v-bind:style="{display: adminButtons}">Menus</router-link>
                <router-link to="/workshops" class="navOptions" v-bind:style="{display: adminButtons}">Workshops</router-link>

            </div>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                path: "login",
                onlineUser: "",
                showLogout: "block",
                adminButtons: "none",
                clientButtons: "block"
            }
        },
        created(){
  
            if (localStorage.getItem("loggedUser")) {
                this.$store.state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
            }
             if (this.$store.getters.getName === "Entrar") {


                this.path = "login"
                this.adminButtons = "none"//mostra os botoes da navbar para o admin
                this.clientButtons = "block"//esconde os botoes do cliente da navbar para o admin
            }
            else if(this.$store.getters.getUserType === "admin"){


                this.path = "adminHome"
                this.adminButtons = "block"//mostra os botoes da navbar para o admin
                this.clientButtons = "none"//esconde os botoes do cliente da navbar para o admin
            }
            else if(this.$store.getters.getUserType === "cliente"){


                this.path = "profile"
                  this.adminButtons = "none"//mostra os botoes da navbar para o admin
                this.clientButtons = "block"//esconde os botoes do cliente da navbar para o admin
   
            }
                this.$store.commit('STORE_ITEMS')


        },
        updated: function () {
            if (this.$store.getters.getName === "Entrar") {
                this.path = "login"
                  this.adminButtons = "none"//mostra os botoes da navbar para o admin
                this.clientButtons = "block"//esconde os botoes do cliente da navbar para o admin
            }
            else if(this.$store.getters.getUserType === "admin"){
                this.path = "adminHome"
                this.adminButtons = "block"//mostra os botoes da navbar para o admin
                this.clientButtons = "none"//esconde os botoes do cliente da navbar para o admin
            }
            else if(this.$store.getters.getUserType === "cliente"){
                this.path = "profile"
                  this.adminButtons = "none"//mostra os botoes da navbar para o admin
                this.clientButtons = "block"//esconde os botoes do cliente da navbar para o admin
   
            }

        },
        methods: {
            logout() {
                alert("logout efetuado com sucesso")
                this.$store.commit('LOGOUT')
            }
        },
        computed: {
            getName() {
                if (localStorage.getItem("loggedUser")) {
                    return this.onlineUser
                } else {
                    return "Entrar"
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    #jon {
        --webkit-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
        -moz-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
        box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
    }

    .bg-info {
        background-color: white !important;
    }

    .navbar-dark .navbar-brand {
        color: black
    }

    .navbar-dark .navbar-nav .nav-link {
        color: black;
    }

    .navbar-dark .navbar-nav {
        margin-left: 50%;
    }

    em {
        color: black;
    }

    #show-btn,
    #logged-btn {
        background-color: #0a2463;
    }

    #logout-btn {
        background-color: #0a2463;
        margin-left: 10px;
    }

    a {
        font-weight: bold;
        color: white;
    }

    .navbar-expand-lg>.container,
    .navbar-expand-lg>.container-fluid,
    .navbar-expand-lg>.container-lg,
    .navbar-expand-lg>.container-md,
    .navbar-expand-lg>.container-sm,
    .navbar-expand-lg>.container-xl {
        justify-content: center;
    }

    .navOptions {
        padding: 10px;
        color: black;
    }

    #logoNavbar {
        width: 190px;
    }
</style>