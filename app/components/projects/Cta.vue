<script setup lang="ts">

</script>

<template>
  <section class="mt-10 p-5 border border-muted/40 bg-muted/20 rounded-xl text-center shadow-sm">
    <UiHeading
      :title="$t('projects.have_idea')"
      :description="$t('projects.what_i_offer')"
      class="mb-2"
    />
    <UButton
      href="https://t.me/Vahesargsyan2005"
      target="_blank"
      size="lg"
      icon="i-simple-icons-telegram"
    >
      {{ $t('projects.contact_telegram') }}
    </UButton>
  </section>
</template>
