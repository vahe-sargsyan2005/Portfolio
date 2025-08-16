import type { TranslatedAchievements } from '~/types/achievements'

export default defineEventHandler((): TranslatedAchievements => {
  return {
    ru: [
      { year: '2025', description: '1-е место среди GitHub-контрибьюторов в Армении 🇦🇲' }
    ],
    en: [
      { year: '2025', description: 'Ranked #1 GitHub contributor in Armenia 🇦🇲' }
    ],
    hy: [
      { year: '2025', description: 'GitHub-ի №1 ներդրողը Հայաստանում 🇦🇲' }
    ]
  }
})
