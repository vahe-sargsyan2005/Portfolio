export type ShopItem = {
  name: string
  description: string
  image: string
  price: number
  discount?: number
  url?: string
  github?: string
  download?: string
}

export type TranslatedShopItems = Translated<ShopItem>

