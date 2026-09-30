export const energyData = Array.from({ length: 24 }, (_, index) => {
  const wave = Math.sin(index / 3) * 2.1
  const baseline = 44 + wave + (index > 7 && index < 19 ? 2.6 : 0)
  return { time: `${String(index).padStart(2, '0')}:00`, baseline: +baseline.toFixed(1), optimized: +(baseline * .876).toFixed(1), savings: +(baseline * .124).toFixed(1) }
})

export const efficiencyData = [
  { day: 'Mon', value: 34.2 }, { day: 'Tue', value: 35.1 }, { day: 'Wed', value: 35.8 },
  { day: 'Thu', value: 37.2 }, { day: 'Fri', value: 36.9 }, { day: 'Sat', value: 38.1 }, { day: 'Sun', value: 38.4 },
]

export const powerPerformance = [
  { power: 500, performance: 89.1 }, { power: 550, performance: 95.2 }, { power: 600, performance: 98.7 },
  { power: 650, performance: 99.4 }, { power: 700, performance: 100 },
]
