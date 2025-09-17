<template>
  <div class="space-y-4">
    <UiPageHeader
      :title="$t('activity.title')"
      :description="$t('activity.description')"
    />
    <p class="text-muted text-sm">
      {{ $t('activity.opensource') }}
    </p>
    <p class="text-muted text-sm">
      {{ $t('activity.personal') }}
    </p>
  </div>
</template>
