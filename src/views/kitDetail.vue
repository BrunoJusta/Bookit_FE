<template>
  <div class="kitDetail">
    <div class="jumbotron">
      <h1 class="display-3">{{getKitById($route.params.kitId).name}}</h1>
      <b-button @click="sendInfo()" class="btn-book" squared>Enviar</b-button>
  </div>
  </div>

</template>

<script>
export default {
    data:function(){
    return{
      kits:[],
    };
    },
    methods:{
      getKitById(id){
        return this.kits.filter(
          kit => kit.id === id
        )[0]
      },
      sendInfo() {
        let clientName = sessionStorage.getItem("userOn")
        let kitName = this.kits[1].name
        alert( "RESERVA CONCLUIDA COM SUCESSO" )
         this.$store.state.bookings.push({
            kitName: kitName,
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
