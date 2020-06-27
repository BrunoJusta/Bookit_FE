<template>
  <div id="registration">
    <div class="container-full title">
      <h1 id="redTitle">Registo</h1>
      <hr class="back-line" />
      <div class="container" id="whiteRect">
        <p id="space">space</p>
      </div>
    </div>

    <div class="container col-sm-6">
      <b-form v-on:submit.prevent="addUser()" v-if="show">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <b-form-group class="input">
                <label for="input-2">Nome Próprio</label>
                <b-form-input
                  id="input-2"
                  class="rounded-0"
                  v-model="name"
                  required
                  placeholder="Nome"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-6">
              <b-form-group class="input" id="input-group-6">
                <label for="input-6">Apelido</label>
                <b-form-input
                  id="input-6"
                  class="rounded-0"
                  v-model="lastName"
                  required
                  placeholder="Apelido"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <b-form-group class="input" id="input-group-1">
                <label for="input-1">Email</label>
                <b-form-input
                  id="input-1"
                  class="rounded-0"
                  v-model="email"
                  type="email"
                  pattern="[a-z0-9._%+-]+@+[a-z]+.ipp.pt"
                  required
                  placeholder="email@escola.ipp.pt"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-6">
              <b-form-group class="input" id="input-group-3">
                <label for="input-3">Contacto</label>
                <b-form-input
                  id="input-3"
                  class="rounded-0"
                  v-model="number"
                  type="tel"
                  pattern="[0-9]{9}"
                  required
                  placeholder="Contacto"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <b-form-group class="input" id="input-group-7">
                <label for="input-7">Data de Nascimento</label>
                <b-form-input
                  id="input-7"
                  class="rounded-0"
                  v-model="birthDate"
                  type="date"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-6">
              <b-form-group class="input" id="input-group-8">
                <label for="input-8">Género</label>
                <b-form-select
                  id="input-8"
                  class="rounded-0"
                  v-model="gender"
                  :options="options"
                  required
                ></b-form-select>
              </b-form-group>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <b-form-group class="input" id="input-group-4">
                <label for="input-4">Password</label>
                <b-form-input
                  id="input-4"
                  class="rounded-0"
                  v-model="password"
                  type="password"
                  pattern=".{6,}"
                  required
                  placeholder="Introduzir password (min 6)"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-sm-6">
              <b-form-group class="input" id="input-group-5">
                <label for="input-5">Confirmar Password</label>
                <b-form-input
                  id="input-5"
                  class="rounded-0"
                  v-model="confPassword"
                  type="password"
                  pattern=".{6,}"
                  required
                  placeholder="Confirmar password"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
        </div>
        <div class="container">
          <b-button
            type="submit"
            id="show-btn"
            style="background-color:#0A2463; margin:10px"
            squared
          >Confirmar Registo</b-button>
          <b-button id="show-btn" style="background-color:#0A2463; margin:10px" squared>
            <router-link id="link" to="/login">Iniciar Sessão</router-link>
          </b-button>
          
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data: () => ({
    id: 0,
    email: "",
    name: "",
    birthDate: "",
    options: [
      {
        value: null,
        text: "Escolher"
      },
      {
        value: "male",
        text: "Masculino"
      },
      {
        value: "female",
        text: "Feminino"
      }
    ],
    gender: null,
    lastName: "",
    password: "",
    number: "",
    confPassword: "",
    show: true,
    schools: [],
    schoolExists: false,
    school: ""
  }),
  methods: {
    async addUser() {
      try {
        await this.$store.dispatch("postUser", {
          email: this.email,
          name: this.name,
          lastName: this.lastName,
          birthDate: this.birthDate,
          gender: this.gender,
          password: this.password,
          number: this.number,
          password2: this.confPassword
        });
      } catch (err) {
        alert(err);
      }
    },
  },
  computed: {}
};
</script>


<style lang="scss" scoped>
.input {
  padding: 5px;
}

#link {
  color: white;
}

label {
  float: left;
  margin-bottom: 0.5rem;
}

#redTitle {
  font-family: "bookMan";
  font-size: 45px;
  color: #b91c3b;
  display: block;
  z-index: 7;
  position: relative;
}

.back-line {
  background-color: #0a2463;
  margin-top: -35px;
  width: 60vw;
  display: block;
  z-index: 5;
  position: relative;
  height: 1px;
}

#space {
  color: white;
}

.title {
  padding-top: 150px;
  padding-bottom: 50px;
}

#whiteRect {
  background-color: white;
  margin-top: -35px;
  height: 35px;
  width: 200px;
  position: relative;
  display: block;
  z-index: 5;
}

#show-btn {
  background-color: #0a2463;
  transition: all 0.2s ease-in-out;
}

#show-btn:hover {
  transform: scale(1.1);
  text-decoration: underline;
}
</style>