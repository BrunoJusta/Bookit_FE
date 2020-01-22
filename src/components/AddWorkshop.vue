<template>
    <div>
        <div class="container col-sm-4">
            <form @submit.prevent="addWorkshop()">
                <div class="container">
                    <div class="row" style="margin:auto; width:500px;">
                        <div class="col-sm-6">
                            <input id="name" placeholder="Nome do workshop" v-model="name">
                        </div>
                        <div class="col-sm-6">
                            <input id="teacher" placeholder="Professor" v-model="teacher">
                        </div>
                    </div>
                    <div class="row" style="margin:auto;padding-top:20px; width:500px;">
                        <div class="col-sm-6">
                            <input id="img" placeholder="Link da imagem" v-model="img">
                        </div>
                        <div class="col-sm-6">
                            <input type="date" placeholder="Data" v-model="date">
                        </div>
                    </div>
                    <div class="row" style="width:500px; margin:auto; padding-top:20px;">
                        <div class="col-sm-6">
                            <label for="hi">Hora de Início:</label>
                            <input type="time" id="hi" v-model="hi">
                        </div>
                        <div class="col-sm-6">
                            <label for="hf">Hora Final:</label>
                            <input type="time" id="hf" v-model="hf">
                        </div>
                    </div>
                    <div class="row" style="width:500px; margin:auto; padding-top:20px;">
                        <div class="col-sm-6">
                            <label for="description">Descrição</label>
                            <textarea id="description" v-model="description" rows="4" cols="20"></textarea>
                        </div>
                        <div class="col-sm-6" v-if="this.img != ''">
                            <label for="imgWorkshop">Imagem do Workshop</label>
                            <img :src="img" id="imgWorkshop" style="width: 100px; height: 100px;">
                        </div>
                    </div>
                </div>
                <button type="submit" value="Adicionar" class="btn btn-primary">Adicionar</button>
            </form>
        </div>
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
                time: this.hi + "-" + this.hf,
                img: "",
                users: []
            }
        },
        created() {

            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"))
            }

            this.users = this.$store.state.users
        },
        methods: {
            getLastId() {
                return this.$store.getters.workshopLastId + 1
            },
            addWorkshop() {
                for (let j in this.users) {

                    if (this.users[j].userType === "cliente") {
                        this.users[j].notifications.push({
                            txt: 'O Workshop ' + this.name +
                                ' foi adicionado a galeria de workshops!'
                        })
                        localStorage.setItem("users", JSON.stringify(this.users));
                    }
                }
                this.$store.commit('ADD_WORKSHOP', {
                    id: this.getLastId(),
                    name: this.name,
                    teacher: this.teacher,
                    date: this.date,
                    time: this.hi + "-" + this.hf,
                    description: this.description,
                    img: this.img

                })
                Swal.fire({
                    icon: 'success',
                    text: 'Adicionado!',
                })
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>