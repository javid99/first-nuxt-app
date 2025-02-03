<template>
   <NuxtLayout>
      <div>
         <h2 class="text-2xl font-semibold mb-2">Opps {{ error?.statusCode }}</h2>
         <p class="mb-2">{{ error?.statusMessage }}</p>
         <button @click="handleError">Clear errors</button>
      </div>
   </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
   error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>
