import { Activity, Bell, Boxes, BrainCircuit, ChartNoAxesCombined, Cpu, Gauge, Leaf, Settings } from 'lucide-react'
import type { Page } from '../types'
import { useTranslation } from 'react-i18next'

const items: { id: Page; icon: typeof Gauge }[] = [
  { id: 'overview', icon: Gauge }, { id: 'gpus', icon: Cpu }, { id: 'workloads', icon: Boxes },
  { id: 'optimization', icon: BrainCircuit }, { id: 'analytics', icon: ChartNoAxesCombined },
  { id: 'alerts', icon: Bell }, { id: 'settings', icon: Settings },
]

export function Sidebar({ page, onNavigate }: { page: Page; onNavigate: (page: Page) => void }) {
  const { t } = useTranslation()
  return <aside className="sidebar">
    <div className="brand"><div className="brand-mark"><Leaf size={20} /></div><div><strong>K'alub:</strong><span>GPU Energy Optimizer</span></div></div>
    <nav>{items.map(({ id, icon: Icon }) => <button key={id} className={page === id ? 'active' : ''} onClick={() => onNavigate(id)}><Icon size={18} />{t(`nav.${id}`)}{id === 'alerts' && <em>3</em>}</button>)}</nav>
    <div className="system-status"><span><Activity size={15} /> {t('nav.systemStatus')}</span><p><i /> {t('nav.operational')}</p></div>
  </aside>
}
