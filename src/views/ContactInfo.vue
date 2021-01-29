<template>
  <div class="">
    <h1>contact {{ $route.params.id }}</h1>
    <button @click="add"></button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ContactInfo",
  computed: {
    // ...mapState("contact", ["contacts"]),
    ...mapGetters("contact", ["getContactById"]),
    getContact() {
      return this.getContactById(this.$route.params.id);
    }
  },
  methods: {
    add() {
      console.log(this.this.$route.params.id);
    }
  }
};
</script>

<style scoped lang="scss"></style>
