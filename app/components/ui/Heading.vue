<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <div>
    <h4 class="text-xl font-semibold">
      {{ title }}
    </h4>
    <p
      v-if="description"
      class="text-muted"
    >
      {{ description }}
    </p>
  </div>
</template>
