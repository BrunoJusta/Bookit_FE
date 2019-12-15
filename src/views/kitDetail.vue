<template>
  <div class="kitDetail">
    <div class="jumbotron">
      <h1 class="display-3">{{getKitById($route.params.kitId).name}}</h1>
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
      }

    },
    created(){
      this.kits = JSON.parse(localStorage.getItem("kits"))
    }
}
</script>
