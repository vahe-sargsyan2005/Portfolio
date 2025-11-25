<script setup lang="ts">
const { global, footer } = useAppConfig()
const img = useImage()
</script>

<template>
  <section class="mb-10 flex gap-5 flex-col md:flex-row items-center">
    <div class="flex-1">
      <h1 class="text-2xl font-bold tracking-tight">
        {{ $t('about.title') }}
      </h1>
      <p class="text-muted text-base">
        {{ $t('about.intro') }}
      </p>
      <div class="mt-2 flex gap-2">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'soft', ...link }"
        />
      </div>
    </div>
    <div class="hidden md:flex justify-center items-start">
      <NuxtImg
        class="rounded-xl border-2 border-muted pointer-events-none select-none"
        width="150"
        height="150"
        format="webp"
        :src="global.picture.src"
        :alt="global.picture.alt"
        :placeholder="img(global.picture.src, { h: 10, f: 'png', blur: 0.3, q: 50 })"
      />
    </div>
  </section>
</template>

<style scoped>

</style>
