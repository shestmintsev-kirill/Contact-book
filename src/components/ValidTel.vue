<template>
  <div class="flex-wrapper">
    <span v-if="isActive">&#10004;</span>
    <span v-if="!isActive">&#10008;</span>
    <p :class="{ active: isActive }" class="validTel">
      Tel value 11, this {{ tel.length }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ValidTel",
  props: ["tel"],
  data: () => ({
    isActive: false
  }),
  watch: {
    tel() {
      if (this.tel.length === 11) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.flex-wrapper {
  display: flex;
  align-items: baseline;

  span {
    margin-right: 10px;
  }
}

.active {
  background: rgb(195, 255, 203) !important;
}

.validTel {
  padding: 5px 10px;
  border-radius: 10px;
  background: rgb(255, 207, 207);
}
</style>
