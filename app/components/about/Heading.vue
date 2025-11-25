<script setup lang="ts">
const { global, footer } = useAppConfig()
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
          v-bind="{ variant: 'soft', ...link }"
        />
      </div>
    </div>
    <div class="hidden md:flex justify-center items-start rounded-full ring-2 ring-primary/80">
      <SeasonalAvatar
        :src="global.picture.src"
        :alt="global.picture.alt"
        :size="150"
      />
    </div>
  </section>
</template>

<style scoped>

</style>
