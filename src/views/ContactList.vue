<template>
  <div class="section-outer">
    <div class="section-content">
      <div class="section-content-title">
        <h1>Contact Page</h1>
      </div>
      <div class="section-content_add">
        <button
          class="btnAdd"
          v-if="!showAddContact"
          @click="showAddContact = !showAddContact"
        >
          Add contact
        </button>
        <button
          class="btnAdd"
          v-if="showAddContact"
          @click="showAddContact = !showAddContact"
        >
          Close
        </button>
        <AddContact @addContact="addContact" v-if="showAddContact" />
      </div>
      <div class="section-content-container">
        <div class="section-content-container_contact">
          <Contacts v-if="contacts.length" @removeContact="removeContact" />
          <p class="empty" v-else>Not Contacts!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddContact from "../components/AddContact.vue";
import Contacts from "../components/Contacts.vue";

export default {
  name: "ContactList",
  components: {
    Contacts,
    AddContact
  },
  data: () => ({
    contacts: [
      { id: 1, name: "Ivan", sername: "Ivanov", tel: "+79999999914" },
      { id: 2, name: "Anton", sername: "Fedorov", tel: "+79999999915" },
      { id: 3, name: "Alina", sername: "Vlasova", tel: "+79999999916" }
    ],
    showAddContact: false
  }),
  methods: {
    removeContact(id) {
      this.contacts = this.contacts.filter(c => c.id !== id);
    },
    addContact() {
      this.showAddContact = false;
    }
  }
};
</script>

<style scoped lang="scss">
.section-outer {
  padding-left: 20px;
  padding-right: 20px;
}

h1 {
  text-align: center;
}

.empty {
  text-align: center;
}

.section-content {
  max-width: 945px;
  margin-left: auto;
  margin-right: auto;

  &_add {
    display: flex;
    flex-direction: column;
    align-items: center;

    .btnAdd {
      margin-bottom: 10px;
    }
  }
}
</style>
