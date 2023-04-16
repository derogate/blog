<template>
  <ClientOnly>
    <Icon v-if="isLoading" name="svg-spinners:3-dots-move" />
    <p v-else-if="!isLoading && !posts" class="text-red-500">
      <Icon name="line-md:alert-twotone" class="text-orange-500 w-6 h-6" />
      Unable to get posts
    </p>
    <div v-else-if="!isLoading && posts && posts?.length > 0">
      <DefaultLink
        v-for="post in posts" 
        :key="post._id"
        :to="post._path"
        class="w-fit group">
        <span :title="`Published on: ${post.publishedOn ?? '-'}. Last updated on: ${post.lastUpdated ?? '-'}`" class="text-xs text-gray-600 dark:text-gray-400 group-hover:text-inherit leading-[1] mr-2">
          {{ post.lastUpdated ?? post.publishedOn }}
        </span>
        <span>
          {{ post.title }}
        </span>
      </DefaultLink>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

const isLoading = ref(true);
const posts = ref<ParsedContent[]>();

onBeforeMount(async() => {
  posts.value = await queryContent("posts")
    .where({
      _empty: false,
      _draft: false,
    })
    .find();

  isLoading.value = false;
})
</script>