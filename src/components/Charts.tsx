import { Area, AreaChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { energyData, powerPerformance } from '../data/energy'
import { useTranslation } from 'react-i18next'

const tooltip = { background: '#111719', border: '1px solid #293235', borderRadius: 8, fontSize: 12 }

export function EnergyChart({ savings = false }: { savings?: boolean }) {
  const { t } = useTranslation()
  return <div className="chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={energyData} margin={{ top: 10, right: 12, left: -18, bottom: 0 }}><defs><linearGradient id="greenFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6ee77d" stopOpacity={.22}/><stop offset="100%" stopColor="#6ee77d" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#20282b" strokeDasharray="3 3" vertical={false}/><XAxis dataKey="time" stroke="#647174" tickLine={false} axisLine={false} interval={3}/><YAxis stroke="#647174" tickLine={false} axisLine={false}/><Tooltip contentStyle={tooltip}/><Area type="monotone" dataKey="baseline" name={t('common.baseline')} stroke="#5f6d71" fill="transparent" strokeWidth={2} strokeDasharray="5 5"/><Area type="monotone" dataKey="optimized" name={t('common.optimized')} stroke="#6ee77d" fill="url(#greenFill)" strokeWidth={2.5}/>{savings && <Area type="monotone" dataKey="savings" name={t('common.savings')} stroke="#39bff8" fill="transparent" strokeWidth={2}/>}</AreaChart></ResponsiveContainer></div>
}

export function PowerPerformanceChart() {
  return <div className="chart power-chart"><ResponsiveContainer width="100%" height="100%"><LineChart data={powerPerformance} margin={{ top: 12, right: 25, left: -5, bottom: 4 }}><CartesianGrid stroke="#20282b" strokeDasharray="3 3"/><XAxis dataKey="power" unit="W" stroke="#748084"/><YAxis domain={[85, 101]} unit="%" stroke="#748084"/><Tooltip contentStyle={tooltip}/><Line type="monotone" dataKey="performance" stroke="#6ee77d" strokeWidth={3} dot={({ cx, cy, payload }) => <circle cx={cx} cy={cy} r={payload.power === 600 ? 7 : 4} fill={payload.power === 600 ? '#6ee77d' : '#111719'} stroke="#6ee77d" strokeWidth={3}/>} /></LineChart></ResponsiveContainer></div>
}

export function DistributionChart() {
  const { t } = useTranslation()
  const data = [{ name: t('analytics.training'), value: 62, color: '#6ee77d' }, { name: t('analytics.inference'), value: 28, color: '#39bff8' }, { name: t('analytics.idle'), value: 10, color: '#526064' }]
  return <div className="distribution"><div className="pie"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={data} dataKey="value" innerRadius={56} outerRadius={78} paddingAngle={3}>{data.map(d => <Cell key={d.name} fill={d.color}/>)}</Pie><Tooltip contentStyle={tooltip}/></PieChart></ResponsiveContainer><b>42.8<small>kW</small></b></div><div className="legend">{data.map(d => <p key={d.name}><i style={{ background: d.color }}/><span>{d.name}</span><strong>{d.value}%</strong></p>)}</div></div>
}
