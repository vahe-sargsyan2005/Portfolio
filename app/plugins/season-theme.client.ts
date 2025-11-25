// ~/plugins/season-theme.client.ts
import { defineNuxtPlugin, useAppConfig } from '#app'

export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig()

  // Определяем сезон
  const month = new Date().getMonth() + 1
  let season: 'winter' | 'spring' | 'summer' | 'autumn' = 'winter'

  if ([12, 1, 2].includes(month)) season = 'winter'
  else if ([3, 4, 5].includes(month)) season = 'spring'
  else if ([6, 7, 8].includes(month)) season = 'summer'
  else season = 'autumn'

  const seasonColors: Record<string, string> = {
    winter: 'blue',
    spring: '#22c55e',
    summer: '#facc15',
    autumn: 'orange'
  }

  const primaryColor = seasonColors[season]

  appConfig.ui.colors.primary = primaryColor

  if (process.client) {
    localStorage.setItem('nuxt-ui-primary', primaryColor)
  }
})
