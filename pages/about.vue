<template>
   <article class="prose dark:prose-invert">
      <ContentRenderer :value="about"></ContentRenderer>
   </article>
</template>

<script setup>
const { data: about } = await useAsyncData(() =>
   queryCollection("content").path("/about").first()
);

useSeoMeta({
  title: about.value.title,
  description: about.value.description
})

// definePageMeta({
//   layout: 'another',
// })

// function enableCustomLayout() {
//   setPageLayout('another');
// }

// useHead({
//   title: 'About '
// })
</script>
