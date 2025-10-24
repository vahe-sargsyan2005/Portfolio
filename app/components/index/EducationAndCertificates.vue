<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import type { Education, TranslatedEducation } from '~/types/education'

const { t, locale } = useI18n()

const { data: educationByLang } = await useAsyncData<TranslatedEducation>('education', () =>
  $fetch('/api/education')
)

const educations = computed<Education[]>(() => {
  if (!educationByLang.value) return []
  if (locale.value in educationByLang.value) {
    return educationByLang.value[locale.value as keyof TranslatedEducation]
  }
  return []
})
</script>

<template>
  <div class="space-y-5">
    <UiHeading
      :title="t('education.title')"
      :description="t('education.description')"
    />

    <div class="space-y-4">
      <a
        v-for="(item, index) in educations"
        :key="'edu-' + index"
        :href="item.url || '#'"
        target="_blank"
        rel="noopener noreferrer"
        class="block border-l pl-4 border-muted group hover:border-primary transition-colors cursor-pointer"
      >
        <h5 class="font-semibold text-base group-hover:text-primary transition-colors">
          {{ item.title }}
        </h5>
        <p class="text-sm text-muted">
          {{ item.description }}
        </p>
      </a>
    </div>
  </div>
</template>
