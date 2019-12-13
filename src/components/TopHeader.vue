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
                        <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')" squared>Entrar</b-button>
                        <b-modal id="bv-modal-example" hide-footer>
                            <template v-slot:modal-title>
                                Registo
                            </template>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-form-group id="input-group-1" label="Email:" label-for="input-1"
                                    description="We'll never share your email with anyone else.">
                                    <b-form-input id="input-1" v-model="form.email" type="email" required
                                        placeholder="Introduzir email"></b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
                                    <b-form-input id="input-2" v-model="form.name" required placeholder="Introduzir nome">
                                    </b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-3" label="Contacto:" label-for="input-3">
                                    <b-form-input id="input-3" v-model="form.number" required placeholder="Introduzir contacto">
                                    </b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-4" label="Password:" label-for="input-4">
                                    <b-form-input id="input-4" v-model="form.password" type="password" required placeholder="Introduzir password">
                                    </b-form-input>
                                </b-form-group>

                                <b-button type="submit" variant="primary">Submit</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form>
                        </b-modal>
                    </div>

                </b-nav-form>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: "",
                    name: "",
                    password: "",
                    number: ""
                },
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault()
                this.form.email = ''
                this.form.name = ''
                this.form.food = null
                this.form.checked = []
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
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
</style>