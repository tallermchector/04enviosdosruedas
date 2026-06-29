'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ParallaxSection, ParallaxElement } from '../../components/ParallaxSection';
import { FileText, ShieldAlert, CheckCircle } from 'lucide-react';

export default function TerminosYCondicionesPage() {
  return (
    <ParallaxSection speed={0.1} className="relative bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ParallaxElement speed={-0.03} className="absolute inset-0 select-none pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </ParallaxElement>
      <div className="absolute top-10 right-10 w-96 h-96 bg-egyptian-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Header Title Section */}
        <div className="space-y-6 text-center">
          <span className="font-bebas text-sm tracking-widest text-brand-blue-dark bg-sunbeam-yellow px-4 py-1.5 rounded-full uppercase inline-flex items-center gap-1.5 shadow-md">
            <FileText className="w-4 h-4 text-egyptian-blue" /> LEGAL • ENVIOS DOS RUEDAS
          </span>
          <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-brand-dark uppercase tracking-tight leading-none">
            Términos y Condiciones
          </h1>
          <p className="text-slate-500 text-md sm:text-lg max-w-2xl mx-auto font-sans">
            Por favor, leé detenidamente los términos y condiciones que rigen el uso de nuestros servicios de mensajería y logística de última milla en Mar del Plata.
          </p>
        </div>

        {/* Content Card with soft shadow and pristine typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl space-y-8 text-slate-700 font-sans text-sm sm:text-base leading-relaxed"
        >
          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-brand-dark uppercase tracking-wide flex items-center gap-2">
              <span className="text-egyptian-blue">1.</span> OBJETO Y SERVICIO
            </h2>
            <p>
              Envíos DosRuedas brinda servicios integrales de distribución, entrega de última milla, MercadoLibre Flex, y almacenamiento temporal (3PL) dentro de la cuadrícula urbana establecida para el partido de General Pueyrredón (Mar del Plata). Al solicitar cualquiera de nuestros servicios, aceptás plenamente estos términos y condiciones.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-brand-dark uppercase tracking-wide flex items-center gap-2">
              <span className="text-egyptian-blue">2.</span> TIPOS DE ENVÍOS Y EMBALAJES
            </h2>
            <p>
              Es responsabilidad del remitente asegurar que los bultos se encuentren perfectamente embalados, rotulados y cerrados. No realizamos traslados de mercadería peligrosa, sustancias ilícitas, animales vivos, dinero en efectivo o elementos de valor extremo que no cuenten con declaración y seguro previo especial.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-egyptian-blue shrink-0 mt-0.5" />
              <p className="text-xs text-slate-500 font-mono">
                REGLAMENTO DE CARGA: El peso máximo estándar por bulto en moped/motocicleta es de 15kg y dimensiones que no excedan el tamaño de la caja de carga estándar (45x45x45 cm).
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-brand-dark uppercase tracking-wide flex items-center gap-2">
              <span className="text-egyptian-blue">3.</span> TIEMPOS DE ENTREGA Y COMPROMISO (SLA)
            </h2>
            <p>
              El servicio <strong>Express</strong> garantiza la asignación inmediata de un cadete exclusivo, con un plazo de entrega de hasta 120 minutos dentro de la zona urbana centro. El servicio <strong>LowCost</strong> y <strong>Flex</strong> operan bajo ventanas de ruteo consolidadas. Las demoras derivadas de fuerza mayor, factores climáticos extremos o cortes de calle imprevistos quedan exentas de penalidades directas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-brand-dark uppercase tracking-wide flex items-center gap-2">
              <span className="text-egyptian-blue">4.</span> TARIFAS Y MÉTODOS DE PAGO
            </h2>
            <p>
              Nuestras tarifas se calculan de manera automatizada de acuerdo al distrito del remitente, del destinatario, y del tipo de urgencia elegida. Los clientes de cuenta corriente comercial (E-Commerce y PyMEs con alta frecuencia) contarán con facturación unificada a fin de mes, con vencimientos detallados en cada resumen consolidado.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-brand-dark uppercase tracking-wide flex items-center gap-2">
              <span className="text-egyptian-blue">5.</span> SEGUROS Y RECLAMOS
            </h2>
            <p>
              Ante roturas, pérdidas, o faltantes debidamente acreditados en paquetes que contengan mercadería declarada, Envíos DosRuedas responderá de acuerdo al nivel de cobertura contratado en su cuenta comercial o hasta el monto tope de responsabilidad estándar establecido por bulto según la reglamentación de mensajería vigente.
            </p>
          </section>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <span>Última actualización: Junio de 2026</span>
            <div className="flex items-center gap-1.5 text-emerald-600 font-mono font-bold uppercase">
              <CheckCircle className="w-4 h-4" /> VERSIÓN OFICIAL 2.0
            </div>
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  );
}
