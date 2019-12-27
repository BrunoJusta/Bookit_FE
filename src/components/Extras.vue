<template>
    <div>
        <div class="row">
            <div class="col-sm-12">
                <h1>Extras</h1>
                <div class="container" v-for="e in searchExtras" :key="e.id">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked>
                        {{e.name}}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Extras",
        data: function () {
            return {
                extras: []
            }
        },
        created() {
            this.extras = this.$store.state.extras
        },
        computed: {
            searchExtras() {
                return this.extras;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>