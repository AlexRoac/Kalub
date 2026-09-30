export const alerts = [
  { severity: 'critical', title: 'HIGH POWER CONSUMPTION', source: 'GPU-04', text: 'GPU-04 is consuming 692 W.', detail: 'Potential saving: 104 W · Reduce Power Limit to 600 W.', time: '4 min ago' },
  { severity: 'warning', title: 'HIGH TEMPERATURE', source: 'GPU-07', text: 'GPU-07 reached 79°C.', detail: 'Review cooling or reduce power limit.', time: '12 min ago' },
  { severity: 'info', title: 'OPTIMIZATION OPPORTUNITY', source: 'Inference Cluster B', text: 'Energy consumption could be reduced by approximately 11%.', detail: 'Run the balanced optimization profile.', time: '26 min ago' },
  { severity: 'success', title: 'SYSTEM', source: 'GPU-02', text: 'Optimization completed successfully on GPU-02.', detail: 'Efficiency improved by 15.1%.', time: '1 hr ago' },
]
