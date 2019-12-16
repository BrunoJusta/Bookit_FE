<template>
  <div class="kitDetail">
    <div class="jumbotron">
      <h1 class="display-3">{{getWSById($route.params.workshopId).name}}</h1>
      <b-button @click="sendInfo()" class="btn-book" squared>Enviar</b-button>
  </div>
  </div>

</template>

<script>
export default {
    data:function(){
    return{
      workshops:[],
    };
    },
    methods:{
      getWSById(id){
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
          localStorage.setItem("bookings", JSON.stringify(this.$store.state.bookings));
      }
    },
    created(){
      this.workshops = JSON.parse(localStorage.getItem("workshops"))
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
