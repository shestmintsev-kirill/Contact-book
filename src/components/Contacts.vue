<template>
  <div>
    <ul>
      <ContactItem />
    </ul>
  </div>
</template>

<script>
import ContactItem from "./ContactItem.vue";

export default {
  name: "Contacts",
  components: {
    ContactItem
  },
  methods: {
    removeContact(id) {
      this.$emit("removeContact", id);
    }
  }
};
</script>

<style scoped lang="scss"></style>
