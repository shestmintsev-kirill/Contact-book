const contactStore = {
  namespaced: true,
  state: {
    contacts: [
      { name: "Kirill", sername: "Shestmintsev", tel: "79999679615", id: 1 },
      { name: "Anton", sername: "Ivanov", tel: "79991234567", id: 2 },
      { name: "Ivan", sername: "Volkov", tel: "79009876543", id: 3 }
    ]
  },
  getters: {
    contactsListed: ({ contacts }) => contacts
  },
  mutations: {
    ADD_CONTACT(state, contact) {
      state.contacts.push(contact);
    },
    REMOVE_CONTACT(state, id) {
      state.contacts = state.contacts.filter(c => c.id !== id);
    },
    EDIT_CONTACT(state, contactEdit) {
      const i = state.contacts.findIndex(c => c.id === contactEdit.id);
      state.contacts.splice(i, 1, contactEdit);
    },
    LOCAL_DATA(state, data) {
      state.contacts = data;
    }
  },
  actions: {
    addNewContact({ commit, state }, contact) {
      const newContact = { ...contact, id: state.contacts.length + Date.now() };
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
