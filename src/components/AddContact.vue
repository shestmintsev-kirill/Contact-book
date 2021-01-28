<template>
  <form @submit.prevent="onSubmit">
    <input v-model="name" placeholder="Name" type="text" />
    <input v-model="sername" placeholder="Sername" type="text" />
    <input v-model="tel" placeholder="Tel" type="number" />
    <button type="submit">add</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddContact",
  data: () => ({
    name: "",
    sername: "",
    tel: ""
  }),
  methods: {
    ...mapActions("contact", ["addNewContact"]),
    onSubmit() {
      if ((this.name, this.sermane, this.tel)) {
        const newContact = {
          id: Date.now(),
          name: this.name,
          sername: this.sername,
          tel: this.tel
        };
        this.addNewContact(newContact);
        this.$emit("addContact");
      } else {
        alert("Заполните форму!");
      }
    }
  }
};
</script>

<style scoped lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

form {
  border: 5px solid rgba(192, 192, 192, 0.2);
  border-radius: 20px;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40%;

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
  input:not(last-child) {
    margin-bottom: 10px;
  }
}
</style>
