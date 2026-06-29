'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ParallaxSection, ParallaxElement } from '../../../components/ParallaxSection';
import { 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Users, 
  MapPin, 
  PhoneCall, 
  Info,
  Award,
  Clock
} from 'lucide-react';

export default function EnviosFlexPage() {
  const specs = [
    { title: 'Plazo Same-Day', desc: 'Entregas garantizadas el mismo día para compras realizadas hasta el mediodía.' },
    { title: 'Despacho Flexible', desc: 'Recibimos tus paquetes en planta o coordinamos retiro hasta las 15:00 hs.' },
    { title: 'Mantén tu Termómetro en Verde', desc: 'Cumplimiento estricto de las metas de entrega para resguardar tu reputación Gold/Platinum.' },
    { title: 'Soporte Especializado', desc: 'Asistencia y comunicación directa ante incidencias, direcciones incorrectas, etc.' },
    { title: 'Cobertura Integral', desc: 'Distribución en todos los barrios y cuadrículas de Mar del Plata.' }
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
          <span className="font-bebas text-sm tracking-widest text-brand-blue-dark bg-sunbeam-yellow px-4 py-1.5 rounded-full uppercase inline-flex items-center gap-1.5 shadow-md">
            <Award className="w-4 h-4 text-egyptian-blue" /> SOCIO LOGÍSTICO EXCLUSIVO • MERCADOLIBRE FLEX
          </span>
          <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-brand-dark uppercase tracking-tight leading-none">
            ENVÍOS FLEX
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto font-sans">
            La solución logística definitiva para vendedores de MercadoLibre en Mar del Plata. Cumplimos con tus entregas en el día con la máxima agilidad urbana para que tu reputación de vendedor brille siempre al 100%.
          </p>
        </div>

        {/* Highlight Banner with subtle Parallax */}
        <ParallaxElement speed={0.06}>
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-egyptian-blue/20 rounded-full blur-2xl"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono text-sunbeam-yellow uppercase font-bold tracking-widest block">Entregas en el Día</span>
                <h3 className="font-anton text-2xl sm:text-3xl tracking-wide uppercase leading-none">CORTE DE DESPACHO: 15:00 HS</h3>
                <p className="text-slate-300 text-sm font-sans leading-relaxed">
                  Somos expertos calificados en la dinámica exigente de MercadoLibre. Trae tus bultos o coordinamos el retiro antes de las 15:00 hs, y garantizamos el cumplimiento de las entregas en el día. Olvídate de los reclamos por demoras y escala tus ventas.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
                <a 
                  href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas!%20Tengo%20una%20tienda%20en%20MercadoLibre%20y%20quiero%20activar%20Env%C3%ADos%20Flex%20con%20ustedes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl font-bebas text-lg tracking-widest bg-emerald-600 text-white hover:bg-emerald-500 transition-all duration-200 text-center shadow-lg flex items-center justify-center gap-2 uppercase"
                >
                  <PhoneCall className="w-4 h-4 text-sunbeam-yellow" /> VINCULAR MI TIENDA
                </a>
                <Link 
                  href="/contacto" 
                  className="px-6 py-4 rounded-xl font-bebas text-lg tracking-widest bg-white text-egyptian-blue hover:bg-slate-100 transition-all duration-200 text-center shadow-lg uppercase"
                >
                  HABLAR CON UN ASESOR ➔
                </Link>
              </div>
            </div>
          </div>
        </ParallaxElement>

        {/* Specifications Grid */}
        <div className="space-y-8">
          <h3 className="font-anton text-2xl sm:text-3xl text-brand-dark uppercase text-center">
            PILARES DE NUESTRO SERVICIO FLEX
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

        {/* Integration Details */}
        <div className="border-t border-slate-100 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-4">
            <span className="font-bebas text-md tracking-widest text-egyptian-blue uppercase">Calidad de Venta</span>
            <h3 className="font-anton text-3xl text-brand-dark uppercase leading-none">MANTÉN TU REPUTACIÓN EXCELENTE</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-sans">
              MercadoLibre penaliza severamente las entregas tardías. Trabajando con DosRuedas, te aseguras un socio local de confianza que conoce cada atajo de Mar del Plata para entregar siempre a tiempo.
            </p>
          </div>
          <div className="md:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 space-y-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-emerald-500 shrink-0" />
              <div>
                <span className="font-bold text-slate-800 text-sm block">Aumento de Conversión:</span>
                <span className="text-slate-500 text-xs">Los artículos con entrega &quot;Mismo Día&quot; convierten hasta un 40% más en la plataforma.</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-egyptian-blue shrink-0" />
              <div>
                <span className="font-bold text-slate-800 text-sm block">Ruta Vespertina Dedicada:</span>
                <span className="text-slate-500 text-xs">Nuestros repartidores salen a la tarde con rutas concentradas para asegurar la entrega antes del límite diario.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </ParallaxSection>
  );
}
