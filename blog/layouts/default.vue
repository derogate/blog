<template>
  <Navbar class="max-w-2xl m-auto" />
  <div class="max-w-2xl py-10 px-4 sm:px-8 m-auto bg-white dark:bg-primary-900 ring-1 ring-gray-200 dark:ring-gray-700 sm:shadow sm:rounded-lg sm:mb-[var(--navbar-height)]">
    <main class="max-w-none">
      <ClientOnly>
        <p v-if="page && !page?._empty && page?.title" class="flex flex-col">
          <span class="text-4xl text-teal-500 font-extrabold">
            {{ page.title }}
          </span>
          <div v-if="page?.publishedOn || page?.lastUpdated" class="flex flex-col text-sm mt-5">
            <span v-if="page.publishedOn">Published on 
              <span class="text-teal-500">{{ page.publishedOn }}</span>
            </span>
            <span v-if="page.lastUpdated">Updated on 
              <span class="text-teal-500 ms-1">{{ page.lastUpdated }}</span>
            </span>
          </div>
        </p>
      </ClientOnly>
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
const { page } = useContent();
</script>

<style lang="postcss">
body {
  @apply bg-primary-50 text-black dark:bg-black dark:text-white transition duration-200;
}
</style>