<template>
    <div>
        <ingredient/>
        <extras/>
        <decor/>
        <outfits/>
    </div>
</template>

<script>
      import ingredient from "../components/AddIngredient.vue"
      import extras from "../components/AddExtras.vue"
      import decor from "../components/AddDecor.vue"
      import outfits from "../components/AddOutfits.vue"

    export default {
        components:{
            ingredient,
            extras,
            decor,
            outfits,
        }
    }
</script>

<style lang="scss" scoped>

</style>