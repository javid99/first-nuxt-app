<template>
   <article class="prose dark:prose-invert">
      <ContentRenderer :value="projects"></ContentRenderer>
   </article>
</template>

<script setup>
const { data: projects } = await useAsyncData(() =>
   queryCollection("content").path("/projects").first()
);
useSeoMeta({
  title: projects.value.title,
  description: projects.value.description
})
</script>