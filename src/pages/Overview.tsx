import { ArrowRight, Bolt, BrainCircuit, CircleDollarSign, Cpu, Gauge, Leaf, Thermometer } from 'lucide-react'
import { EnergyChart } from '../components/Charts'
import { MetricCard, Panel } from '../components/UI'
import type { Page } from '../types'
import { useTranslation } from 'react-i18next'

export function Overview({ power, utilization, onNavigate }: { power: number; utilization: number; onNavigate: (p: Page) => void }) {
  const { t } = useTranslation()
  return <div className="page">
    <div className="metric-grid">
      <MetricCard label={t('overview.totalPower')} value={power.toFixed(1)} suffix="kW" note={t('overview.vsBaseline')} trend="down" icon={<Bolt size={18}/>}/>
      <MetricCard label={t('overview.gpuUtilization')} value={`${utilization}%`} note={t('overview.clusterAverage')} icon={<Gauge size={18}/>}/>
      <MetricCard label={t('overview.energyEfficiency')} value="38.4" suffix="tokens / kWh" note={t('overview.improvement')} trend="up" icon={<Leaf size={18}/>}/>
      <MetricCard label={t('overview.estimatedSavings')} value="$3,842" suffix={`USD ${t('common.perMonth')}`} note={t('overview.projected')} icon={<CircleDollarSign size={18}/>}/>
    </div>
    <div className="overview-grid">
      <Panel title={t('overview.consumption')} subtitle={t('overview.last24')} action={<div className="chart-key"><span className="baseline"/>{t('common.baseline')}<span className="optimized"/>{t('common.optimized')}</div>}><EnergyChart /></Panel>
      <Panel title={t('overview.summary')} subtitle={t('overview.clusterState')}><div className="summary-list">
        <p><span>{t('overview.gpusOptimized')}</span><strong>18 / 24</strong></p><p><span>{t('overview.energyReduction')}</span><strong className="green">12.4%</strong></p><p><span>{t('overview.performanceImpact')}</span><strong>-1.8%</strong></p><p><span>{t('overview.tempReduction')}</span><strong className="blue">7.2 °C</strong></p>
      </div><div className="savings-box"><span>{t('overview.monthlySavings')}</span><strong>$3,842 <small>USD</small></strong></div><div className="co2"><Leaf size={16}/><span>{t('overview.co2Reduction')}</span><strong>1.8 {t('common.tonsMonth')}</strong></div></Panel>
    </div>
    <section className="recommendation"><div className="recommendation-icon"><BrainCircuit size={28}/></div><div className="recommendation-copy"><span>{t('overview.aiRecommendation')}</span><h2>{t('overview.potentialDetected')}</h2><p>{t('overview.sixGpus')}</p></div><div className="recommendation-stats"><div><small>{t('overview.opportunity')}</small><strong>{t('overview.reduction')}</strong></div><div><small>{t('overview.energyImpact')}</small><strong>{t('overview.lower')}</strong></div><div><small>{t('overview.performance')}</small><strong>{t('overview.expected')}</strong></div><div><small>{t('overview.potentialSavings')}</small><strong>$46,104 {t('common.perYear')}</strong></div></div><button className="secondary" onClick={() => onNavigate('optimization')}>{t('overview.review')} <ArrowRight size={16}/></button></section>
    <div className="fleet-strip"><span><Cpu size={15}/> {t('overview.gpusConnected')}</span><span><Thermometer size={15}/> {t('overview.avgTemp')}</span><span className="green"><i/> {t('overview.live')}</span></div>
  </div>
}
