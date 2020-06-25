<template>
    <div>
        <div class="container-full title">
            <h1 id="redTitle">GERIR FARDAS</h1>
            <hr class="back-line">
            <div class="container box">
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <form @submit.prevent="addOutfit()">
                        <b-input type="text" v-model="name" id="txtOutfit" placeholder="Farda" required></b-input>
                        <b-input type="link" v-model="img" id="txtLink" placeholder="link" required></b-input>
                        <b-button type="submit" value="Adicionar" class="addBtn rounded-0">Adicionar</b-button>
                    </form>
                </div>
                <div class="col-sm-6" v-if="this.img == ''">
                    <div class="container table" v-if="this.outfits.length != 0">
                        <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
                        <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small
                            hover head-variant="dark" responsive="sm" :items="this.outfits" :fields="fields">
                            <template v-slot:cell(actions)="row">
                                <b-button size="sm" @click="deleteOutfit(row.item.outfit_id)" class="mr-1 deleteBtn"><i
                                        class="fas fa-trash-alt"></i></b-button>
                            </template>
                        </b-table>
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                            aria-controls="my-table" style="float:right;"></b-pagination>
                    </div>
                    <div class="container" v-else>
                        <img src="../assets/bookit_BLUE.svg" class="clearOutfits">
                        <h4> Não existem Fardas</h4>
                    </div>
                </div>
                <div class="col-sm-6" v-else>
                    <label for="imgWorkshop">Imagem da Farda:</label>
                    <img :src="img" id="imgWorkshop">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters
    } from "vuex";
    export default {
        name: "AddOns",
        data: function () {
            return {
                outfits: [],
                perPage: 3,
                currentPage: 1,
                fields: [{
                        key: 'name',
                        label: "Farda",
                        sortable: true
                    },
                    {
                        key: 'actions',
                        label: "Ações",
                        sortable: false
                    },
                ],
                x: "",
                name: "",
                img: "",
            }
        },
        created() {
            this.getAllOutfits();
            this.outfits = this.$store.state.outfits;
        },
        updated() {
            this.outfits = this.$store.state.outfits;
        },
        methods: {
            async getAllOutfits() {
                try {
                    await this.$store.dispatch("fetchOutfits");
                    this.outfits = this.getOutfits.data;
                } catch (err) {
                    alert(err);
                }
            },
            async addOutfit() {
                try {
                    await this.$store.dispatch("postOutfit", {
                        name: this.name,
                        img: this.img
                    });
                } catch (err) {
                    alert(err);
                }
                this.getAllOutfits();
                this.name = ""
                this.img = ""
            },
            async deleteOutfit(ID) {
                try {
                    await this.$store.dispatch("deleteOutfit", {
                        id: ID
                    });
                } catch (err) {
                    alert(err);
                }
                this.getAllOutfits();
            }
        },
        computed: {
            ...mapGetters(["getOutfits"]),
            rows() {
                return this.outfits.length
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box {
        background-color: white;
        margin-top: -35px;
        height: 35px;
        width: 400px;
        position: relative;
        display: block;
        z-index: 6
    }

    #txtOutfit {
        border-radius: 0;
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
        margin-top: 56px;
    }

    #txtLink {
        border-radius: 0;
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
    }

    .clearOutfits {
        width: 150px;
        margin: 20px
    }

    #imgWorkshop {
        width: 250px;
        height: 400px;
        object-fit: cover;
        
    }

    .addBtn {
        height: 40px;
        font-size: 18px;
        background-color: #0A2463;
        color: white;
        margin: auto;
    }

    #redTitle {
        font-family: "bookMan";
        font-size: 45px;
        color: #B91C3B;
        display: block;
        z-index: 7;
        position: relative;
    }

    .title {
        padding-top: 80px;
        padding-bottom: 30px;
    }

    .back-line {
        background-color: #0A2463;
        margin-top: -36px;
        width: 90%;
        display: block;
        z-index: 5;
        position: relative;
        height: 1px;
    }

    .deleteBtn {
        background-color: #B91C3B;
        border: none;
        border-radius: 0;
    }

    .col-sm-6 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>