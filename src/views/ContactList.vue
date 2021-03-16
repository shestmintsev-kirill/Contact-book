<template>
  <div class="section-outer">
    <div class="section-content">
      <div class="section-content-title">
        <h1>Contact Page</h1>
      </div>
      <div class="section-content-counter">
        <p>{{ contactsListed.length }} contacts</p>
      </div>
      <div class="section-content_add">
        <button class="btnAdd" @click="showAddContact = !showAddContact">
          Add contact
        </button>
        <button
          :class="{ btnSort: checkSortContacts }"
          @click="checkSortContacts = !checkSortContacts"
        >
          Sort
        </button>
        <AddContact
          @closeContact="showAddContact = false"
          v-if="showAddContact"
        />
      </div>
      <div class="section-content-container">
        <div class="section-content-container_wrapper">
          <ContactItem
            v-for="(contact, index) in contactsListed"
            :key="contact.id"
            :index="index"
            :contact="contact"
          />
          <p v-if="contactsListed.length < 1" class="empty">Not Contacts!</p>
        </div>
      </div>
    </div>
    <Notification :msgNotification="msgNotification" />
    <!-- ДОБАВИТЬ НОТИФИКАЦИИ -->
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
    showNotification: false,
    checkSortContacts: false,
    msgNotification: {
      msgAdd: "Added!",
      msgDel: "Deleted!",
      msgEdit: "Edited!"
    }
  }),
  computed: {
    ...mapGetters("contact", [
      "contactsListed",
      "notificationAdd",
      "notificationRemove",
      "notificationEdit"
    ])
  },
  methods: {
    ...mapMutations("contact", ["LOCAL_DATA"])
  },
  watch: {
    contactsListed() {
      localStorage.contactsListed = JSON.stringify(this.contactsListed);
    },
    checkSortContacts() {
      localStorage.checkSort = JSON.stringify(this.checkSortContacts);
      if (this.checkSortContacts) {
        return this.contactsListed.sort((prev, next) => {
          if (prev.name < next.name) return -1;
          if (prev.name < next.name) return 1;
        });
      } else {
        return this.contactsListed.sort((prev, next) => {
          if (prev.id < next.id) return -1;
          if (prev.id < next.id) return 1;
        });
      }
    }
  },
  created() {
    if (localStorage.contactsListed) {
      const data = JSON.parse(localStorage.contactsListed);
      this.LOCAL_DATA(data);
    }
    if (localStorage.checkSort) {
      const checkSort = JSON.parse(localStorage.checkSort);
      this.checkSortContacts = checkSort;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../style/style.scss";

.section-outer {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
}

ul {
  padding: 0;
}

h1 {
  text-align: center;
  margin-top: 0;
  font-weight: 300;
}

.empty {
  text-align: center;
}

.section-content {
  max-width: 945px;
  margin-left: auto;
  margin-right: auto;

  &-title {
    padding-top: 15px;
  }

  &-counter {
    text-align: center;
    font-weight: 100;
    font-size: 25px;
  }

  &_add {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .btnAdd {
      margin-bottom: 10px;
      background: rgb(194, 236, 189);
      box-shadow: 0 2px 15px rgba(89, 255, 98, 0.5);
    }
  }

  &-container {
    display: flex;

    &_wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 25px;
    }
    @media (max-width: $screen-xs-max) {
      &_wrapper {
        flex-direction: column;
      }
    }
  }
}

.btnSort {
  background: rgb(209, 212, 255);
}
</style>
