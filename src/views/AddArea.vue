<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

        <h1 id="redTitle">ADICIONAR ESPAÇO</h1>
        <hr class="back-line">
        <div class="container"
            style="background-color:white; margin-top:-35px; height:35px; width:580px;position: relative;display: block; z-index:6">
            <p style="color:white">s</p>
        </div>
        <br>
        <br>
        <div class="container col-sm-4">
            <form @submit.prevent="addWorkshop()">
                <div class="row" style="margin:auto; width:500px;">
                    <div class="col-sm-6">
                        <input id="name" placeholder="Nome do espaço" v-model="name">
                    </div>
                    <div class="col-sm-6">
                        <input id="img" placeholder="Link da Imagem" v-model="img">
                    </div>
                </div>
                <div class="row" style="margin:auto;padding-top:20px; width:500px;">
                    <div class="col-sm-6">
                        <label for="description">Descrição</label>
                        <textarea id="description" v-model="description" rows="4" cols="20"></textarea>
                    </div>
                    <div class="col-sm-6" v-if="this.img != ''">
                        <label for="imgArea">Imagem do espaço</label>
                        <img :src="img" id="imgArea" style="width: 100px; height: 100px;">
                    </div>
                </div>
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
                description: "",
                img: "",
                users: [],
                areas: []
            }
        },
        created() {

            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"))
            }

            this.users = this.$store.state.users
        },
        methods: {
            addWorkshop() {
                for (let j in this.users) {

                    if (this.users[j].userType === "cliente") {
                        this.users[j].notifications.push({
                            txt: 'Nova Area ' + this.name +
                                ' foi adicionado a galeria de Espaços!'
                        })
                        localStorage.setItem("users", JSON.stringify(this.users));
                    }
                }
                this.$store.commit('ADD_AREA', {
                    id: this.$store.getters.getAreaLastId + 1,
                    name: this.name,
                    description: this.description,
                    img: this.img

                })
                Swal.fire({
                    icon: 'success',
                    text: 'Adicionado!'
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
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
</style>