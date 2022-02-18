<script setup lang="ts">
const page = {
  faq: {
    title: 'Часто задаваемые вопросы',
    description: 'Ответы на самые частые вопросы о моей работе и проектах.',
    categories: [
      {
        title: 'Общие вопросы',
        questions: [
          {
            label: 'Сколько лет вы занимаетесь разработкой?',
            content: 'Я начал коммерчески работать в 2020 году. До этого писал pet-проекты и контрибьютил в open source.'
          },
          {
            label: 'Какие технологии вы используете?',
            content: 'Основной стек: Nuxt.js, Vue 3, Laravel, PHP, TypeScript, Docker, MySQL/PostgreSQL.'
          },
          {
            label: 'Где можно посмотреть ваши проекты?',
            content: 'Проекты доступны на GitHub (github.com/w33bvGL) и на моём сайте vahe.anidzen.com.'
          }
        ]
      },
      {
        title: 'Сотрудничество',
        questions: [
          {
            label: 'Вы работаете под ключ?',
            content: 'Да. От идеи и архитектуры до запуска и поддержки в продакшене.'
          },
          {
            label: 'Можно ли вас подключить к существующему проекту?',
            content: 'Конечно. Чаще всего подключаюсь для оптимизации, рефакторинга или добавления новых модулей.'
          },
          {
            label: 'Как проходит оплата?',
            content: 'Гибко: предоплата 30–50%, далее — milestone или спринтами.'
          }
        ]
      },
      {
        title: 'Технические детали',
        questions: [
          {
            label: 'Вы делаете адаптивную верстку?',
            content: 'Да, сайты оптимизированы под desktop, tablet и mobile.'
          },
          {
            label: 'Можно ли интегрировать сторонние API?',
            content: 'Да, есть опыт интеграции соцсетей, платёжных систем, карт и аналитики.'
          },
          {
            label: 'Вы поддерживаете проекты после сдачи?',
            content: 'Да, предлагаю техподдержку: баг-фиксы, обновления, оптимизация.'
          }
        ]
      }
    ]
  }
}

const items = computed(() => {
  return page.faq?.categories.map((faq) => {
    return {
      label: faq.title,
      key: faq.title.toLowerCase(),
      questions: faq.questions
    }
  })
})

const ui = {
  root: 'flex items-center gap-4 w-full',
  list: 'relative flex bg-transparent dark:bg-transparent gap-2 px-0',
  indicator: 'absolute top-[4px] duration-200 ease-out focus:outline-none rounded-lg bg-elevated/60',
  trigger: 'px-3 py-2 rounded-lg hover:bg-muted/50 data-[state=active]:text-highlighted data-[state=inactive]:text-muted',
  label: 'truncate'
}
</script>

<template>
  <section class="mb-10">
    <div class="col-span-2 space-y-5">
      <UiPageHeader
        :title="page.faq.title"
        :description="page.faq.description"
      />
      <UTabs
        :items="items"
        orientation="horizontal"
        :ui="ui"
      >
        <template #content="{ item }">
          <UPageAccordion
            trailing-icon="lucide:plus"
            :items="item.questions"
            :ui="{
              item: 'border-none',
              trigger: 'mb-2 border-0 group px-4 transform-gpu rounded-lg bg-elevated/60 will-change-transform hover:bg-muted/50',
              trailingIcon: 'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135'
            }"
          >
            <template #body="{ item: _item }">
              <MDC
                :value="_item.content"
                unwrap="p"
                class="px-4"
              />
            </template>
          </UPageAccordion>
        </template>
      </UTabs>
    </div>
  </section>
</template>
