<script setup lang="ts">
import { en, ru, hy, uk } from '@nuxt/ui/locale'

const { locale } = useI18n()
const route = useRoute()

const onLocaleChange = (newLocale: string | undefined) => {
  if (!newLocale) return

  locale.value = newLocale as 'en' | 'ru' | 'hy' | 'uk'

  const newPrefix = newLocale !== 'en' ? `/${newLocale}` : ''
  const currentPathWithoutLocale = route.fullPath.replace(/^\/(en|ru|hy|uk)(\/|$)/, '/')

  const newPath = `${newPrefix}${currentPathWithoutLocale}`
  navigateTo(newPath)
}
</script>

<template>
  <ULocaleSelect
    v-model="locale"
    variant="soft"
    size="xs"
    :locales="[en, ru, hy, uk]"
    @update:model-value="onLocaleChange"
  />
</template>
