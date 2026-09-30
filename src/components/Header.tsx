import { Bell, ChevronDown, Play, Radio } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function Header({ page, demo, onToggleDemo, onToast }: { page: string; demo: boolean; onToggleDemo: () => void; onToast: (s: string) => void }) {
  const { t, i18n } = useTranslation()
  const title = t(`header.${page}.0`), sub = t(`header.${page}.1`)
  const toggleLanguage = () => i18n.changeLanguage(i18n.language.startsWith('es') ? 'en' : 'es')
  return <header className="header">
    <div><h1>{title}</h1><p>{sub}</p></div>
    <div className="header-actions">
      <button className="datacenter"><span>{t('header.datacenter')}</span>AI Cluster MX-01 <ChevronDown size={15} /></button>
      <button className="language-quick" onClick={toggleLanguage}>{i18n.language.startsWith('es') ? 'ES' : 'EN'}</button>
      <button className={`demo-toggle ${demo ? 'on' : ''}`} onClick={onToggleDemo}><Radio size={16} /> {t('header.demoMode')} <span /></button>
      <button className="icon-button" aria-label="Notifications" onClick={() => onToast(t('header.notifications'))}><Bell size={18} /><i /></button>
      {page === 'overview' && <button className="primary" onClick={() => onToast(t('optimization.started'))}><Play size={16} fill="currentColor" /> {t('header.runOptimization')}</button>}
    </div>
  </header>
}
