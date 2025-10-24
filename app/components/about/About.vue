<script setup lang="ts">
import type { About, TranslatedAbout } from '~/types/about'

const { locale } = useI18n()

const { data: aboutBylang } = await useAsyncData<TranslatedAbout>('about', () =>
  $fetch('/api/about')
)

const about = computed<About[]>(() => {
  if (!aboutBylang.value) return []
  if (locale.value in aboutBylang.value) {
    return aboutBylang.value[locale.value as keyof TranslatedAbout]
  }
  return []
})
</script>

<template>
  <div>
    <div class="mb-4">
      <UiHeading
        :title="$t('about.title')"
        :description="$t('about.description')"
      />
    </div>
    <div class="space-y-3">
      <div
        v-for="(item, idx) in about"
        :key="idx"
        class="border-l pl-4 border-muted"
      >
        <h3 class="font-semibold text-base">
          {{ item.title }}
        </h3>
        <p class="text-base text-muted text-sm">
          {{ item.content }}
        </p>
      </div>
    </div>
  </div>
</template>
