<template>
    <div>
        <div class="row">
            <div class="col-sm-12">
                <h1>Decorações</h1>
                <div class="container" v-for="d in searchDecor" :key="d.id">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked>
                        {{d.name}}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Decorations",
        data: function () {
            return {
                decor: []
            }
        },
        created() {
            this.decor = this.$store.state.decor
        },
        computed: {
            searchDecor() {
                return this.decor;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>