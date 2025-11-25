<script setup lang="ts">
const { global, footer } = useAppConfig()
const { t, locales } = useI18n()

const config = useRuntimeConfig()

const resumeOptions = computed(() => {
  return locales.value.map(locale => ({
    value: locale.code,
    label: locale.name
  }))
})

function downloadResume(lang: string): void {
  if (!['en', 'hy', 'ru', 'uk'].includes(lang)) return

  const isStaticHosting = config.public.appEnv === 'production'
  const url = isStaticHosting
    ? `/resume/resume-${lang}.pdf`
    : `/api/resume-pdf?lang=${lang}`

  const link = document.createElement('a')
  link.href = url
  link.download = `resume-${lang}.pdf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <UPageCTA
    variant="naked"
    :ui="{ links: 'mt-5 flex flex-col space-y-3', container: 'p-0 sm:p-5 md:py-0 lg:py-0 px-0 sm:px-5 mb-10' }"
  >
    <template #title>
      <div>
        <div class="mb-5">
          <div class="flex items-center justify-center">
            <SeasonalAvatar
              :src="global.picture.src"
              :alt="global.picture.alt"
              :size="112"
            />
          </div>
        </div>
        <h2 class="text-3xl sm:text-4xl text-pretty tracking-tight font-bold text-highlighted text-center">
          {{ t('cta.title') }}
        </h2>
        <h5 class="font-light text-lg text-center text-muted mt-2">
          {{ t('cta.description') }}
        </h5>
      </div>
    </template>

    <template #links>
      <div class="flex items-center justify-center gap-5">
        <USelect
          class="outline-1 outline-primary"
          :items="resumeOptions"
          :placeholder="t('cta.resume.download')"
          @update:model-value="downloadResume"
        />
        <CommonAvailableStatus />
      </div>
      <div class="flex items-center justify-center gap-3">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ size: 'lg', variant: 'soft', ...link }"
        />
      </div>
    </template>
  </UPageCTA>
</template>
