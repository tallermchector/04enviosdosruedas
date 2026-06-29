'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ParallaxSection, ParallaxElement } from '../../../components/ParallaxSection';
import { 
  BadgePercent, 
  TrendingDown, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck 
} from 'lucide-react';

export default function EnviosLowCostPage() {
  const specs = [
    { title: 'Plazo de Entrega', desc: 'Mismo día antes de las 19:00 hs (Pedidos ingresados antes de las 13:00 hs).' },
    { title: 'Ahorro Máximo', desc: 'Tarifa reducida a menos de la mitad agrupando rutas inteligentes.' },
    { title: 'Cobertura Completa', desc: 'Cubre todo el ejido urbano de Mar del Plata sin límites.' },
    { title: 'Seguridad', desc: 'Trato profesional y cuidadoso de cada bulto por cadetes experimentados.' },
    { title: 'Ideal E-Commerce', desc: 'Diseñado especialmente para despachos diarios recurrentes.' }
  ];

  return (
    <ParallaxSection speed={0.12} className="relative bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ParallaxElement speed={-0.05} className="absolute inset-0 select-none pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </ParallaxElement>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sunbeam-yellow/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* Hero Area */}
        <div className="space-y-6 text-center">
          <span className="font-bebas text-sm tracking-widest text-brand-blue-dark bg-sunbeam-yellow px-4 py-1.5 rounded-full uppercase inline-flex items-center gap-1.5 shadow-md">
            <BadgePercent className="w-4 h-4 text-egyptian-blue" /> AHORRO • RENTABILIDAD MÁXIMA
          </span>
          <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-brand-dark uppercase tracking-tight leading-none">
            ENVÍOS LOWCOST
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto font-sans">
            La opción preferida de las PyMEs digitales para variabilizar y reducir a la mitad sus costos de distribución logística en Mar del Plata. Despachá con tarifas inteligentes sin sacrificar la entrega en el mismo día.
          </p>
        </div>

        {/* Highlight Banner with subtle Parallax */}
        <ParallaxElement speed={0.06}>
          <div className="bg-egyptian-blue text-white rounded-3xl p-8 sm:p-12 border border-brand-blue-dark shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono text-sunbeam-yellow uppercase font-bold tracking-widest block">Ruteo Inteligente Consolidado</span>
                <h3 className="font-anton text-2xl sm:text-3xl tracking-wide uppercase leading-none">DESPACHÁ HASTA LAS 13:00 HS</h3>
                <p className="text-slate-200 text-sm font-sans leading-relaxed">
                  Ingresá tus bultos y pedidos en nuestra central antes de las 13:00 hs y te garantizamos la entrega el mismo día antes de las 19:00 hs. Al consolidar múltiples paquetes en una única ruta inteligente por distritos, logramos reducir enormemente la huella de carbono y el costo de envío.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
                <Link 
                  href="/cotizar/lowcost" 
                  className="px-6 py-4 rounded-xl font-bebas text-lg tracking-widest bg-sunbeam-yellow text-egyptian-blue hover:bg-white hover:text-egyptian-blue transition-all duration-200 text-center shadow-lg uppercase"
                >
                  CALCULAR COSTO LOWCOST 🏷️
                </Link>
                <a 
                  href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas!%20Me%20interesa%20comenzar%20a%20enviar%20con%20el%20plan%20LowCost."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl font-bebas text-lg tracking-widest bg-emerald-600 text-white hover:bg-emerald-500 transition-all duration-200 text-center shadow-lg flex items-center justify-center gap-2 uppercase"
                >
                  <PhoneCall className="w-4 h-4 text-sunbeam-yellow" /> CONSULTAR TARIFAS PYME
                </a>
              </div>
            </div>
          </div>
        </ParallaxElement>

        {/* Specifications Grid */}
        <div className="space-y-8">
          <h3 className="font-anton text-2xl sm:text-3xl text-brand-dark uppercase text-center">
            BENEFICIOS CLAVE DEL SISTEMA
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-sunbeam-yellow/20 text-brand-blue-dark flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <h4 className="font-bebas text-lg text-slate-800 tracking-wider uppercase">{spec.title}</h4>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="border-t border-slate-100 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-4">
            <span className="font-bebas text-md tracking-widest text-egyptian-blue uppercase font-bold">Variabilización</span>
            <h3 className="font-anton text-3xl text-brand-dark uppercase leading-none">REDUCCIÓN DE COSTOS FIJOS</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-sans">
              Olvidate de contratar repartidores fijos o pagar vehículos mensuales. Con LowCost pagás únicamente por el volumen de paquetes entregados en el día, permitiéndote escalar tu negocio libremente.
            </p>
          </div>
          <div className="md:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 space-y-4">
            <h4 className="font-bebas text-md text-slate-800 tracking-wider uppercase">Esquema Operativo Diario</h4>
            <div className="grid grid-cols-3 gap-4 text-center font-mono text-[10px]">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="font-bold text-egyptian-blue text-xs mb-1">Paso 1</div>
                Ingreso pedidos antes 13:00 hs
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="font-bold text-egyptian-blue text-xs mb-1">Paso 2</div>
                Armado de rutas consolidadas
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="font-bold text-egyptian-blue text-xs mb-1">Paso 3</div>
                Entrega total antes 19:00 hs
              </div>
            </div>
          </div>
        </div>

      </div>
    </ParallaxSection>
  );
}
