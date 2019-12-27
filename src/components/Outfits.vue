<template>
    <div>
        <div class="container">
            <div class="row" >
                <div class="form-check" v-for="i in searchOutfits" :key="i.id">
                    <div class="col-sm-4">
                        <div class="checkbox-wrapper">
                            <input type="checkbox" name="value" />
                            <img style="height:300px; width:auto" v-bind:src="i.source" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Outfits",
        data: function () {
            return {
                outfits: []
            }
        },
        created() {
            this.outfits = this.$store.state.outfits
        },
        computed: {
            searchOutfits() {
                return this.outfits;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>