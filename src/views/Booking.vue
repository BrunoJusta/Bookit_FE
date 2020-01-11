<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="container" style="justify-content: center;">
            <b-button v-on:click="displayInfo()" class="teste border-0"
                style="background-color:transparent; color:black; padding:10px">Informaçoes
            </b-button>
            <b-button v-on:click="displayAddOns()" class="teste border-0"
                style="background-color:transparent; color:black; padding:10px">
                Complementos</b-button>
            <b-button v-on:click="displayExtras()" class="teste border-0"
                style="background-color:transparent; color:black; padding:10px">Extras
            </b-button>
            <b-button v-on:click="displayDecor()" class="teste border-0"
                style="background-color:transparent; color:black; padding:10px">Decoração
            </b-button>
            <b-button v-on:click="displayOutfit()" class="teste border-0"
                style="background-color:transparent; color:black; padding:10px">Fardas
            </b-button>
            <b-button v-on:click="displayResume()" class="teste border-0"
                style="background-color:transparent; color:black; padding:10px">Resumo
            </b-button>
        </div>
        <h3>{{this.$store.getters.getCurrentKitType}} - {{this.$store.getters.getCurrentKitName}}</h3>
        <form @submit.prevent="saveBooking()">
            <div class="container" v-bind:style="{display: kitInfo}">
                <!-- MOTIVO -->
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="reason" class="lable">Motivo</label>
                            <textarea class="form-control" style="resize: none;" id="reason" v-model="reason" rows="4"
                                cols="50" required></textarea>
                        </div>
                    </div>


                    <div class="col-sm-3">

                        <b-form-group class="input" id="input-group-6">
                            <label class="lable" for="date">Data:</label>
                            <b-form-input type="date" v-model="date" required>
                            </b-form-input>
                        </b-form-group>

                        <b-form-group class="input" id="input-group-6">
                            <label class="lable" for="hi">Hora de Início:</label>

                            <b-form-input type="time" id="hi" v-model="hi" required>
                            </b-form-input>
                        </b-form-group>
                    </div>

                    <div class="col-sm-3">
                        <b-form-group class="input" id="input-group-6">
                            <label class="lable" for="people">Número de Pessoas:</label>
                            <b-form-input type="number" name="" id="people" min="20" max="50" v-model="people" required>
                            </b-form-input>
                        </b-form-group>
                        <b-form-group class="input" id="input-group-6">
                            <label class="lable" for="hf">Hora do Final:</label>
                            <b-form-input type="time" id="hf" v-model="hf" required>
                            </b-form-input>
                        </b-form-group>
                          <label class="lable" for="schools">Local:</label>

                    <b-form-input id="schools" list="my-list-id" v-model="location" required></b-form-input>
                    <datalist id="my-list-id">
                        <option v-for="school in schools" :key="school.id">{{school.name}}</option>
                    </datalist>

                    </div>

                  

                </div>
            </div>


            <div class="container" v-bind:style="{display: addOns}">
                <div class="row">
                    <div class="col-sm-6">
                        <h1>Bebidas</h1>
                        <div class="container" v-for="i in searchKits" :key="i.id">
                            <div class="form-check" v-if="i.type=='Drink'">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" :value="i.name"
                                        v-model="checkedDrinks" checked>
                                    {{i.name}}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <h1>Comida</h1>
                        <div class="container" v-for="i in searchKits" :key="i.id">
                            <div class="form-check" v-if="i.type=='Food'">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" :value="i.name"
                                        v-model="checkedFood" checked>
                                    {{i.name}}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="container" v-bind:style="{display: extra}">
                <h1>Extras</h1>
                <div class="container" v-for="e in searchExtras" :key="e.id">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" :value="e.name" v-model="checkedExtras" checked>
                        {{e.name}}
                    </label>
                </div>
            </div>

            <div class="container" v-bind:style="{display: decors}">
                <h1>Decorações</h1>
                <div class="container" v-for="d in searchDecor" :key="d.id">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" :value="d.name" v-model="checkedDecor" checked>
                        {{d.name}}
                    </label>
                </div>
            </div>

            <div class="container" v-bind:style="{display: outfit}">
                <div class="row">
                    <div class="form-check" v-for="i in searchOutfits" :key="i.id">
                        <div class="col-sm-4">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" :value="i.name" v-model="checkedImage">
                                <img style="height:300px; width:auto" v-bind:src="i.source" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container" v-bind:style="{display: resume}">

                <div class="row">

                    <div class="col-sm-4">
                        <p v-if="reason != ''">Motivo: {{reason}}</p>
                        <p v-if="date != ''">Data: {{date}}</p>
                        <p v-if="hf != ''">Duração: {{hi}} - {{hf}}</p>
                        <p v-if="people != ''">Nº Pessoas: {{people}}</p>
                    </div>
                    <div class="col-sm-4">
                        <p v-if="location != ''">Local: {{location}}</p>
                        <p v-if="checkedFood.length != 0">Comida Complementar:
                            {{ checkedFood.length == 0 ? 'Fechar' : '' + checkedFood }}</p>
                        <p v-if="checkedDrinks.length != 0">Bebida Complementar:
                            {{ checkedDrinks.length == 0 ? 'Fechar' : '' + checkedDrinks }}</p>
                    </div>
                    <div class="col-sm-4">

                        <p v-if="checkedExtras.length != 0">Extras:
                            {{ checkedExtras.length == 0 ? 'Fechar' : '' + checkedExtras }}</p>
                        <p v-if="checkedDecor.length != 0">Decoração:
                            {{ checkedExtras.length == 0 ? 'Fechar' : '' + checkedExtras }}</p>
                        <p v-if="checkedImage.length != 0">Farda:
                            {{ checkedImage.length == 0 ? 'Fechar' : '' + checkedImage }}</p>
                    </div>


                </div>





            </div>
            <!-- <div v-if="kitInfo">
                <KitInfo  v-bind:style="{display: kitInfo} " />
            </div>
            <div v-if="addOns">
                <AddOns v-bind:style="{display: addOns}" />
            </div>
            <div v-if="extras">
                <Extras v-bind:style="{display: extras}" />
            </div>
            <div v-if="decor">
                <Decorations v-bind:style="{display: decor}" />
            </div>
            <div v-if="outfits">
                <Outfits v-bind:style="{display: outfits}" />
            </div>
            <br> -->
            <b-button type="submit" @click="teste" value="Adicionar" class="btn btn-primary" squared>Adicionar
            </b-button>
        </form>

    </div>
