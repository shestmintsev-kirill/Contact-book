<template>
  <transition name="after">
    <div class="after-mask" @click.self="$emit('closeContact')">
      <form @submit.prevent="onSubmit" class="after-container">
        <input maxlength="12" v-model="name" placeholder="Name" type="text" />
        <input
          maxlength="12"
          v-model="sername"
          placeholder="Sername"
          type="text"
        />
        <input
          v-model="tel"
          placeholder="Tel: 7(900)1234567"
          type="number"
          :disabled="disabled"
        />
        <ValidTel :tel="tel" />
        <button type="submit">add</button>
      </form>
    </div>
  </transition>
</template>

<script>
import { mapActions } from "vuex";
import ValidTel from "./ValidTel";

export default {
  components: { ValidTel },
  name: "AddContact",
  data: () => ({
    name: "",
    sername: "",
    tel: "",
    // isActive: false,
    disabled: false
  }),
  methods: {
    ...mapActions("contact", ["addNewContact"]),
    onSubmit() {
      if (
        (this.name,
        this.sermane,
        this.name.length > 3 && this.sername.length > 2,
        this.tel.length === 11)
      ) {
        const newContact = {
          name: this.name,
          sername: this.sername,
          tel: this.tel
        };
        this.addNewContact(newContact);
        this.$emit("closeContact");
      } else {
        alert("Fix!");
      }
    }
  },
  watch: {
    tel() {
      if (this.tel.length === 11) {
        this.disabled = true;
      }
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
</style>
