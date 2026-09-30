import type { ReactNode } from 'react'
import { ArrowDownRight, ArrowUpRight, Info } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function MetricCard({ label, value, suffix, note, trend = 'neutral', icon }: { label: string; value: string; suffix?: string; note: string; trend?: 'up' | 'down' | 'neutral'; icon?: ReactNode }) {
  return <div className="card metric-card"><div className="metric-top"><span>{label}</span>{icon}</div><div className="metric-value">{value} {suffix && <small>{suffix}</small>}</div><p className={trend}>{trend === 'up' && <ArrowUpRight size={14} />}{trend === 'down' && <ArrowDownRight size={14} />}{note}</p></div>
}

export function DemoBadge() { const { t } = useTranslation(); return <div className="demo-banner"><strong>{t('demo.label')}</strong><span><Info size={13} /> {t('demo.notice')}</span></div> }

export function Panel({ title, subtitle, action, children, className = '' }: { title: string; subtitle?: string; action?: ReactNode; children: ReactNode; className?: string }) {
  return <section className={`card panel ${className}`}><div className="panel-heading"><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>{action}</div>{children}</section>
}

export function StatusBadge({ status }: { status: string }) {
  const { t } = useTranslation()
  const cls = status.toLowerCase().replace(/ /g, '-').replace('optimization-available', 'available')
  const key = status === 'Optimal' ? 'optimal' : status === 'Optimization Available' || status === 'Optimization available' ? 'available' : status === 'High Power' ? 'highPower' : status.toLowerCase()
  return <span className={`status ${cls}`}><i />{t(`status.${key}`)}</span>
}
