<template>
   <div class="container mx-auto max-w-4xl">
      <header class="flex justify-between items-start md:items-center mt-5">
         <div class="flex items-center md:space-x-12">
            <NuxtLink
               class="text-xl hidden md:block font-semibold p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
               to="/"
            >
               Javid Seyyedi
            </NuxtLink>

            <Menu />
         </div>
         <ClientOnly>
            <ColorModeSelector />
         </ClientOnly>
      </header>
      <main class="p-2 mt-5">
         <slot />
      </main>
   </div>
</template>

<script setup></script>
