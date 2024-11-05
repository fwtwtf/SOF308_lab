<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "AppPage",
  components: {
    NavBar,
  },
};
</script>

<style></style>
