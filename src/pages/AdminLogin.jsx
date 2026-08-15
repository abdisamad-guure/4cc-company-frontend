import { useState } from 'react'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../components'
import { api, auth } from '../api'

export default function AdminLogin() {
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function submit(event) {
    event.preventDefault(); setError(''); setLoading(true)
    try {
      const values = Object.fromEntries(new FormData(event.currentTarget))
      const result = await api('/auth/login', { method:'POST', body:JSON.stringify(values) })
      auth.set(result.token); navigate('/admin')
    } catch (err) { setError(err.message) } finally { setLoading(false) }
  }

  return <main className="grid min-h-screen bg-[#f3f6f8] lg:grid-cols-2">
    <section className="hidden bg-[#071f33] p-12 text-white lg:flex lg:flex-col lg:justify-between"><Logo light/><div className="max-w-lg"><span className="eyebrow">4CC Control Center</span><h1 className="mt-5 text-5xl font-extrabold leading-tight">Everything you need to manage your digital presence.</h1><p className="mt-5 leading-8 text-slate-400">Update services, publish projects and respond to enquiries from one secure workspace.</p></div><p className="text-xs text-slate-500">© 2026 4CC INC.</p></section>
    <section className="flex items-center justify-center p-6"><div className="w-full max-w-md"><div className="lg:hidden"><Logo/></div><div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5"><h2 className="text-3xl font-extrabold text-[#0b2940]">Welcome back</h2><p className="mt-2 text-sm text-slate-500">Sign in to access the admin dashboard.</p><form onSubmit={submit} className="mt-8 space-y-5">
      <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">Email address</span><div className="relative"><Mail className="absolute left-4 top-3.5 text-slate-400" size={18}/><input name="email" defaultValue="admin@4ccinc.so" type="email" className="w-full rounded-lg border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-[#e97824]" required/></div></label>
      <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">Password</span><div className="relative"><Lock className="absolute left-4 top-3.5 text-slate-400" size={18}/><input name="password" type={show?'text':'password'} className="w-full rounded-lg border border-slate-200 py-3 pl-11 pr-11 outline-none focus:border-[#e97824]" required/><button type="button" onClick={()=>setShow(!show)} className="absolute right-4 top-3.5 text-slate-400">{show?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></label>
      {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}<button disabled={loading} className="w-full rounded-lg bg-[#0b2940] py-3.5 text-sm font-bold text-white hover:bg-[#e97824] disabled:opacity-60">{loading?'Signing in…':'Sign in to dashboard'}</button>
    </form></div><Link to="/" className="mt-6 block text-center text-sm font-semibold text-slate-500 hover:text-[#e97824]">← Back to website</Link></div></section>
  </main>
}
