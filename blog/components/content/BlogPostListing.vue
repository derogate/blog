<template>
  <ClientOnly>
    <DefaultLink
      v-for="post in posts" 
      :key="post._id"
      :to="post._path"
      class="w-fit group">
      <span class="text-xs text-gray-400 group-hover:text-inherit leading-[1] mr-2">
        {{ post.lastUpdated ?? post.publishedOn }}
      </span>
      <span>
        {{ post.title }}
      </span>
    </DefaultLink>
  </ClientOnly>
</template>

<script lang="ts" setup>
const posts = await queryContent("posts")
  .where({
    _empty: false,
    _draft: false,
  })
  .find();
</script>