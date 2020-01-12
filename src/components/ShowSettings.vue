<template>
    <div>
        <div>
            <div class="container" style="justify-content: center;">
                <b-button v-on:click="displayInfo()" v-bind:style="{fontWeight: infoFont}" style="fontSize: 20px;"
                    class="bookingOptions border-0">Informações
                </b-button>
                <span class="bookingOptions" style="padding: 10px">|</span>
                <b-button v-on:click="displayPW()" v-bind:style="{fontWeight: passwordFont}" style="fontSize: 20px;"
                    class="bookingOptions border-0">
                    Alterar Palavra-Passe</b-button>
                <span class="bookingOptions" style="padding: 10px">|</span>
                <b-button v-on:click="displayProfileImg()" v-bind:style="{fontWeight: imgProfileFont}"
                    style="fontSize: 20px;" class="bookingOptions border-0">Atualizar Foto de Perfil
                </b-button>
                <span class="bookingOptions" style="padding: 10px">|</span>
                <b-button v-on:click="displayContact()" v-bind:style="{fontWeight: contactFont}" style="fontSize: 20px;"
                    class="bookingOptions border-0">Atualizar Contacto
                </b-button>
            </div>
        </div>

        <!-- Informaçoes -->
        <div class="container" id="showContainer" v-bind:style="{display: showInfo}">
            <p id="txt">Nome: {{getUserFirstName}}</p>
            <p id="txt">Apelido: {{getUserLastName}}</p>
            <p id="txt">Email: {{getEmail}}</p>
            <p id="txt">Contacto: {{getContact}}</p>
        </div>
        <!-- Alterar palavra passe -->
        <div class="container" id="showContainer" v-bind:style="{display: showPassword}">
            <div>
                <b-form @submit="changePassword">
                    <b-form-group id="input-group-1" label="Palavra-Passe Antiga:" label-for="input-1">
                        <b-form-input id="input-1" type="password" v-model="form.oldPW" required
                            placeholder="Introduza a palavra-passe antiga">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Palavra-Passe Nova:" label-for="input-2">
                        <b-form-input id="input-2" v-model="form.newPW" type="password" pattern=".{6,}" required
                            placeholder="Introduza a palavra-passe nova"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Palavra-Passe Nova:" label-for="input-3">
                        <b-form-input id="input-3" v-model="form.confirmPW" type="password" pattern=".{6,}" required
                            placeholder="Confirme a Palavra-Passe nova"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Submit</b-button>
                </b-form>
            </div>
        </div>

        <!-- atualizar foto de perfil -->
        <div class="container" id="showContainer" v-bind:style="{display: showImgProfile}">
            <p id="txt">TESTE PARA ATUALIZAR FOTO DE PERFIL</p>
        </div>

        <!-- atualizar contacto -->
        <div class="container" id="showContainer" v-bind:style="{display: showContact}">
            <p id="txt">TESTE PARA ATUALIZAR CONTACTO</p>
        </div>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                users: [],
                firstNameUser: "",
                lastNameUser: "",
                userEmail: "",
                userContact: "",
                infoFont: "bold",
                passwordFont: "normal",
                imgProfileFont: "normal",
                contactFont: "normal",
                showInfo: "none",
                showPassword: "block",
                showImgProfile: "none",
                showContact: "none",
                form: {
                    oldPW: "",
                    newPW: "",
                    confirmPW: ""
                }
            }
        },
        created() {
            if (localStorage.getItem("loggedUser")) {
                this.$store.state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
            }
            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"))
            }
            this.users = this.$store.state.users
            this.firstNameUser = this.$store.getters.getName
            this.lastNameUser = this.$store.getters.getLastName
            this.userEmail = this.$store.getters.getEmail
            this.userContact = this.$store.getters.getContact
        },
        methods: {
            changePassword(evt) {
                evt.preventDefault()
                for (let i in this.users) {
                    if (this.users[i].email === this.userEmail) {
                        if (this.users[i].password === this.form.oldPW) {
                            if (this.form.newPW === this.form.confirmPW) {
                                this.users[i].password = this.form.newPW
                                this.$store.state.loggedUser.password = this.form.newPW
                                localStorage.setItem("users", JSON.stringify(this.users));
                                localStorage.setItem("loggedUser", JSON.stringify(this.$store.state.loggedUser));
                                alert("Palavra-Passe alterada com sucesso!")
                                this.displayInfo();
                            } else {
                                alert("A nova Palavra-Passe não pode ser igual à Palavra-Passe atual")
                            }
                        } else {
                            alert("Palavra-Passe atual errada")
                        }
                    }
                }
            },
            displayInfo() {
                this.infoFont = "bold"
                this.passwordFont = "normal"
                this.imgProfileFont = "normal"
                this.contactFont = "normal"
                this.showInfo = "block"
                this.showPassword = "none"
                this.showImgProfile = "none"
                this.showContact = "none"
            },
            displayPW() {
                this.infoFont = "normal"
                this.passwordFont = "bold"
                this.imgProfileFont = "normal"
                this.contactFont = "normal"
                this.showInfo = "none"
                this.showPassword = "block"
                this.showImgProfile = "none"
                this.showContact = "none"
            },
            displayProfileImg() {
                this.infoFont = "normal"
                this.passwordFont = "normal"
                this.imgProfileFont = "bold"
                this.contactFont = "normal"
                this.showInfo = "none"
                this.showPassword = "none"
                this.showImgProfile = "block"
                this.showContact = "none"
            },
            displayContact() {
                this.infoFont = "normal"
                this.passwordFont = "normal"
                this.imgProfileFont = "normal"
                this.contactFont = "bold"
                this.showInfo = "none"
                this.showPassword = "none"
                this.showImgProfile = "none"
                this.showContact = "block"
            }
        },
        computed: {
            getUserFirstName() {
                return this.firstNameUser
            },
            getUserLastName() {
                return this.lastNameUser
            },
            getEmail() {
                return this.userEmail
            },
            getContact() {
                return this.userContact
            }
        }
    }
</script>

<style lang="scss" scoped>
    .bookingOptions {
        background-color: transparent;
        color: black;
        padding: 10px
    }

    #showContainer {
        -webkit-box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
        -moz-box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
        margin-top: 20px;
        width: 600px;
    }

    #txt {
        padding: 10px;
    }
</style>