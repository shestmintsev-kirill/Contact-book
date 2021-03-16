<template>
  <div class="wrapper">
    <div class="card">
      <div class="card-body">
        <p class="card-index">{{ index + 1 }}</p>
        <p class="card-name m-0 fz20">{{ contact.name }}</p>
        <p class="card-sername m-0 fz20">{{ contact.sername }}</p>
        <p class="card-tel fz20">+{{ contact.tel }}</p>
        <div class="card-links">
          <button class="btn-del" @click="showReq = true">Delete</button>
          <router-link :to="`/info/${contact.id}`">
            {{ contact.name.slice(0, 3) }}... info
          </router-link>
          <RemoveModal
            v-if="showReq"
            @remove="remove"
            @closeModal="showReq = false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
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

  methods: {
    ...mapMutations("contact", ["REMOVE_CONTACT"]),
    remove() {
      this.REMOVE_CONTACT(this.contact.id);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../style/style.scss";

span + span {
  text-align: center;
  width: 15%;
}

.btn-del {
  background: rgb(255, 220, 220);
}

.m-0 {
  margin: 0;
}

.fz20 {
  font-size: 20px;
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

.wrapper {
  display: flex;
  justify-content: center;
}

.card {
  width: 250px;
  border-radius: 5px;
  padding: 0 15px 15px 20px;
  background: rgb(237, 255, 237);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.5s;

  &:hover {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
  }

  &-index {
    align-self: flex-start;
    font-weight: 300;
  }

  &-tel {
    font-weight: 300;
  }

  &-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-links {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
