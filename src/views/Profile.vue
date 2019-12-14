<template>
    <div>
        <h1>PERFIL</h1> 
        <button v-if="this.$store.state.loggedUser.length != 0" v-on:click="logout()" style="background-color:#0A2463; color:white" squared>
        Logout</button>
    </div>
</template>

<script>
    export default {
          methods:{
    logout(){
       this.$store.commit('LOGOUT')
    }
  }
    }
</script>

<style lang="scss" scoped>

</style>