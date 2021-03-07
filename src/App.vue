<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-view />
  </div>
</template>

<style lang="scss">
button {
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 15px;
  transition: 0.5s;
  font-weight: bold;
  outline: none;

  &:hover {
    transform: scale(1.05);
    background: rgb(194, 194, 194);
    cursor: pointer;
  }
}
</style>
