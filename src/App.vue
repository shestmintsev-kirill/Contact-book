<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./style/style.scss";
@import "normalize-scss";
@include normalize();

* {
  font-family: "Poppins", sans-serif;
}
</style>
