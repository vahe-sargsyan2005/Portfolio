import type { TranslatedAchievements } from '~/types/achievements'

export default defineEventHandler((): TranslatedAchievements => {
  return {
    ru: [
      { year: '2025', description: 'Создание сайта проекта HentaiVoice и запуск бета-теста сайта' },
      { year: '2025', description: 'Запуск Currzy — открытой библиотеки валют для получения и конвертации актуальных курсов' },
      { year: '2024', description: '1-е место среди GitHub-контрибьюторов в Армении 🇦🇲' },
      { year: '2023', description: 'Запуск проекта Ota-ku — платформы для просмотра аниме на русском языке' }
    ],
    en: [
      { year: '2025', description: 'Created the HentaiVoice project website and launched its beta test' },
      { year: '2025', description: 'Launched Currzy — an open-source currency library for fetching and converting up-to-date rates' },
      { year: '2024', description: '1st place among GitHub contributors in Armenia 🇦🇲' },
      { year: '2023', description: 'Launched Ota-ku — platform for watching anime in Russian' }
    ],
    uk: [
      { year: '2025', description: 'Створення сайту проекту HentaiVoice та запуск бета-тесту сайту' },
      { year: '2025', description: 'Запуск Currzy — відкритої бібліотеки валют для отримання та конвертації актуальних курсів' },
      { year: '2024', description: '1-е місце серед GitHub-контриб’юторів в Вірменії 🇦🇲' },
      { year: '2023', description: 'Запуск проєкту Ota-ku — платформи для перегляду аніме російською мовою' }
    ],
    hy: [
      { year: '2025', description: 'Ստեղծվեց HentaiVoice նախագծի կայքը և սկսվեց բետա թեստը' },
      { year: '2025', description: 'Բաց կոդով արժութային գրադարանի Currzy-ի գործարկում՝ ընթացիկ փոխարժեքների ստացման և փոխարկման համար' },
      { year: '2024', description: 'GitHub-յան կոնտրիբյուտորների մեջ 1-ին տեղ Հայաստանում 🇦🇲' },
      { year: '2023', description: 'Ota-ku նախագծի գործարկում — ռուսերեն անիմե դիտելու հարթակ' }
    ]
  }
})
