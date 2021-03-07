<template>
  <div>
    <li>
      <span>{{ index + 1 }}</span>
      <span>{{ contact.name }}</span>
      <span>{{ contact.sername }}</span>
      <span>+{{ contact.tel }}</span>
      <button @click="showReq = true">Delete</button>
      <router-link :to="`/info/${contact.id}`">
        {{ contact.name }} info
      </router-link>
      <RemoveModal
        v-if="showReq"
        @remove="remove"
        @closeModal="showReq = false"
      />
    </li>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import RemoveModal from "./RemoveModal";

export default {
  name: "ContactItem",
  data: () => ({
    showReq: false
  }),
  components: {
    RemoveModal
  },
  props: {
    index: {
      type: Number
    },
    contact: {
      type: Object
    }
  },
  computed: {
    ...mapGetters("contact", ["contactsListed"])
  },
  methods: {
    ...mapMutations("contact", ["REMOVE_CONTACT"]),
    remove() {
      this.REMOVE_CONTACT(this.contact.id);
    }
  }
};
</script>

<style scoped lang="scss">
span + span {
  text-align: center;
  width: 15%;
}

.btn {
  display: flex;
  justify-content: space-between;
  button {
    width: 50px;
  }
}

li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  padding: 10px 10px;
  background: rgb(226, 229, 255);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
}
</style>
