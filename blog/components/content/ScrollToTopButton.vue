<template>
  <Transition name="fade" mode="out-in">
    <button v-if="showBtn" @click="scrollToTop" 
      class="sticky bottom-4 z-[1] ml-auto -mr-4 flex p-2 rounded-full transition border bg-black/60 hover:border-teal-500 hover:bg-black">
      <Icon name="line-md:arrow-up" />
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
  transition: opacity 150ms ease, transform 150ms ease;
  transform: translateY(1rem);
  opacity: 0;
}
</style>