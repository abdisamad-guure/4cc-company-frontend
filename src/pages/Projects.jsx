import { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'
import { CTA, PageHero } from '../components'
import { projects as fallback } from '../data'
import { api } from '../api'

export default function Projects(){
  const [projects,setProjects]=useState(fallback)
  useEffect(()=>{api('/projects').then(setProjects).catch(()=>{})},[])
  return <><PageHero eyebrow="Our work" title="Proof in every project." text="A look at how our teams bring control, visibility and dependable execution to complex operations."/><section className="section-pad bg-white"><div className="container-page grid gap-7 md:grid-cols-2 lg:grid-cols-3">{projects.map(p=><article key={p.id||p.title} className="card-lift overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="h-64 overflow-hidden"><img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 hover:scale-105"/></div><div className="p-6"><p className="text-xs font-bold uppercase tracking-wider text-[#e97824]">{p.category}</p><h2 className="mt-3 text-xl font-bold text-[#0b2940]">{p.title}</h2><p className="mt-3 flex items-center gap-2 text-sm text-slate-500"><MapPin size={15}/>{p.location}</p></div></article>)}</div></section><CTA/></>
}
