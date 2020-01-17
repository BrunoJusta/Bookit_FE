<template>
    <div class="fixed-top">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <router-link to="/"><img src="../assets/navbarLogo.svg" alt="" id="logoNavbar"></router-link>
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <div>
                        <div class="container">
                            <b-button id="logged-btn" squared>
                                <router-link :to="{name:this.path}">{{this.$store.getters.getName}}</router-link>
                            </b-button>
                            <b-button id="logout-btn" v-if="this.$store.getters.getName !== 'Entrar'"
                                v-on:click="logout()" squared>
                                <router-link to="/">Sair</router-link>
                            </b-button>
                        </div>
                    </div>
                </b-nav-form>
            </b-navbar-nav>
        </b-navbar>
        <b-navbar id="jon" toggleable="lg" type="dark" variant="info">
            <div class="container">
                <router-link to="/" class="navOptions" v-if="this.$store.getters.getUserType !== 'admin'">Início
                </router-link>
                <router-link to="/adminHome" class="navOptions" v-if="this.$store.getters.getUserType == 'admin'">Início
                </router-link>
                <router-link to="/menuKits" class="navOptions" v-if="this.$store.getters.getUserType !== 'admin'">Menus
                </router-link>
                <router-link to="/areas" class="navOptions" v-if="this.$store.getters.getUserType !== 'admin'">Espaços
                </router-link>

                <router-link to="/workshops" class="navOptions" v-if="this.$store.getters.getUserType !== 'admin'">
                    Workshops
                </router-link>
                <router-link to="/menuKits" class="navOptions" v-if="this.$store.getters.getUserType == 'admin'">Menus
                </router-link>
                <router-link to="/workshops" class="navOptions" v-if="this.$store.getters.getUserType == 'admin'">
                    Workshops
                </router-link>
                <router-link to="/areas" class="navOptions" v-if="this.$store.getters.getUserType == 'admin'">Espaços
                </router-link>


            </div>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                path: "login",
                onlineUser: ""
            }
        },
        created() {
            if (localStorage.getItem("loggedUser")) {
                this.$store.state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
            }
            if (this.$store.getters.getName === "Entrar") {
                this.path = "login"
            } else if (this.$store.getters.getUserType === "admin") {
                this.path = "adminHome"
            } else if (this.$store.getters.getUserType === "cliente") {
                this.path = "profile"
            }
            this.$store.commit('STORE_ITEMS')
        },
        updated: function () {
            if (this.$store.getters.getName === "Entrar") {
                this.path = "login"
            } else if (this.$store.getters.getUserType === "admin") {
                this.path = "adminHome"
            } else if (this.$store.getters.getUserType === "cliente") {
                this.path = "profile"
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