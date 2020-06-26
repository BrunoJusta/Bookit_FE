<template>
  <div>
    <h3 class="menuNameType">{{this.currentArea.name}}</h3>
    <form @submit.prevent="saveAreaBooking()">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label for="reason" class="lable">Motivo</label>
              <textarea class="form-control rounded-0" style="resize: none;" id="reason" v-model="reason" rows="4"
                cols="50" required></textarea>
            </div>
          </div>

          <div class="col-sm-3">
            <b-form-group class="input" id="input-group-6">
              <label class="lable" for="hi">Hora de Início</label>
              <b-form-input type="time" id="hi" class="rounded-0" v-model="hi" required></b-form-input>
            </b-form-group>
            <b-form-group class="input" id="input-group-6">
              <label class="lable" for="date">Data</label>
              <b-form-input type="date" class="rounded-0" v-model="date" required></b-form-input>
            </b-form-group>
          </div>

          <div class="col-sm-3">
            <b-form-group class="input" id="input-group-6">
              <label class="lable" for="hf">Hora do Final</label>
              <b-form-input type="time" id="hf" class="rounded-0" v-model="hf" required></b-form-input>
            </b-form-group>
          </div>
        </div>
        <b-button type="submit" value="Adicionar" class="btn btn-primary border-0" squared>Confirmar</b-button>
        <b-button type="button" @click="cancelAreaBooking()" value="Adicionar" class="btn btn-primary border-0" squared>Cancelar</b-button>
      </div>
    </form>
  </div>
</template>

<script>
  import router from '../router';

  export default {
    data: function () {
      return {
        userName: "",
        userEmail: "",
        currentArea: [],
        areaName: "",
        reason: "",
        date: "",
        hi: "",
        hf: "",
        userOn: [],
      };
    },
    created() {
      this.userOn = this.$store.state.loggedUser

      if (localStorage.getItem("currentArea")) {
        this.currentArea = JSON.parse(
          localStorage.getItem("currentArea")
        );
      }
      this.userName =
        this.$store.getters.getName + " " + this.$store.getters.getLastName;
      this.userEmail = this.$store.getters.getEmail;

      this.currentArea = JSON.parse(localStorage.getItem("currentArea"));
      this.areaName = this.$store.getters.getCurrentArea;
    },
    methods: {
      getLastId() {
        return this.$store.getters.areaBookingLastId + 1;
      },
      async saveAreaBooking() {
        let splited = this.date.split("-");
        let year = splited[0];
        let day = splited[2];
        let month = splited[1];
        if (
          parseInt(year) < new Date().getFullYear() ||
          parseInt(year) > new Date().getFullYear() + 2
        ) {
          // eslint-disable-next-line no-undef
          Swal.fire({
            icon: "warning",
            text: "Introduza um ano válido!"
          });
        } else {
          if (
            parseInt(day) <= new Date().getDate() &&
            parseInt(month) == new Date().getMonth() + 1
          ) {
            // eslint-disable-next-line no-undef
            Swal.fire({
              icon: "warning",
              text: "Introduza um dia válido!"
            });
          } else {
            try {
              await this.$store.dispatch("postAreaBooking", {
                id: this.userOn.id,
                area: this.currentArea.area_id,
                reason: this.reason,
                date: this.date,
                initHour: this.hi,
                endHour: this.hf
              });
            } catch (err) {
              alert(err);
            }
          }
        }
      },
      cancelAreaBooking() {
        router.push({
          name: 'areasGallery'
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: bookMan;
    src: url(../assets/bookman.ttf);
  }

  .menuNameType {
    font-family: bookman;
    padding-top: 180px;
    padding-bottom: 30px;
    color: #b91c3b;
  }

  .lable {
    float: left;
    font-weight: bold;
  }

  .subtitle {
    padding-bottom: 10px;
    color: #0a2463;
    font-weight: bold;
  }

  .navOptn {
    padding-bottom: 70px;
  }

  textarea {
    height: 124px;
  }

  .btn-primary {
    font-size: 18px;
    background-color: #0a2463;
    margin: 20px;
    margin-top: 50px;
    transition: all 0.2s ease-in-out;
  }

  .btn-primary:hover {
    transform: scale(1.1);
  }
</style>