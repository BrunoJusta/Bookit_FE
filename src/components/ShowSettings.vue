<template>
    <div>
        <div>
            <div class="container optnContainer">
                <button v-on:click="displayPW()" v-bind:style="{fontWeight: passwordFont}"
                    class="settingsOptions border-0">
                    Alterar Palavra-Passe
                </button>
                <button v-on:click="displayProfileImg()" v-bind:style="{fontWeight: imgProfileFont}"
                    class="settingsOptions border-0">Atualizar Foto de Perfil
                </button>
                <button v-on:click="displayContact()" v-bind:style="{fontWeight: contactFont}"
                    class="settingsOptions border-0">Atualizar Contacto
                </button>
            </div>
        </div>

        <!-- Alterar palavra passe -->
        <div class="container" id="showContainer" v-bind:style="{display: showPassword}">
            <div>
                <b-form v-on:submit.prevent="editUsers(oldPassword, newPassword, newPassword2, '', '')">
                    <b-form-group id="input-group-1">
                        <label for="input-1">Palavra-Passe Atual:</label>
                        <b-form-input id="input-1" class="rounded-0" type="password" v-model="oldPassword" required
                            placeholder="Introduza a palavra-passe atual">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2">
                        <label for="input-2">Palavra-Passe Nova:</label>
                        <b-form-input id="input-2" class="rounded-0" v-model="newPassword" type="password"
                            pattern=".{6,}" required placeholder="Introduza a palavra-passe nova"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3">
                        <label for="input-3">Confirmar Palavra-Passe Nova:</label>
                        <b-form-input id="input-3" class="rounded-0" v-model="newPassword2" type="password"
                            pattern=".{6,}" required placeholder="Confirme a Palavra-Passe nova"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" class="rounded-0 border-0 btn-primary" variant="primary">Alterar</b-button>
                </b-form>
            </div>
        </div>

        <!-- atualizar foto de perfil  -->
        <div class="container" id="showContainer" v-bind:style="{display: showImgProfile}">
            <div>
                <img :src="this.newImg" id="imgPreview" v-if="this.newImg !== ''">
                <b-form v-on:submit.prevent="changeImage()">
                    <b-form-group id="input-group-4">
                        <label for="input-4">Link da Nova Imagem:</label>
                        <b-form-input id="input-4" class="rounded-0" v-model="newImg" type="link" required
                            placeholder="Introduza o link da nova imagem"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" class="rounded-0 border-0 btn-primary" variant="primary">Atualizar
                    </b-button>
                </b-form>
            </div>
        </div>

        <!-- atualizar contacto -->
        <div class="container" id="showContainer" v-bind:style="{display: showContact}">
            <div>
                <b-form v-on:submit.prevent="editUsers('', '', '', number, '')">
                    <b-form-group id="input-group-5">
                        <label for="input-5">Contacto Novo:</label>
                        <b-form-input id="input-5" class="rounded-0" v-model="number" type="text" pattern="[0-9]{9}"
                            required placeholder="Introduza o contacto novo"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" class="rounded-0 border-0 btn-primary" variant="primary" id="submitBtn">
                        Atualizar</b-button>
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
                passwordFont: "bold",
                imgProfileFont: "normal",
                contactFont: "normal",
                defaultFont: "normal",
                showPassword: "block",
                showImgProfile: "none",
                showContact: "none",
                previewImg: "",
                oldPassword: "",
                newPassword: "",
                newPassword2: "",
                number: "",
                newImg: ""
            }
        },
        methods: {
            async changeImage() {
                try {
                    await this.$store.dispatch("changeAvatar", {
                        newImg: this.newImg
                    });
                    this.newImg = ""
                } catch (err) {
                    alert(err);
                }
            },
            async getUserImg() {
                try {
                    await this.$store.dispatch("fetchUserImage", {
                        id: this.$store.state.loggedUser.id
                    });
                } catch (err) {
                    alert(err);
                }
            },
            async editUsers(oldPassword, newPassword, newPassword2, number, userType) {
                try {
                    await this.$store.dispatch("editUsers", {
                        id: this.$store.state.loggedUser.id,
                        oldPassword: oldPassword,
                        newPassword: newPassword,
                        newPassword2: newPassword2,
                        number: number,
                        userType: userType
                    });
                    this.oldPassword = ""
                    this.newPassword = ""
                    this.newPassword2 = ""
                    this.number = ""
                } catch (err) {
                    alert(err);
                }
            },
            displayPW() {
                this.passwordFont = "bold"
                this.imgProfileFont = "normal"
                this.contactFont = "normal"
                this.showPassword = "block"
                this.showImgProfile = "none"
                this.showContact = "none"
            },
            displayProfileImg() {
                this.passwordFont = "normal"
                this.imgProfileFont = "bold"
                this.contactFont = "normal"
                this.showPassword = "none"
                this.showImgProfile = "block"
                this.showContact = "none"
            },
            displayContact() {
                this.passwordFont = "normal"
                this.imgProfileFont = "normal"
                this.contactFont = "bold"
                this.showPassword = "none"
                this.showImgProfile = "none"
                this.showContact = "block"
            }
        },
    }
</script>

<style lang="scss" scoped>
    .container {
        margin-top: 130px;
    }

    .settingsOptions {
        background-color: transparent;
        color: black;
        padding: 10px;
        padding-bottom: 30px;
    }

    #showContainer {
        -webkit-box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
        -moz-box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
        margin-top: -10px;
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
        object-fit: cover;

        -webkit-box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
        -moz-box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);
    }

    .settingsOptions[data-v-25112270]:focus {
        outline: 0;
    }

    .btn-primary {
        font-size: 18px;
        background-color: #0A2463;
        margin: 20px;
        margin-top: 50px;
        transition: all .2s ease-in-out;
    }

    .btn-primary:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 1096px) {
        #showContainer {
            width: 70vw;
        }
    }
</style>