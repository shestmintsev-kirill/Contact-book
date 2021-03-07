<template>
  <transition name="after">
    <div @click.self="$emit('closeModal')" class="after-mask">
      <div @click.self="$emit('closeModal')" class="after-wrapper">
        <div class="after-container">
          <p>
            Are you sure?
          </p>
          <div class="btn">
            <button @click="$emit('remove')">Yes</button>
            <button @click="$emit('closeModal')">No</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "RemoveModal"
};
</script>

<style lang="scss" scoped>
@import "../style/style.scss";

@include modal;

.after-wrapper {
  width: 40%;
  display: flex;
  justify-content: center;
}

.btn {
  width: 100%;
  display: flex;
  justify-content: space-between;

  button + button {
    margin-left: 5px;
  }
}
</style>
