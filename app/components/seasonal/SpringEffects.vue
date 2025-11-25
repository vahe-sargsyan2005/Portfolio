<script setup lang="ts">
interface Petal {
  x: number
  y: number
  size: number
  speedY: number
  rotate: number
  rotateSpeed: number
  color: string
}

interface Butterfly {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  direction: number
  color: string
}

const petals = ref<Petal[]>([])
const butterflies = ref<Butterfly[]>([])

// Цветовая гамма весны
const petalColors = ['#FADADD', '#E0BBE4', '#C1E1C1']
const butterflyColors = ['#FADADD', '#E0BBE4', '#C1E1C1', '#FFB6C1']

const numPetals = 30
const numButterflies = 5

onMounted(() => {
  // Генерация лепестков
  for (let i = 0; i < numPetals; i++) {
    petals.value.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 12 + 8,
      speedY: Math.random() * 1 + 0.5,
      rotate: Math.random() * 360,
      rotateSpeed: Math.random() * 2 - 1,
      color: petalColors[Math.floor(Math.random() * petalColors.length)]
    })
  }

  // Генерация бабочек
  for (let i = 0; i < numButterflies; i++) {
    butterflies.value.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 15,
      speedX: Math.random() * 2 + 1,
      speedY: Math.random() * 1,
      direction: Math.random() < 0.5 ? -1 : 1,
      color: butterflyColors[Math.floor(Math.random() * butterflyColors.length)]
    })
  }

  animate()
})

function animate() {
  petals.value.forEach(p => {
    p.y += p.speedY
    p.rotate += p.rotateSpeed
    if (p.y > window.innerHeight) {
      p.y = -p.size
      p.x = Math.random() * window.innerWidth
    }
  })

  butterflies.value.forEach(b => {
    b.x += b.speedX * b.direction
    b.y += b.speedY
    if (b.x > window.innerWidth) b.direction = -1
    if (b.x < 0) b.direction = 1
    if (b.y > window.innerHeight) b.y = Math.random() * 100
  })

  requestAnimationFrame(animate)
}
</script>

<template>
  <div class="spring-effects fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
    <!-- Лепестки -->
    <div
      v-for="(p, i) in petals"
      :key="i"
      class="petal absolute rounded-full"
      :style="{
        width: p.size + 'px',
        height: p.size + 'px',
        background: p.color,
        transform: 'translate(' + p.x + 'px,' + p.y + 'px) rotate(' + p.rotate + 'deg)'
      }"
    ></div>

    <!-- Бабочки -->
    <div
      v-for="(b, i) in butterflies"
      :key="i"
      class="butterfly absolute rounded-full"
      :style="{
        width: b.size + 'px',
        height: b.size / 2 + 'px',
        background: b.color,
        transform: 'translate(' + b.x + 'px,' + b.y + 'px) rotate(' + (b.direction === -1 ? 180 : 0) + 'deg)'
      }"
    ></div>
  </div>
</template>

<style scoped>
.petal {
  opacity: 0.8;
}

.butterfly {
  opacity: 0.9;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
</style>
