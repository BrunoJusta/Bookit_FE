<template>
    <div>
        <div id="title">
            <h1 id="redTitle">ADICIONAR ESPAÇO</h1>
            <hr class="back-line">
            <div class="container"
                style="background-color:white; margin-top:-35px; height:35px; width:580px;position: relative;display: block; z-index:6">
            </div>
        </div>
            <form @submit.prevent="addAreas()">
        <div class="container">

                <div class="row" >
                    <div class="col-sm-6">
                        <b-input id="inputs" placeholder="Nome do espaço" v-model="name"></b-input>
                    </div>
                    <div class="col-sm-6">

                        <b-input id="inputs" placeholder="Link da Imagem" v-model="img"></b-input>
                    </div>
                </div>
                <div class="row" >
                        <textarea id="description" placeholder="Descrição..."  style="resize:none;" v-model="description" rows="4" cols="20"></textarea>
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
            addAreas() {
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
                //limpar os campos
                this.name = ""
                this.img = ""
                this.description = ""
                
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

    #title {
        padding-top: 150px;
        padding-bottom: 50px;
    }

    
    .btn-primary {
        font-size: 18px;
        background-color: #0A2463;
        margin: 20px;
        margin-top: 50px;
    }




    #description{
        border-color: #ced4da;
        margin-top: 5px;
        margin-bottom: 20px;

    }

    .col-sm-6 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

        #imgArea {
        width: 80%;
        height: auto;
        border: 3px solid #0A2463;
    }

    #inputs{
        width: 300px;
        border-radius: 0;
        height: 40px;
        margin-bottom: 20px;

    }
</style>