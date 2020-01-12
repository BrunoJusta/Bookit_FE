<template>
    <div>
        <h3 class="menuNameType">{{this.$store.getters.getCurrentArea}}</h3>
        <form @submit.prevent="saveAreaBooking()">
            <div class="container" v-bind:style="{display: kitInfo}">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="reason" class="lable">Motivo</label>
                            <textarea class="form-control rounded-0" style="resize: none;" id="reason" v-model="reason"
                                rows="4" cols="50" required></textarea>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <b-form-group class="input" id="input-group-6">
                            <label class="lable" for="hi">Hora de Início</label>
                            <b-form-input type="time" id="hi" class="rounded-0" v-model="hi" required>
                            </b-form-input>
                        </b-form-group>
                        <b-form-group class="input" id="input-group-6">
                            <label class="lable" for="date">Data</label>
                            <b-form-input type="date" class="rounded-0" v-model="date" required>
                            </b-form-input>
                        </b-form-group>
                    </div>

                    <div class="col-sm-3">
                        <b-form-group class="input" id="input-group-6">
                            <label class="lable" for="hf">Hora do Final</label>
                            <b-form-input type="time" id="hf" class="rounded-0" v-model="hf" required>
                            </b-form-input>
                        </b-form-group>
                    </div>
                </div>
                <b-button type="submit" value="Adicionar" class="btn btn-primary border-0" squared>Enviar</b-button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                userName: "",
                userEmail: "",
                currentArea: [],
                areaName: "",
                reason: "",
                date: "",
                hi: "",
                hf: "",
            }
        },
        created() {
            if (localStorage.getItem("areaBookings")) {
                this.$store.state.areaBookings = JSON.parse(localStorage.getItem("areaBookings"))
            }
            if (localStorage.getItem("areas")) {
                this.$store.state.areas = JSON.parse(localStorage.getItem("areas"))
            }
            if (localStorage.getItem("currentArea")) {
                this.$store.state.currentArea = JSON.parse(localStorage.getItem("currentArea"))
            }
            this.userName = this.$store.getters.getName + " " + this.$store.getters.getLastName
            this.userEmail = this.$store.getters.getEmail

            this.currentArea = JSON.parse(localStorage.getItem("currentArea"))
            this.areaName = this.$store.getters.getCurrentArea

        },
        methods: {
            getLastId() {
                return this.$store.getters.areaBookingLastId + 1
            },
            saveAreaBooking() {
                this.$store.commit('ADD_AREA_BOOKING', {
                    id: this.getLastId(),
                    userName: this.$store.getters.getName,
                    userEmail: this.$store.getters.getEmail,
                    areaName: this.$store.getters.getCurrentArea,
                    areaImg: this.$store.getters.getCurrentAreaImg,
                    reason: this.reason,
                    date: this.date,
                    duration: this.hi + "-" + this.hf,
                    state: "Pendente"
                })
                alert("Enviado")
            }
        },

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

    }
</style>