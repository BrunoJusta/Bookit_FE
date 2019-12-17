<template>
    <div id="registration">
        <br>
        <br>
        <h1 id="redTitle">REGISTO</h1>
        <hr class="back-line">
        <div class="container col-sm-6">
            <b-form v-on:submit.prevent="addUser()" v-if="show">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <b-form-group class="input">
                                <label for="input-2">Nome Próprio:</label>
                                <b-form-input id="input-2" v-model="name" required placeholder="Introduzir nome">
                                </b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-sm-6">
                            <b-form-group class="input" id="input-group-6">
                                <label for="input-6">Apelido:</label>
                                <b-form-input id="input-6" v-model="lastName" required placeholder="Introduzir apelido">
                                </b-form-input>
                            </b-form-group>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <b-form-group class="input" id="input-group-1">
                                <label for="input-1">Email:</label>
                                <b-form-input id="input-1" v-model="email" type="email" required
                                    placeholder="Introduzir email">
                                </b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-sm-6">
                            <b-form-group class="input" id="input-group-3">
                                <label for="input-3">Contacto:</label>
                                <b-form-input id="input-3" v-model="number" required placeholder="Introduzir contacto">
                                </b-form-input>
                            </b-form-group>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <b-form-group class="input" id="input-group-4">
                                <label for="input-4">Password:</label>
                                <b-form-input id="input-4" v-model="password" type="password" required
                                    placeholder="Introduzir password">
                                </b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-sm-6">
                            <b-form-group class="input" id="input-group-5">
                                <label for="input-5">Confirmar Password:</label>
                                <b-form-input id="input-5" v-model="confPassword" type="password" required
                                    placeholder="Confirmar password">
                                </b-form-input>
                            </b-form-group>
                        </div>
                    </div>
                </div>
                <div class="container">
                            <b-button id="show-btn" style="background-color:#0A2463; margin:10px" squared>
                                <router-link id="link" to="/login">Login</router-link>
                            </b-button>
                            <b-button type="submit" id="show-btn" style="background-color:#0A2463; margin:10px" squared>Confirmar
                            </b-button>
                </div>
            </b-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Registration",
        data: () => ({
            id: 0,
            email: "",
            name: "",
            lastName: "",
            password: "",
            number: "",
            confPassword: "",
            show: true
        }),
        created: function () {
            window.addEventListener('unload', this.saveStorage)
            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"))
            }
            if (localStorage.getItem("loggedUser")) {
                this.$store.state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
            }
        },
        methods: {
            getLastId() {
                return this.$store.getters.lastId
            },
            addUser() {
                this.$store.commit('ADD_USER', {
                    id: this.getLastId(),
                    email: this.email,
                    name: this.name,
                    lastName: this.lastName,
                    password: this.password,
                    number: this.number,
                    confPassword: this.confPassword
                })
            },
            saveStorage() {
                localStorage.setItem("users", JSON.stringify(this.$store.state.users))
                localStorage.setItem("loggedUser", JSON.stringify(this.$store.state.loggedUser))

            }
        }
    }
</script>


<style lang="scss" scoped>
    .input {
        padding: 5px;
    }

    #link {
        color: white;
    }

    #redTitle {
        font-family: "bookMan";
        font-size: 45px;
        color: #B91C3B;
    }

    label {
        float: left;
        margin-bottom: .5rem;
    }

    .back-line {
        background-color: #0A2463;
        margin-top: -10px;
        width: 600px;


    }
</style>