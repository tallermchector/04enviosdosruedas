'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, PhoneCall, MessageSquare } from 'lucide-react';

const FAQS = [
  {
    q: '¿Cuál es la zona de cobertura en Mar del Plata?',
    a: 'Nuestra cobertura principal abarca toda la cuadrícula urbana de Mar del Plata, incluyendo zonas clave como Centro, Plaza Mitre, La Perla, Constitución, Caisamar, Güemes, Los Troncos, Chauvín, San José, Puerto, Playa Grande, y Punta Mogotes. Para zonas más alejadas como Batán, Parque Industrial, Alfar o Sierra de los Padres, ofrecemos tarifas unificadas sujetas a ruteos especiales programados.'
  },
  {
    q: '¿Hasta qué hora puedo despachar mis bultos para entregas LowCost?',
    a: 'Para nuestro plan de ahorro LowCost con entregas garantizadas en el mismo día, el horario límite de ingreso de paquetes en nuestra central de Friuli 1972 es a las 13:00 hs. Todos los paquetes ingresados antes de ese corte entran en la ruta de distribución consolidada vespertina y se entregan antes de las 19:00 hs.'
  },
  {
    q: '¿Cómo funciona la integración de MercadoLibre Flex?',
    a: '¡Es súper simple! Al activar MercadoLibre Flex en tu tienda online, seleccionas que realizas las entregas mediante transporte propio/motomensajería. Los compradores verán la opción de recibir su compra "Mismo Día". Vos podés imprimir las etiquetas correspondientes, las traés a nuestra central o las retiramos de tu local antes de las 15:00 hs, y nosotros escaneamos y entregamos en tiempo récord cumpliendo con el SLA estricto de la plataforma.'
  },
  {
    q: '¿Cuál es la diferencia exacta entre el plan Express y el LowCost?',
    a: 'La diferencia principal radica en el tiempo y la exclusividad del repartidor. En el servicio Express, se asigna un cadete exclusivo para retirar y entregar tu paquete directamente con prioridad horaria (rango máximo de 2 hs). En el plan LowCost, los paquetes se agrupan en rutas inteligentes consolidadas por zonas, abaratando enormemente el costo de envío pero flexibilizando el horario de entrega a lo largo del día (siempre entregado el mismo día antes de las 19:00 hs).'
  },
  {
    q: '¿Cómo funcionan las cuentas corrientes comerciales?',
    a: 'Nuestras Cuentas Corrientes Flexibles están dirigidas a empresas, distribuidores y tiendas de e-commerce con despachos constantes de más de 10 paquetes semanales. Se asigna una cuenta corriente comercial donde se van cargando todos los envíos diarios y, al finalizar el mes, emitimos una facturación única consolidada A o B con un plazo de pago flexible.'
  },
  {
    q: '¿Qué tipo de bultos o encomiendas están permitidos?',
    a: 'Transportamos todo tipo de encomiendas de comercio electrónico y mensajería general que puedan ser trasladadas de forma segura en las mochilas térmicas de nuestra flota de motos. Esto incluye indumentaria, calzado, accesorios, repuestos automotores chicos, documentos, contratos, llaves, alimentos secos y tecnología. No transportamos sustancias prohibidas, inflamables, o mercadería extremadamente pesada de más de 20 kg por unidad.'
  },
  {
    q: '¿Qué seguridad tengo sobre el extravío o rotura de mi paquete?',
    a: 'Brindamos un trato sumamente profesional y seguro de cada encomienda. En el improbable caso de que ocurra algún inconveniente o extravío durante el transporte, contamos con un seguro de carga que cubre el 100% del valor de costo declarado del bulto.'
  }
];

export default function PreguntasFrecuentesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="relative bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-egyptian-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-16">
        
        {/* Title */}
        <div className="space-y-4 text-center">
          <span className="font-bebas text-sm tracking-widest text-egyptian-blue bg-egyptian-blue/5 px-3.5 py-1 rounded-full uppercase inline-flex items-center gap-1.5 shadow-sm">
            <HelpCircle className="w-4 h-4" /> SOPORTE & AYUDA AL VENDEDOR
          </span>
          <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-brand-dark uppercase tracking-tight leading-none">
            PREGUNTAS FRECUENTES
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            ¿Tenés dudas sobre cómo gestionar tus paquetes con nosotros? Encontrá respuestas instantáneas a las preguntas más comunes de nuestra comunidad.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:border-egyptian-blue/20 transition-colors"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bebas text-lg sm:text-xl text-slate-800 tracking-wider uppercase leading-none">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-egyptian-blue' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100/50 text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions? CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center border border-slate-800 space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,53,166,0.3)_0%,transparent_60%)]"></div>
          
          <div className="space-y-4 relative z-10">
            <h3 className="font-anton text-2xl sm:text-3xl tracking-wide uppercase leading-none">¿TODAVÍA TENÉS DUDAS?</h3>
            <p className="text-slate-300 text-sm font-sans leading-relaxed max-w-xl mx-auto">
              No te preocupes. Escribinos directamente por WhatsApp o coordiná una llamada telefónica con nuestro centro de operaciones comerciales para que respondamos tus dudas al instante.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a 
                href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas!%20Tengo%20algunas%20preguntas%20adicionales%20sobre%20su%20servicio%20que%20no%20est%C3%A1n%20en%20las%20preguntas%20frecuentes."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bebas text-lg tracking-widest transition-all shadow-lg flex items-center gap-2 uppercase"
              >
                <MessageSquare className="w-5 h-5 text-sunbeam-yellow fill-sunbeam-yellow" /> ATENCIÓN AL INSTANTE 💬
              </a>
              <Link 
                href="/contacto" 
                className="px-6 py-3 bg-white text-egyptian-blue hover:bg-slate-100 rounded-xl font-bebas text-lg tracking-widest transition-all shadow-lg uppercase"
              >
                CONTACTANOS POR WEB
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
