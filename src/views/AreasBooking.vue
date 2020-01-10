<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h3>{{this.$store.getters.getCurrentArea}}</h3>      
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
                <button type="submit" value="Adicionar"
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
                return this.$store.getters. areaBookingLastId + 1
            },
            saveAreaBooking() {
                this.$store.commit('ADD_AREA_BOOKING', {
                    id: this.getLastId(),
                    userName: this.$store.getters.getName,
                    userEmail: this.$store.getters.getEmail,
                    areaName: this.$store.getters.getCurrentArea,
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

</style>