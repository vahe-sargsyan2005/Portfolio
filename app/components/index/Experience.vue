<script setup lang="ts">
import type { TranslatedExperiences, Experience } from '~/types/experience'

const { locale, t } = useI18n()
const { experienceString } = useExperienceString()

const { data: experienceByLang } = await useAsyncData<TranslatedExperiences>(
  'experiences',
  () => $fetch('/api/experiences')
)

const experiences = computed<Experience[]>(() => {
  const data = experienceByLang.value
  return data?.[locale.value as keyof TranslatedExperiences] ?? []
})
</script>

<template>
  <section class="mb-10">
    <UiHeading
      :title="`${t('experience.title')} — ${experienceString}`"
      :description="t('experience.description')"
      class="mb-6"
    />

    <ul class="space-y-6">
      <li
        v-for="(exp, index) in experiences"
        :key="index"
        class="border-l border-muted pl-4 transition-colors hover:border-primary group cursor-pointer"
      >
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-4 text-sm text-muted">
          <span class="font-medium text-black dark:text-white text-nowrap group-hover:text-primary transition-colors">
            {{ exp.company }}
          </span>
          <hr class="w-full opacity-50 hidden lg:block group-hover:border-primary group-hover:opacity-100 transition-colors">
          <span class="text-nowrap group-hover:text-primary transition-colors">{{ exp.period || exp.year }}</span>
        </div>

        <h3 class="text-lg sm:text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
          {{ exp.title }}
        </h3>

        <p class="text-sm sm:text-base text-muted line-clamp-3">
          {{ exp.description }}
        </p>
      </li>
    </ul>
  </section>
</template>
