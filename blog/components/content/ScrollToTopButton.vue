<template>
  <Transition name="fade" mode="out-in">
    <button v-if="showBtn" @click="scrollToTop" 
      class="sticky bottom-4 z-[1] ml-auto sm:-mr-4 flex p-2 rounded-full border group
      transition bg-black/60 hover:border-teal-500 hover:ring-1 hover:ring-teal-500 hover:bg-black">
      <Icon name="line-md:arrow-up" class="group-hover:text-teal-500 transition duration-250 ease-in-out" />
    </button>
  </Transition>
</template>

<script lang="ts" setup>
const { y } = useWindowScroll();
const showCondition = computed(() => y.value > 400);
const showBtn = ref(showCondition.value);

useEventListener('scroll', useDebounceFn(() => {
  if (showCondition.value) {
    showBtn.value = true
  } else {
    showBtn.value = false
  } 
}, 150))

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active,
.fade-enter-from,
.fade-leave-to {
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
  transform: translateY(1rem);
  opacity: 0;
}
</style>