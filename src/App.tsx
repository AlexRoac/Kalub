import { useCallback, useEffect, useState } from 'react'
import { DemoBadge } from './components/UI'
import { Header } from './components/Header'
import { OptimizationModal } from './components/OptimizationModal'
import { Sidebar } from './components/Sidebar'
import { Toast } from './components/Toast'
import { Alerts } from './pages/Alerts'
import { Analytics } from './pages/Analytics'
import { GPUs } from './pages/GPUs'
import { Optimization } from './pages/Optimization'
import { Overview } from './pages/Overview'
import { Settings } from './pages/Settings'
import { Workloads } from './pages/Workloads'
import type { GPU, Page } from './types'
import { useTranslation } from 'react-i18next'

export default function App() {
  const { t } = useTranslation()
  const [page, setPage] = useState<Page>('overview')
  const [selectedGpu, setSelectedGpu] = useState<GPU | null>(null)
  const [modalGpu, setModalGpu] = useState<GPU | null>(null)
  const [demo, setDemo] = useState(true)
  const [power, setPower] = useState(42.8)
  const [utilization, setUtilization] = useState(87)
  const [cost, setCost] = useState(.08)
  const [toast, setToast] = useState('')
  const showToast = useCallback((message: string) => setToast(message), [])
  useEffect(() => { if (!toast) return; const id = setTimeout(() => setToast(''), 3200); return () => clearTimeout(id) }, [toast])
  useEffect(() => { if (!demo) return; const id = setInterval(() => { setPower(+(42.8 + (Math.random()-.5)*1.1).toFixed(1)); setUtilization(Math.round(87 + (Math.random()-.5)*5)) }, 3000); return () => clearInterval(id) }, [demo])
  const navigate = (next: Page) => { setPage(next); setSelectedGpu(null); window.scrollTo(0,0) }
  return <div className="app"><Sidebar page={page} onNavigate={navigate}/><main><DemoBadge/><Header page={page} demo={demo} onToggleDemo={() => { setDemo(d => !d); showToast(demo ? t('demo.paused') : t('demo.enabled')) }} onToast={showToast}/>
    {page === 'overview' && <Overview power={power} utilization={utilization} onNavigate={navigate}/>} {page === 'gpus' && <GPUs selected={selectedGpu} onSelect={setSelectedGpu} onOptimize={setModalGpu}/>} {page === 'workloads' && <Workloads/>} {page === 'optimization' && <Optimization onToast={showToast}/>} {page === 'analytics' && <Analytics cost={cost} setCost={setCost} onToast={showToast}/>} {page === 'alerts' && <Alerts/>} {page === 'settings' && <Settings onToast={showToast}/>}</main>{modalGpu && <OptimizationModal gpu={modalGpu} onClose={() => setModalGpu(null)} onToast={showToast}/>} {toast && <Toast message={toast} onClose={() => setToast('')}/>}</div>
}
