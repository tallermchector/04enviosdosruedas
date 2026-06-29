'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Award, 
  MapPin, 
  PhoneCall, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  Clock, 
  Zap,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function SobreNosotrosPage() {
  const stats = [
    { value: '+5.000', label: 'Clientes de Confianza Local', desc: 'Comercios, PyMEs y particulares en todo Mar del Plata.' },
    { value: '7 Años', label: 'Líderes de Última Milla', desc: 'Innovando constantemente en distribución ágil urbana.' },
    { value: '100%', label: 'Flota Exclusiva', desc: 'Motos dedicadas para máxima agilidad y puntualidad urbana.' }
  ];

  return (
    <div className="relative bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-egyptian-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* Hero Area */}
        <div className="space-y-6 text-center">
          <span className="font-bebas text-sm tracking-widest text-white bg-egyptian-blue px-4 py-1.5 rounded-full uppercase inline-flex items-center gap-1.5 shadow-md">
            <Users className="w-4 h-4 text-sunbeam-yellow" /> PARTNER LOGÍSTICO ESPECIALIZADO
          </span>
          <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-brand-dark uppercase tracking-tight leading-none">
            NUESTRA VISION LOGÍSTICA
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto font-sans">
            Transformamos tus costos fijos de distribución en soluciones flexibles y eficientes que acompañan el crecimiento sostenido de tu negocio en la era digital.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <span className="font-anton text-4xl sm:text-5xl text-egyptian-blue block leading-none">
                {stat.value}
              </span>
              <h3 className="font-bebas text-lg tracking-wider text-slate-800 uppercase leading-none">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Brand narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-bebas text-md tracking-widest text-egyptian-blue uppercase font-bold">Nuestra Historia</span>
            <h2 className="font-anton text-3xl sm:text-4xl text-brand-dark uppercase leading-none">
              7 AÑOS REDEFINIENDO LAS ENTREGAS URBANAS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Nacimos en Mar del Plata con un objetivo simple: proveer el servicio de mensajería urbana más confiable, transparente y ágil de la ciudad. A lo largo de los años, con la explosión del comercio electrónico, nos especializamos en la última milla para PyMEs y grandes tiendas de MercadoLibre.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Hoy, con un hub de consolidación totalmente digitalizado y una flota dedicada y calificada, somos el partner logístico elegido por cientos de empresas locales para asegurar que sus entregas lleguen de manera rápida, segura y siempre al menor costo.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 space-y-6 relative overflow-hidden shadow-2xl">
            <div className="absolute bottom-0 right-0 translate-x-10 translate-y-10 opacity-5">
              <Zap className="w-60 h-60 text-white" />
            </div>
            <span className="text-[10px] font-mono text-sunbeam-yellow uppercase tracking-widest block font-bold">Nuestros Valores</span>
            <h3 className="font-bebas text-2xl tracking-wider text-white uppercase">PILARELES DE NUESTRA PROMESA</h3>
            
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-sunbeam-yellow shrink-0" />
                <div>
                  <span className="font-bold text-slate-200 block">Seguridad Total:</span>
                  <span className="text-slate-400">Protección del 100% del valor de tus paquetes ante cualquier siniestro urbano.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-sunbeam-yellow shrink-0" />
                <div>
                  <span className="font-bold text-slate-200 block">Puntualidad Quirúrgica:</span>
                  <span className="text-slate-400">Entregamos tus encomiendas respetando de manera estricta los horarios pautados.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 text-center border border-slate-100 space-y-6">
          <h3 className="font-anton text-2xl sm:text-3xl text-brand-dark uppercase">
            ¿LISTO PARA FORMAR PARTE DE NUESTRA FAMILIA DE CLIENTES SATISFECHOS?
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto font-sans">
            Comenzar es muy simple. Coordiná una reunión con un asesor de cuentas de DosRuedas para planificar tus rutas recurrentes o calcular tus tarifas especiales de escala.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a 
              href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas!%20Me%20gustar%C3%ADa%20sumar%20mi%20negocio%20a%20su%20flota%20log%C3%ADstica."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bebas text-lg tracking-widest transition-all shadow-md flex items-center gap-2 uppercase"
            >
              <PhoneCall className="w-4 h-4 text-sunbeam-yellow" /> Hablar con un asesor comercial
            </a>
            <Link 
              href="/contacto" 
              className="px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 rounded-xl font-bebas text-lg tracking-widest transition-all shadow-md uppercase"
            >
              Contactarnos por Correo
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
