<template>
  <div class="flex flex-col items-center justify-center h-[calc(100vh-(var(--navbar-height,60px)))] text-center">
    <Icon name="line-md:alert-twotone" class="text-red-500 text-7xl" />
    <p class="text-4xl">Page not found</p>
    <NuxtLink to="/" class="hover:text-teal-500 mt-2">Back to Homepage</NuxtLink>
  </div>
</template>