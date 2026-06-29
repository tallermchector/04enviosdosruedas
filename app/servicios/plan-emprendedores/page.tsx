'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ParallaxSection, ParallaxElement } from '../../../components/ParallaxSection';
import { 
  Building2, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  MapPin, 
  PhoneCall, 
  ClipboardCheck, 
  ArrowRight,
  Database
} from 'lucide-react';

export default function PlanEmprendedoresPage() {
  const specs = [
    { title: 'Tercerización Completa (3PL)', desc: 'Almacenamiento de tu stock en nuestra planta centralizada para un empaque y envío ultra rápido.' },
    { title: 'Cuenta Corriente Flexible', desc: 'Facturación consolidada a fin de mes. Unificá todas tus transacciones en una única cuenta clara.' },
    { title: 'Gestión Multi-Usuario', desc: 'Permite que tu equipo de ventas o facturación asigne despachos directamente en nuestra plataforma.' },
    { title: 'Optimización de Costos', desc: 'Descuentos por escala basados en tu volumen mensual de envíos.' },
    { title: 'Flota Exclusiva Dedicada', desc: 'Acceso a motocicletas asignadas para resolver picos de demanda estacionales.' }
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
            <Building2 className="w-4 h-4 text-sunbeam-yellow" /> LOGÍSTICA INTEGRAL • PYMES & EMPRENDEDORES
          </span>
          <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-brand-dark uppercase tracking-tight leading-none">
            E-COMMERCE & 3PL
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto font-sans">
            Más que un transportista de paquetes, somos tu departamento de depósito, empaque y distribución logística. Soluciones integrales de almacenamiento con facturación consolidada mensual de alta flexibilidad.
          </p>
        </div>

        {/* Highlight Banner with subtle Parallax */}
        <ParallaxElement speed={0.06}>
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-egyptian-blue/20 rounded-full blur-2xl"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono text-sunbeam-yellow uppercase font-bold tracking-widest block">Almacenamiento y Logística</span>
                <h3 className="font-anton text-2xl sm:text-3xl tracking-wide uppercase leading-none">TERCERIZÁ TU DEPÓSITO LOCAL</h3>
                <p className="text-slate-300 text-sm font-sans leading-relaxed">
                  Olvídate de alquilar locales costosos o lidiar con empaques interminables. Guardamos tu mercadería en nuestra planta de Friuli 1972, preparamos tus pedidos e-commerce al instante de venderlos, y los entregamos en minutos en todo Mar del Plata.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
                <a 
                  href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20el%20Plan%20Emprendedores%20y%203PL."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl font-bebas text-lg tracking-widest bg-emerald-600 text-white hover:bg-emerald-500 transition-all duration-200 text-center shadow-lg flex items-center justify-center gap-2 uppercase"
                >
                  <PhoneCall className="w-4 h-4 text-sunbeam-yellow" /> SOLICITAR REUNIÓN COMERCIAL
                </a>
                <Link 
                  href="/contacto" 
                  className="px-6 py-4 rounded-xl font-bebas text-lg tracking-widest bg-white text-egyptian-blue hover:bg-slate-100 transition-all duration-200 text-center shadow-lg uppercase"
                >
                  CONTACTO DIRECTO ➔
                </Link>
              </div>
            </div>
          </div>
        </ParallaxElement>

        {/* Specifications Grid */}
        <div className="space-y-8">
          <h3 className="font-anton text-2xl sm:text-3xl text-brand-dark uppercase text-center">
            CARACTERÍSTICAS DEL SERVICIO PyME
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-egyptian-blue/5 text-egyptian-blue flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <h4 className="font-bebas text-lg text-slate-800 tracking-wider uppercase">{spec.title}</h4>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3PL Warehousing diagram */}
        <div className="border-t border-slate-100 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-4">
            <span className="font-bebas text-md tracking-widest text-egyptian-blue uppercase">Infraestructura</span>
            <h3 className="font-anton text-3xl text-brand-dark uppercase leading-none">INTEGRACIÓN LOGÍSTICA</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-sans">
              Contamos con una infraestructura equipada con ruteadores digitales y estanterías codificadas para gestionar y auditar el stock de tu negocio de forma permanente.
            </p>
          </div>
          <div className="md:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 space-y-4">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-egyptian-blue shrink-0" />
              <div>
                <span className="font-bold text-slate-800 text-sm block">Control de Inventario Permanente:</span>
                <span className="text-slate-500 text-xs">Monitoreo riguroso de entradas y salidas de stock para evitar quiebres de mercadería.</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ClipboardCheck className="w-6 h-6 text-egyptian-blue shrink-0" />
              <div>
                <span className="font-bold text-slate-800 text-sm block">Facturación Mensual Detallada:</span>
                <span className="text-slate-500 text-xs">Al finalizar el mes, recibes un reporte detallado con todos tus bultos despachados para facilitar la contabilidad.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </ParallaxSection>
  );
}
