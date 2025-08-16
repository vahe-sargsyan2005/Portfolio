import type { TranslatedAbout } from '~/types/about'

export default defineEventHandler((): TranslatedAbout => {
  return {
    ru: [
      {
        title: 'Что я делаю',
        content: 'Разрабатываю современные веб-приложения на Nuxt.js и Laravel: от концепции до продакшена. Беру на себя полный цикл разработки — архитектура, backend, frontend, интеграции и оптимизация.'
      },
      {
        title: 'Опыт',
        content: 'Работаю с микросервисной архитектурой, очередями и кешами, интеграцией API (REST, GraphQL, сторонние сервисы). Разрабатываю фронтенд на Nuxt.js (2–4) и backend на Laravel (9–12) с использованием Octane, Inertia и других инструментов. Создаю UI-компоненты и библиотеки, реализую высоконагруженные системы и сложные бизнес-процессы.'
      },
      {
        title: 'Ценности',
        content: 'Ценю стабильность, надёжность и аккуратный код. Предпочитаю общение без бюрократии и прозрачное планирование задач, всегда ориентируюсь на результат и долгосрочную перспективу.'
      }
    ],
    en: [
      {
        title: 'What I Do',
        content: 'I develop modern web applications with Nuxt.js and Laravel: from concept to production. I handle the full development cycle — architecture, backend, frontend, integrations, and optimization.'
      },
      {
        title: 'Experience',
        content: 'I work with microservice architecture, queues and caching, and API integrations (REST, GraphQL, third-party services). I develop frontend on Nuxt.js (2–4) and backend on Laravel (9–12) using Octane, Inertia, and other tools. I create UI components and libraries, implementing high-load systems and complex business processes.'
      },
      {
        title: 'Values',
        content: 'I value stability, reliability, and clean code. I prefer communication without bureaucracy and transparent task planning, always focusing on results and long-term perspective.'
      }
    ],
    hy: [
      {
        title: 'Ի՞նչ եմ անում',
        content: 'Անվտանգ և արդիական վեբ հավելվածներ եմ մշակում Nuxt.js և Laravel-ով՝ գաղափարից մինչև պրոդաքշն։ Ընդունում եմ ամբողջ զարգացման ցիկլը՝ ճարտարապետություն, backend, frontend, ինտեգրացիաներ և օպտիմալացում։'
      },
      {
        title: 'Փորձ',
        content: 'Աշխատում եմ միկրոսերվիսային ճարտարապետության, հերթերի և կեշավորման, API ինտեգրացիաների (REST, GraphQL, երրորդ կողմի ծառայություններ) հետ։ Ստեղծում եմ frontend Nuxt.js (2–4) և backend Laravel (9–12) հետ՝ օգտագործելով Octane, Inertia և այլ գործիքներ։ Ստեղծում եմ UI կոմպոնենտներ և գրադարաններ, իրականացնում բարձրաբեռնված համակարգեր և բարդ բիզնես գործընթացներ։'
      },
      {
        title: 'Արժեքներ',
        content: 'Անվտանգություն, վստահելիություն և մաքուր կոդը կարևորում եմ։ Նախընտրում եմ շփումը առանց բյուրոկրատիայի և թափանցիկ գործառնական պլանավորում, միշտ կենտրոնանալով արդյունքների և երկարաժամկետ տեսանկյունների վրա։'
      }
    ]
  }
})
