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
        <h2>Gerir Decoração</h2>

        <div class="container">

            <div class="row">

                <div align="center" id="AddIng" class="col-sm-6">
                    <form @submit.prevent="addDecor()">
                        <input type="text" v-model="name" name="" id="ingNome" placeholder="Decoração">
                        <br>
                        <button type="submit" value="Adicionar" class="btn btn-book rounded-0">Adicionar</button>
                    </form>
                </div>


                <div class="col-sm-6">

                    <div class="container table" v-if="this.decor.length != 0">
                        <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
                        <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small
                            hover head-variant="dark" responsive="sm" :items="this.decor" :fields="fields">
                            <template v-slot:cell(actions)="row">
                                <b-button size="sm" @click="remove(row.item.id)" class="mr-1">X</b-button>
                            </template>
                        </b-table>
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                            aria-controls="my-table" style="float:right;"></b-pagination>
                    </div>
                    <div class="container" v-else>
                        <img style="width: 150px;  margin:20px" src="../assets/bookit_BLUE.svg" alt="" srcset="">
                        <h4> Não existem decorações</h4>
                    </div>

                </div>






            </div>

        </div>







    </div>
</template>

<script>
    export default {
        name: "AddOns",
        data: function () {
            return {
                decor: [],
                perPage: 3,
                currentPage: 1,
                fields: [{
                        key: 'name',
                        label: "Decoração",
                        sortable: true
                    },
                    {
                        key: 'actions',
                        label: "Ações",
                        sortable: false
                    },
                ],
                workshops: [],
                x: "",
                currentDate: "",
                searchWorkshops: "",
                name: "",
                type: "",
            }
        },
        created() {
            if (JSON.parse(localStorage.getItem("decor"))) {
                this.$store.state.decor= JSON.parse(localStorage.getItem("decor"))
            }
            this.decor = this.$store.state.decor

        },
        methods: {
            addDecor() {
                this.decor.push({
                    id: this.$store.getters.decorLastId + 1,
                    name: this.name,
                })
                localStorage.setItem("decor", JSON.stringify(this.decor));
                alert("Adicionado!")



            },
            remove(id) {
                for (let i in this.decor) {
                    if (this.decor[i].id === id) {
                        this.decor = this.decor.filter(d => this.decor[i].id != d
                            .id);
                        localStorage.setItem("decor", JSON.stringify(this.decor));
                        alert("Removido")
                    }
                }
            }
        },
        computed: {
            searchKits() {
                return this.decor;
            },
            rows() {
                return this.decor.length
            }
        }
    }
</script>

<style lang="scss" scoped>
    #ingNome {
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
        margin-top: 56px;
    }

    #ingType {
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
    }


    .btn-book {
        font-size: 18px;
        background-color: #0A2463;
        color: white;
        margin: 20px;
        margin-top: 50px;

    }
</style>