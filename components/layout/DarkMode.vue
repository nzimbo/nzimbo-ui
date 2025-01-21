<script setup lang="ts">
import {Sun, Moon} from "lucide-vue-next";
</script>

<template>
  <label class="swap swap-rotate btn btn-circle">
    <!-- this hidden checkbox controls the state -->
    <input type="checkbox" class="theme-controller" value="dark"/>

    <Sun class="swap-on"/>
    <Moon class="swap-off "/>

  </label>
</template>

<style scoped>

</style>