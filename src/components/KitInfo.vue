<template>
    <div>
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
        <br>
        <br>
        <label for="people">Número de Pessoas:</label>
        <input type="number" name="" id="people" min="20" max="50" v-model="people">
    </div>
</template>

<script>
    export default {
        name: "kitInfo",
        data: function () {
            return {
                reason: "",
                date: "",
                hi: "",
                hf: "",
                people: ""
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>