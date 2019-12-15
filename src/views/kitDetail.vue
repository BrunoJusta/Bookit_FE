<template>
  <div class="kitDetail">
    <div class="jumbotron">
      <h1 id="ola"> dsadsadsadsa</h1>
      <h1 class="display-3">{{getKitById($route.params.kitId).name}}</h1>
      <button @click="sendInfo()">enviar</button>
  </div>
  </div>

</template>

<script>
export default {
    data:function(){
    return{
      kits:[]
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
        let kitName = ""
        alert(document.getElementById("ola").value + " dasdsa " + clientName)
      }
    },
    created(){
      this.kits = JSON.parse(localStorage.getItem("kits"))
    }
}
</script>
