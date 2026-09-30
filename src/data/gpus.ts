import type { GPU } from '../types'

export const gpus: GPU[] = [
  { id: 'GPU-01', model: 'NVIDIA H100', workload: 'LLM Training', utilization: 82, temperature: 64, power: 623, efficiency: 92, status: 'Optimal', memory: '72 / 80 GB' },
  { id: 'GPU-02', model: 'NVIDIA H100', workload: 'Inference API', utilization: 91, temperature: 68, power: 650, efficiency: 76, status: 'Optimization Available', memory: '68 / 80 GB' },
  { id: 'GPU-03', model: 'NVIDIA A100', workload: 'Inference API', utilization: 73, temperature: 59, power: 382, efficiency: 89, status: 'Optimal', memory: '31 / 40 GB' },
  { id: 'GPU-04', model: 'NVIDIA H100', workload: 'LLM Training', utilization: 96, temperature: 74, power: 692, efficiency: 68, status: 'High Power', memory: '76 / 80 GB' },
  { id: 'GPU-05', model: 'NVIDIA H100', workload: 'LLM Training', utilization: 88, temperature: 65, power: 612, efficiency: 91, status: 'Optimal', memory: '70 / 80 GB' },
  { id: 'GPU-06', model: 'NVIDIA A100', workload: 'Vision Training', utilization: 79, temperature: 62, power: 401, efficiency: 84, status: 'Optimization Available', memory: '35 / 40 GB' },
  { id: 'GPU-07', model: 'NVIDIA H100', workload: 'Synthetic Test', utilization: 98, temperature: 79, power: 688, efficiency: 64, status: 'Warning', memory: '77 / 80 GB' },
  { id: 'GPU-08', model: 'NVIDIA L40S', workload: 'Inference API', utilization: 76, temperature: 58, power: 326, efficiency: 94, status: 'Optimal', memory: '42 / 48 GB' },
]
