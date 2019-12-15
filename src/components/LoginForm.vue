<template>
<div id="loginform">
        <br>
        <br>

        <h1>ENTRAR</h1>
        <br>

        <div class="container col-sm-4">

            <b-form v-on:submit.prevent="login()" v-if="show">
                <b-form-group id="input-group-1" label="Email:" label-for="input-1">
                    <b-form-input id="input-1" v-model="emailLogin" type="email" required placeholder="Introduzir email">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-4" label="Password:" label-for="input-4">
                    <b-form-input id="input-4" v-model="passwordLogin" type="password" required
                        placeholder="Introduzir password">
                    </b-form-input>
                </b-form-group>


                <b-button id="show-btn" style="background-color:#0A2463;" squared>
                    <router-link to="/register">Registar</router-link>
                </b-button>

                <b-button  type="submit" id="show-btn" style="background-color:#0A2463;" squared>Confirmar</b-button>
                
            </b-form>
        </div>

    </div>
</template>

<script>
export default {
  name: "LoginForm",
   data: () => ({
       emailLogin:"",
       passwordLogin: "",
       show:true
   }),
   created: function () {  //qd abres esta pagina vai acontecer isto
            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"))
            }
            if(localStorage.getItem("loggedUser")){
                this.$store.state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
            }
        },
   methods:{
       login(){
           this.$store.commit('LOGIN',{
               email:this.emailLogin,
               password:this.passwordLogin,
           })
       },
   },
};
</script>