<template>
    <div>
        <h3 class="menuNameType">{{this.$store.getters.getCurrentKitType}} - {{this.$store.getters.getCurrentKitName}}
        </h3>

        <div class="container navOptn" style="justify-content: center;">
            <button class="optionsButton border-0" v-bind:style="{fontWeight: kitInfoFont}">Informações
            </button>
            <button class="optionsButton border-0" v-bind:style="{fontWeight: addOnsFont}">
                Complementos</button>
            <button class="optionsButton border-0" v-bind:style="{fontWeight: extraFont}">Extras
            </button>
            <button class="optionsButton border-0" v-bind:style="{fontWeight: decorsFont}">Decoração
            </button>
            <button class="optionsButton border-0" v-bind:style="{fontWeight: outfitFont}">Fardas
            </button>
            <button class="optionsButton border-0" v-bind:style="{fontWeight: resumeFont}">Resumo
            </button>
        </div>
        <form @submit.prevent="saveBooking()">
            <div class="container" v-bind:style="{display: kitInfo}">
                <!-- MOTIVO -->
                <div class="row">
                    <div class="col-sm-5">
                        <div class="form-group">
                            <label for="reason" class="lable">Motivo</label>
                            <textarea class="form-control rounded-0" style="resize: none;" id="reason" v-model="reason"
                                rows="4" cols="50" required></textarea>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <b-form-group class="input" id="input-group-6">
                            <label class="lable" for="date">Data</label>
                            <b-form-input type="date" class="rounded-0" v-model="date" required>
                            </b-form-input>
                        </b-form-group>
                        <label class="lable" for="schools">Local</label>
                        <b-form-input id="schools" class="rounded-0" list="my-list-id" v-model="location" required>
                        </b-form-input>
                        <datalist id="my-list-id">
                            <option v-for="school in schools" :key="school.id">{{school.name}}</option>
                        </datalist>
                    </div>
                    <div class="col-sm-2">
                        <b-form-group class="input" id="input-group-6">
                            <label class="lable" for="hi">Hora de Início</label>
                            <b-form-input type="time" id="hi" class="rounded-0" v-model="hi" required>
                            </b-form-input>
                        </b-form-group>
                        <b-form-group class="input" id="input-group-6">
                            <label class="lable" for="hf">Hora do Final</label>
                            <b-form-input type="time" id="hf" class="rounded-0" v-model="hf" required>
                            </b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-sm-2">
                        <b-form-group class="input" id="input-group-6">
                            <label class="lable" for="people">Número de Pessoas</label>
                            <b-form-input type="number" name="" id="people" min="20" max="50" class="rounded-0"
                                v-model="people" required>
                            </b-form-input>
                        </b-form-group>
                    </div>
                </div>
                <button type="button" v-on:click="displayAddOns()" class="btn btn-primary border-0 rounded-0"
                    v-bind:style="{fontWeight: extraFont}">Seguinte
                </button>

            </div>
            <div class="container" v-bind:style="{display: addOns}">
                <div class="row">
                    <div align="right" class="col-sm-5">
                        <h4 class="subtitle">Bebidas</h4>
                        <div v-for="i in searchIngs" :key="i.id">
                            <b-form-group v-if="i.type=='Drink' && i.name !== 'Sem Bebida' && !menuIngs.includes(i.name)">
                                <b-form-checkbox-group id="checkbox-group-2" v-model="checkedDrinks">
                                    <b-form-checkbox :value="i.name"> {{i.name}}</b-form-checkbox>
                                </b-form-checkbox-group>
                            </b-form-group>
                        </div>
                    </div>
                    <div class="col-sm-2">
                    </div>
                    <div align="left" class="col-sm-5">
                        <h4 class="subtitle">Comida</h4>
                        <div v-for="i in searchIngs" :key="i.id">
                            <b-form-group v-if="i.type=='Food' && i.name !== 'Sem Comida' && !menuIngs.includes(i.name)">
                                <b-form-checkbox-group id="checkbox-group-2" v-model="checkedFood">
                                    <b-form-checkbox :value="i.name"> {{i.name}}</b-form-checkbox>
                                </b-form-checkbox-group>
                            </b-form-group>
                        </div>
                    </div>
                </div>
                <button type="button" v-on:click="displayInfo()" class="btn btn-primary border-0 rounded-0"
                    v-bind:style="{fontWeight: kitInfoFont}">Anterior
                </button>
                <button type="button" v-on:click="displayExtras()" class="btn btn-primary border-0 rounded-0"
                    v-bind:style="{fontWeight: extraFont}">Seguinte
                </button>

            </div>
            <div class="container" v-bind:style="{display: extra}">
                <div class="container" style="max-width:200px;" align="left" v-for="i in searchExtras" :key="i.id">
                    <b-form-group>
                        <b-form-checkbox-group id="checkbox-group-2" v-model="checkedExtras">
                            <b-form-checkbox :value="i.name"> {{i.name}}</b-form-checkbox>
                        </b-form-checkbox-group>
                    </b-form-group>
                </div>
                <button type="button" v-on:click="displayAddOns()" class="btn btn-primary border-0 rounded-0"
                    v-bind:style="{fontWeight: kitInfoFont}">Anterior
                </button>
                <button type="button" v-on:click="displayDecor()" class="btn btn-primary border-0 rounded-0"
                    v-bind:style="{fontWeight: extraFont}">Seguinte
                </button>
            </div>
            <div class="container" v-bind:style="{display: decors}">
                <div class="container" style="max-width:250px;" align="left" v-for="i in searchDecor" :key="i.id">
                    <b-form-group>
                        <b-form-checkbox-group id="checkbox-group-2" v-model="checkedDecor">
                            <b-form-checkbox :value="i.name"> {{i.name}}</b-form-checkbox>
                        </b-form-checkbox-group>
                    </b-form-group>
                </div>
                <button type="button" v-on:click="displayExtras()" class="btn btn-primary border-0 rounded-0"
                    v-bind:style="{fontWeight: kitInfoFont}">Anterior
                </button>
                <button type="button" v-on:click="displayOutfit()" class="btn btn-primary border-0 rounded-0"
                    v-bind:style="{fontWeight: extraFont}">Seguinte
                </button>
            </div>
            <div class="container" v-bind:style="{display: outfit}">
                <div class="row">
                    <div v-for="i in searchOutfits" :key="i.id" class="col-sm-2">
                        <button type="button" style="background-color:transparent" class="border-0"
                            @click="chooseOutfit(i.name)">
                            <img style="height:230px; width:auto" id="btnImg" v-bind:src="i.source" />
                        </button>
                    </div>
                </div>
                <button type="button" v-on:click="displayDecor()" class="btn btn-primary border-0 rounded-0"
                    v-bind:style="{fontWeight: kitInfoFont}">Anterior
                </button>
                <button type="button" v-on:click="displayResume()" class="btn btn-primary border-0 rounded-0"
                    v-bind:style="{fontWeight: extraFont}">Seguinte
                </button>
            </div>
            <div class="container" v-bind:style="{display: resume}">
                <div class="row">
                    <div align="left" class="col-sm-4">
                        <p v-if="reason != ''"><b>Motivo</b> {{reason}}</p>
                        <p v-if="date != ''"><b>Data</b> {{date}}</p>
                        <p v-if="hf != ''"><b>Duração</b> {{hi}} - {{hf}}</p>
                        <p v-if="people != ''"><b>Nº Pessoas</b> {{people}}</p>
                    </div>
                    <div align="left" class="col-sm-4">
                        <p v-if="location != ''"><b>Local</b> {{location}}</p>
                        <p v-if="checkedFood.length != 0"><b>Comida</b>
                            {{ checkedFood.length == 0 ? 'Fechar' : '' + checkedFood }}</p>
                        <p v-if="checkedDrinks.length != 0"><b>Bebida</b>
                            {{ checkedDrinks.length == 0 ? 'Fechar' : '' + checkedDrinks }}</p>
                    </div>
                    <div align="left" class="col-sm-4">
                        <p v-if="checkedExtras.length != 0"><b>Extras</b>
                            {{ checkedExtras.length == 0 ? 'Fechar' : '' + checkedExtras }}</p>
                        <p v-if="checkedDecor.length != 0"><b>Decoração</b>
                            {{ checkedExtras.length == 0 ? 'Fechar' : '' + checkedExtras }}</p>
                        <p v-if="checkedImage.length != 0"><b>Farda</b>
                            {{ checkedImage.length == 0 ? 'Fechar' : '' + checkedImage }}</p>
                    </div>
                </div>
                <button type="button" v-on:click="displayOutfit()" class="btn btn-primary border-0 rounded-0"
                    v-bind:style="{fontWeight: kitInfoFont}">Anterior
                </button>
                <b-button type="submit" @click="saveCurrentKit()" value="Adicionar" class="btn btn-primary border-0"
                    squared>Confirmar
                </b-button>
            </div>
        </form>
    </div>
