export function useSeason() {
  const month = new Date().getMonth() + 1

  const season = computed<'winter' | 'spring' | 'summer' | 'autumn'>(() => {
    if ([12, 1, 2].includes(month)) return 'winter'
    if ([3, 4, 5].includes(month)) return 'spring'
    if ([6, 7, 8].includes(month)) return 'summer'
    return 'autumn'
  })

  const colors: Record<'winter' | 'spring' | 'summer' | 'autumn', string> = {
    winter: 'blue',
    spring: '#22c55e',
    summer: '#facc15',
    autumn: 'orange'
  }

  const primaryColor = computed(() => colors[season.value])

  return { season, primaryColor }
}
