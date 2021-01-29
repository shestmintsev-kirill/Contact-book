const contactStore = {
  namespaced: true,
  state: {
    contacts: [
      { id: 1, name: "Ivan", sername: "Ivanov", tel: "+79999999914" },
      { id: 2, name: "Anton", sername: "Fedorov", tel: "+79999999915" },
      { id: 3, name: "Alina", sername: "Vlasova", tel: "+79999999916" }
    ]
  },
  getters: {
    contactsListed: ({ contacts }) => contacts,
    getContactById: ({ contacts }) => id => {
      return contacts.find(contacts => contacts.id === id);
    }
  },
  mutations: {
    ADD_CONTACT(state, contact) {
      state.contacts.push(contact);
    },
    REMOVE_CONTACT(state, id) {
      state.contacts = state.contacts.filter(c => c.id !== id);
    }
  },
  actions: {
    addNewContact({ commit }, contact) {
      const newContact = { ...contact, id: String(Math.random() * 10) };
      commit("ADD_CONTACT", newContact);
    },
    removeContact({ commit }, id) {
      commit("REMOVE_CONTACT", id);
    }
  }
};

export default contactStore;