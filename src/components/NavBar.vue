<template>
    <div class="fixed-top">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <router-link v-if="this.$store.getters.getUserType !== 0" to="/"><img src="../assets/navbarLogo.svg"
                    id="logoNavbar"></router-link>
            <router-link id="routeAd" v-else to="/adminHome"><img src="../assets/navbarLogo.svg" id="logoNavbar"></router-link>
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <div>
                        <div class="container">
                            <b-button id="logged-btn" class="logged" squared>
                                <router-link :to="{name:this.path}"><i class="fas fa-user"
                                        v-if="this.$store.getters.getName != 'Entrar'"
                                        id="icon"></i>{{this.$store.getters.getName}}
                                </router-link>
                            </b-button>
                            <span id="countTxt"
                                v-if="this.$store.getters.getName != 'Entrar' &&
                            this.$store.getters.getNumberNotifications != 0">{{this.$store.getters.getNumberNotifications}}</span>
                            <b-button id="logout-btn" v-if="this.$store.getters.getName !== 'Entrar'"
                                v-on:click="logout()" squared>
                                <router-link style="color:black;" to="/">Sair</router-link>
                            </b-button>
                        </div>
                    </div>
                </b-nav-form>
            </b-navbar-nav>
        </b-navbar>
        <b-navbar id="jon" toggleable="lg" type="dark" variant="info">
            <div class="container">
                <router-link to="/" class="navOptions" v-if="this.$store.getters.getUserType !== 0">Início
                </router-link>
                <router-link to="/menuGallery" class="navOptions" v-if="this.$store.getters.getUserType !== 0">Menus
                </router-link>
                <router-link to="/areasGallery" class="navOptions" v-if="this.$store.getters.getUserType !== 0">Espaços
                </router-link>
                <router-link to="/workshops" class="navOptions" v-if="this.$store.getters.getUserType !== 0">Workshops
                </router-link>
                <router-link to="/adminHome" class="navOptions" v-if="this.$store.getters.getUserType == 0">Início
                </router-link>
                <router-link to="/menuGallery" class="navOptions" v-if="this.$store.getters.getUserType == 0">Menus
                </router-link>
                <router-link to="/areasGallery" class="navOptions" v-if="this.$store.getters.getUserType == 0">Espaços
                </router-link>
                <router-link to="/workshops" class="navOptions" v-if="this.$store.getters.getUserType == 0">Workshops
                </router-link>
            </div>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                path: "login"
            }
        },
        created() {
            if (localStorage.getItem("token")) {
                let jwtToken = localStorage.getItem("token").split(".")[1]
                this.$store.state.loggedUser = JSON.parse(window.atob(jwtToken))
                this.path = "profile"
            } else {
                this.path = "login"
            }
            this.$store.state.numNotifications = localStorage.getItem("x")
        },
        updated() {
            if (localStorage.getItem("token")) {
                this.path = "profile"
            } else {
                this.path = "login"
            }
            this.$store.state.numNotifications = localStorage.getItem("x")
        },
        methods: {
            logout() {
                // eslint-disable-next-line no-undef
                const toast = swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true
                });

                toast.fire({
                    icon: 'success',
                    title: 'Terminou sessão com sucesso!'
                })

                /* Swal.fire({
                    text: 'Sessão terminada!'
                }) */
                this.$store.commit('LOGOUT')
            }
        },
        computed: {
            getName() {
                if (this.$store.state.loggedUser) {
                    return this.$store.state.loggedUser.name
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

    .logged {
        background-color: #0a2463;
        position: relative;
        display: inline-block;
    }

    #logout-btn {
        background-color: white;
        margin-left: 10px;
        border: 0px;
    }

    a {
        font-weight: bold;
        color: white;
    }

    #countTxt {
        position: absolute;
        top: 10%;
        right: 6%;
        padding: 3px 5px;
        border-radius: 90%;
        background-color: #B91C3B;
        color: white;
        font-weight: bold;
        font-size: 10px;
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

    #logoNavbar:hover {
        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    @keyframes scale-up-center {
        0% {
            transform: scale(1);
        }

        100% {
            transform: scale(1.1);
        }
    }

    #icon {
        padding-right: 6px;
    }
</style>