<template>
  <transition name="after">
    <div class="container">
      <p>Contact added!</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Notification"
};
</script>

<style lang="scss" scoped>
.container {
  width: 100px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  background: rgb(181, 255, 162);
  padding: 20px;
  border-bottom-left-radius: 20px;
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
