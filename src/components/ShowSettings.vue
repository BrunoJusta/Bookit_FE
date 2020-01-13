<template>
    <div>
        <div>
            <div class="container optnContainer" style="justify-content: center;">
                <button v-on:click="displayInfo()" v-bind:style="{fontWeight: infoFont}" style="fontSize: 16px;"
                    class="bookingOptions border-0">Informações
                    <span class="bookingOptions" v-bind:style="{fontWeight: defaultFont}" style="padding: 10px">|</span>
                </button>
                <button v-on:click="displayPW()" v-bind:style="{fontWeight: passwordFont}" style="fontSize: 16px;"
                    class="bookingOptions border-0">
                    Alterar Palavra-Passe
                    <span class="bookingOptions" v-bind:style="{fontWeight: defaultFont}" style="padding: 10px">|</span>
                </button>
                <button v-on:click="displayProfileImg()" v-bind:style="{fontWeight: imgProfileFont}"
                    style="fontSize: 16px;" class="bookingOptions border-0">Atualizar Foto de Perfil
                    <span class="bookingOptions" v-bind:style="{fontWeight: defaultFont}" style="padding: 10px">|</span>
                </button>
                <button v-on:click="displayContact()" v-bind:style="{fontWeight: contactFont}" style="fontSize: 16px;"
                    class="bookingOptions border-0">Atualizar Contacto
                </button>
            </div>
        </div>

        <!-- Informaçoes -->
        <div class="container" id="showContainer" v-bind:style="{display: showInfo}">
            <p id="txt">Nome: {{getUserFirstName}} {{getUserLastName}}</p>
            <p id="txt">Email: {{getEmail}}</p>
            <p id="txt">Contacto: {{this.userContact}}</p>
        </div>
        <!-- Alterar palavra passe -->
        <div class="container" id="showContainer" v-bind:style="{display: showPassword}">
            <div>
                <b-form @submit="changePassword">
                    <b-form-group id="input-group-1">
                        <label for="input-1">Palavra-Passe Atual:</label>
                        <b-form-input id="input-1" type="password" v-model="form.oldPW" required
                            placeholder="Introduza a palavra-passe atual">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2">
                        <label for="input-2">Palavra-Passe Nova:</label>
                        <b-form-input id="input-2" v-model="form.newPW" type="password" pattern=".{6,}" required
                            placeholder="Introduza a palavra-passe nova"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3">
                        <label for="input-3">Confirmar Palavra-Passe Nova:</label>
                        <b-form-input id="input-3" v-model="form.confirmPW" type="password" pattern=".{6,}" required
                            placeholder="Confirme a Palavra-Passe nova"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Alterar</b-button>
                </b-form>
            </div>
        </div>

        <!-- atualizar foto de perfil -->
        <div class="container" id="showContainer" v-bind:style="{display: showImgProfile}">
            <div>
                <img :src="this.form.newImg" id="imgPreview" v-if="this.form.newImg !== ''">
                <b-form @submit="changeImg">
                    <b-form-group id="input-group-4">
                        <label for="input-4">Link da Nova Imagem:</label>
                        <b-form-input id="input-4" v-model="form.newImg" type="link" required
                            placeholder="Introduza o link da nova imagem"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Atualizar</b-button>
                </b-form>
            </div>
        </div>

        <!-- atualizar contacto -->
        <div class="container" id="showContainer" v-bind:style="{display: showContact}">
            <div>
                <b-form @submit="changeContact">
                    <b-form-group id="input-group-5">
                        <label for="input-5">Contacto Novo:</label>
                        <b-form-input id="input-5" v-model="form.newContact" type="text" pattern="[0-9]{9}" required
                            placeholder="Introduza o contacto novo"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Atualizar</b-button>
                </b-form>
            </div>
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
                userImg: "",
                infoFont: "bold",
                passwordFont: "normal",
                imgProfileFont: "normal",
                contactFont: "normal",
                defaultFont: "normal",
                showInfo: "block",
                showPassword: "none",
                showImgProfile: "none",
                showContact: "none",
                previewImg: "",
                form: {
                    oldPW: "",
                    newPW: "",
                    confirmPW: "",
                    newContact: "",
                    newImg: ""
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
            this.userImg = this.$store.getters.getUserImg
        },
        methods: {
            changePassword(evt) {
                evt.preventDefault()
                for (let i in this.users) {
                    if (this.users[i].email === this.userEmail) {
                        if (this.users[i].password === this.form.oldPW) {
                            if (this.users[i].password !== this.form.newPW) {
                                if (this.form.newPW === this.form.confirmPW) {
                                    this.users[i].password = this.form.newPW
                                    this.$store.state.loggedUser.password = this.form.newPW
                                    localStorage.setItem("users", JSON.stringify(this.users));
                                    localStorage.setItem("loggedUser", JSON.stringify(this.$store.state.loggedUser));
                                    this.form.newPW = ""
                                    this.form.oldPW = ""
                                    this.form.confirmPW = ""
                                    alert("Palavra-Passe alterada com sucesso!")
                                    this.displayInfo();
                                } else {
                                    this.oldPW = ""
                                    this.newPW = ""
                                    this.confirmPW = ""
                                    alert("As Palavras-Passe não coincidem!")
                                }
                            } else {
                                this.oldPW = ""
                                this.newPW = ""
                                this.confirmPW = ""
                                alert("A nova Palavra-passe não pode ser igual à palavra-passe atual!")
                            }

                        } else {
                            this.oldPW = ""
                            this.newPW = ""
                            this.confirmPW = ""
                            alert("Palavra-Passe atual errada!")
                        }
                    }
                }
            },
            changeContact(evt) {
                evt.preventDefault()
                for (let i in this.users) {
                    if (this.users[i].email === this.userEmail) {
                        if (this.users[i].number !== this.form.newContact) {
                            this.userContact = this.form.newContact
                            this.users[i].number = this.form.newContact
                            this.$store.state.loggedUser.number = this.form.newContact
                            localStorage.setItem("users", JSON.stringify(this.users));
                            localStorage.setItem("loggedUser", JSON.stringify(this.$store.state.loggedUser));
                            this.form.newContact = ""
                            alert("Contacto atualizado com sucesso!")
                            this.displayInfo();
                        } else {
                            this.form.newContact = ""
                            alert("O novo contacto não podem ser igual ao atual!")
                        }
                    }
                }
            },
            changeImg(evt) {
                evt.preventDefault()
                for (let i in this.users) {
                    if (this.users[i].email === this.userEmail) {
                        this.userImg = this.form.newImg
                        this.users[i].img = this.form.newImg
                        this.$store.state.loggedUser.img = this.form.newImg
                        localStorage.setItem("users", JSON.stringify(this.users));
                        localStorage.setItem("loggedUser", JSON.stringify(this.$store.state.loggedUser));
                        this.form.newImg = ""
                        alert("Contacto atualizado com sucesso!")
                        this.displayInfo();
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
        padding: 10px;
        padding-bottom: 30px;
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

    label {
        padding-top: 10px;
        float: left;
    }

    #imgPreview {
        margin-top: -20px;
        height: 140px;
        width: 140px;
        -webkit-box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
        -moz-box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
    }

    .bookingOptions[data-v-25112270]:focus {
        outline: 0;
    }
</style>