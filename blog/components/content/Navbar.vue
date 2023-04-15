<template>
  <div ref="navbarRef" class="flex items-center justify-between p-4 h-[60px]">
    <div class="flex items-center gap-5">
      <NuxtLink 
        v-for="item in navigationLinks"
        :key="item._id"
        :to="item._path"
        class="border-b border-b-transparent hover:border-dashed hover:border-b-teal-500 hover:text-teal-500 transition-all duration-200 mt-2"
        :class="{ 'border-solid border-b-teal-500 text-teal-500 font-bold pointer-events-none': page?._path === item._path }">
        {{ item.title }}
      </NuxtLink>
    </div>

    <div class="flex items-center space-x-3 transition text-primary-500">
      <ColorModeSwitch />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('navbar-navigation', () => fetchContentNavigation());
const navigationLinks = computed(() => data.value?.filter(x => !x.children))

const { page } = useContent();

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