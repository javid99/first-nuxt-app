<template>
   <div class="flex items-center gap-1">
      <div class="text-gray-500 text-xs" v-if="showLabel">change to {{ nextMode }}</div>
      <button
         @mouseenter="showLabel = true"
         @mouseleave="showLabel = false"
         @click="colorModeToggler"
         class="hover:bg-gray-200 text-4xl md:text-base dark:hover:bg-gray-700 px-2 py-1"
      >
         {{ nextModeIcon }}
      </button>
   </div>
</template>

<script setup>
const colorMode = useColorMode();
const showLabel = ref(false);
const modes = ["system", "light", "dark"];
const nextModeIcons = {
   system: "🌓",
   light: "🌕",
   dark: "🌑",
};

const nextMode = computed(() => {
   const currentModeIndex = modes.indexOf(colorMode.preference);
   let nextModeIndex = null;
   if (currentModeIndex + 1 === modes.length) {
      nextModeIndex = 0;
   } else {
      nextModeIndex = currentModeIndex + 1;
   }

   return modes[nextModeIndex];
});

const nextModeIcon = computed(() => {
   return nextModeIcons[nextMode.value];
});

const colorModeToggler = () => {
   colorMode.preference = nextMode.value;
};
</script>
