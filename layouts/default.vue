<script lang="ts" setup>
import TopBar from "~/components/layout/TopBar.vue";
import Sidebar from "~/components/layout/Sidebar.vue";
</script>

<template>
  <input id="my-drawer" class="drawer-toggle" type="checkbox"/>
  <main class="drawer-content">
    <div class="grid grid-cols-12 grid-rows-[min-content] gap-y-12 p-4 lg:gap-x-12 lg:p-10">
      <!-- header -->
      <TopBar/>
      <!-- /header -->
      <slot/>
    </div>
  </main>

  <Sidebar/>
</template>

<style scoped>

</style>