<template>
    <div id="registration">
        <br>
        <br>

        <h1>REGISTO</h1>
        <br>

        <div class="container col-sm-4">

            <b-form v-on:submit.prevent="addUser()" v-if="show">
                <b-form-group id="input-group-1" label="Email:" label-for="input-1">
                    <b-form-input id="input-1" v-model="email" type="email" required placeholder="Introduzir email">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
                    <b-form-input id="input-2" v-model="name" required placeholder="Introduzir nome">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Contacto:" label-for="input-3">
                    <b-form-input id="input-3" v-model="number" required placeholder="Introduzir contacto">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-4" label="Password:" label-for="input-4">
                    <b-form-input id="input-4" v-model="password" type="password" required
                        placeholder="Introduzir password">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-5" label="Confirmar Password:" label-for="input-5">
                    <b-form-input id="input-5" v-model="confPassword" type="password" required
                        placeholder="Confirmar password">
                    </b-form-input>
                </b-form-group>
                <button type="submit" class="btn btn-primary  float-right">Confirmar</button>
                <button class="btn btn-primary  float-right">Login</button>


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

</style>