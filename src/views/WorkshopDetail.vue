<template>
  <div class="kitDetail">
    <h3 class="display-2" v-bind:style="{display:show3}">{{currentWorkshop[0].name}}</h3>
    <input
      type="text"
      :placeholder="currentWorkshop[0].name"
      v-model="newName"
      v-bind:style="{display:show}"
      id="editTitle"
    />

    <div class="container">
      <b-card no-body class="overflow-hidden border-0" style="max-width: 1100px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="currentWorkshop[0].img" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body align="left" title="Informação">
              <input
                type="text"
                :placeholder="currentWorkshop[0].date"
                v-model="newDate"
                v-bind:style="{display:show}"
              />
              <input
                type="text"
                :placeholder="currentWorkshop[0].duration"
                v-model="newTime"
                v-bind:style="{display:show}"
              />
              <input
                type="text"
                :placeholder="currentWorkshop[0].vacancies"
                v-model="newVac"
                v-bind:style="{display:show}"
              />
              <input
                type="text"
                :placeholder="currentWorkshop[0].teacher"
                v-model="newTeacher"
                v-bind:style="{display:show}"
              />
              <div class="row">
                <p v-bind:style="{display:show2}" id="b">
                  <b>Data:</b>
                  {{currentWorkshop[0].date}}
                </p>
                <p v-bind:style="{display:show2}" id="b">
                  <b>Duração:</b>
                  {{currentWorkshop[0].duration}}
                </p>
              </div>
              <div class="row">
                <p v-bind:style="{display:show2}" id="b">
                  <b>Vagas:</b>
                  {{currentWorkshop[0].vacancies - currentWorkshop[0].filled}}
                </p>
                <p v-bind:style="{display:show2}" id="b">
                  <b>Locutor:</b>
                  {{currentWorkshop[0].teacher}}
                </p>
              </div>
              <p v-bind:style="{display:show2}">{{currentWorkshop[0].description}}</p>
              <textarea
                id="description"
                rows="4"
                cols="50"
                style="resize: none; width: 100%;"
                v-model="newDescription"
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
        @click="editWorkshop()"
        class="btn-book border-0"
        squared
      >Guardar</b-button>
      <b-button class="btn-book border-0" v-bind:style="{display:show2}" squared>
        <router-link to="/workshops" style="color:white">Voltar</router-link>
      </b-button>
      <b-button
        v-bind:style="{display:show4}"
        @click="inscription()"
        class="btn-book border-0"
        squared
      >Inscrever</b-button>
      <b-button
        v-bind:style="{display:show2}"
        v-if="this.userOn.type == 0"
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
      workshops: [],
      currentWorkshop: [],
      show: "none",
      show2: "inline",
      show3: "block",
      show4: "inline",
      inscriptions: [],
      newDate: "",
      newTime: "",
      newVac: "",
      newTeacher: "",
      newName: "",
      id: "",
      userOn: [],
      description: ""
    };
  },
  created() {
    /*  this.currentWorkshop = this.$store.state.currentWorkshop[0]; */
    if (localStorage.getItem("currentWorkshop")) {
      this.currentWorkshop = JSON.parse(
        localStorage.getItem("currentWorkshop")
      );
    }
  
    this.userOn = this.$store.state.loggedUser
    this.newName = this.currentWorkshop[0].name;
    this.newDate = this.currentWorkshop[0].date;
    this.newTime = this.currentWorkshop[0].duration;
    this.newVac = this.currentWorkshop[0].vacancies;
    this.newTeacher = this.currentWorkshop[0].teacher;
    this.newDescription = this.currentWorkshop[0].description;
  },
  methods: {
    async editWorkshop() {
      try {
        await this.$store.dispatch("editWorkshop", {
          id: this.currentWorkshop[0].workshop_id,
          name: this.newName,
          description: this.newDescription,
          teacher: this.newTeacher,
          date: this.newDate,
          time: this.newTime,
          vacancies: this.newVac
        });
      } catch (err) {
        alert(err)
      }
    },
    async inscription() {
      try{
        await this.$store.dispatch("workshopInscription",{
          idUser: this.userOn.id,
          idWorkshop: this.currentWorkshop[0].workshop_id
        })
      }catch (err){
        alert(err)
      }
    },
    activateEdit() {
      this.show = "inline";
      this.show2 = "none";
      this.show3 = "none";
      this.show4 = "none";
    },
    saveEdit() {
      this.show2 = "inline";
      this.show = "none";
      this.show3 = "block";
      this.show4 = "inline";
    },
    cancelEdit() {
      this.show2 = "inline";
      this.show = "none";
      this.show3 = "block";
      this.show4 = "inline";
    }
  },
  computed: {}
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

.card-img {
        border-radius: 0 !important;
        object-fit: cover;
    }

.card {
  border-radius: 0 !important;
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

#b {
  padding-left: 10px;
}
</style>