export interface Experience {
  year: string
  company: string
  title: string
  period: string
  description: string
}

export type TranslatedExperiences = Translated<Experience>
