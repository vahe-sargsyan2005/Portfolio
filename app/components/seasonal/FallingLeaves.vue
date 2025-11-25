<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Leaf {
  x: number
  y: number
  size: number
  speedY: number
  rotate: number
  rotateSpeed: number
  color: string
  sway: number
  swaySpeed: number
  depth: number
}

const leaves = ref<Leaf[]>([])

const leafColors = ['#FF7F00', '#FFD700', '#8B0000', '#A0522D'] // оранж, золото, бордо, коричн
const numLeaves = 50

onMounted(() => {
  for (let i = 0; i < numLeaves; i++) {
    const depth = Math.random() * 2 + 0.5 // 0.5 - дальние, 2 - ближе
    leaves.value.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 25 + 20,
      speedY: Math.random() * 1 + 0.5 * depth,
      rotate: Math.random() * 360,
      rotateSpeed: Math.random() * 2 - 1,
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
      sway: Math.random() * 20 - 10,
      swaySpeed: Math.random() * 0.05 + 0.01,
      depth
    })
  }

  animate()
})

function animate() {
  leaves.value.forEach(l => {
    l.y += l.speedY
    l.rotate += l.rotateSpeed
    l.sway += l.swaySpeed
    if (l.y > window.innerHeight) {
      l.y = -l.size
      l.x = Math.random() * window.innerWidth
    }
  })

  requestAnimationFrame(animate)
}

function handleMouseMove(event: MouseEvent) {
  leaves.value.forEach(l => {
    const dx = event.clientX - l.x
    const dy = event.clientY - l.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 100) {
      l.y -= 0.5
      l.x += (Math.random() * 2 - 1) * 2
    }
  })
}
</script>

<template>
  <div
    class="autumn-effects fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    @mousemove="handleMouseMove"
  >
    <div
      v-for="(l, i) in leaves"
      :key="i"
      class="leaf absolute"
      :style="{
        width: l.size + 'px',
        height: l.size + 'px',
        background: l.color,
        transform: 'translate(' + (l.x + Math.sin(l.sway)) + 'px,' + l.y + 'px) rotate(' + l.rotate + 'deg)',
        zIndex: Math.floor(l.depth * 10),
        clipPath: 'polygon(50% 0%, 60% 20%, 80% 30%, 70% 50%, 90% 70%, 50% 100%, 10% 70%, 30% 50%, 20% 30%, 40% 20%)'
      }"
    ></div>
  </div>
</template>

<style scoped>
</style>
