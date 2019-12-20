<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h2 id="redSubTitle">RESERVAS</h2>
        <br>

        <div class="container">
             <div>

 <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>



            <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered fixed small hover head-variant="dark" :items="this.bookings"></b-table>
        </div>
        </div>
       


    </div>
</template>

<script>
    export default {
        name: 'BookingTables',
        computed: {
            searchBookings() {
                return this.bookings;
            }
        },
        data: function () {
            return {perPage: 2,
        currentPage: 1,};
            bookings: [];
            x: "";
        },
        created() {
            if (localStorage.getItem("bookings")) {
                this.bookings = JSON.parse(localStorage.getItem("bookings"))
            }
        },computed: {
      rows() {
        return this.bookings.length
      }
    }

    }
</script>

<style lang="scss" scoped>
    #card-maker {
        padding-bottom: 60px;
        padding-top: 30px;
    }


    #redSubTitle {
        font-family: "bookMan";
        font-size: 35px;
        color: #B91C3B;
    }

    .mb-2 {
        --webkit-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
        -moz-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
        box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
    }

    .btn-book {
        font-size: 18px;
        background-color: #0A2463;
        margin-bottom: -60px;
    }
</style>