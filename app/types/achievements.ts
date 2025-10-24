export interface Achievement {
  year: string
  description: string
}

export type TranslatedAchievements = Translated<Achievement>
