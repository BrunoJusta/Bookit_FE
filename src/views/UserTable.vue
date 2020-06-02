<template>
  <div style="padding-bottom: 100px;">
    <div class="container-full title">
      <h1 id="redTitle">UTILIZADORES</h1>
      <hr class="back-line" />
      <div class="container" id="whiteRect"></div>
    </div>

    <div class="container">
      <b-input class="rounded-0" type="text" v-model="searchUsers" style="max-width: 300px; margin: auto;"
        placeholder="Pesquisar..."></b-input>
      <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
      <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small hover
        head-variant="dark" responsive="sm" :items="this.filteredUsers" :fields="fields">
        <template v-slot:cell(actions)="row">
          <b-button size="sm" v-if="row.item.type == 'User' && row.item.email != $store.getters.getEmail"
            @click="editUsers(row.item.user_id, 0)" class="mr-1 adminBtn">Tornar administrador</b-button>
          <b-button size="sm" v-if="row.item.type == 'Admin' && row.item.email != $store.getters.getEmail"
            @click="editUsers(row.item.user_id, 1) " class="mr-1 userBtn">Tornar cliente</b-button>
          <b-button size="sm" v-if="row.item.email != $store.getters.getEmail && row.item.type !== 'User'"
            @click="editUsers(row.item.user_id, 2)" class="mr-1 blockBtn">
            Bloquear
            <i class="fas fa-lock"></i>
          </b-button>
          <b-button size="sm" v-if="row.item.email != $store.getters.getEmail && row.item.type === 'User'"
            @click="block(row.item.user_id)" class="mr-1 unlockBtn">
            Desbloquear
            <i class="fas fa-lock-open"></i>
          </b-button>
          <b-button size="sm" @click="deleteUser(row.item.user_id)" v-if="row.item.email != $store.getters.getEmail"
            class="mr-1 deleteBtn">
            <i class="fas fa-trash-alt"></i>
          </b-button>
          <span v-else>Sem Ações</span>
        </template>
      </b-table>
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"
        style="float:right;"></b-pagination>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  export default {
    data: function () {
      return {
        perPage: 10,
        currentPage: 1,
        fields: [{
            key: "name",
            label: "Nome",
            sortable: true
          },
          {
            key: "lastName",
            label: "Apelido",
            sortable: true
          },
          {
            key: "email",
            label: "E-mail",
            sortable: true
          },
          {
            key: "number",
            label: "Contacto",
            sortable: false
          },
          {
            key: "type",
            label: "Tipo",
            sortable: false
          },
          {
            key: "actions",
            label: "Ações",
            sortable: false
          }
        ],
        users: [],
        searchUsers: ""
      };
    },
    created() {
      this.getUsers()
    },
    methods: {
      async getUsers() {
        try {
          await this.$store.dispatch("fetchUsers");
          this.users = this.getAllUsers.data;
        } catch (err) {
          alert(err);
        }
      },
      async editUsers(id, newType) {
        try {
          await this.$store.dispatch("editUsers", {id: id, newType: newType});
        } catch (err) {
          alert(err);
        }
      },
      async deleteUser(ID) {
        try {
          await this.$store.dispatch("deleteUser", {id: ID});
        } catch (err) {
          alert(err);
        }
      },
      /*block(id) {
        for (let i in this.users) {
          if (this.users[i].id === id) {
            if (this.users[i].userType !== "bloqueado") {
              //bloquear
              Swal.fire({
                icon: "warning",
                text: "Deseja bloquear este utilizador?",
                showCancelButton: true
              }).then(result => {
                if (result.value) {
                  this.users[i].userType = "bloqueado";
                  localStorage.setItem("users", JSON.stringify(this.users));
                  Swal.fire({
                    icon: "success",
                    text: "Utilizador bloqueado!"
                  });
                }
              });
            } else if (this.users[i].userType === "bloqueado") {
              //desbloquear
              Swal.fire({
                icon: "warning",
                text: "Deseja desbloquear este utilizador?",
                showCancelButton: true
              }).then(result => {
                if (result.value) {
                  this.users[i].userType = "cliente";
                  localStorage.setItem("users", JSON.stringify(this.users));
                  Swal.fire({
                    icon: "success",
                    text: "Utilizador desbloqueado!"
                  });
                }
              });
            }
          }
        }
      },
      changeToAdmin(id) {
        Swal.fire({
          icon: "warning",
          text: 'Tornar este utilizador em "Admin"?',
          showCancelButton: true
        }).then(result => {
          if (result.value) {
            for (let i in this.users) {
              if (this.users[i].id === id) {
                this.users[i].userType = "admin";
                localStorage.setItem("users", JSON.stringify(this.users));
                Swal.fire({
                  icon: "success",
                  text: "Tipo de utilizador alterado!"
                });
              }
            }
          }
        });
      },
      changeToClient(id) {
        Swal.fire({
          icon: "warning",
          text: 'Tornar este utilizador em "cliente"?',
          showCancelButton: true
        }).then(result => {
          if (result.value) {
            for (let i in this.users) {
              if (this.users[i].id === id) {
                this.users[i].userType = "cliente";
                localStorage.setItem("users", JSON.stringify(this.users));
                Swal.fire({
                  icon: "success",
                  text: "Tipo de utilizador alterado!"
                });
              }
            }
          }
        });
      } */
    },
    computed: {
      ...mapGetters(["getAllUsers"]),
      filteredUsers() {
        return this.users.filter(user => {
          let filterRunResult = true;
          if (this.searchUsers == "") {
            return filterRunResult;
          }
          //por nome
          if (user.name.toLowerCase().includes(this.searchUsers.toLowerCase())) {
            filterRunResult = user.name
              .toLowerCase()
              .includes(this.searchUsers.toLowerCase());
            return filterRunResult;
          }
          //por apelido
          if (
            user.lastName.toLowerCase().includes(this.searchUsers.toLowerCase())
          ) {
            filterRunResult = user.lastName
              .toLowerCase()
              .includes(this.searchUsers.toLowerCase());
            return filterRunResult;
          }
          //por email
          if (user.email.toLowerCase().includes(this.searchUsers.toLowerCase())) {
            filterRunResult = user.email
              .toLowerCase()
              .includes(this.searchUsers.toLowerCase());
            return filterRunResult;
          }
          //por tipo
          if (
            user.type.toLowerCase().includes(this.searchUsers.toLowerCase())
          ) {
            filterRunResult = user.type
              .toLowerCase()
              .includes(this.searchUsers.toLowerCase());
            return filterRunResult;
          }
        });
      }
    },
    rows() {
      return this.users.length;
    }
  };
