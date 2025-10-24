export interface Activity {
  text: string
  url?: string
}

export type TranslatedActivities = Translated<Activity>
