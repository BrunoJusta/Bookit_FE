<template>
    <div class="fixed-top">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <a href="../views/Home.vue"><img src="../assets/navbarLogo2.svg" alt="" id="logoNavbar"></a>
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <div>
                        <div class="container">
                            <b-button id="logged-btn" squared>
                                <router-link :to="{name:this.path}">{{getName}}</router-link>
                            </b-button>
                            <b-button id="logout-btn" v-if="this.$store.state.loggedUser.length != 0"
                                v-on:click="logout()" v-bind:style="{display: showLogout}" squared>
                                <router-link to="/">Logout
                                </router-link>
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
                <router-link to="/kitManeger" class="navOptions" v-bind:style="{display: adminButtons}">BackOffice</router-link>
                <router-link to="/userTables" class="navOptions" v-bind:style="{display: adminButtons}">BackOffice 2</router-link>
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
        created: function () {
            if (localStorage.getItem("loggedUser")) {
                this.path = "profile"
                this.$store.state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
                this.showLogout = "block"
            } else {
                this.showLogout = "none";
                this.path = "login"
            }
            if (localStorage.getItem("ingredients")) {
                this.$store.state.ingredients = JSON.parse(localStorage.getItem("ingredients"))
            }
            this.$store.commit('STORE_ITEMS')
            this.onlineUser = this.$store.getters.getName
            if (this.onlineUser === "Admin") {
                this.path = "adminHome"//muda o route do botao da navbar para direcionar para o backoffice
                this.adminButtons = "block"//mostra os botoes da navbar para o admin
                this.clientButtons = "none"//esconde os botoes do cliente da navbar para o admin
            }
            alert(this.path)
        },
        methods: {
            logout() {
                alert("logout efetuado com sucesso")
                location.reload()
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