export {}

declare global {
  type Locale = 'ru' | 'en' | 'hy' | 'uk'

  type Translated<T> = {
    [L in Locale]: T[]
  }
}
