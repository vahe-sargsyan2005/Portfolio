<script setup lang="ts">
const month = new Date().getMonth() + 1
const isWinter = month === 11 || month === 12 || month === 1 || month === 2

const bulbs = Array.from({ length: 40 }, (_, i) => i)
</script>

<template>
  <div
    v-if="isWinter"
    class="pointer-events-none select-none absolute top-0 left-0 w-full z-[9999]"
  >
    <ul class="lightrope">
      <li v-for="i in bulbs" :key="i"></li>
    </ul>
  </div>
</template>

<style scoped>
/* Контейнер гирлянды */
.lightrope {
  width: 100%;
  position: absolute;
  top: 0;
  margin-top: -10px;
  padding: 0;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  z-index: 10000;
  pointer-events: none;
}

/* Провод, выгнутый через clip-path */
.lightrope::before {
  content: "";
  position: absolute;
  top: 22px;
  left: 0;
  width: 100%;
  height: 6px;
  background: #222;
  clip-path: path("M0 10 Q50 30 100 10 T200 10 T300 10 T400 10 T500 10 T600 10 T700 10 T800 10");
  opacity: 0.7;
}

/* Лампа */
.lightrope li {
  position: relative;
  list-style: none;
  display: inline-block;
  width: 14px;
  height: 28px;
  margin: 18px 22px;
  border-radius: 50%;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-duration: 1.6s;
  background: #00f7a5;
  box-shadow: 0 4px 20px 3px #00f7a5;
  animation-name: flash-1;
}

/* — Разные цвета — */
.lightrope li:nth-child(3n+1) {
  background: cyan;
  box-shadow: 0 4px 20px 3px cyan;
  animation-name: flash-2;
}

.lightrope li:nth-child(4n+2) {
  background: #f70094;
  box-shadow: 0 4px 20px 3px #f70094;
  animation-name: flash-3;
}

/* Основание лампы */
.lightrope li::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 2px;
  width: 10px;
  height: 10px;
  background: #222;
  border-radius: 3px;
}

/* Проволока точки соединения */
.lightrope li::after {
  content: "";
  position: absolute;
  top: -18px;
  left: 12px;
  width: 44px;
  height: 16px;
  border-bottom: 2px solid #222;
  border-radius: 50%;
}
.lightrope li:last-child::after {
  content: none;
}

/* АНИМАЦИЯ МИГАНИЯ */
@keyframes flash-1 {
  0%,100% { opacity: 1; filter: brightness(1); }
  50%     { opacity: 0.5; filter: brightness(1.5); }
}
@keyframes flash-2 {
  0%,100% { opacity: 1; filter: brightness(1); }
  50%     { opacity: 0.4; filter: brightness(2); }
}
@keyframes flash-3 {
  0%,100% { opacity: 1; filter: brightness(1); }
  50%     { opacity: 0.3; filter: brightness(1.8); }
}
</style>
