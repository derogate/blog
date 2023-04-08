<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="css">
/* 
body {
  @apply bg-primary-50 text-black dark:bg-primary-900 dark:text-white;
} 
*/

body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
</style>