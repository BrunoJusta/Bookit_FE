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
        <h2>Gerir Extras</h2>

        <div class="container">

            <div class="row">

                <div align="center" id="AddIng" class="col-sm-6">
                    <form @submit.prevent="addExtra()">
                        <input type="text" v-model="name" name="" id="ingNome" placeholder="Extra">
                        <br>
                        <button type="submit" value="Adicionar" class="btn btn-book rounded-0">Adicionar</button>
                    </form>
                </div>


                <div class="col-sm-6">

                    <div class="container table" v-if="this.extras.length != 0">
                        <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
                        <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small
                            hover head-variant="dark" responsive="sm" :items="this.extras" :fields="fields">
                            <template v-slot:cell(actions)="row">
                                <b-button size="sm" @click="remove(row.item.id)" class="mr-1">X</b-button>
                            </template>
                        </b-table>
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                            aria-controls="my-table" style="float:right;"></b-pagination>
                    </div>
                    <div class="container" v-else>
                        <img style="width: 150px;  margin:20px" src="../assets/bookit_BLUE.svg" alt="" srcset="">
                        <h4> Não existem Extras</h4>
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
                extras: [],
                perPage: 3,
                currentPage: 1,
                fields: [{
                        key: 'name',
                        label: "Extra",
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
            if (JSON.parse(localStorage.getItem("extras"))) {
                this.$store.state.extras= JSON.parse(localStorage.getItem("extras"))
            }
            this.extras = this.$store.state.extras

        },
        methods: {
            addExtra() {
                this.extras.push({
                    id: this.$store.getters.extrasLastId + 1,
                    name: this.name,
                })
                localStorage.setItem("extras", JSON.stringify(this.extras));
               Swal.fire({
                    icon: 'success',
                    text: 'Adicionado!',
                })



            },
            remove(id) {
                for (let i in this.extras) {
                    if (this.extras[i].id === id) {
                        this.extras = this.extras.filter(extra => this.extras[i].id != extra
                            .id);
                        localStorage.setItem("extras", JSON.stringify(this.extras));
                        Swal.fire({
                    icon: 'success',
                    text: 'Removido!',
                })
                    }
                }
            }
        },
        computed: {
            searchKits() {
                return this.extras;
            },
            rows() {
                return this.extras.length
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