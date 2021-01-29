<template>
  <div>
    <li>
      <span>{{ index + 1 }}</span>
      <span>{{ contact.name }}</span>
      <span>{{ contact.sername }}</span>
      <span>{{ contact.tel }}</span>
      <button @click="showReq = true">Delete</button>
      <router-link :to="`/info/${contact.id}`">
        {{ contact.name }} info
      </router-link>
      <transition name="after">
        <div v-if="showReq" class="after-mask">
          <div class="after-container">
            <p>
              Are you sure?
            </p>
            <div class="btn">
              <button @click="remove">Yes</button>
              <button @click="showReq = false">No</button>
            </div>
          </div>
        </div>
      </transition>
    </li>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ContactItem",
  props: {
    index: {
      type: Number
    },
    contact: {
      type: Object
    }
  },
  data: () => ({
    showReq: false,
    ContactInfo: false
  }),
  computed: {
    ...mapGetters("contact", ["contactsListed"])
  },
  methods: {
    ...mapActions("contact", ["removeContact"]),
    remove() {
      console.log(this.contact.id);
      this.removeContact(this.contact.id);
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

.btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.after-mask {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(136, 136, 136, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}
.after-container {
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(131, 131, 131, 0.33);
  transition: all 0.3s ease;
  animation: opacity 0.3s linear;
}

.after-enter {
  opacity: 0;
}

.after-leave-active {
  opacity: 0;
}

.after-enter .after-container,
.after-leave-active .after-container {
  transform: scale(1.1);
}

@keyframes opacity {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>
