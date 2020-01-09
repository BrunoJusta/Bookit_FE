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
                style="background-color:transparent; color:black; padding:10px">Informações
            </b-button>
        </div>

        <form @submit.prevent="saveAreaBooking()">
            <div class="container">
                <!-- MOTIVO -->
                <label for="reason">Motivo</label>
                <br>
                <textarea id="reason" v-model="reason" rows="4" cols="50"></textarea>
                <br>
                <!-- MOTIVAÇÃO -->
                <label for="date">Data:</label>
                <input type="date" v-model="date">
                <br>
                <br>
                <!-- MOTIVAÇÃO -->
                <label for="hi">Hora de Início:</label>
                <input type="time" id="hi" v-model="hi">
                <br>
                <!-- MOTIVAÇÃO -->
                <label for="hf">Hora do Final:</label>
                <input type="time" id="hf" v-model="hf">
                <br><br>
                <button type="submit" @click="getCurrentArea()" value="Adicionar"
                    class="btn btn-primary">Enviar</button>

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
            window.addEventListener('unload', this.saveStorage)
            if (localStorage.getItem("areas")) {
                this.$store.state.areas = JSON.parse(localStorage.getItem("areas"))
            }
            this.userName = this.$store.getters.getName + " " + this.$store.getters.getLastName
            this.userEmail = this.$store.getters.getEmail
        },
        methods: {
            getLastId() {
                return this.$store.getters.bookingLastId
            },
            saveAreaBooking() {
                this.$store.commit('ADD_AREA_BOOKING', {
                    id: this.getLastId(),
                    userName: this.userName,
                    userEmail: this.userEmail,
                    areaName: this.areaName,
                    reason: this.reason,
                    date: this.date,
                    duration: this.hi + "-" + this.hf,
                })
                alert("Enviado")
            },
            getCurrentArea() {
                this.currentArea = JSON.parse(localStorage.getItem("currentArea"))
                alert(this.currentArea[0].areaName + "created")
                this.areaName = this.currentArea[0].areaName
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>