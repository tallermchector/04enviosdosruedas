'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ParallaxSection, ParallaxElement } from '../../components/ParallaxSection';
import { Lock, Eye, ShieldCheck, CheckCircle } from 'lucide-react';

export default function PoliticaDePrivacidadPage() {
  return (
    <ParallaxSection speed={0.1} className="relative bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ParallaxElement speed={-0.03} className="absolute inset-0 select-none pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </ParallaxElement>
      <div className="absolute top-10 right-10 w-96 h-96 bg-egyptian-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Header Title Section */}
        <div className="space-y-6 text-center">
          <span className="font-bebas text-sm tracking-widest text-white bg-egyptian-blue px-4 py-1.5 rounded-full uppercase inline-flex items-center gap-1.5 shadow-md">
            <Lock className="w-4 h-4 text-sunbeam-yellow" /> PRIVACIDAD • ENVIOS DOS RUEDAS
          </span>
          <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-brand-dark uppercase tracking-tight leading-none">
            Política de Privacidad
          </h1>
          <p className="text-slate-500 text-md sm:text-lg max-w-2xl mx-auto font-sans">
            Conocé cómo protegemos, tratamos y resguardamos tus datos personales, direcciones de entrega e información comercial.
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
              <span className="text-egyptian-blue">1.</span> DATOS QUE RECOPILAMOS
            </h2>
            <p>
              Para poder coordinar y concretar tus despachos de última milla con eficiencia quirúrgica, recopilamos información básica y necesaria del remitente y destinatario, tales como: nombres de contacto, direcciones físicas de entrega (geolocalización urbana), números de teléfono/WhatsApp, correos electrónicos, y descripciones generales de la mercadería transportada.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-brand-dark uppercase tracking-wide flex items-center gap-2">
              <span className="text-egyptian-blue">2.</span> USO DE LA INFORMACIÓN
            </h2>
            <p>
              Toda la información obtenida se utiliza de manera exclusiva para planificar rutas eficientes, enviar notificaciones de estado automáticas a los destinatarios mediante mensajería, procesar cobros y emitir resúmenes de facturación mensual para cuentas corrientes corporativas o de MercadoLibre Flex.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-3">
              <Eye className="w-5 h-5 text-egyptian-blue shrink-0 mt-0.5" />
              <p className="text-xs text-slate-500 font-mono">
                COMPROMISO DE NO DIVULGACIÓN: Jamás vendemos, compartimos o intercambiamos tus datos ni las bases de clientes de tu e-commerce con terceras empresas de marketing.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-brand-dark uppercase tracking-wide flex items-center gap-2">
              <span className="text-egyptian-blue">3.</span> SEGURIDAD Y RESGUARDO DIGITAL
            </h2>
            <p>
              Implementamos protocolos de seguridad digital estrictos en nuestros servidores y sistemas de ruteo para evitar accesos no autorizados, pérdidas accidentales de información o adulteración de datos de facturación de nuestros clientes de moped y camioneta.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-brand-dark uppercase tracking-wide flex items-center gap-2">
              <span className="text-egyptian-blue">4.</span> DERECHOS ARCO (ACCESO Y RECTIFICACIÓN)
            </h2>
            <p>
              Como usuario o comerciante adherido, contás en todo momento con el derecho de acceder a tus datos registrados en nuestra base, rectificar direcciones obsoletas, actualizar tus datos de contacto o solicitar la baja completa de tu cuenta corriente comercial de Envíos DosRuedas comunicándote formalmente a nuestro correo corporativo.
            </p>
          </section>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <span>Última actualización: Junio de 2026</span>
            <div className="flex items-center gap-1.5 text-emerald-600 font-mono font-bold uppercase">
              <ShieldCheck className="w-4 h-4" /> COMPLIANCE REGIONAL • MDQ
            </div>
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  );
}
