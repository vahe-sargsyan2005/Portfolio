<script setup lang="ts">
import { ref } from 'vue'

const month = new Date().getMonth() + 1
const isWinter = month === 11 || month === 12 || month === 1 || month === 2

const levels = 1
const bulbsPerLevel = 20

const wires = Array.from({ length: levels }, (_, i) => i)
const bulbs = Array.from({ length: bulbsPerLevel }, (_, i) => i)

const mode = ref(1)

const colors = [
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FFFF00',
  '#FF7F00'
]

function toggleMode() {
  mode.value++
  if (mode.value > 3) mode.value = 0
}

function getRandomColorExclude(prev: string | null) {
  const available = colors.filter(c => c !== prev)
  return available[Math.floor(Math.random() * available.length)]
}

const bulbsColors = wires.map(() => {
  let prevColor: string | null = null
  return bulbs.map(() => {
    const color = getRandomColorExclude(prevColor)
    prevColor = color
    return color
  })
})
</script>

<template>
  <ClientOnly>
    <div class="bottom-3 left-3 w-full fixed">
      <UButton
        variant="soft"
        color="neutral"
        icon="i-lucide-circle-power"
        @click="toggleMode"
      />
    </div>

    <div
      v-if="isWinter"
      class="pointer-events-none select-none top-0 left-0 w-full z-[9999] fixed"
    >
      <div class="lightrope-wrapper">
        <div
          v-for="(lvl, lvlIndex) in wires"
          :key="lvl"
          class="lightrope"
          :style="{ top: `${lvl * 40}px` }"
        >
          <ul>
            <li
              v-for="(b, bIndex) in bulbs"
              :key="b"
              :class="{
                off: mode === 0,
                'flash-1': mode === 1,
                'flash-2': mode === 2,
                'flash-3': mode === 3
              }"
            >
              <div
                class="bulb"
                :style="{
                  background: bulbsColors[lvlIndex][bIndex],
                  boxShadow: `0 4px 20px 3px ${bulbsColors[lvlIndex][bIndex]}`
                }"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.lightrope {
  width: 100%;
  position: absolute;
  left: 0;
  padding: 0;
  overflow: visible;
}

.lightrope ul {
  margin: 0;
  padding: 0;
  white-space: nowrap;
  text-align: center;
}

.lightrope li {
  position: relative;
  list-style: none;
  display: inline-block;
  width: 14px;
  height: 28px;
  margin: 18px 24px;
}

/* Лампа с анимацией */
.lightrope li .bulb {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation-fill-mode: both;
  animation-duration: 1.7s;
  animation-iteration-count: infinite;
}

.flash-1 .bulb { animation-name: flash-1; }
.flash-2 .bulb { animation-name: flash-2; }
.flash-3 .bulb { animation-name: flash-3; }

.off .bulb {
  background: #222 !important;
  box-shadow: none !important;
  animation: none !important;
}

.lightrope li::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 2px;
  width: 10px;
  height: 10px;
  background: var(--ui-border-muted);
  border-radius: 3px;
}

.lightrope li::after {
  content: "";
  position: absolute;
  top: -20px;
  left: 13px;
  width: 50px;
  height: 16px;
  border-bottom: 2px solid var(--ui-border-muted);
  border-radius: 50%;
  pointer-events: none;
  filter: none;
  opacity: 1 !important;
}

.lightrope li:last-child::after { content: none; }

/* Анимации моргания ламп */
@keyframes flash-1 { 0%, 100% { opacity: 1; filter: brightness(1); } 50% { opacity: 0.3; filter: brightness(2.5); } }
@keyframes flash-2 { 0%, 100% { opacity: 1; filter: brightness(1); } 50% { opacity: 0.4; filter: brightness(2); } }
@keyframes flash-3 { 0%, 100% { opacity: 1; filter: brightness(1); } 50% { opacity: 0.3; filter: brightness(1.8); } }
</style>
