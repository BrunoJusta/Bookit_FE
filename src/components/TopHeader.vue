<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <a href="../views/Home.vue"><img src="../assets/navbarLogo.svg" alt="" id="logoNavbar"></a>
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <div>
                        <b-button id="show-btn" v-bind:style="{display: [offline]}" squared>
                            <router-link to="/register">Entrar</router-link>
                        </b-button>
                        <b-button id="logged-btn" v-bind:style="{display: [online]}" squared>
                            <router-link to="/profile">Nome</router-link>
                        </b-button>
                    </div>
                </b-nav-form>
            </b-navbar-nav>
        </b-navbar>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <div class="container">
                <router-link to="/" class="teste" style="color:black">Início</router-link>
                <router-link to="/" class="teste" style="color:black">Reservas</router-link>
                <router-link to="/" class="teste" style="color:black">Workshops</router-link>
            </div>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        data: () => ({
            offline: "",
            online: ""
        }),
        created: function () {
            if (localStorage.getItem("loggedUser")) {
                this.$store.state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
            }
            if (localStorage.getItem("loggedUser")) {
                this.offline = "none"
                this.online = "block"
            } else {
                this.offline = "block"
                this.online = "none"
            }

        },
        methods: {
            checkLoggedUser() {

            }
        }
    }
</script>

<style lang="scss" scoped>
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

    #show-btn {
        background-color: #0a2463;
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

    .teste {
        padding: 10px;
    }

    #logoNavbar {
        width: 200px;
    }
</style>