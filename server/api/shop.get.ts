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
      },
      {
        name: 'Rus military badges',
        description: 'This resource pack was created to replace standard symbols with images of Russian Army ranks. It can be used for servers, mods, or personal worlds, and also as a template for creating your own custom badges.',
        image: '/projects/rus-military-badges.png',
        url: 'https://modrinth.com/resourcepack/rus-military-badges',
        repository: 'https://github.com/Zone-13/rus-military-badges',
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
      },
      {
        name: 'Ռուսական բանակի նշաններ',
        description: 'Այս ռեսուրս փաքը ստեղծվել է ստանդարտ սիմվոլները փոխարինելու համար՝ ռուսական բանակի աստիճանների պատկերներով։ Կարելի է օգտագործել սերվերներում, մոդերում կամ անձնական աշխարհներում, ինչպես նաև որպես օրինակ ձեր սեփական նշանների ստեղծման համար։',
        image: '/projects/rus-military-badges.png',
        url: 'https://modrinth.com/resourcepack/rus-military-badges',
        repository: 'https://github.com/Zone-13/rus-military-badges',
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
      },
      {
        name: 'Русские армейские погоны',
        description: 'Этот ресурс-пак был создан для замены стандартных символов изображениями воинских званий Российской армии. Его можно использовать на серверах, в модах или в личных мирах, а также как шаблон для собственных значков.',
        image: '/projects/rus-military-badges.png',
        url: 'https://modrinth.com/resourcepack/rus-military-badges',
        repository: 'https://github.com/Zone-13/rus-military-badges',
        price: 0,
        discount: 100
      }
    ]
  }
})
