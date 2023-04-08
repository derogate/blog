<template>
  <button aria-label="Color Mode" class="flex" @click="onClick">
    <ColorScheme placeholder="..." tag="div" class="w-5 h-5">
      <template v-if="colorMode.value === 'dark'">
        <Icon name="ph:moon-bold" class="w-5 h-5" />
        <span class="sr-only">Dark Mode</span>
      </template>
      <template v-else>
        <Icon name="ph:sun-bold" class="w-5 h-5" />
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