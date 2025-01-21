<script lang="ts" setup>

import {Menu} from 'lucide-vue-next'

import UserMenu from "~/components/layout/UserMenu.vue";
import Notifications from "~/components/layout/Notifications.vue";
import DarkMode from "~/components/layout/DarkMode.vue";

</script>

<template>
  <header class="col-span-12 flex items-center gap-2 lg:gap-4">
    <label class="btn btn-square btn-ghost drawer-button lg:hidden" for="my-drawer">
      <Menu/>
    </label>
    <div class="grow">
      <h1 class="lg:text-2xl lg:font-light">Dashboard</h1>
    </div>
    <DarkMode/>
    <!-- dropdown -->
    <Notifications/>
    <!-- /dropdown -->

    <UserMenu/>
  </header>
</template>

<style scoped>

</style>