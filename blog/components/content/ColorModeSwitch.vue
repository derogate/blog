<template>
  <button aria-label="Color Mode" class="flex transition dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300" @click="onClick">
    <ColorScheme placeholder="..." tag="div" class="w-6 h-6">
      <template v-if="colorMode.value === 'dark'">
        <Icon name="line-md:sunny-filled-loop-to-moon-filled-transition" class="w-5 h-5" />
        <span class="sr-only">Dark Mode</span>
      </template>
      <template v-else>
        <Icon name="line-md:moon-to-sunny-outline-transition" class="w-6 h-6" />
        <span class="sr-only">Light Mode</span>
      </template>
    </ColorScheme>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => {
  console.log(colorMode)

  colorMode.value === 'light' ? 
    colorMode.preference = 'dark' : 
    colorMode.preference = 'light';
}
</script>