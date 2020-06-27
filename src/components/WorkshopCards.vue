<template>
    <div>
        <div class="container" style="max-width:300px">
            <b-form-input size="sm" class="mr-sm rounded-0" v-model="searchTxt" placeholder="Pesquisar...">
            </b-form-input>
        </div>
        <div class="container">
            <div class="row" v-if="this.userType == 0">
                <div class="col-sm-4" v-for="w in filteredWorkshops" :key="w.workshop_id">
                    <div id="card-maker" style="padding-bottom: 60px">
                        <b-card :title="w.name" style="max-width: 24rem;" :img-src="w.img" img-height="220rem"
                            class="border-0">
                            <b-button v-if="w.vacancies !== w.filled" class="btn-book"
                                @click="currentWorkshop(w.workshop_id)" squared>Ver Mais </b-button>
                            <b-button v-else class="btn" style="color: black; background-color:transparent; border: 0px"
                               squared>SEM VAGAS </b-button>
                            <b-button @click="deleteWorkshop(w.workshop_id)" class="btn-remove border-0" squared> X
                            </b-button>
                        </b-card>
                    </div>
                </div>
            </div>
            <div class="row" v-else>
                <div class="col-sm-4" v-for="w in filteredWorkshops" :key="w.workshop_id">
                    <div id="card-maker" style="padding-bottom: 60px">
                        <b-card :title="w.name" style="max-width: 24rem;" :img-src="w.img" img-height="220rem"
                            class="border-0">
                            <b-button v-if="w.vacancies !== w.filled" class="btn-book"
                                @click="currentWorkshop(w.workshop_id)" squared>Ver Mais </b-button>
                            <p v-else>SEM VAGAS</p>
                        </b-card>
                    </div>
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
        name: 'workshopGallery',
        data: function () {
            return {
                workshops: [],
                searchTxt: "",
                userType: ""
            };
        },
        created() {
            this.getAllWorkshops();
            this.userType = this.$store.state.loggedUser.type;
        },
        methods: {
            async getAllWorkshops() {
                try {
                    await this.$store.dispatch("fetchWorkshops");
                    this.workshops = this.getWorkshops.data;
                } catch (err) {
                    alert(err);
                }
            },
            async deleteWorkshop(ID) {
                try {
                    await this.$store.dispatch("deleteWorkshop", {
                        id: ID
                    });
                } catch (err) {
                    alert(err);
                }
                this.getAllWorkshops();
            },
            async currentWorkshop(ID) {
                try {
                    await this.$store.dispatch("fetchWorkshopById", {
                        id: ID
                    });
                    this.$router.push({
                        name: "workshopDetail"
                    })
                } catch (err) {
                    this.$router.push({
                        name: 'login'
                    })
                }
            },
        },
        computed: {
            ...mapGetters(["getWorkshops"]),
            filteredWorkshops() {
                return this.workshops.filter(
                    (workshop) => {
                        let filterResult = true
                        if (this.searchTxt == "") {
                            return filterResult
                        }
                        if (workshop.name.toLowerCase().includes(this.searchTxt.toLowerCase())) {
                            filterResult = workshop.name.toLowerCase().includes(this.searchTxt.toLowerCase())
                            return filterResult
                        }
                    }
                )
            }
        },
    }
</script>

<style lang="scss" scoped>
    #card-maker {
        padding-bottom: 60px;
        padding-top: 30px;
        transition: all .2s ease-in-out;
    }

    #card-maker:hover {
        transform: scale(1.1);
    }

    .border-0 {
        --webkit-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
        -moz-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
        box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
    }

    .btn-book {
        font-size: 18px;
        background-color: #0A2463;
        margin-bottom: -60px;
    }

    .card-title {
        font-size: 20px;
        margin-bottom: .0rem;
    }

    .card-img {
        border-radius: 0 !important;
        object-fit: cover;
    }

    .card {
        border-radius: 0 !important;

    }

    .btn-remove {
        font-size: 10px;
        background-color: #B91C3B;
        margin-top: -258px;
        margin-right: -15px;
        float: right;
    }

    .col-sm-4 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
</style>