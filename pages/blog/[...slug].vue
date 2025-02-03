<template>
   <article
      class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-200 max-w-full"
   >
      <div class="grid grid-cols-6 gap-16">
         <div :class="data?.meta.toc ? 'col-span-6 md:col-span-4' : 'col-span-6'">
            <ContentRenderer v-if="data" :value="data"></ContentRenderer>
            <div v-else>
               <h1>Document not found(404)!</h1>
               <p>This blog post could not be found!</p>
            </div>
         </div>
         <div class="col-span-2 hidden md:block not-prose" v-if="data?.meta.toc">
            <aside class="sticky top-8">
               <div class="font-semibold mb-2">table of content</div>
               <nav>
                  <TocLinks :links="data.body.toc?.links" :active-iD="activeID" />
               </nav>
            </aside>
         </div>
      </div>
   </article>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: data } = await useAsyncData(route.path, () =>
   queryCollection("content").path(route.path).first()
);

useSeoMeta({
   title: data.value?.title,
   description: data.value?.description,
});


const activeID = ref(null);
onMounted(() => {
   const callback = (enteries: any) => {
      for (const entry of enteries) {
         if (entry.isIntersecting) {
            activeID.value = entry.target.id;
            break;
         }
      }
   };

   const observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0.5,
   });

   const elements = document.querySelectorAll("h2,h3");

   for (const element of elements) {
      observer.observe(element);
   }

   onBeforeUnmount(() => {
      for (const element of elements) {
         observer.unobserve(element);
      }
   });
});
</script>
