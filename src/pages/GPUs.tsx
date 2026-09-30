import { ArrowLeft, ChevronRight, Cpu, Gauge, MemoryStick, Thermometer, Zap } from 'lucide-react'
import { PowerPerformanceChart } from '../components/Charts'
import { MetricCard, Panel, StatusBadge } from '../components/UI'
import { gpus } from '../data/gpus'
import type { GPU } from '../types'
import { useTranslation } from 'react-i18next'

export function GPUs({ selected, onSelect, onOptimize }: { selected: GPU | null; onSelect: (gpu: GPU | null) => void; onOptimize: (gpu: GPU) => void }) {
  const { t } = useTranslation()
  if (selected) return <GpuDetail gpu={selected} onBack={() => onSelect(null)} onOptimize={() => onOptimize(selected)} />
  return <div className="page"><Panel title={t('gpu.connected')} subtitle={t('gpu.clusterCount')} action={<div className="live"><i/> {t('demo.telemetry')}</div>}><div className="table-wrap"><table><thead><tr><th>GPU</th><th>{t('gpu.model')}</th><th>{t('gpu.workload')}</th><th>{t('gpu.utilization')}</th><th>{t('gpu.temperature')}</th><th>{t('gpu.power')}</th><th>{t('gpu.efficiency')}</th><th>{t('gpu.status')}</th><th/></tr></thead><tbody>{gpus.map(gpu => <tr key={gpu.id} onClick={() => onSelect(gpu)}><td><b className="gpu-name"><span><Cpu size={16}/></span>{gpu.id}</b></td><td>{gpu.model}</td><td>{gpu.workload}</td><td><div className="bar-cell"><span>{gpu.utilization}%</span><i><em style={{ width: `${gpu.utilization}%` }}/></i></div></td><td className={gpu.temperature >= 75 ? 'red' : ''}>{gpu.temperature}°C</td><td>{gpu.power} W</td><td><span className="efficiency">{gpu.efficiency}%</span></td><td><StatusBadge status={gpu.status}/></td><td><ChevronRight size={16}/></td></tr>)}</tbody></table></div></Panel></div>
}

function GpuDetail({ gpu, onBack, onOptimize }: { gpu: GPU; onBack: () => void; onOptimize: () => void }) {
  const { t } = useTranslation()
  return <div className="page"><button className="back" onClick={onBack}><ArrowLeft size={16}/> {t('gpu.back')}</button><div className="detail-title"><div className="big-icon"><Cpu/></div><div><div><h2>{gpu.id} — {gpu.model}</h2><StatusBadge status={gpu.status}/></div><p>{gpu.workload} · {t('gpu.node')}</p></div></div>
    <div className="metric-grid six"><MetricCard label={t('gpu.utilization')} value={`${gpu.utilization}%`} note={t('common.highWorkload')} icon={<Gauge size={17}/>}/><MetricCard label={t('gpu.temperature')} value={`${gpu.temperature} °C`} note={t('common.operatingRange')} icon={<Thermometer size={17}/>}/><MetricCard label={t('gpu.currentPower')} value={`${gpu.power} W`} note={t('gpu.ofLimit')} icon={<Zap size={17}/>}/><MetricCard label={t('gpu.powerLimit')} value="700 W" note={t('common.currentProfile')} icon={<Zap size={17}/>}/><MetricCard label={t('gpu.coreClock')} value="1,755" suffix="MHz" note={t('common.stable')} icon={<Gauge size={17}/>}/><MetricCard label={t('gpu.memory')} value={gpu.memory} note={t('gpu.allocated')} icon={<MemoryStick size={17}/>}/></div>
    <div className="detail-grid"><Panel title={t('gpu.powerPerformance')} subtitle={t('gpu.simulatedBenchmark')}><PowerPerformanceChart/><div className="recommended-point"><i/><span><b>{t('gpu.recommendedConfig')}</b> · 98.7%</span></div></Panel><Panel title={t('gpu.aiAnalysis')} subtitle={t('gpu.efficiencyRecommendation')}><div className="analysis-badge"><Zap size={19}/>{t('gpu.potentialReduction')}</div><p className="analysis-text">{t('gpu.analysis')}</p><div className="comparison"><div><span>{t('common.current')}</span><strong>700 W</strong><small>{t('gpu.currentPerformance')}</small></div><ChevronRight/><div className="recommended"><span>{t('common.recommended')}</span><strong>600 W</strong><small>{t('gpu.recommendedPerformance')}</small></div></div><button className="primary full" onClick={onOptimize}><Zap size={16}/> {t('gpu.applyProfile')}</button><p className="safe-note">{t('demo.simulationOnly')}</p></Panel></div>
  </div>
}
