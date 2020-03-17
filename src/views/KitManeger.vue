<template>
    <div>
        <div id="title">
            <h1 id="redTitle">ADICIONAR MENU</h1>
            <hr class="back-line">
            <div class="container box">
            </div>
        </div>
        <AddKit />
    </div>
</template>

<script>
    import AddKit from '@/components/AddKit.vue';

    export default {
        data: function () {
            return {}
        },
        components: {
            AddKit
        }
    }
</script>

<style lang="scss" scoped>
    .box {
        background-color: white;
        margin-top: -35px;
        height: 35px;
        width: 480px;
        position: relative;
        display: block;
        z-index: 6
    }

    #redTitle {
        font-family: "bookMan";
        font-size: 45px;
        color: #B91C3B;
        display: block;
        z-index: 7;
        position: relative;
    }

    .back-line {
        background-color: #0A2463;
        margin-top: -35px;
        width: 90%;
        display: block;
        z-index: 5;
        position: relative;
        height: 1px;
    }

    #title {
        padding-top: 150px;
        padding-bottom: 50px;
    }
</style>