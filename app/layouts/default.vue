<script setup lang="ts">
</script>

<template>
  <div>
    <UContainer class="sm:border-x border-default max-w-4xl sm:pt-10 relative min-h-screen flex flex-col justify-between">
      <AppHeader />
      <div class="py-10 flex-1">
        <slot />
      </div>
      <AppFooter />
    </UContainer>
  </div>
</template>
