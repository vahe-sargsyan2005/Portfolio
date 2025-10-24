<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import type { Activity, TranslatedActivities } from '~/types/activity'

const { t, locale } = useI18n()

const { data: activitiesByLang } = await useAsyncData<TranslatedActivities>('activities', () =>
  $fetch('/api/activities')
)

const activities = computed<Activity[]>(() => {
  if (!activitiesByLang.value) return []
  if (locale.value in activitiesByLang.value) {
    return activitiesByLang.value[locale.value as keyof TranslatedActivities]
  }
  return []
})
</script>

<template>
  <div class="space-y-4">
    <UiHeading
      :title="t('activity.title')"
      :description="t('activity.description')"
    />

    <div class="space-y-2">
      <p
        v-for="(item, index) in activities"
        :key="'activity-' + index"
        class="text-muted text-sm"
      >
        {{ item.text }}
      </p>
    </div>
  </div>
</template>
