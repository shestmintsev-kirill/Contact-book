<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./style/style.scss";
@import "normalize-scss";
@include normalize();

* {
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}

#app {
  background: url("https://cdn.pixabay.com/photo/2017/01/24/03/53/plant-2004483_1280.jpg")
    fixed;
  background-size: cover;
  min-height: 100vh;
}
</style>
