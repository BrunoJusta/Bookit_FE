<template>
    <div id="loginform">

        <div class="container-full title">
            <h1 id="redTitle">Iniciar Sessão</h1>
            <hr class="back-line">
            <div class="container" id="whiteRect">
                <p id="space">space</p>
            </div>
        </div>
        <div class="container col-sm-4">
            <b-form v-on:submit.prevent="login()" v-if="show">
                <b-form-group id="input-group-1">
                    <label for="input-1">Email</label>
                    <b-form-input id="input-1" class="rounded-0" v-model="emailLogin" type="email" required
                        placeholder="Introduzir email">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="input-group-4">
                    <label for="input-4">Password</label>
                    <b-form-input id="input-4" class="rounded-0" v-model="passwordLogin" type="password" required
                        placeholder="Introduzir password">
                    </b-form-input>
                </b-form-group>
                <div class="container">
                    <b-button id="show-btn" style="background-color:#0A2463; margin:10px" squared>
                        <router-link id="link" to="/register">Registar</router-link>
                    </b-button>
                    <b-button type="submit" id="show-btn" style="background-color:#0A2463; margin:10px" squared>
                        Entrar</b-button>
                </div>
            </b-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",
        data: () => ({
            emailLogin: "",
            passwordLogin: "",
            show: true,

        }),
        created: function () { //qd abres esta pagina vai acontecer isto
            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"))
            }
            if (localStorage.getItem("loggedUser")) {
                this.$store.state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
            }
        },
        methods: {
            login() {
                this.$store.commit('LOGIN', {
                    email: this.emailLogin,
                    password: this.passwordLogin,
                })

            },
        },
    };
</script>

<style lang="scss" scoped>
    #input-group-4,
    #input-group-1 {
        padding: 20px;
    }

    #link {
        color: white;
    }

    label {
        float: left;
        margin-bottom: .5rem;
    }



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
        width: 60%;
        display: block;
        z-index: 5;
        position: relative;
    }

    #space {
        color: white;
    }

    .title {
        padding-top: 100px;
        padding-bottom: 50px;
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

    #show-btn {
        background-color: #0A2463;
        transition: all .2s ease-in-out;
    }

    #show-btn:hover {
        transform: scale(1.1);
        text-decoration: underline;
    }
</style>