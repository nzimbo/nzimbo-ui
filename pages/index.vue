<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>

  <button class="btn btn-primary">One</button>
  <button class="btn btn-secondary">Two</button>
  <button class="btn btn-accent btn-outline">Three</button>
</template>
