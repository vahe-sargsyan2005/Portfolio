import { defineNuxtPlugin } from '#app'
import { useSeason } from '~/composables/useSeason'

export default defineNuxtPlugin(() => {
  const { primaryColor } = useSeason()
  const appConfig = useAppConfig()

  appConfig.ui.colors.primary = primaryColor.value

  if (import.meta.client) {
    localStorage.setItem('nuxt-ui-primary', primaryColor.value)
  }
})
