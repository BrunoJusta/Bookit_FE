<template>
  <div class="kitDetail">
    <br>
        <br><br>
        <br>
    <div class="jumbotron">
      <h1 class="display-3">{{getKitById($route.params.kitId).name}}</h1>
      <p>{{this.drinks.length===0 ? 'sem bebida' : 'Bebidas: ' + this.drinks}}</p>
      <p>{{this.food.length===0 ? 'sem comida' : 'Comida: ' + this.food}}</p>

     <!--  <b-button @click="sendInfo()" class="btn-book" squared>Enviar</b-button> -->
      <b-button class="btn-book" squared>
      <router-link to="/addons" class="teste" style="color:white"> Escolher </router-link>
      </b-button>
  </div>
  </div>

</template>

<script>
export default {
    data:function(){
    return{
      kits:[],
      drinks:[],
      food:[]
    };
    },
    methods:{
      getKitById(id){

        this.food = this.kits.filter(
          kit => kit.id === id
        )[0].food

        this.drinks = this.kits.filter(
          kit => kit.id === id
        )[0].drinks

        return this.kits.filter(
          kit => kit.id === id
        )[0]
      },
      sendInfo() {
        let clientName = sessionStorage.getItem("userOn")
        let kitName = this.kits[1].name
        alert( "RESERVA CONCLUIDA COM SUCESSO" )
         this.$store.state.bookings.push({
            KitName: kitName,
            UserName: clientName,
          });
          localStorage.setItem("bookings", JSON.stringify(this.$store.state.bookings));
      }
    },
    created(){
      this.kits = JSON.parse(localStorage.getItem("kits"))
    },
}
</script>
<style lang="scss" scoped>
.btn-book{
    font-size: 18px;
    background-color:#0A2463; 
    margin-bottom:-60px;
}
</style>
