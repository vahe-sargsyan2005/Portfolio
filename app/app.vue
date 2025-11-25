<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'
import AppIcons from '~/components/AppIcons.vue'
import { ref, onMounted } from 'vue'

const colorMode = useColorMode()
const { locale } = useI18n()
const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

// Настройка head
useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: locale.value
  }
})

// SEO
useSeoMeta({
  ogImage: '/avatar-og.jpg',
  twitterImage: '/avatar-og.jpg',
  twitterCard: 'summary'
})

// --- Сезонная тема ---
function useSeasonTheme() {
  const season = ref<'winter' | 'spring' | 'summer' | 'autumn'>('winter')

  const month = new Date().getMonth() + 1
  if ([12, 1, 2].includes(month)) season.value = 'winter'
  else if ([3, 4, 5].includes(month)) season.value = 'spring'
  else if ([6, 7, 8].includes(month)) season.value = 'summer'
  else season.value = 'autumn'

  const seasonColors: Record<string, string> = {
    winter: '#0ea5e9',   // голубой
    spring: '#22c55e',   // зелёный
    summer: '#facc15',   // жёлтый
    autumn: '#f97316'    // оранжевый
  }

  const setSeasonTheme = () => {
    document.documentElement.style.setProperty('--primary', seasonColors[season.value])
  }

  onMounted(() => setSeasonTheme())
  return { season }
}

// Вызов хука
useSeasonTheme()
</script>

<template>
  <UApp
    :locale="locales[locale]"
    :toaster="{ expand: false }"
  >
    <NuxtLoadingIndicator
      color="var(--loading-indicator)"
      :height="2"
    />
    <NuxtLayout>
      <main class="relative">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </UApp>

  <AppIcons />
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
