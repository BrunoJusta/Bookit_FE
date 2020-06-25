<template>
    <div>
        <div id="title">
            <h1 id="redTitle">ADICIONAR ESPAÇO</h1>
            <hr class="back-line">
            <div class="container box">
            </div>
        </div>
        <form @submit.prevent="addArea()">
            <div class="container">
                <div class="row">
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-4">
                        <b-input id="inputs" placeholder="Nome do espaço" v-model="name" required></b-input>
                    </div>
                    <div class="col-sm-4">
                        <b-input id="inputs" placeholder="Link da Imagem" v-model="img" required></b-input>
                    </div>
                    <div class="col-sm-2">
                    </div>
                </div>
                <div class="row">
                    <textarea id="description" placeholder="Descrição..." style="resize:none;" v-model="description"
                        rows="4" cols="20" required></textarea>
                </div>
                <div class="row" v-if="this.img != ''">
                    <img :src="img" id="imgArea">
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
                img: "",
                description: "",
                areas: []
            }
        },
        methods: {
            async addArea() {
                try {
                    await this.$store.dispatch("postArea", {
                        name: this.name,
                        img: this.img,
                        description: this.description,
                    });
                } catch (err) {
                    alert(err);
                }
                this.name = ""
                this.img = ""
                this.description = ""
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box {
        background-color: white;
        margin-top: -35px;
        height: 35px;
        width: 580px;
        position: relative;
        display: block;
        z-index: 6
    }

    #redTitle {
        font-family: "bookMan";
        font-size: 45px;
        color: #B91C3B;
        display: block;
        z-index: 7;
        position: relative;
    }

    .back-line {
        background-color: #0A2463;
        margin-top: -35px;
        width: 90%;
        display: block;
        z-index: 5;
        position: relative;
    }

    #title {
        padding-top: 150px;
        padding-bottom: 50px;
    }


    .btn-primary {
        font-size: 18px;
        background-color: #0A2463;
        margin: 20px;
        margin-top: 25px;
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

    #imgArea {
           width: 400px;
        height: 200px;
           box-shadow: -2px 0px 10px -4px rgba(0,0,0,0.5);
        object-fit: cover;

        margin: auto;
        margin-bottom: 20px;
    }

    #inputs {
        width: 300px;
        border-radius: 0;
        height: 40px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 1096px) {
        #description {
            border-color: #ced4da;
            width: 300px;
            margin: auto;
            margin-top: 5px;
            margin-bottom: 20px;
        }

        #imgArea {
            width: 60%;
            height: auto;
            border: 3px solid #0A2463;
            margin: auto;
        }
    }
</style>