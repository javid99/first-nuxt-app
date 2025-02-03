<template>
   <div>
      <ul>
         <li v-for="link in links" :key="link.id">
            <NuxtLink
               :to="{ path: route.path, hash: `#${link.id}` }"
               :class="
                  (level ? 'ml-4' : '', activeID === link.id ? 'text-green-600' : '')
               "
            >
               {{ link.text }}
            </NuxtLink>
            <TocLinks :links="link.children" :level="level + 1" :active-iD="activeID" />
         </li>
      </ul>
   </div>
</template>

<script setup>
const route = useRoute();

defineProps({
   links: Array,
   level: {
      type: Number,
      default: 0,
   },
   activeID: {
      type: String,
      default: null,
   },
});
</script>
