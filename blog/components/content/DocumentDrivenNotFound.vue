<template>
  <div class="flex flex-col items-center justify-center h-[calc(100vh-(2.5rem*2)-(var(--navbar-height,60px)*2))] text-center">
    <Icon name="line-md:alert-twotone" class="text-red-500 text-7xl" />
    <p class="text-4xl">Page not found</p>
    <NuxtLink to="/" class="border-b border-b-teal-500 border-dashed hover:border-solid hover:border-b-teal-500 hover:text-teal-500 mt-2">Back to Homepage</NuxtLink>
  </div>
</template>