</template>

<script>
    /*  import KitInfo from '@/components/KitInfo.vue';
    import AddOns from '@/components/AddOns.vue';
    import Extras from '@/components/Extras.vue';
    import Decorations from '@/components/Decorations.vue';
    import Outfits from '@/components/Outfits.vue'; */
    export default {
        data: function () {
            return {
                userName: "",
                userEmail: "",
                currentKit: [],
                kitName: "",
                kitType: "",
                kitInfo: "block",
                addOns: "none",
                extra: "none",
                decors: "none",
                outfit: "none",
                resume: "none",
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
                checkedImage: [],
                schools: [],
                location: ""
            }
        },
        created() {
            if (localStorage.getItem("bookings")) {
                this.$store.state.bookings = JSON.parse(localStorage.getItem("bookings"))
            }
            if (localStorage.getItem("currentKit")) {
                this.$store.state.currentKit = JSON.parse(localStorage.getItem("currentKit"))
            }
            this.ingredients = this.$store.state.ingredients
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
        components: {
            /*  KitInfo,
             AddOns,
             Extras,
             Decorations,
             Outfits */
        },
        methods: {
            teste() {

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

            },
            displayAddOns() {
                this.kitInfo = "none"
                this.addOns = "block"
                this.extra = "none"
                this.decors = "none"
                this.outfit = "none"
                this.resume = "none"

            },
            displayExtras() {
                this.kitInfo = "none"
                this.addOns = "none"
                this.extra = "block"
                this.decors = "none"
                this.outfit = "none"
                this.resume = "none"

            },
            displayDecor() {
                this.kitInfo = "none"
                this.addOns = "none"
                this.extra = "none"
                this.decors = "block"
                this.outfit = "none"
                this.resume = "none"

            },
            displayOutfit() {
                this.kitInfo = "none"
                this.addOns = "none"
                this.extra = "none"
                this.decors = "none"
                this.outfit = "block"
                this.resume = "none"

            },
            displayResume() {
                this.kitInfo = "none"
                this.addOns = "none"
                this.extra = "none"
                this.decors = "none"
                this.outfit = "none"
                this.resume = "block"
            },
            getLastId() {
                return this.$store.getters.bookingLastId + 1
            },
            saveBooking() {
                this.$store.commit('ADD_BOOKING', {
                    id: this.getLastId(),
                    userName: this.userName,
                    userEmail: this.userEmail,
                    kitName: this.kitName,
                    kitType: this.kitType,
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
                alert("Reserva Concluida")
            }
        },
        computed: {
            searchKits() {
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
    .lable {
        float: left;
    }
</style>