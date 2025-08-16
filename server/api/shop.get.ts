import type { TranslatedShopItems } from '~/types/shop'

export default defineEventHandler((): TranslatedShopItems => {
  return <TranslatedShopItems>{
    en: [
      {
        name: 'W33bv.gl Portfolio',
        description: 'My personal open-source portfolio website. Showcasing full-stack developer skills, projects, and experience.',
        image: '/projects/portfolio.png',
        url: 'https://vahe.anidzen.com',
        repository: 'https://github.com/vahe-sargsyan2005/Portfolio',
        price: 0,
        discount: 100
      }
    ],
    hy: [
      {
        name: 'W33bv.gl Պորտֆոլիո',
        description: 'Իմ անձնական պորտֆոլիո կայքը՝ բաց կոդով։ Ներկայացնում է full-stack ծրագրավորողի հմտությունները, նախագծերն ու փորձը։',
        image: '/projects/portfolio.png',
        url: 'https://vahe.anidzen.com',
        repository: 'https://github.com/vahe-sargsyan2005/Portfolio',
        price: 0,
        discount: 100
      }
    ],
    ru: [
      {
        name: 'W33bv.gl Portfolio',
        description: 'Мой персональный сайт-портфолио с открытым исходным кодом. Демонстрация проектов, навыков и опыта full-stack разработчика.',
        image: '/projects/portfolio.png',
        url: 'https://vahe.anidzen.com',
        repository: 'https://github.com/vahe-sargsyan2005/Portfolio',
        price: 0,
        discount: 100
      }
    ]
  }
})
