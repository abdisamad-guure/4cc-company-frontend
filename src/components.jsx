import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ArrowRight, Globe2, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { useLanguage } from './i18n'

export function Logo({ light = false }) {
  return <Link to="/" className="flex items-center gap-3 shrink-0">
    <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-[#e97824] text-lg font-black text-white shadow-lg shadow-orange-950/20">4C<span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-[#e97824] bg-white text-[7px] text-[#0b2940]">C</span></span>
    <span className={`font-display text-[21px] font-extrabold tracking-tight ${light ? 'text-white' : 'text-[#0b2940]'}`}>4CC <span className="text-[#e97824]">INC.</span></span>
  </Link>
}

const links = [['Home','/'],['About Us','/about'],['Leadership','/leadership'],['Services','/services'],['Projects','/projects'],['Products','/products'],['Contact','/contact']]

export function Header() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
    <div className="container-page flex h-[78px] items-center justify-between">
      <Logo />
      <nav className="hidden items-center gap-5 lg:flex">{links.map(([label,to]) => <NavLink key={to} to={to} className={({isActive}) => `relative py-7 text-sm font-semibold transition hover:text-[#e97824] ${isActive ? 'text-[#e97824] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#e97824]' : 'text-slate-600'}`}>{label}</NavLink>)}</nav>
      <div className="hidden items-center gap-2 lg:flex"><Globe2 size={16} className="text-slate-400"/><select aria-label="Language" value={language} onChange={e=>setLanguage(e.target.value)} className="bg-transparent text-sm font-bold text-[#0b2940] outline-none"><option value="en">English</option><option value="so">Soomaali</option></select></div>
      <Link to="/contact" className="hidden items-center gap-2 rounded-lg bg-[#0b2940] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e97824] lg:flex">Request a Quote <ArrowRight size={16}/></Link>
      <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-[#0b2940] lg:hidden" aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden"><label className="mb-3 flex items-center gap-3 rounded-lg bg-slate-50 p-3 text-sm font-bold"><Globe2 size={17}/><select aria-label="Language" value={language} onChange={e=>setLanguage(e.target.value)} className="flex-1 bg-transparent outline-none"><option value="en">English</option><option value="so">Soomaali</option></select></label>{links.map(([label,to]) => <NavLink onClick={() => setOpen(false)} key={to} to={to} className="block border-b border-slate-100 py-3 font-semibold text-slate-700">{label}</NavLink>)}</nav>}
  </header>
}

export function Footer() {
  return <footer className="bg-[#061b2d] text-white">
    <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.8fr_1.2fr]">
      <div><Logo light/><p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">Delivering confidence through independent quality control, careful inspection and dependable logistics across Somalia.</p></div>
      <div><h4 className="text-sm font-bold uppercase tracking-wider">Company</h4><div className="mt-5 space-y-3 text-sm text-slate-400"><Link className="block hover:text-white" to="/about">About us</Link><Link className="block hover:text-white" to="/leadership">Leadership</Link><Link className="block hover:text-white" to="/projects">Our projects</Link><Link className="block hover:text-white" to="/contact">Contact</Link></div></div>
      <div><h4 className="text-sm font-bold uppercase tracking-wider">Services</h4><div className="mt-5 space-y-3 text-sm text-slate-400"><p>Quality Control</p><p>Warehouse Inspection</p><p>Supply Chain</p><p>Distribution</p></div></div>
      <div><h4 className="text-sm font-bold uppercase tracking-wider">Get in touch</h4><div className="mt-5 space-y-4 text-sm text-slate-400"><p className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-[#e97824]" size={17}/>Via Roma Road, Hamar Weyne District, Mogadishu</p><a className="flex gap-3 hover:text-white" href="mailto:info@get4ccinc.com"><Mail className="text-[#e97824]" size={17}/>info@get4ccinc.com</a><a className="flex gap-3 hover:text-white" href="tel:+252613072504"><Phone className="text-[#e97824]" size={17}/>+252 61 307 2504</a></div></div>
    </div>
    <div className="border-t border-white/10"><div className="container-page flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between"><p>© 2026 4CC INC. All rights reserved.</p><Link to="/admin/login" className="hover:text-slate-300">Admin portal</Link></div></div>
  </footer>
}

export function PageHero({ eyebrow, title, text }) {
  return <section className="grid-pattern bg-[#071f33] py-20 text-white md:py-24"><div className="container-page reveal"><span className="eyebrow">{eyebrow}</span><h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{text}</p></div></section>
}

export function CTA() {
  return <section className="bg-[#e97824] py-14 text-white"><div className="container-page flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-orange-100">Let’s work together</p><h2 className="mt-2 text-3xl font-extrabold">Need dependable oversight for your next operation?</h2></div><Link to="/contact" className="flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-[#0b2940] transition hover:bg-[#0b2940] hover:text-white">Talk to our team <ArrowRight size={17}/></Link></div></section>
}

export function FormField({ label, as = 'input', ...props }) { const Tag = as; return <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span><Tag {...props} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#e97824] focus:ring-4 focus:ring-orange-100" /></label> }
