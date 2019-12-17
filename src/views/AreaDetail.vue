<template>
  <div class="kitDetail">
      <br>
    <br>
    <br>
    <br>
    <br>
    <div class="jumbotron">
      <h1 class="display-3">{{getAreaById($route.params.areaId).name}}</h1>
      <b-button @click="sendInfo()" class="btn-book" squared>Enviar</b-button>
  </div>
  </div>

</template>

<script>
export default {
    data:function(){
    return{
      areas:[],
    };
    },
    methods:{
      getAreaById(id){
        return this.areas.filter(
          area => area.id === id
        )[0]
      },
      sendInfo() {
        let clientName = sessionStorage.getItem("userOn")
        let KitName = this.areas[1].name
        alert( "RESERVA CONCLUIDA COM SUCESSO" )
         this.$store.state.bookings.push({
            KitName: KitName,
            UserName: clientName,
          });
          localStorage.setItem("bookings", JSON.stringify(this.$store.state.bookings));
      }
    },
    created(){
      this.areas = JSON.parse(localStorage.getItem("areas"))
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
