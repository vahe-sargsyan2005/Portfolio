import type { TranslatedAbout } from '~/types/about'

export default defineEventHandler((): TranslatedAbout => {
  return {
    ru: [
      {
        title: 'Что я делаю',
        content:
          'Разрабатываю современные веб-приложения на Nuxt.js и Laravel — от архитектуры до продакшена. Отвечаю за полный цикл: проектирование, backend, frontend, интеграции, деплой и оптимизацию. Работаю системно, с акцентом на производительность и масштабируемость.'
      },
      {
        title: 'Мой опыт',
        content:
          'Работаю с микросервисной архитектурой, Kafka, RabbitMQ, KeyDB, Redis и очередями. Реализую интеграции с REST и GraphQL API, а также внешними системами. Использую Laravel (9–12), Nuxt.js (2–4), Octane, Inertia и TypeScript. Частично знаком с Zend и его экосистемой. Создаю UI-компоненты, библиотеки и высоконагруженные системы.'
      },
      {
        title: 'Ценности',
        content:
          'Люблю честность, прозрачность и отсутствие бюрократии. Ценю стабильность, аккуратный код и чёткие цели. Предпочитаю прямое общение, ясные задачи и результат, за который не стыдно.'
      }
    ],
    hy: [
      {
        title: 'Ի՞նչ եմ անում',
        content:
          'Զարգացնում եմ ժամանակակից վեբ հավելվածներ Nuxt.js-ով և Laravel-ով՝ սկսած ճարտարապետությունից մինչև արտադրական փուլ։ Պատասխանատու եմ ամբողջ ցիկլի համար՝ նախագծում, backend, frontend, ինտեգրացիաներ, տեղակայում և օպտիմալացում։ Աշխատում եմ համակարգված՝ շեշտը դնելով արդյունավետության և մասշտաբելիության վրա։'
      },
      {
        title: 'Իմ փորձը',
        content:
          'Աշխատում եմ միկրոսերվիսային ճարտարապետության, Kafka, RabbitMQ, KeyDB, Redis և հերթերի հետ։ Իրականացնում եմ ինտեգրացիաներ REST և GraphQL API-ների հետ, ինչպես նաև արտաքին համակարգերի։ Օգտագործում եմ Laravel (9–12), Nuxt.js (2–4), Octane, Inertia և TypeScript։ Մասնակիորեն ծանոթ եմ Zend-ի էկոհամակարգին։ Ստեղծում եմ UI կոմպոնենտներ, գրադարաններ և բարձր բեռնվածության համակարգեր։'
      },
      {
        title: 'Արժեքներ',
        content:
          'Սիրում եմ ազնվությունը, թափանցիկությունը և բյուրոկրատիայի բացակայությունը։ Գնահատում եմ կայունությունը, մաքուր կոդը և հստակ նպատակները։ Նախընտրում եմ ուղիղ հաղորդակցություն, հստակ խնդիրներ և արդյունք, որի համար արժե հպարտանալ։'
      }
    ],
    en: [
      {
        title: 'What I Do',
        content:
          'I develop modern web applications using Nuxt.js and Laravel — from architecture to production. I’m responsible for the full cycle: planning, backend, frontend, integrations, deployment, and optimization. I work systematically with a focus on performance and scalability.'
      },
      {
        title: 'My Experience',
        content:
          'I work with microservice architectures, Kafka, RabbitMQ, KeyDB, Redis, and queues. I implement integrations with REST and GraphQL APIs as well as external systems. I use Laravel (9–12), Nuxt.js (2–4), Octane, Inertia, and TypeScript. I’m partially familiar with Zend and its ecosystem. I create UI components, libraries, and high-load systems.'
      },
      {
        title: 'Values',
        content:
          'I value honesty, transparency, and the absence of bureaucracy. I appreciate stability, clean code, and clear goals. I prefer direct communication, precise tasks, and results that I can be proud of.'
      }
    ],
    uk: [
      {
        title: 'Що я роблю',
        content:
          'Розробляю сучасні веб-застосунки на Nuxt.js і Laravel — від архітектури до продакшену. Відповідаю за повний цикл: проєктування, backend, frontend, інтеграції, деплой і оптимізацію. Працюю системно, з акцентом на продуктивність і масштабованість.'
      },
      {
        title: 'Мій досвід',
        content:
          'Працюю з мікросервісною архітектурою, Kafka, RabbitMQ, KeyDB, Redis і чергами. Реалізую інтеграції з REST і GraphQL API, а також зовнішніми системами. Використовую Laravel (9–12), Nuxt.js (2–4), Octane, Inertia та TypeScript. Частково знайомий із Zend та його екосистемою. Створюю UI-компоненти, бібліотеки та високонавантажені системи.'
      },
      {
        title: 'Цінності',
        content:
          'Люблю чесність, прозорість і відсутність бюрократії. Ціную стабільність, охайний код і чіткі цілі. Віддаю перевагу прямому спілкуванню, ясним завданням і результату, за який не соромно.'
      }
    ]
  }
})
