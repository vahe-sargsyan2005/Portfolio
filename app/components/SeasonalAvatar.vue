<script setup lang="ts">
import { computed } from 'vue'
import { NuxtImg } from '#components'

interface Props {
  src: string
  alt: string
  size?: number
}

const props = defineProps<Props>()

const month = new Date().getMonth() + 1

const season = computed(() => {
  if ([12, 1, 2].includes(month)) return 'winter'
  if ([3, 4, 5].includes(month)) return 'spring'
  if ([6, 7, 8].includes(month)) return 'summer'
  return 'autumn'
})

const seasonalHats: Record<string, string> = {
  winter: '/avatars/winter.png',
  spring: '/avatars/spring.png',
  summer: '/avatars/summer.png',
  autumn: '/avatars/autumn.png'
}

const size = computed(() => props.size ?? 112)
</script>

<template>
  <div
    :style="{ width: size + 'px', height: size + 'px' }"
    class="relative"
  >
    <!--    <NuxtImg -->
    <!--      :src="props.src" -->
    <!--      :alt="props.alt" -->
    <!--      :width="size" -->
    <!--      :height="size" -->
    <!--      format="webp" -->
    <!--      class="rounded-full border border-muted w-full h-full" -->
    <!--    /> -->

    <NuxtImg
      v-if="season"
      :src="seasonalHats[season]"
      :alt="props.alt"
      :width="size"
      :height="size"
      format="webp"
      class="rounded-full border border-muted w-full h-full"
    />
  </div>
</template>
