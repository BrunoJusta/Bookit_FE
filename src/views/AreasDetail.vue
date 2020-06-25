<template>
  <div class="areasDetail">
    <h3 class="display-2" v-bind:style="{display:show3}">{{area.name}}</h3>
    <input
      type="text"
      v-model="areaNameNew"
      name
      :placeholder="area.name"
      id="editTitle"
      v-bind:style="{display:show}"
    />
    <br />
    <br />

    <div class="container">
      <b-card no-body class="overflow-hidden border-0" style="max-width: 1100px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src=" area.img" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body align="left" title="Descrição">
              <p v-bind:style="{display:show2}">{{area.description}}</p>
              <textarea
                v-model="newDesc"
                id="description"
                rows="4"
                cols="50"
                v-bind:style="{display:show}"
              ></textarea>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <b-button
        v-bind:style="{display:show}"
        @click="cancelEdit()"
        class="btn-book border-0"
        squared
      >Cancelar</b-button>
      <b-button
        v-bind:style="{display:show}"
        @click="saveEdit()"
        class="btn-book border-0"
        squared
      >Guardar</b-button>

      <b-button class="btn-book border-0" v-bind:style="{display:show2}" squared>
        <router-link to="/areasGallery" style="color:white">Voltar</router-link>
      </b-button>
      <b-button
        @click="saveCurrentArea()"
        v-bind:style="{display:show4}"
        class="btn-book border-0"
        squared
      >
        <router-link to="/areasbooking" style="color:white">Reservar</router-link>
      </b-button>
      <b-button
        v-bind:style="{display:show2}"
        v-if="this.userOn.type== 0"
        @click="activateEdit()"
        class="btn-book border-0"
        squared
      >Editar</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
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
      show3: "block",
      show4: "inline",
      area: [],
      userOn: [],
      newDesc: ""
    };
  },
  created() {
    this.area = JSON.parse(localStorage.getItem("currentArea"));
    this.userOn = this.$store.state.loggedUser
    this.areaNameNew = this.area.name;
    this.newDesc = this.area.description;
  },
  methods: {
    activateEdit() {
      this.show = "inline";
      this.show2 = "none";
      this.show3 = "none";
      this.show4 = "none";
    },
    async saveEdit() {
      try {
        await this.$store.dispatch("editArea", {
          id: this.area.area_id,
          name: this.areaNameNew,
          description: this.newDesc
        });
      } catch (err) {
        alert(err);
      }
    },
    cancelEdit() {
      this.show2 = "inline";
      this.show = "none";
      this.show3 = "block";
      this.show4 = "inline";
    }
  }
};
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
  color: #b91c3b;
}

.card-title {
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 25px;
  font-weight: bold;
  color: #0a2463;
}

img {
  border-right: solid 10px #0a2463;
}

.btn-book {
  font-size: 18px;
  background-color: #0a2463;
  margin: 20px;
  margin-top: 50px;
  transition: all 0.2s ease-in-out;
}

.btn-book:hover {
  transform: scale(1.1);
}

.overflow-hidden {
  -webkit-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
}

.card-img {
        border-radius: 0 !important;
        object-fit: cover;
    }

.card {
  border-radius: 0 !important;
}
</style>