<template>
  <div class="App">
    <Header />
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>
<script setup>
import Header from "@/components/Header.vue";
</script>
<style scoped>
.App {
  width: 100%;
  height: 100%;
  background-color: #ececec;
  display: grid;
  grid-template-rows: 6.25rem auto;
}

</style>
