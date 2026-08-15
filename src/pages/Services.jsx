import { useEffect, useState } from 'react'
import { ArrowRight, Check, ClipboardCheck, ShieldCheck, Truck, Warehouse } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTA, PageHero } from '../components'
import { services as fallback } from '../data'
import { api } from '../api'

const icons=[ClipboardCheck,Warehouse,Truck,ShieldCheck]
export default function Services(){
  const [services,setServices]=useState(fallback)
  useEffect(()=>{api('/services').then(rows=>setServices(rows.map((row,i)=>({...row,icon:icons[i%icons.length]})))).catch(()=>{})},[])
  return <><PageHero eyebrow="Our expertise" title="Control, clarity and confidence—end to end." text="Practical services designed to protect quality, reduce risk and keep your operation moving."/><section className="section-pad bg-[#f8fafb]"><div className="container-page space-y-6">{services.map(({icon:Icon,number,title,text},i)=><article key={title} className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-[.72fr_1.28fr]"><div className={`p-9 text-white ${i%2?'bg-[#123852]':'bg-[#0b2940]'}`}><div className="flex justify-between"><Icon size={34} className="text-[#e97824]"/><span className="text-5xl font-extrabold text-white/10">{number||String(i+1).padStart(2,'0')}</span></div><h2 className="mt-12 text-3xl font-extrabold">{title}</h2></div><div className="p-9 lg:p-12"><p className="text-lg leading-8 text-slate-600">{text}</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{['Structured field checks','Photo-backed reporting','Clear recommendations','Responsive coordination'].map(x=><p className="flex items-center gap-2 text-sm font-semibold text-slate-700" key={x}><span className="grid h-5 w-5 place-items-center rounded-full bg-orange-50 text-[#e97824]"><Check size={13}/></span>{x}</p>)}</div><Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#e97824]">Request this service <ArrowRight size={16}/></Link></div></article>)}</div></section><CTA/></>
}
