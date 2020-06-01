<template>
  <div>
    <div class="container filter" style>
      <b-form-input
        size="sm"
        class="mr-sm rounded-0"
        v-model="searchTxt"
        placeholder="Pesquisar..."
      ></b-form-input>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="a in filteredAreas" :key="a.area_id">
          <div id="card-maker" style="padding-bottom: 60px">
            <b-card
              :title="a.name"
              :img-src="a.img"
              img-height="180rem"
              tag="article"
              style="max-width: 20rem;"
              class="border-0"
            >
              <b-button class="btn-book" @click="CurrentArea(a.id)" squared>
               Ver Mais
              </b-button>
              <b-button
                @click="deleteArea(a.name)"
                class="btn-remove border-0"
                :id="a.id"
                v-if="show === 'admin'"
                squared
              >X</b-button>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AreasGallery",
  data: function() {
    return {
      areas: [],
      x: "",
      show: this.$store.getters.getUserType,
      teste: this.$store.state.logged,
      searchTxt: "",
      bookingAreas: [],
      reset: {
        areaName: ""
      }
    };
  },
  created() {
    this.getMyAreas();
    if (this.$store.getters.getName == "Entrar") {
      this.x = "login";
    } else {
      this.x = "areaDetail";
    }
  },
  methods: {
    async getMyAreas() {
      try {
        await this.$store.dispatch("fetchAreas");
        this.areas = this.getAreas.data;
      } catch (err) {
        alert(err);
      }
    },
    /* deleteArea(name) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Deseja remover este espaço?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        let checker = false
                        for (let i = 0; i <= this.areas.length; i++) {
                            for (let b in this.areaBookings) {
                                if (name == this.areaBookings[b].areaName && this.areaBookings[b].state ==
                                    "Aprovado") {
                                    Swal.fire({
                                        icon: 'error',
                                        text: 'Não Pode eliminar um Espaço com Reservas!',
                                    })
                                    checker = true
                                }

                            }
                            if (checker == false) {
                                if (this.areas[i].name === name) {
                                    for (let j in this.users) {
                                        if (this.users[j].userType === "cliente") {
                                            this.users[j].notifications.push({
                                                txt: 'O Espaço' + this.areas[i].name +
                                                    ' foi removido da galeria de Espaços!'
                                            })
                                            localStorage.setItem("users", JSON.stringify(this.users));
                                        }
                                    }
                                    this.areas.splice(i, 1)
                                    localStorage.setItem("areas", JSON.stringify(this.areas));
                                    Swal.fire({
                                        icon: 'success',
                                        text: 'Espaço eliminado!',
                                    })
                                }
                            }

                        }
                    }
                })
            } */
    async CurrentArea(ID) {
      try {
        await this.$store.dispatch("fetchCurrentArea", { id: ID });
        this.$router.push({ name: "areaDetail" });
      } catch (err) {
        alert(err);
      }
    }
  },
  computed: {
    ...mapGetters(["getAreas"]),
    searchAreas() {
      return this.areas;
    },
    filteredAreas() {
      return this.areas.filter(area => {
        let filterResult = true;
        if (this.searchTxt == "") {
          return filterResult;
        }
        if (area.name.toLowerCase().includes(this.searchTxt.toLowerCase())) {
          filterResult = area.name
            .toLowerCase()
            .includes(this.searchTxt.toLowerCase());
          return filterResult;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.border-0 {
  --webkit-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
  -moz-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
  box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
}

.btn-book {
  font-size: 18px;
  background-color: #0a2463;
  margin-bottom: -60px;
}

.card-title {
  font-size: 20px;
  margin-bottom: 0rem;
}

.card-img {
  border-radius: 0 !important;
}

.card {
  border-radius: 0 !important;
}

#card-maker {
  transition: all 0.2s ease-in-out;
}

#card-maker:hover {
  transform: scale(1.1);
}

.btn-remove {
  font-size: 10px;
  background-color: #b91c3b;
  margin-top: -208px;
  margin-right: -15px;
  float: right;
}

.col-sm-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.filter {
  max-width: 300px;
  padding-bottom: 30px;
}
</style>