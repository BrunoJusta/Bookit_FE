<template>
  <div>
    <h3 class="menuNameType">{{this.currentMenuType}} - {{this.currentMenuName}}</h3>
    <div class="container span">
      <span v-bind:style="{fontWeight: kitInfoFont}">Informações</span>
      <span v-bind:style="{fontWeight: addOnsFont}">Complementos</span>
      <span v-bind:style="{fontWeight: extraFont}">Extras</span>
      <span v-bind:style="{fontWeight: decorsFont}">Decoração</span>
      <span v-bind:style="{fontWeight: outfitFont}">Fardas</span>
      <span v-bind:style="{fontWeight: resumeFont}">Resumo</span>
    </div>
    <form @submit.prevent="addBooking()">
      <div class="container" v-bind:style="{display: kitInfo}">
        <div class="row">
          <div class="col-sm-5">
            <div class="form-group">
              <label for="reason" class="lable">Motivo</label>
              <textarea class="form-control rounded-0" style="resize: none;" id="reason" v-model="reason" rows="4"
                cols="50" required></textarea>
            </div>
          </div>
          <div class="col-sm-3">
            <b-form-group class="input" id="input-group-6">
              <label class="lable" for="date">Data</label>
              <b-form-input type="date" class="rounded-0" v-model="date" required></b-form-input>
            </b-form-group>
            <label class="lable" for="schools">Local</label>
            <select id="schools" class="rounded-0" v-model="location">
              <option v-for="school in schools" :key="school.school_id" :value="school">{{school.school}}
              </option>
            </select>
          </div>
          <div class="col-sm-2">
            <b-form-group class="input" id="input-group-6">
              <label class="lable" for="hi">Hora de Início</label>
              <b-form-input type="time" id="hi" class="rounded-0" v-model="hi" required></b-form-input>
            </b-form-group>
            <b-form-group class="input" id="input-group-6">
              <label class="lable" for="hf">Hora do Final</label>
              <b-form-input type="time" id="hf" class="rounded-0" v-model="hf" required></b-form-input>
            </b-form-group>
          </div>
          <div class="col-sm-2">
            <b-form-group class="input" id="input-group-6">
              <label class="lable" for="people">Número de Pessoas</label>
              <b-form-input type="number" id="people" min="20" max="50" class="rounded-0" v-model="people" required>
              </b-form-input>
            </b-form-group>
          </div>
        </div>
        <button type="button" v-on:click="displayAddOns()" class="btn btn-primary border-0 rounded-0"
          v-bind:style="{fontWeight: extraFont}">Seguinte</button>
      </div>
      <div class="container" v-bind:style="{display: addOns}">
        <div class="row">
          <div align="right" class="col-sm-5">
            <h4 class="subtitle">Bebidas</h4>
            <div v-for="i in ingredients" :key="i.ingredient_id">
              <b-form-group v-if="i.type=='Bebida' && i.name !== 'Sem Bebida' && !menuIngs.includes(i.name)">
                <b-form-checkbox-group id="checkbox-group-2" v-model="checkedIngs">
                  <b-form-checkbox :value="i">{{i.name}}</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
            </div>
          </div>
          <div class="col-sm-2"></div>
          <div align="left" class="col-sm-5">
            <h4 class="subtitle">Comida</h4>
            <div v-for="i in ingredients" :key="i.ingredient_id">
              <b-form-group v-if="i.type=='Comida' && i.name !== 'Sem Comida' && !menuIngs.includes(i.name)">
                <b-form-checkbox-group id="checkbox-group-2" v-model="checkedIngs">
                  <b-form-checkbox :value="i">{{i.name}}</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
            </div>
          </div>
        </div>
        <button type="button" v-on:click="displayInfo()" class="btn btn-primary border-0 rounded-0"
          v-bind:style="{fontWeight: kitInfoFont}">Anterior</button>
        <button type="button" v-on:click="displayExtras()" class="btn btn-primary border-0 rounded-0"
          v-bind:style="{fontWeight: extraFont}">Seguinte</button>
      </div>
      <div class="container" v-bind:style="{display: extra}">
        <div class="container" style="max-width:200px;" align="left" v-for="i in searchExtras" :key="i.extra_id">
          <b-form-group>
            <b-form-checkbox-group id="checkbox-group-2" v-model="checkedExtras">
              <b-form-checkbox :value="i">{{i.name}}</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </div>
        <button type="button" v-on:click="displayAddOns()" class="btn btn-primary border-0 rounded-0"
          v-bind:style="{fontWeight: kitInfoFont}">Anterior</button>
        <button type="button" v-on:click="displayDecor()" class="btn btn-primary border-0 rounded-0"
          v-bind:style="{fontWeight: extraFont}">Seguinte</button>
      </div>
      <div class="container" v-bind:style="{display: decors}">
        <div class="container" style="max-width:250px;" align="left" v-for="i in searchDecor" :key="i.decoration_id">
          <b-form-group>
            <b-form-checkbox-group id="checkbox-group-2" v-model="checkedDecor">
              <b-form-checkbox :value="i">{{i.name}}</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </div>
        <button type="button" v-on:click="displayExtras()" class="btn btn-primary border-0 rounded-0"
          v-bind:style="{fontWeight: kitInfoFont}">Anterior</button>
        <button type="button" v-on:click="displayOutfit()" class="btn btn-primary border-0 rounded-0"
          v-bind:style="{fontWeight: extraFont}">Seguinte</button>
      </div>
      <div class="container" v-bind:style="{display: outfit}">
        <div class="row">
          <div v-for="i in searchOutfits" :key="i.outfit_id" class="col-sm-2">
            <button type="button" style="background-color:transparent" class="border-0"
              @click="chooseOutfit(i.outfit_id, i.name)">
              <img style="height:230px; width:auto; object-fit: cover;" id="btnImg" v-bind:src="i.img" />
            </button>
          </div>
        </div>
        <button type="button" v-on:click="displayDecor()" class="btn btn-primary border-0 rounded-0"
          v-bind:style="{fontWeight: kitInfoFont}">Anterior</button>
      </div>
      <div class="container" v-bind:style="{display: resume}">
        <div class="row">
          <div align="left" class="col-sm-4">
            <p v-if="reason != ''"><b>Motivo </b>{{reason}}</p>
            <p v-if="date != ''"><b>Data </b>{{date}}</p>
            <p v-if="hf != ''"><b>Duração </b>{{hi}} - {{hf}}</p>
            <p v-if="people != ''"><b>Nº Pessoas </b>{{people}}</p>
          </div>
          <div align="left" class="col-sm-4">
            <p v-if="location != ''"><b>Local </b>{{locationName}}</p>
            <p v-if="checkedIngsNames.length != 0">
              <b>Complementos </b>{{ checkedIngsNames.length == 0 ? 'Fechar' : '' + checkedIngsNames }}
            </p>
          </div>
          <div align="left" class="col-sm-4">
            <p v-if="checkedExtrasNames.length != 0">
              <b>Extras </b>{{ checkedExtrasNames.length == 0 ? 'Fechar' : '' + checkedExtrasNames }}</p>
            <p v-if="checkedDecorNames.length != 0">
              <b>Decoração </b>{{ checkedDecorNames.length == 0 ? 'Fechar' : '' + checkedDecorNames }}</p>
            <p v-if="checkedImageTxt.length != 0">
              <b>Farda </b>{{ checkedImageTxt.length == 0 ? 'Fechar' : '' + checkedImageTxt }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="form-group observation">
            <label for="observation" class="lable">Observações</label>
            <textarea class="form-control rounded-0" style="resize: none;" id="observation" v-model="observation"
              rows="4" cols="50"></textarea>
          </div>
        </div>
        <button type="button" v-on:click="displayOutfit()" class="btn btn-primary border-0 rounded-0"
          v-bind:style="{fontWeight: kitInfoFont}">Anterior</button>
        <b-button type="submit" @click="saveCurrentKit()" value="Adicionar" class="btn btn-primary border-0" squared>
          Confirmar</b-button>
        <b-button type="button" @click="cancelMenuBooking()" value="Adicionar" class="btn btn-primary border-0" squared>
          Cancelar</b-button>
      </div>
    </form>
  </div>
</template>

<script>
  import router from '../router';
  import {
    mapGetters
  } from "vuex";

  export default {
    data: function () {
      return {
        kitInfo: "block",
        addOns: "none",
        extra: "none",
        decors: "none",
        outfit: "none",
        resume: "none",
        kitInfoFont: "bold",
        addOnsFont: "normal",
        extraFont: "normal",
        decorsFont: "normal",
        outfitFont: "normal",
        resumeFont: "normal",
        reason: "",
        observation: "",
        date: "",
        hi: "",
        hf: "",
        people: "",
        ingredients: [],
        extras: [],
        decor: [],
        outfits: [],
        checkedIngs: [],
        checkedIngsIds: [],
        checkedIngsNames: [],
        checkedExtras: [],
        checkedExtrasIds: [],
        checkedExtrasNames: [],
        checkedDecor: [],
        checkedDecorIds: [],
        checkedDecorNames: [],
        checkedImage: "",
        checkedImageTxt: "",
        schools: [],
        location: "",
        locationId: "",
        locationName: "",
        menuIngs: [],
        currentMenuType: "",
        currentMenuName: "",
        userOn: [],
        menu: []
      };
    },
    created() {
      this.getAllSchools();
      this.getAllIngredients();
      this.getAllExtras();
      this.getAllOutfits();
      this.getAllDecorations();

      if (localStorage.getItem("currentMenu")) {
        this.menu = JSON.parse(
          localStorage.getItem("currentMenu")
        );
      }

      this.userOn = this.$store.state.loggedUser
      this.currentMenuType = this.$store.state.currentMenu.type;
      this.currentMenuName = this.$store.state.currentMenu.name;
      this.extras = this.$store.state.extras;
      this.decor = this.$store.state.decor;
      this.outfits = this.$store.state.outfits;
      this.menuIngs = JSON.parse(localStorage.getItem("currentMenuIngs"));
    },
    updated() {
      this.schools = this.$store.state.schools;
      this.ingredients = this.$store.state.ingredients;
      this.extras = this.$store.state.extras;
      this.decor = this.$store.state.decor;
      this.outfits = this.$store.state.outfits;
    },
    methods: {
      async getAllSchools() {
        try {
          await this.$store.dispatch("fetchSchools");
          this.schools = this.getSchools.data;
        } catch (err) {
          alert(err);
        }
      },
      async getAllIngredients() {
        try {
          await this.$store.dispatch("fetchIngredients");
          this.ingredients = this.getIngredients.data;
        } catch (err) {
          alert(err);
        }
      },
      async getAllExtras() {
        try {
          await this.$store.dispatch("fetchExtras");
          this.extras = this.getExtras.data;
        } catch (err) {
          alert(err);
        }
      },
      async getAllDecorations() {
        try {
          await this.$store.dispatch("fetchDecorations");
          this.decor = this.getDecorations.data;
        } catch (err) {
          alert(err);
        }
      },
      async getAllOutfits() {
        try {
          await this.$store.dispatch("fetchOutfits");
          this.outfits = this.getOutfits.data;
        } catch (err) {
          alert(err);
        }
      },
      async addBooking() {
        try {
          await this.$store.dispatch("postBooking", {
            id: this.userOn.id,
            reason: this.reason,
            date: this.date,
            school: this.locationId,
            initHour: this.hi,
            endHour: this.hf,
            numberPeople: this.people,
            outfit: this.checkedImage,
            observations: this.observation,
            menu: this.menu.id,
            decor: this.checkedDecorIds,
            extras: this.checkedExtrasIds,
            ing: this.checkedIngsIds,
          });
        } catch (err) {
          alert(err);
        }
      },
      displayInfo() {
        this.kitInfo = "block";
        this.addOns = "none";
        this.extra = "none";
        this.decors = "none";
        this.outfit = "none";
        this.resume = "none";
        this.kitInfoFont = "bold";
        this.addOnsFont = "normal";
        this.extraFont = "normal";
        this.decorsFont = "normal";
        this.outfitFont = "normal";
        this.resumeFont = "normal";
        window.scrollTo(0, 0);
      },
      displayAddOns() {
        if (
          this.reason != "" &&
          this.date != "" &&
          this.hi != "" &&
          this.hf != "" &&
          this.schools != "" &&
          this.location != "" &&
          this.people != ""
        ) {
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
              parseInt(month) > new Date().getMonth() + 1
            ) {
              this.kitInfo = "none";
              this.addOns = "block";
              this.extra = "none";
              this.decors = "none";
              this.outfit = "none";
              this.resume = "none";
              this.kitInfoFont = "normal";
              this.addOnsFont = "bold";
              this.extraFont = "normal";
              this.decorsFont = "normal";
              this.outfitFont = "normal";
              this.resumeFont = "normal";
              window.scrollTo(0, 0);
            } else if (
              parseInt(day) > new Date().getDate() &&
              parseInt(month) >= new Date().getMonth() + 1
            ) {
              this.kitInfo = "none";
              this.addOns = "block";
              this.extra = "none";
              this.decors = "none";
              this.outfit = "none";
              this.resume = "none";
              this.kitInfoFont = "normal";
              this.addOnsFont = "bold";
              this.extraFont = "normal";
              this.decorsFont = "normal";
              this.outfitFont = "normal";
              this.resumeFont = "normal";
              window.scrollTo(0, 0);
            } else {
              // eslint-disable-next-line no-undef
              Swal.fire({
                icon: "warning",
                text: "Introduza uma data válida!"
              });
            }
          }
        } else {
          // eslint-disable-next-line no-undef
          Swal.fire({
            icon: "warning",
            text: "Toda a informação desta página deve ser preenchida!"
          });
        }
      },
      displayExtras() {
        this.splitSchool()
        this.splitIngs()
        this.kitInfo = "none";
        this.addOns = "none";
        this.extra = "block";
        this.decors = "none";
        this.outfit = "none";
        this.resume = "none";
        this.kitInfoFont = "normal";
        this.addOnsFont = "normal";
        this.extraFont = "bold";
        this.decorsFont = "normal";
        this.outfitFont = "normal";
        this.resumeFont = "normal";
        window.scrollTo(0, 0);
      },
      displayDecor() {
        this.splitExtras()
        this.kitInfo = "none";
        this.addOns = "none";
        this.extra = "none";
        this.decors = "block";
        this.outfit = "none";
        this.resume = "none";
        this.kitInfoFont = "normal";
        this.addOnsFont = "normal";
        this.extraFont = "normal";
        this.decorsFont = "bold";
        this.outfitFont = "normal";
        this.resumeFont = "normal";
        window.scrollTo(0, 0);
      },
      displayOutfit() {
        this.splitDecors()
        this.kitInfo = "none";
        this.addOns = "none";
        this.extra = "none";
        this.decors = "none";
        this.outfit = "block";
        this.resume = "none";
        this.kitInfoFont = "normal";
        this.addOnsFont = "normal";
        this.extraFont = "normal";
        this.decorsFont = "normal";
        this.outfitFont = "bold";
        this.resumeFont = "normal";
        window.scrollTo(0, 0);
      },
      displayResume() {
        this.kitInfo = "none";
        this.addOns = "none";
        this.extra = "none";
        this.decors = "none";
        this.outfit = "none";
        this.resume = "block";
        this.kitInfoFont = "normal";
        this.addOnsFont = "normal";
        this.extraFont = "normal";
        this.decorsFont = "normal";
        this.outfitFont = "normal";
        this.resumeFont = "bold";
        window.scrollTo(0, 0);
      },
      cancelMenuBooking() {
        router.push({
          name: 'menuGallery'
        })
      },
      chooseOutfit(id, name) {
        this.checkedImage = id;
        this.checkedImageTxt = name;
        this.displayResume();
      },
      splitExtras() {
        this.checkedExtrasIds = []
        this.checkedExtrasNames = []
        for (const e of this.checkedExtras) {
          this.checkedExtrasNames.push(e.name)
          this.checkedExtrasIds.push(e.extra_id)
        }
      },
      splitDecors() {
        this.checkedDecorIds = []
        this.checkedDecorNames = []
        for (const d of this.checkedDecor) {
          this.checkedDecorNames.push(d.name)
          this.checkedDecorIds.push(d.decoration_id)
        }
      },
      splitIngs() {
        this.checkedIngsIds = []
        this.checkedIngsNames = []
        for (const i of this.checkedIngs) {
          this.checkedIngsNames.push(i.name)
          this.checkedIngsIds.push(i.ingredient_id)
        }
      },
      splitSchool() {
        this.locationId = this.location.school_id
        this.locationName = this.location.school
      }
    },
    computed: {
      ...mapGetters(["getSchools"]),
      ...mapGetters(["getExtras"]),
      ...mapGetters(["getIngredients"]),
      ...mapGetters(["getOutfits"]),
      ...mapGetters(["getDecorations"]),
      searchExtras() {
        return this.extras;
      },
      searchDecor() {
        return this.decor;
      },
      searchOutfits() {
        return this.outfits;
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

  #btnImg {
    border: 0px solid #0a2463;

    transition: all 0.2s ease-in-out;
    transition: border-width 0.2s linear;
  }

  #btnImg:hover {
    animation: slide-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
    }
  }

  span {
    padding: 10px;
  }

  .span {
    padding-bottom: 70px;
  }

  #schools {
    width: 100%;
    height: 38px;
    border-color: #ced4da;
  }

  .observation {
    margin: auto;
    width: 60%;
  }

  @media screen and (max-width: 1096px) {
    .observation {
      margin: auto;
      width: 91vw;
    }
  }
</style>