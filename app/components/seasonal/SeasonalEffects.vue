<script setup lang="ts">
const { season } = useSeason()
</script>

<template>
  <div>
    <ClientOnly v-if="season === 'autumn'">
      <SeasonalFallingLeaves />
    </ClientOnly>

    <ClientOnly v-else-if="season === 'winter'">
      <SeasonalChristmasLights />
    </ClientOnly>
  </div>
</template>
