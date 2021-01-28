<template>
  <div>
    <ul>
      <ContactItem
        v-for="(contact, i) in contacts"
        :key="contact.id"
        :contact="contact"
        :index="i"
        @removeContact="removeContact"
      />
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
  props: ["contacts"],
  methods: {
    removeContact(id) {
      this.$emit("removeContact", id);
    }
  }
};
</script>

<style scoped lang="scss"></style>
