<template>
  <div class="">
    <router-link class="link-home" to="/">Home</router-link>
    <div class="inner flex-center">
      <div class="card flex-center">
        <div class="card-container">
          <ul class="contact">
            <div class="wrapper-info">
              <span>&#10004;</span>
              <li>{{ findContact.name }}</li>
            </div>
            <div class="wrapper-info">
              <span>&#10004;</span>
              <li>{{ findContact.sername }}</li>
            </div>
            <div class="wrapper-info">
              <span>&#9742;</span>
              <li>+{{ findContact.tel }}</li>
            </div>
          </ul>
        </div>
        <button class="btn-edit" @click="showEdit = true">Edit</button>
        <transition v-if="showEdit" name="after">
          <div @click.self="showEdit = false" class="after-mask">
            <form @submit.prevent="edit" class="after-container">
              <input v-model="name" type="text" maxlength="12" />
              <input v-model="sername" type="text" maxlength="12" />
              <input v-model="tel" type="number" />
              <ValidTel :validEdit="true" :tel="tel" />
              <div class="btn-form-wrapper">
                <button type="submit">Edit</button>
                <button @click.prevent="showEdit = false" class="btn-exit">
                  &#10006;
                </button>
              </div>
            </form>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import ValidTel from "../components/ValidTel";

export default {
  name: "ContactInfo",
  components: {
    ValidTel
  },
  data: () => ({
    showEdit: false,
    name: "",
    sername: "",
    tel: ""
  }),
  computed: {
    ...mapGetters("contact", ["contactsListed"]),
    findContact() {
      return this.contactsListed.find(c => c.id == this.$route.params.id);
    }
  },
  methods: {
    ...mapActions("contact", ["editContact"]),
    ...mapMutations("contact", ["LOCAL_DATA"]),
    edit() {
      if (this.tel.length === 11) {
        const editedContact = {
          name: this.name,
          sername: this.sername,
          tel: this.tel,
          id: this.findContact.id
        };
        this.editContact(editedContact);
        this.$router.push("/");
      } else {
        alert("Telephone number is not valid!");
      }
    }
  },
  watch: {
    showEdit() {
      this.name = this.findContact.name;
      this.sername = this.findContact.sername;
      this.tel = this.findContact.tel;
    }
  },
  created() {
    if (localStorage.contactsListed) {
      const data = JSON.parse(localStorage.contactsListed);
      this.LOCAL_DATA(data);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../style/style.scss";
@include modal;

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper-info {
  display: flex;
  align-items: baseline;

  li {
    width: 150px;
    border-radius: 15px;
    border: 0;
    background: rgb(93, 255, 118);
    padding: 10px 15px;
  }

  span {
    margin-right: 10px;
  }
}

.wrapper-info + .wrapper-info {
  margin-top: 10px;
}

.btn-exit {
  width: 40px;
  background: rgb(255, 85, 85);
}

.btn-edit {
  margin: 0 auto;
}

.btn-form-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.flex-center {
  display: flex;
  justify-content: center;
}

.inner {
  padding: 20px;

  .card {
    width: 300px;
    flex-direction: column;

    &-container {
      border-radius: 15px;
      border: 0;
      background: rgb(198, 253, 207);
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
      margin-bottom: 30px;
      transition: all 0.3s;

      &:hover {
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
      }

      .contact {
        padding: 20px;
        list-style: none;
      }
    }
  }
}

input {
  width: 80%;
  outline: none;
  border-radius: 15px;
  border: 0;
  background: rgb(240, 240, 240);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  padding: 10px;
  transition: 0.6s;

  &:focus {
    background: rgb(212, 224, 255);
    &::placeholder {
      text-shadow: 1px 0px 10px rgba(113, 151, 151, 0.4);
    }
  }
}

input + input {
  margin-top: 10px;
}

.link-home {
  background: none;
  font-size: 20px;
}
</style>
