<template>
   <slot :posts="posts">
      <div class="not-prose font-mono">
         <div class="column text-gray-400 text-sm">
            <div>date</div>
            <div>title</div>
         </div>
         <ul>
            <li v-for="post in sortedPosts" :key="post.path">
               <NuxtLink
                  :to="post.path"
                  class="column group hover:bg-gray-100 dark:hover:bg-gray-800"
               >
                  <div :class="!post.displayYear ? 'text-white group-hover:text-gray-100 dark:text-gray-900 dark:group-hover:text-gray-800' : ''">
                     {{ post.year }}
                  </div>
                  <div>{{ post.title }}</div>
               </NuxtLink>
            </li>
         </ul>
      </div>
   </slot>
</template>

<script setup>
const props = defineProps({
   limit: {
      type: Number,
      default: null,
   },
});

const { data: posts } = await useAsyncData("all-blogs", () => {
   const query = queryCollection("blog")
      .select("description", "id", "path", "title", "meta")
      .where("path", "!=", "/blog");

   if (props.limit) {
      query.limit(props.limit);
   }

   return query.all();
});

const sortedPosts = computed(() => {
   if (posts.value) {
      const sortPost = [...posts.value].sort((a, b) => {
         const dateA = new Date(a.meta.date);
         const dateB = new Date(b.meta.date);
         return dateB.getTime() - dateA.getTime();
      });

      const result = [];
      let lastYear = null;
      for (let post of sortPost) {
         const year = new Date(post.meta.date).getFullYear();
         post.displayYear = year !== lastYear;
         lastYear = year;
         post.year = year;
         result.push(post);
      }
      return result;
   }
   return [];
});
</script>

<style scoped>
.column {
   @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
