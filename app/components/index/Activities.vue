<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="space-y-4">
    <UiPageHeader
      :title="t('activity.title')"
      :description="t('activity.description')"
    />
    <p class="text-muted text-sm">
      {{ t('activity.description1') }}
    </p>
  </div>
</template>
