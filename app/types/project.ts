export type Project = {
  name: string
  image: string
  description: string
  url?: string
}

export type TranslatedProjects = Translated<Project>
