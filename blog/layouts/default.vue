<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss">
body {
  @apply bg-primary-50 text-black dark:bg-primary-900 dark:text-white transition duration-200;
}
</style>