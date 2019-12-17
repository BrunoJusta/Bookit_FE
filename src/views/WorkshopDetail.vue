<template>
  <div class="kitDetail">
    <br>
        <br>
        <br>
        <br>
    <div class="jumbotron">
      <h1 class="display-3">{{getWorkshopById($route.params.workshopId).name}}</h1>
      <b-button @click="sendInfo()" class="btn-book" squared>Enviar</b-button>
  </div>
  </div>

</template>

<script>
export default {
    data:function(){
    return{
      workshops:[],
      currentWS: [],
    };
    },
    methods:{
      getWorkshopById(id){
        return this.workshops.filter(
          workshop => workshop.id === id
        )[0]

      },
      sendInfo() {
        let clientName = sessionStorage.getItem("userOn")
        let kitName = this.workshops[1].name
        alert( "RESERVA CONCLUIDA COM SUCESSO" )
         this.$store.state.bookings.push({
            KitName: kitName,
            UserName: clientName,
          });
          
      }
    },
    created(){
      this.workshops = JSON.parse(localStorage.getItem("workshops"))
      let clientName = sessionStorage.getItem("userOn")
      let kitName = this.workshops[1].name
          this.currentWS.push({
            KitName: kitName,
            UserName: clientName,
          });
           sessionStorage.setItem("currentWS", JSON.stringify(this.currentWS));
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
