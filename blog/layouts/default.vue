<template>
  <Navbar class="max-w-2xl m-auto" />
  
  <div class="max-w-2xl py-10 px-4 sm:px-8 mx-1 md:m-auto bg-white dark:bg-primary-900 ring-1 ring-gray-200 dark:ring-gray-700 sm:shadow md:rounded-lg sm:mb-[var(--navbar-height)]">
    <main class="relative max-w-none">
      <ClientOnly>
        <p v-if="page && !page?._empty && page?.title" class="flex flex-col w-fit">
          <span 
            class="inline-block font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-teal-500 to-red-500">
            {{ page.title }}
          </span>
          <div v-if="page?.publishedOn || page?.lastUpdated" class="flex flex-col text-sm text-xs text-gray-600 dark:text-gray-400 mt-5">
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

      <ScrollToTopButton />
    </main>
  </div>
</template>

<script lang="ts" setup>
const { page } = useContent();
provide('layout', 'default');
</script>