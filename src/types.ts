export type Page = 'overview' | 'gpus' | 'workloads' | 'optimization' | 'analytics' | 'alerts' | 'settings'
export type GpuStatus = 'Optimal' | 'Optimization Available' | 'High Power' | 'Warning'

export interface GPU {
  id: string
  model: string
  workload: string
  utilization: number
  temperature: number
  power: number
  efficiency: number
  status: GpuStatus
  memory: string
}
