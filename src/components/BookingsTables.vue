<template>
    <div>

            <h2 id="redSubTitle">Coffee Break</h2>
            <hr class="back-line">
         
                    <table class="table">
                        <thead >
                            <tr v-for="k in searchBookings" :key="k.id" >
                                <th>UserName</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">{{k.id}}</td>
                                <td>{{k.KitName}}</td>
                                <td>{{k.ClientName}}</td>
                            </tr>
                        </tbody>
                    </table>


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
            return {};
            bookings: [];
            x: "";
        },
        created() {
            if (localStorage.getItem("bookings")) {
                this.bookings = JSON.parse(localStorage.getItem("bookings"))
            }
        },

    }
</script>

<style lang="scss" scoped>
#card-maker{
padding-bottom: 60px;
padding-top: 30px;
}

#redSubTitle{
  font-family:"bookMan";
  font-size: 35px;
  color: #B91C3B;
}
.mb-2 {
--webkit-box-shadow: 0px 4px 5px -1px rgba(184,184,184,0.31);
-moz-box-shadow: 0px 4px 5px -1px rgba(184,184,184,0.31);
box-shadow: 0px 4px 5px -1px rgba(184,184,184,0.31);
}

.btn-book{
    font-size: 18px;
    background-color:#0A2463; 
    margin-bottom:-60px;
}

.back-line{
    background-color:#0A2463;
    margin-top: -10px;
    margin-left: -50px;
    width: 1200px;

    
}
</style>