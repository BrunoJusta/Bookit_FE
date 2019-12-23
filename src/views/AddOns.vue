<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <NavBooking/>
        <br>
        <div class="container">

            <div class="row">
                <div class="col-sm-6">

                    <h1>Bebidas</h1>
                    <div class="container" v-for="i in searchKits" :key="i.id">
                        <div class="form-check" v-if="i.type=='Drink'">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue"
                                    checked>
                                {{i.name}}
                            </label>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">

                    <h1>Comida</h1>
                    <div class="container" v-for="i in searchKits" :key="i.id">
                        <div class="form-check" v-if="i.type=='Food'">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue"
                                    checked>
                                {{i.name}}
                            </label>
                        </div>
                    </div>
                </div>
            </div>





        </div>



    </div>
</template>

<script>
import NavBooking from '@/components/NavBooking.vue';
    export default {
        data: function () {
            return {
                ingredients: []
            }
        },
        created() {
            this.ingredients = this.$store.state.ingredients
            alert(this.ingredients)
        },
        computed: {
            searchKits() {
                return this.ingredients;
            }
        },
         components: {
             NavBooking
    }
    }
</script>

<style lang="scss" scoped>

</style>