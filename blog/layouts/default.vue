<template>
  <Navbar class="max-w-2xl m-auto" />
  <div class="max-w-2xl py-10 px-4 sm:px-8 m-auto bg-white dark:bg-primary-800 ring-1 ring-gray-200 dark:ring-gray-700 sm:shadow sm:rounded-lg">
    <main class="max-w-none">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss">
body {
  @apply bg-primary-50 text-black dark:bg-primary-900 dark:text-white transition duration-200;
}
</style>