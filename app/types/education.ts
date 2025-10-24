export interface Education {
  title: string
  description: string
  url: string
}

export type TranslatedEducation = Translated<Education>
