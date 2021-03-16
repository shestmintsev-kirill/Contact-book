const contactStore = {
  namespaced: true,
  state: {
    contacts: [
      { name: "Kirill", sername: "Shestmintsev", tel: "79999679615", id: 1 },
      { name: "Anton", sername: "Ivanov", tel: "79991234567", id: 2 },
      { name: "Ivan", sername: "Volkov", tel: "79009876543", id: 3 },
      { name: "Andrew", sername: "Sidorov", tel: "79004662271", id: 4 },
      { name: "Ivanna", sername: "Sorokina", tel: "79851664567", id: 5 },
      { name: "Fedor", sername: "Kozlov", tel: "380501002267", id: 6 }
    ],
    showNotificationAdd: false,
    showNotificationRemove: false,
    showNotificationEdit: false
  },
  getters: {
    contactsListed: ({ contacts }) => contacts,
    notificationAdd: ({ showNotificationAdd }) => showNotificationAdd,
    notificationRemove: ({ showNotificationRemove }) => showNotificationRemove,
    notificationEdit: ({ showNotificationEdit }) => showNotificationEdit
  },
  mutations: {
    ADD_CONTACT(state, contact) {
      state.contacts.push(contact);
      state.showNotificationAdd = true;
      setTimeout(() => {
        state.showNotificationAdd = false;
      }, 3000);
    },
    REMOVE_CONTACT(state, id) {
      state.contacts = state.contacts.filter(c => c.id !== id);
      state.showNotificationRemove = true;
      setTimeout(() => {
        state.showNotificationRemove = false;
      }, 3000);
    },
    EDIT_CONTACT(state, contactEdit) {
      const i = state.contacts.findIndex(c => c.id === contactEdit.id);
      state.contacts.splice(i, 1, contactEdit);
      state.showNotificationEdit = true;
      setTimeout(() => {
        state.showNotificationEdit = false;
      }, 3000);
    },
    LOCAL_DATA(state, data) {
      state.contacts = data;
    }
  },
  actions: {
    addNewContact({ commit, state }, contact) {
      const newContact = {
        ...contact,
        id: String(state.contacts.length) + Date.now()
      };
      commit("ADD_CONTACT", newContact);
    },
    editContact({ commit, state }, edit) {
      const contactEdit = { ...edit };
      commit("EDIT_CONTACT", contactEdit);
      localStorage.contactsListed = JSON.stringify(state.contacts);
    }
  }
};

export default contactStore;
