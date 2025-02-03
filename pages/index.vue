<template>
  <article class="prose dark:prose-invert">
     <ContentRenderer :value="main"></ContentRenderer>
  </article>
</template>

<script setup>
const { data: main } = await useAsyncData(() =>
  queryCollection("content").path("/").first()
);

useSeoMeta({
 title: main.value.title,
 description: main.value.description
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
