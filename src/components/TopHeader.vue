<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Início</b-nav-item>
                    <b-nav-item href="#">Reservas</b-nav-item>
                    <b-nav-item href="#">Workshops</b-nav-item>
                </b-navbar-nav>
            </b-collapse>

            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>

                    <div>
                        <b-button id="show-btn" squared>
                            <router-link to="/register">Entrar</router-link>
                        </b-button>

                    </div>

                </b-nav-form>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
    export default {

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
</style>