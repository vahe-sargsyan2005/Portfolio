export interface Activity {
  text: string
  url?: string
}

export interface TranslatedActivities {
  ru: Activity[]
  en: Activity[]
  hy: Activity[]
  uk: Activity[]
}
