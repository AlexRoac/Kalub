import { BrainCircuit, Check, ChevronRight, LoaderCircle, ShieldCheck, Sparkles, Target, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Panel } from '../components/UI'
import { useTranslation } from 'react-i18next'

export function Optimization({ onToast }: { onToast: (s: string) => void }) {
  const { t } = useTranslation()
  const steps = t('optimization.steps', { returnObjects: true }) as string[]
  const [target, setTarget] = useState('Balanced')
  const [running, setRunning] = useState(false)
  const [step, setStep] = useState(0)
  const [complete, setComplete] = useState(false)
  useEffect(() => { if (!running) return; if (step >= 5) { setRunning(false); setComplete(true); onToast(t('optimization.completed')); return } const id = setTimeout(() => setStep(s => s + 1), 750); return () => clearTimeout(id) }, [running, step, onToast, t])
  const start = () => { setStep(0); setComplete(false); setRunning(true); onToast(t('optimization.started')) }
  return <div className="page"><div className="engine-intro"><div className="engine-icon"><BrainCircuit size={30}/></div><div><h2>{t('optimization.optimizeTitle')}</h2><p>{t('optimization.optimizeText')}</p></div><div className="engine-safe"><ShieldCheck size={17}/> {t('optimization.simulationEnvironment')}</div></div>
    <div className="engine-grid"><Panel title={t('optimization.selectTarget')} subtitle={t('optimization.chooseBalance')}><div className="target-list">{[
      [t('optimization.maxPerformance'),t('optimization.prioritizeThroughput'),'< 0.5%','3–8%'],[t('optimization.balanced'),t('optimization.bestPerWatt'),'< 2%','10–20%'],[t('optimization.maxEfficiency'),t('optimization.prioritizeReduction'),'< 6%','20–30%']
    ].map(([name, desc, loss, reduction], i) => <button key={name} className={(target === name || (target === 'Balanced' && i === 1)) ? 'selected' : ''} onClick={() => setTarget(name)}><span className="radio"><i/></span><span><b>{name}</b><small>{desc}</small></span><span className="target-metrics"><small>{t('optimization.perfLoss')} <b>{loss}</b></small><small>{t('optimization.energy')} <b>{reduction}</b></small></span></button>)}</div><button className="primary full large" disabled={running} onClick={start}>{running ? <LoaderCircle className="spin" size={18}/> : <Sparkles size={18}/>} {running ? t('optimization.progress') : t('optimization.start')}</button></Panel>
      <Panel title={t('optimization.sequence')} subtitle={t('optimization.fiveStage')}><div className="steps">{steps.map((label, i) => <div className={`${i < step ? 'done' : ''} ${i === step && running ? 'current' : ''}`} key={label}><span>{i < step || complete ? <Check size={15}/> : i + 1}</span><div><b>{label}</b><small>{i === 1 && (i === step || i < step) ? '700W → 650W → 600W → 550W' : i < step || complete ? t('common.complete') : i === step && running ? t('common.inProgress') : t('common.waiting')}</small></div>{i < steps.length - 1 && <i/>}</div>)}</div></Panel>
    </div>
    {complete && <section className="card results"><div className="results-heading"><div><Check size={20}/></div><span><small>{t('optimization.analysisComplete')}</small><h2>{t('optimization.recommendedCluster')}</h2></span></div><div className="results-flow"><div><small>{t('optimization.currentConsumption')}</small><strong>42.8 kW</strong></div><ChevronRight/><div className="green"><small>{t('common.optimized').toUpperCase()}</small><strong>37.5 kW</strong></div><div><small>{t('optimization.energyReduction')}</small><strong>12.4%</strong></div><div><small>{t('optimization.performanceImpact')}</small><strong>-1.6%</strong></div><div><small>{t('optimization.monthlySavings')}</small><strong>$3,842</strong></div><div><small>{t('optimization.annualSavings')}</small><strong>$46,104</strong></div></div><button className="secondary" onClick={() => onToast(t('optimization.saved'))}><Zap size={16}/> {t('optimization.applySimulation')}</button></section>}
  </div>
}