</script>

<style lang="scss" scoped>
  #redTitle {
    font-family: "bookMan";
    font-size: 45px;
    color: #b91c3b;
    display: block;
    z-index: 7;
    position: relative;
  }

  .back-line {
    background-color: #0a2463;
    margin-top: -35px;
    width: 90%;
    display: block;
    z-index: 5;
    position: relative;
  }

  #space {
    color: white;
  }

  .title {
    padding-top: 180px;
    padding-bottom: 80px;
  }

  #whiteRect {
    background-color: white;
    margin-top: -35px;
    height: 35px;
    width: 380px;
    position: relative;
    display: block;
    z-index: 5;
  }

  .mb-2 {
    --webkit-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
    -moz-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
    box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
  }

  .btn-book {
    font-size: 18px;
    background-color: #0a2463;
    margin-bottom: -60px;
  }

  .table {
    padding-bottom: 100px;
  }

  .deleteBtn {
    background-color: #b91c3b;
    border: none;
    border-radius: 0;
  }

  .unlockBtn {
    background-color: #343a40;
    border: none;
    border-radius: 0;
  }

  .blockBtn {
    background-color: #343a40;
    border: none;
    border-radius: 0;
  }

  .userBtn {
    background-color: #0a2463;
    border: none;
    border-radius: 0;
  }

  .adminBtn {
    background-color: #0a2463;
    border: none;
    border-radius: 0;
  }
</style>