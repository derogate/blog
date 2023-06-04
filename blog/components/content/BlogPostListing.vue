<template>
  <ClientOnly>
    <Icon v-if="isLoading" name="svg-spinners:3-dots-move" />
    <p v-else-if="!isLoading && !posts" class="text-red-500">
      <Icon name="line-md:alert-twotone" class="text-orange-500 w-6 h-6" />
      Unable to get posts
    </p>
    <div v-else-if="!isLoading && posts && posts?.length > 0" class="flex flex-col">
      <DefaultLink
        v-for="post in posts" 
        :key="post._id"
        :to="post._path"
        class="w-fit group">
        <span v-if="post.publishedOn || post.lastUpdated" :title="`Published on: ${post.publishedOn ?? '-'}. Last updated on: ${post.lastUpdated ?? '-'}`" 
        class="relative text-xs text-gray-600 dark:text-gray-400 group-hover:text-inherit leading-[1] mr-2">
          <span class="absolute top-[-2px] left-[-3px] group-hover:text-white transition">{{ post.lastUpdated ? '*' : '' }}</span>{{ post.lastUpdated ?? post.publishedOn }}
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

onMounted(async() => {
  try {
    posts.value = await queryContent("posts")
      .where({
        _empty: false,
        _draft: false,
      })
      .sort({ publishedOn: -1, $numeric: true })
      .sort({ lastUpdated: -1, $numeric: true })
      .find();
  } catch (error) {
    console.log([error])
  }

  isLoading.value = false;
})
</script>