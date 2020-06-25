<template>
    <div>
        <form @submit.prevent="addWorkshop()">
            <div class="container">
                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-4">
                        <b-input id="inputs" placeholder="Nome do workshop" v-model="name" required></b-input>
                        <b-input id="inputs" type="number" placeholder="Vagas" min="20" max="150" v-model="vacancies"
                            required></b-input>
                        <label for="hi"><b>Hora Início</b></label>
                        <b-input type="time" id="hi" v-model="hi" required></b-input>
                    </div>
                    <div class="col-sm-4">
                        <b-input id="inputs" placeholder="Professor" v-model="teacher" required></b-input>
                        <b-input id="inputs" type="date" placeholder="Data" v-model="date" required></b-input>
                        <label for="hf"><b>Hora Final</b></label>
                        <b-input type="time" id="hf" v-model="hf" required></b-input>
                    </div>
                    <div class="col-sm-2"></div>
                </div>
                <div class="row">
                    <b-input id="description" placeholder="Link da imagem" v-model="img" required></b-input>
                </div>
                <div class="row">
                    <textarea id="description" placeholder="Descrição..." style="resize:none;" v-model="description"
                        rows="4" cols="20" required></textarea>
                </div>
                <div class="row" v-if="this.img != ''">
                    <img :src="img" id="imgWorkshop">
                </div>
                <button type="submit" value="Adicionar" class="btn btn-primary rounded-0 border-0">Adicionar</button>
            </div>
        </form>
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
                vacancies: ""
            }
        },
        methods: {
            async addWorkshop() {
                try {
                    await this.$store.dispatch("postWorkshop", {
                        name: this.name,
                        teacher: this.teacher,
                        date: this.date,
                        img: this.img,
                        hi: this.hi,
                        hf: this.hf,
                        description: this.description,
                        vacancies: this.vacancies
                    });
                } catch (err) {
                    alert(err);
                }
                this.name = ""
                this.teacher = ""
                this.date = ""
                this.img = ""
                this.hi = ""
                this.hf = ""
                this.description = ""
                this.vacancies = ""
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn-primary {
        font-size: 18px;
        background-color: #0A2463;
        margin-top: 30px;
    }

    .col-sm-4 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #description {
        border-color: #ced4da;
        width: 680px;
        margin: auto;
        margin-top: 5px;
        margin-bottom: 20px;
    }

    #imgWorkshop {
              width: 400px;
        height: 200px;
           box-shadow: -2px 0px 10px -4px rgba(0,0,0,0.5);
        object-fit: cover;

        margin: auto;
        margin-bottom: 20px;
    }

    #inputs,
    #hi,
    #hf {
        width: 300px;
        border-radius: 0;
        height: 40px;
        margin-bottom: 20px;
    }
</style>