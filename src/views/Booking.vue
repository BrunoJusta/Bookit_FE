<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="container" style="justify-content: center;">
            <b-button v-on:click="displayInfo()" class="teste border-0"
                style="background-color:transparent; color:black; padding:10px">Informaçoes
            </b-button>
            <b-button v-on:click="displayAddOns()" class="teste border-0"
                style="background-color:transparent; color:black; padding:10px">
                Complementos</b-button>
            <b-button v-on:click="displayExtras()" class="teste border-0"
                style="background-color:transparent; color:black; padding:10px">Extras
            </b-button>
            <b-button v-on:click="displayDecor()" class="teste border-0"
                style="background-color:transparent; color:black; padding:10px">Decoração
            </b-button>
            <b-button v-on:click="displayOutfit()" class="teste border-0"
                style="background-color:transparent; color:black; padding:10px">Fardas
            </b-button>
        </div>
        <form @submit.prevent="addWorkshop()">

            <div class="container" v-if="kitInfo">
                <div v-bind:style="{display: kitInfo}">
                    <!-- MOTIVO -->
                    <label for="reason">Motivo</label>
                    <br>
                    <textarea id="reason" v-model="reason" rows="4" cols="50"></textarea>
                    <br>
                    <!-- MOTIVAÇÃO -->
                    <label for="date">Data:</label>
                    <input type="date" v-model="date">
                    <br>
                    <br>
                    <!-- MOTIVAÇÃO -->
                    <label for="hi">Hora de Início:</label>
                    <input type="time" id="hi" v-model="hi">
                    <br>
                    <!-- MOTIVAÇÃO -->
                    <label for="hf">Hora do Final:</label>
                    <input type="time" id="hf" v-model="hf">
                    <br>
                    <br>
                    <label for="people">Número de Pessoas:</label>
                    <input type="number" name="" id="people" min="20" max="50" v-model="people">
                </div>

            </div>

            <div class="container" v-if="addOns">
                <div  v-bind:style="{display: addOns}" ></div>

            </div>

            <div class="container" v-if="extras">
                <div></div>

            </div>

            <div class="container">
                <div></div>

            </div>

            <div class="container">
                <div></div>

            </div>
            <!-- <div v-if="kitInfo">
                <KitInfo  v-bind:style="{display: kitInfo} " />
            </div>
            <div v-if="addOns">
                <AddOns v-bind:style="{display: addOns}" />
            </div>
            <div v-if="extras">
                <Extras v-bind:style="{display: extras}" />
            </div>
            <div v-if="decor">
                <Decorations v-bind:style="{display: decor}" />
            </div>
            <div v-if="outfits">
                <Outfits v-bind:style="{display: outfits}" />
            </div>
            <br> -->
            <button type="submit" value="Adicionar" class="btn btn-primary">Adicionar</button>
        </form>

    </div>
</template>

<script>
    /*  import KitInfo from '@/components/KitInfo.vue';
    import AddOns from '@/components/AddOns.vue';
    import Extras from '@/components/Extras.vue';
    import Decorations from '@/components/Decorations.vue';
    import Outfits from '@/components/Outfits.vue'; */
    export default {
        data: function () {
            return {
                kitInfo: "block",
                addOns: "none",
                extras: "none",
                decor: "none",
                outfits: "none",
                reason: "",
                date: "",
                hi: "",
                hf: "",
                people: ""
            }
        },
        components: {
            /*  KitInfo,
             AddOns,
             Extras,
             Decorations,
             Outfits */
        },
        methods: {
            displayInfo() {
                this.kitInfo = "block"
                this.addOns = "none"
                this.extras = "none"
                this.decor = "none"
                this.outfits = "none"
            },
            displayAddOns() {
                this.kitInfo = "none"
                this.addOns = "block"
                this.extras = "none"
                this.decor = "none"
                this.outfits = "none"
            },
            displayExtras() {
                this.kitInfo = "none"
                this.addOns = "none"
                this.extras = "block"
                this.decor = "none"
                this.outfits = "none"
            },
            displayDecor() {
                this.kitInfo = "none"
                this.addOns = "none"
                this.extras = "none"
                this.decor = "block"
                this.outfits = "none"
            },
            displayOutfit() {
                this.kitInfo = "none"
                this.addOns = "none"
                this.extras = "none"
                this.decor = "none"
                this.outfits = "block"
            },
            addWorkshop() {
                alert("joe")
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>