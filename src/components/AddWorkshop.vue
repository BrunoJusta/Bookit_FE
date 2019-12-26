<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="container col-sm-4">
            <form @submit.prevent="addWorkshop()">
                <!-- NOME -->
                <label for="name">Nome:</label>
                <input id="name" v-model="name">
                <br>
                <br>
                <!-- PROFESSOR -->
                <label for="teacher">Professor:</label>
                <input id="teacher" v-model="teacher">
                <br>
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
                <!-- MOTIVAÇÃO -->
                <label for="description">Descrição</label>
                <br>
                <textarea id="description" v-model="description" rows="4" cols="50"></textarea>
                <br>
                <button type="submit" value="Adicionar" class="btn btn-primary">Adicionar</button>

            </form>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
    export default {
        name: "AddWorkshop",
        data: function () {
            return {
                name: "",
                teacher: "",
                date: "",
                hi: "",
                hf: "",
                description: "",
                time: this.hi +"-"+ this.hf
            }
        },
        methods: {
            getLastId() {
                return this.$store.getters.workshopLastId + 1
            },
            addWorkshop() {
                this.$store.commit('ADD_WORKSHOP', {
                    id: this.getLastId(),
                    name: this.name,
                    teacher: this.teacher,
                    date: this.date,
                    time: this.hi + "-" + this.hf,
                    description: this.description
                    
                })
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>