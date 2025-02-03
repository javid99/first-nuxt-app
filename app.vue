<template>
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>

<script setup>
useHead({
   titleTemplate: "%s - Javid Seyyedi",
   link: [
      {
         rel: "preconnect",
         href: "https://fonts.googleapis.com",
      },
      {
         rel: "stylesheet",
         href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
         crossorigin: "",
      },
   ],
});
</script>

<style>
body {
   font-family: "Roboto";
   @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}

.page-enter-active,
.page-leave-active {
   transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
   opacity: 0;
   filter: grayscale(1);
}
</style>

<!-- <script setup>
const layout = 'another'

</script> -->
