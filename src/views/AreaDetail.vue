<template>
  <div class="areasDetail">
    <h3 class="display-2" v-bind:style="{display:show3}">{{getAreaById($route.params.areaId).name}}</h3>
    <input type="text" v-model="areaNameNew" name="" :placeholder="areaName" id="editTitle"
      v-bind:style="{display:show}">
    <br>
    <br>

    <div class="container">
      <b-card no-body class="overflow-hidden border-0" style="max-width: 1100px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src=" getAreaById($route.params.areaId).img" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body align="left" title="Descrição">
              <p v-bind:style="{display:show2}"> {{getAreaById($route.params.areaId).description}}</p>
              <textarea id="description" rows="4" cols="50" v-bind:style="{display:show}">
                {{getAreaById($route.params.areaId).description}}</textarea>
            </b-card-body>
          </b-col>
        </b-row>

      </b-card>
      <b-button v-bind:style="{display:show}" @click="cancelEdit()" class="btn-book border-0" squared>
        Cancelar
      </b-button>
      <b-button v-bind:style="{display:show}" @click="saveEdit()" class="btn-book border-0" squared>
        Guardar
      </b-button>

      <b-button class="btn-book border-0" v-bind:style="{display:show2}" squared>
        <router-link to="/areas" style="color:white"> Voltar </router-link>
      </b-button>
      <b-button v-if="this.$store.getters.getUserType !== 'admin'" @click="saveCurrentArea()" class="btn-book border-0"
        squared>
        <router-link to="/areasbooking" class="teste" style="color:white"> Reservar </router-link>
      </b-button>
      <b-button v-bind:style="{display:show2}" v-else @click="activateEdit()" class="btn-book border-0" squared>
        Editar
      </b-button>
    </div>
  </div>

</template>

<script>
  export default {
    data: function () {
      return {
        areas: [],
        id: "",
        areaName: "",
        areaNameNew: "",
        descripton: "",
        currentArea: {},
        areaImg: "",
        show: "none",
        show2: "inline",
        show3: "block"
      };
    },
    created() {
      this.areas = JSON.parse(localStorage.getItem("areas"))
    },
    methods: {
      getAreaById(id) {
        this.areaName = this.areas.filter(
          area => area.id === id
        )[0].name

        this.id = this.areas.filter(
          area => area.id === id
        )[0].id

        this.descripton = this.areas.filter(
          area => area.id === id
        )[0].descripton

        this.areaImg = this.areas.filter(
          area => area.id === id
        )[0].img

        return this.areas.filter(
          area => area.id === id
        )[0]
      },
      saveCurrentArea() {
        this.currentArea = ({
          areaName: this.areaName,
          areaImg: this.areaImg
        });
        localStorage.setItem("currentArea", JSON.stringify(this.currentArea));
        this.$store.state.currentArea = this.currentArea
      },
      activateEdit() {
        this.show = "inline"
        this.show2 = "none"
        this.show3 = "none"

      },
      saveEdit() {
        this.show2 = "inline"
        this.show = "none"
        this.show3 = "block"
        let newDesc = document.getElementById('description').value

        for (let a in this.areas) {
          if (this.areas[a].id === this.id) {
            if (this.areaNameNew == "") {
              this.areas[a].description = newDesc
              localStorage.setItem("areas", JSON.stringify(this.areas));
            } else {
              this.areas[a].name = this.areaNameNew
              this.areas[a].description = newDesc
              localStorage.setItem("areas", JSON.stringify(this.areas));
            }
            alert("Alterado")
          }
        }
      },
      cancelEdit() {
        this.show2 = "inline"
        this.show = "none"
        this.show3 = "block"
      }
    }
  }
</script>
<style lang="scss" scoped>
  @font-face {
    font-family: bookMan;
    src: url(../assets/bookman.ttf);
  }

  #editTitle {
    margin: auto;
    margin-top: 200px;
  }

  .display-2 {
    padding-top: 160px;
    padding-bottom: 20px;
    font-family: bookMan;
    font-size: 40px;
    color: #B91C3B;

  }

  .card-title {
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 25px;
    font-weight: bold;
    color: #0A2463;
  }

  img {
    border-right: solid 10px #0A2463;

  }

  .btn-book {
    font-size: 18px;
    background-color: #0A2463;
    margin: 20px;
    margin-top: 50px;

  }

  .overflow-hidden {
    -webkit-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
  }

  .card-img {
    border-radius: 0 !important;
  }


  .card {
    border-radius: 0 !important;
  }
</style>