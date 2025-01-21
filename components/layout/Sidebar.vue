<script setup lang="ts">

</script>

<template>
  <aside class="drawer-side z-10">
    <label class="drawer-overlay" for="my-drawer"></label>
    <!-- sidebar menu -->
    <nav class="flex min-h-screen w-72 flex-col gap-2 overflow-y-auto bg-base-100  py-10">
      <div class="mx-4 flex items-center gap-2 font-black">
        Nzimbo
      </div>
      <ul class="menu w-full">
        <li class="bg-base-300">
          <a class="active">
            <svg class="h-5 w-5" data-src="https://unpkg.com/heroicons/20/solid/home.svg"></svg>
            Dashboard
          </a>
        </li>
        <li>
          <a>
            <svg class="h-5 w-5" data-src="https://unpkg.com/heroicons/20/solid/user.svg"></svg>
            Users
          </a>
        </li>
        <li>
          <details>
            <summary>
              <svg
                  class="h-5 w-5"
                  data-src="https://unpkg.com/heroicons/20/solid/credit-card.svg"></svg>
              Transactions
            </summary>
            <ul>
              <li><a>All Transactions</a></li>
              <li><a>Failed Transactions</a></li>
              <li><a>Successful Transactions</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
    <!-- /sidebar menu -->
  </aside>
</template>

<style scoped>

</style>