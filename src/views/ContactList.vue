<template>
  <div class="section-outer">
    <div class="section-content">
      <div class="section-content-title">
        <h1>Contact Page</h1>
      </div>
      <div class="section-content-title">
        <h1>{{ contactsListed.length }} contacts</h1>
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
        <AddContact
          @closeContact="showAddContact = false"
          v-if="showAddContact"
        />
      </div>
      <div class="section-content-container">
        <div class="section-content-container_contact">
          <div>
            <ul>
              <ContactItem
                v-for="(contact, index) in contactsListed"
                :key="contact.id"
                :index="index"
                :contact="contact"
              />
            </ul>
            <button @click="sortContacts">
              SORT
            </button>
            <button @click="noSortContacts">no SORT</button>
          </div>
          <p v-if="contactsListed.length < 1" class="empty">Not Contacts!</p>
        </div>
      </div>
    </div>
    <Notification v-if="showNotification" />
  </div>
</template>

<script>
import AddContact from "../components/AddContact.vue";
import ContactItem from "../components/ContactItem.vue";
import Notification from "../components/Notification.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ContactList",
  components: {
    ContactItem,
    AddContact,
    Notification
  },
  data: () => ({
    showAddContact: false,
    showNotification: false
  }),
  computed: {
    ...mapGetters("contact", ["contactsListed"])
    // sortContacts() {
    //   return this.contactsListed.sort((prev, next) => {
    //     if (prev.name < next.name) return -1;
    //     if (prev.name < next.name) return 1;
    //   });
    // }
  },
  methods: {
    ...mapMutations("contact", ["LOCAL_DATA"]),
    sortContacts() {
      this.contactsListed.sort((prev, next) => {
        if (prev.name < next.name) return -1;
        if (prev.name < next.name) return 1;
      });
    },
    noSortContacts() {
      this.contactsListed.sort((prev, next) => {
        if (prev.id < next.id) return -1;
        if (prev.id < next.id) return 1;
      });
    },
    test() {
      console.log(this.sortContacts());
    }
  },
  watch: {
    contactsListed() {
      localStorage.contactsListed = JSON.stringify(this.contactsListed);
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
