'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ParallaxSection, ParallaxElement } from '../../../components/ParallaxSection';
import { 
  Zap, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Sliders, 
  MapPin, 
  PhoneCall 
} from 'lucide-react';

export default function EnviosExpressPage() {
  const specs = [
    { title: 'Plazo Máximo', desc: 'Entregado en un rango de 2 horas tras la solicitud.' },
    { title: 'Programación', desc: 'Reserva con solo 2 horas de antelación.' },
    { title: 'Vehículos Dedicados', desc: 'Flota ágil de motocicletas de máxima velocidad.' },
    { title: 'Seguimiento', desc: 'Monitoreo en tiempo real del estado de entrega.' },
    { title: 'Notificación', desc: 'Aviso instantáneo de entrega realizada.' }
  ];

  return (
    <ParallaxSection speed={0.12} className="relative bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ParallaxElement speed={-0.05} className="absolute inset-0 select-none pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </ParallaxElement>
      <div className="absolute top-10 right-10 w-96 h-96 bg-egyptian-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* Hero Area */}
        <div className="space-y-6 text-center">
          <span className="font-bebas text-sm tracking-widest text-white bg-egyptian-blue px-4 py-1.5 rounded-full uppercase inline-flex items-center gap-1.5 shadow-md">
            <Zap className="w-4 h-4 text-sunbeam-yellow fill-sunbeam-yellow" /> SERVICIO EXCLUSIVO • ALTA PRIORIDAD
          </span>
          <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-brand-dark uppercase tracking-tight leading-none">
            ENVÍOS EXPRESS
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto font-sans">
            Prioridad absoluta y certeza total para tus entregas más críticas en Mar del Plata. Vos elegís el rango exacto de retiro y entrega. Nosotros nos encargamos de garantizar precisión absoluta en el tiempo.
          </p>
        </div>

        {/* Highlight Banner with subtle Parallax */}
        <ParallaxElement speed={0.06}>
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-egyptian-blue/20 rounded-full blur-2xl"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono text-sunbeam-yellow uppercase font-bold tracking-widest block">Compromiso SLA</span>
                <h3 className="font-anton text-2xl sm:text-3xl tracking-wide uppercase leading-none">ENTREGA EN MENOS DE 120 MINUTOS</h3>
                <p className="text-slate-300 text-sm font-sans leading-relaxed">
                  Diseñado específicamente para operaciones de alta criticidad horaria. Despachamos un cadete en moped dedicado exclusivamente to tu bulto, lo que elimina paradas intermedias de ruteo y reduce los tiempos de espera drásticamente.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
                <Link 
                  href="/cotizar/express" 
                  className="px-6 py-4 rounded-xl font-bebas text-lg tracking-widest bg-sunbeam-yellow text-egyptian-blue hover:bg-white hover:text-egyptian-blue transition-all duration-200 text-center shadow-lg uppercase"
                >
                  COTIZAR EXPRESS AHORA ⚡
                </Link>
                <a 
                  href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas!%20Necesito%20solicitar%20un%20servicio%20Express%20urgente."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl font-bebas text-lg tracking-widest bg-emerald-600 text-white hover:bg-emerald-500 transition-all duration-200 text-center shadow-lg flex items-center justify-center gap-2 uppercase"
                >
                  <PhoneCall className="w-4 h-4 text-sunbeam-yellow" /> PEDIR POR WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </ParallaxElement>

        {/* Specifications Grid */}
        <div className="space-y-8">
          <h3 className="font-anton text-2xl sm:text-3xl text-brand-dark uppercase text-center">
            ESPECIFICACIONES DEL SERVICIO
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-egyptian-blue/10 text-egyptian-blue flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="font-bebas text-lg text-slate-800 tracking-wider uppercase">{spec.title}</h4>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal For section */}
        <div className="border-t border-slate-100 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-4">
            <span className="font-bebas text-md tracking-widest text-egyptian-blue uppercase">Casos de Uso</span>
            <h3 className="font-anton text-3xl text-brand-dark uppercase leading-none">¿PARA QUIÉN ESTÁ DISEÑADO?</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-sans">
              El servicio Express es el favorito de empresas y particulares que necesitan resolver traslados delicados de manera inmediata y sin riesgos de demoras.
            </p>
          </div>
          <div className="md:col-span-7 space-y-3.5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-egyptian-blue shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-slate-800 block">Oficinas y Escribanías:</span>
                <span className="text-slate-500">Envío de contratos, documentos legales, firmas urgentes y tokens bancarios.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-egyptian-blue shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-slate-800 block">Talleres y Repuestos:</span>
                <span className="text-slate-500">Distribución ágil de autopartes, repuestos de motos o insumos industriales críticos.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-egyptian-blue shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-slate-800 block">Regalos y Sorpresas:</span>
                <span className="text-slate-500">Entregas de desayunos sorpresas, ramos de flores o regalos de cumpleaños con horario exacto de entrega.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </ParallaxSection>
  );
}
