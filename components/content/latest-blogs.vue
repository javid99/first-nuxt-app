<template>
   <div>
      <BlogsList v-slot="{ posts }" :limit="limit">
         <div v-for="post in posts" :key="post.id">
            <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
         </div>
      </BlogsList>
   </div>
</template>

<script lang="ts" setup>
defineProps({
   limit: {
      type: Number,
      default: null,
   },
});
</script>

<style></style>
