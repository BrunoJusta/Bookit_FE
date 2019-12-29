<template>
  <div class="kitDetail">
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="jumbotron">
      <h1 class="display-3">{{getAreaById($route.params.areaId).name}}</h1>
      <b-button @click="saveCurrentArea()" class="btn-book" squared>
        <router-link to="/areasbooking" style="color:white"> Escolher </router-link>
      </b-button>
    </div>
  </div>

</template>

<script>
  export default {
    data: function () {
      return {
        areas: [],
        areaName: "",
        currentArea: []
      };
    },
    created() {
      this.areas = JSON.parse(localStorage.getItem("areas"))
    },
    methods: {
      getAreaById(id) {
        this.areaName = this.areas.filter(
          area => area.id === id
        )[0].name

        return this.areas.filter(
          area => area.id === id
        )[0]
      },
      saveCurrentArea() {
        this.currentArea.push({
          areaName: this.areaName,
        });
        localStorage.setItem("currentArea", JSON.stringify(this.currentArea));
      }
    }
  }
</script>
<style lang="scss" scoped>
  .btn-book {
    font-size: 18px;
    background-color: #0A2463;
    margin-bottom: -60px;
  }
</style>