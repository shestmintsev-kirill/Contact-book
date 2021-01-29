<template>
  <div>
    <ul>
      <ContactItem
        v-for="(contact, index) in contactsListed"
        :key="contact.id"
        :index="index"
        :contact="contact"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ContactItem from "./ContactItem.vue";

export default {
  name: "Contacts",
  components: {
    ContactItem
  },
  computed: {
    ...mapGetters("contact", ["contactsListed"])
  },
  methods: {
    removeContact(id) {
      this.$emit("removeContact", id);
    }
  }
};
</script>

<style scoped lang="scss"></style>
