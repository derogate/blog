<template>
  <NuxtLink
    :to="to"
    class="border-b border-b-teal-500 border-dashed hover:border-solid hover:border-b-teal-500 hover:text-teal-500"
    v-bind="$attrs">
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
import { NuxtLinkProps } from '#app';

interface Props {
  to: NuxtLinkProps['to'];
}
defineProps<Props>();
</script>