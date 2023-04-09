<template>
  <div ref="navbarRef" class="flex items-center justify-between p-4 h-[60px]">
    <div>{{ navbarRef?.clientHeight }}</div>
    <ColorModeSwitch />
  </div>
</template>

<script lang="ts" setup>
const navbarRef = ref<HTMLDivElement>();

const setCssVariables = useDebounceFn(() => {
  const navbarHeight = navbarRef.value?.getBoundingClientRect().height ||
                       navbarRef.value?.clientHeight || 
                       navbarRef.value?.offsetHeight || 
                       navbarRef.value?.scrollHeight || 0;
  document.body.style.setProperty('--navbar-height', navbarHeight + 'px');
}, 150)

useEventListener('resize', setCssVariables)

onMounted(() => {
  setCssVariables()
})
</script>