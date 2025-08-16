<script setup lang="ts">

</script>

<template>
  <section class="mt-10 p-5 border border-muted/40 bg-muted/20 rounded-xl text-center shadow-sm">
    <h3 class="text-2xl font-bold mb-2">
      {{ $t('projects.haveIdea') }}
    </h3>
    <p class="text-muted text-base mb-5 max-w-xl mx-auto">
      {{ $t('projects.whatIOffer') }}
    </p>
    <UButton
      href="https://t.me/Vahesargsyan2005"
      target="_blank"
      size="lg"
      icon="i-simple-icons-telegram"
      color="neutral"
    >
      {{ $t('projects.contactTelegram') }}
    </UButton>
  </section>
</template>
