<template>
  <transition name="after">
    <div
      class="container"
      :class="{
        bgAdd: notificationAdd,
        bgDel: notificationRemove,
        bgEdit: notificationEdit
      }"
    >
      <p v-if="notificationAdd">{{ msgNotification.msgAdd }}</p>
      <p v-if="notificationRemove">{{ msgNotification.msgDel }}</p>
      <p v-if="notificationEdit">{{ msgNotification.msgEdit }}</p>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Notification",
  props: {
    msgNotification: {
      type: Object
    }
  },
  computed: {
    ...mapGetters("contact", [
      "notificationAdd",
      "notificationRemove",
      "notificationEdit"
    ])
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  width: 100px;
  height: 80px;
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  border-bottom-left-radius: 20px;
  transition: all 0.5s ease;
  animation: opacity 0.5s linear;
}

.bgAdd {
  background: rgb(181, 255, 162);
}

.bgDel {
  background: rgb(255, 153, 153);
}

.bgEdit {
  background: rgb(172, 166, 255);
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
