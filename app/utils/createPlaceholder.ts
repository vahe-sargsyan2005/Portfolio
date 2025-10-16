export function createPlaceholder(
  width: number,
  height: number,
  format?: 'png' | 'webp'
) {
  const maxDim = Math.max(width, height)

  const h = Math.max(20, Math.round(maxDim / 4))

  let blur: number
  if (maxDim <= 100) blur = 0.3
  else if (maxDim <= 500) blur = 0.4
  else blur = 0.5

  let q: number
  if (maxDim <= 100) q = 10
  else if (maxDim <= 500) q = 15
  else q = 20

  const f: 'png' | 'webp' = format ?? 'webp'

  return { h, blur, q, f }
}