</template>

<script>
    import router from '../router';

    export default {
        data: function () {
            return {
                userName: "",
                userEmail: "",
                currentKit: [],
                kitName: "",
                kitType: "",
                kitImg: "",
                kitInfo: "block",
                addOns: "none",
                extra: "none",
                decors: "none",
                outfit: "none",
                resume: "none",
                kitInfoFont: "bold",
                addOnsFont: "normal",
                extraFont: "normal",
                decorsFont: "normal",
                outfitFont: "normal",
                resumeFont: "normal",
                reason: "",
                date: "",
                hi: "",
                hf: "",
                people: "",
                ingredients: [],
                extras: [],
                decor: [],
                outfits: [],
                checkedDrinks: [],
                checkedFood: [],
                checkedExtras: [],
                checkedDecor: [],
                checkedImage: "",
                schools: [],
                location: "",
                kits: [],
                menuIngs: []
            }
        },
        created() {
            if (localStorage.getItem("bookings")) {
                this.$store.state.bookings = JSON.parse(localStorage.getItem("bookings"))
            }
            if (localStorage.getItem("currentKit")) {
                this.$store.state.currentKit = JSON.parse(localStorage.getItem("currentKit"))
            }
            if (localStorage.getItem("ingredients")) {
                this.$store.state.ingredients = JSON.parse(localStorage.getItem("ingredients"))
                this.ingredients = this.$store.state.ingredients

            }
            if (localStorage.getItem("kits")) {
                this.$store.state.kits = JSON.parse(localStorage.getItem("kits"))
                this.kits = this.$store.state.kits
            }
            this.extras = this.$store.state.extras
            this.decor = this.$store.state.decor
            this.outfits = this.$store.state.outfits
            this.userName = this.$store.getters.getName + " " + this.$store.getters.getLastName
            this.userEmail = this.$store.getters.getEmail
            this.currentKit = JSON.parse(localStorage.getItem("currentKit"))
            this.kitName = this.$store.getters.getCurrentKitName
            this.kitType = this.$store.getters.getCurrentKitType
            this.schools = JSON.parse(localStorage.getItem("schools"))
        },
        updated() {
            this.menuIngs = this.$store.getters.getCurrentKitIng
        },
        methods: {
            saveCurrentKit() {
                this.currentKit = JSON.parse(localStorage.getItem("currentKit"))
                this.kitName = this.$store.getters.getCurrentKitName
                this.kitType = this.$store.getters.getCurrentKitType
            },
            displayInfo() {
                this.kitInfo = "block"
                this.addOns = "none"
                this.extra = "none"
                this.decors = "none"
                this.outfit = "none"
                this.resume = "none"
                this.kitInfoFont = "bold"
                this.addOnsFont = "normal"
                this.extraFont = "normal"
                this.decorsFont = "normal"
                this.outfitFont = "normal"
                this.resumeFont = "normal"
                window.scrollTo(0, 0);

            },
            displayAddOns() {
                if (this.reason != "" && this.date != "" && this.hi != "" &&
                    this.hf != "" && this.schools != "" && this.location != "" &&
                    this.people != "") {
                    let splited = this.date.split('-')
                    let year = splited[0]
                    let day = splited[2]
                    let month = splited[1]
                    if (parseInt(year) < new Date().getFullYear() || parseInt(year) > new Date().getFullYear() + 2) {
                        Swal.fire({
                            icon: 'warning',
                            text: 'Introduza um ano válido!'
                        })
                    } else {
                        if (parseInt(day) <= new Date().getDate() && parseInt(month) == new Date().getMonth() + 1) {
                            Swal.fire({
                                icon: 'warning',
                                text: 'Introduza um dia válido!'
                            })
                        } else {
                            this.kitInfo = "none"
                            this.addOns = "block"
                            this.extra = "none"
                            this.decors = "none"
                            this.outfit = "none"
                            this.resume = "none"
                            this.kitInfoFont = "normal"
                            this.addOnsFont = "bold"
                            this.extraFont = "normal"
                            this.decorsFont = "normal"
                            this.outfitFont = "normal"
                            this.resumeFont = "normal"
                            window.scrollTo(0, 0);

                        }
                    }
                } else {
                    Swal.fire({
                        icon: 'warning',
                        text: 'Toda a informação desta página deve ser preenchida!'
                    })
                }

            },
            displayExtras() {
                this.kitInfo = "none"
                this.addOns = "none"
                this.extra = "block"
                this.decors = "none"
                this.outfit = "none"
                this.resume = "none"
                this.kitInfoFont = "normal"
                this.addOnsFont = "normal"
                this.extraFont = "bold"
                this.decorsFont = "normal"
                this.outfitFont = "normal"
                this.resumeFont = "normal"
                window.scrollTo(0, 0);
            },
            displayDecor() {
                this.kitInfo = "none"
                this.addOns = "none"
                this.extra = "none"
                this.decors = "block"
                this.outfit = "none"
                this.resume = "none"
                this.kitInfoFont = "normal"
                this.addOnsFont = "normal"
                this.extraFont = "normal"
                this.decorsFont = "bold"
                this.outfitFont = "normal"
                this.resumeFont = "normal"
                window.scrollTo(0, 0);

            },
            displayOutfit() {
                this.kitInfo = "none"
                this.addOns = "none"
                this.extra = "none"
                this.decors = "none"
                this.outfit = "block"
                this.resume = "none"
                this.kitInfoFont = "normal"
                this.addOnsFont = "normal"
                this.extraFont = "normal"
                this.decorsFont = "normal"
                this.outfitFont = "bold"
                this.resumeFont = "normal"
                window.scrollTo(0, 0);

            },
            displayResume() {
                this.kitInfo = "none"
                this.addOns = "none"
                this.extra = "none"
                this.decors = "none"
                this.outfit = "none"
                this.resume = "block"
                this.kitInfoFont = "normal"
                this.addOnsFont = "normal"
                this.extraFont = "normal"
                this.decorsFont = "normal"
                this.outfitFont = "normal"
                this.resumeFont = "bold"
                window.scrollTo(0, 0);

            },
            getLastId() {
                return this.$store.getters.bookingLastId + 1
            },
            saveBooking() {
                for (let i in this.kits) {
                    if (this.kits[i].name == this.kitName && this.kits[i].type == this.kitType) {
                        this.kits[i].popularity = this.kits[i].popularity + 1
                    }
                }
                localStorage.setItem("kits", JSON.stringify(this.kits));
                this.$store.commit('ADD_BOOKING', {
                    id: this.getLastId(),
                    userName: this.userName,
                    userEmail: this.userEmail,
                    kitName: this.kitName,
                    kitType: this.kitType,
                    kitImg: this.$store.getters.getCurrentKitImg,
                    reason: this.reason,
                    date: this.date,
                    duration: this.hi + "-" + this.hf,
                    numberPeople: this.people,
                    location: this.location,
                    drinks: this.checkedDrinks,
                    food: this.checkedFood,
                    extras: this.checkedExtras,
                    decor: this.checkedDecor,
                    outfit: this.checkedImage,
                    state: "Pendente"
                })
                const toast = swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true
                });

                toast.fire({
                    icon: 'success',
                    title: 'A sua reserva foi enviada!'
                })
                router.push({
                    name: 'home'
                })
            },
            chooseOutfit(name) {
                this.checkedImage = name
                this.displayResume()
            }
        },
        computed: {
            searchIngs() {
                return this.ingredients;
            },
            searchExtras() {
                return this.extras;
            },
            searchDecor() {
                return this.decor;
            },
            searchOutfits() {
                return this.outfits;
            },
            searchCurrentKit() {
                return this.currentKit
            }
        }
    }
</script>

<style lang="scss" scoped>
    @font-face {
        font-family: bookMan;
        src: url(../assets/bookman.ttf);
    }

    .menuNameType {
        font-family: bookman;
        padding-top: 180px;
        padding-bottom: 30px;
        color: #B91C3B;
    }

    .lable {
        float: left;
        font-weight: bold;
    }



    .subtitle {
        padding-bottom: 10px;
        color: #0A2463;
        font-weight: bold;

    }

    .navOptn {
        padding-bottom: 70px;
    }

    textarea {
        height: 124px;
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

    #btnImg {
        border: 0px solid #0A2463;

        transition: all .2s ease-in-out;
        transition: border-width 0.2s linear;

    }

    #btnImg:hover {
        border-width: 2px;
        transform: scale(1.1);

    }


    .optionsButton {
        background-color: transparent;
        color: black;
        padding: 10px;
    }

    .optionsButton[data-v-bbb6eae2]:focus {
        outline: 0;
    }
</style>