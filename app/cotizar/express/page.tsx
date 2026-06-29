'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  MapPin, 
  Package, 
  MessageSquare, 
  Clock, 
  AlertTriangle, 
  CheckCircle,
  HelpCircle,
  Sparkles,
  Zap,
  Info
} from 'lucide-react';

// Mar del Plata neighborhoods with distance values for simulation
const BARRIOS_MDQ = [
  { name: 'Centro / Plaza Mitre / Plaza Colón', distanceVal: 1, text: 'Zona Céntrica (Base)' },
  { name: 'La Perla / Constitución / Caisamar', distanceVal: 1.2, text: 'Zona Norte' },
  { name: 'Los Troncos / Stella Maris / Güemes', distanceVal: 1.1, text: 'Zona Residencial' },
  { name: 'Chauvín / San José / Pompeya', distanceVal: 1.15, text: 'Zona Centro-Oeste' },
  { name: 'Puerto / Playa Grande / Alem', distanceVal: 1.3, text: 'Zona Puerto' },
  { name: 'Punta Mogotes / Faro / Alfar', distanceVal: 1.6, text: 'Zona Sur Playa' },
  { name: 'Las Avenidas / El Progreso / Peralta Ramos', distanceVal: 1.25, text: 'Zona Sudoeste' },
  { name: 'Batán / Parque Industrial', distanceVal: 2.2, text: 'Zona Interurbana Ext.' },
  { name: 'Sierra de los Padres', distanceVal: 2.8, text: 'Zona Sierra Ext.' }
];

export default function CotizarExpressPage() {
  const [origen, setOrigen] = useState(BARRIOS_MDQ[0].name);
  const [destino, setDestino] = useState(BARRIOS_MDQ[4].name);
  const [peso, setPeso] = useState('Chico (Hasta 2kg)');
  const [rangoHorario, setRangoHorario] = useState('Inmediato (Rango 2 hs)');
  const [observaciones, setObservaciones] = useState('');

  // Calculate price dynamically on each render (idiomatic React)
  const oBarrio = BARRIOS_MDQ.find(b => b.name === origen) || BARRIOS_MDQ[0];
  const dBarrio = BARRIOS_MDQ.find(b => b.name === destino) || BARRIOS_MDQ[0];
  
  const baseRate = 1500;
  const zoneDiff = Math.abs(oBarrio.distanceVal - dBarrio.distanceVal) * 1200;
  
  const weightSurcharge = peso.includes('Mediano') ? 400 : peso.includes('Grande') ? 900 : 0;
  const timeSurcharge = rangoHorario.includes('Inmediato') ? 300 : 0;
  
  const totalPrice = Math.round(baseRate + zoneDiff + weightSurcharge + timeSurcharge);

  const getWhatsAppLink = () => {
    const text = `Hola Envios DosRuedas! Solicito un *Envío Express* cotizado desde la web:
📍 *Origen:* ${origen}
📍 *Destino:* ${destino}
📦 *Tamaño/Peso:* ${peso}
⏰ *Rango Horario:* ${rangoHorario}
💬 *Detalles:* ${observaciones || 'Sin especificaciones'}

💵 *Precio Estimado:* $${totalPrice} ARS`;
    return `https://wa.me/5492236602699?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="relative bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-sunbeam-yellow/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-bebas text-md tracking-widest text-white bg-egyptian-blue px-3.5 py-1.5 rounded-full uppercase inline-flex items-center gap-1.5 shadow-sm">
            <Zap className="w-4 h-4 text-sunbeam-yellow fill-sunbeam-yellow" /> ALTA PRIORIDAD • EXPRESS
          </span>
          <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-brand-dark tracking-tight uppercase leading-none">
            COTIZADOR EXPRESOS MDQ
          </h1>
          <p className="text-slate-500 text-md sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
            Calculá al instante tu tarifa de envío Express para Mar del Plata. Elegí el rango exacto de retiro y entrega. Sin sorpresas, precisión total y velocidad garantizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Cotizador Form (Left) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-100 shadow-xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-egyptian-blue/5 text-egyptian-blue flex items-center justify-center shrink-0">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bebas text-xl text-slate-800 tracking-wider">CONFIGURÁ TU ENVÍO</h3>
                <p className="text-xs text-slate-400 font-sans">Rango máximo de 2 horas de punta a punta</p>
              </div>
            </div>

            <div className="space-y-6">
              
              {/* Origen & Destino */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="origen" className="font-bebas text-md text-slate-700 tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-egyptian-blue" /> Barrio de Retiro (Origen)
                  </label>
                  <select
                    id="origen"
                    value={origen}
                    onChange={(e) => setOrigen(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-egyptian-blue bg-slate-50/50"
                  >
                    {BARRIOS_MDQ.map((barrio) => (
                      <option key={barrio.name} value={barrio.name}>
                        {barrio.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="destino" className="font-bebas text-md text-slate-700 tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-egyptian-blue" /> Barrio de Entrega (Destino)
                  </label>
                  <select
                    id="destino"
                    value={destino}
                    onChange={(e) => setDestino(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-egyptian-blue bg-slate-50/50"
                  >
                    {BARRIOS_MDQ.map((barrio) => (
                      <option key={barrio.name} value={barrio.name}>
                        {barrio.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Peso & Horarios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="peso" className="font-bebas text-md text-slate-700 tracking-wider flex items-center gap-1.5">
                    <Package className="w-4 h-4 text-egyptian-blue" /> Peso / Tamaño del Bulto
                  </label>
                  <select
                    id="peso"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-egyptian-blue bg-slate-50/50"
                  >
                    <option value="Chico (Hasta 2kg)">Chico (Documento, Bolsa chica - hasta 2kg)</option>
                    <option value="Mediano (Hasta 10kg)">Mediano (Caja de zapatos, Mochila - hasta 10kg)</option>
                    <option value="Grande (Hasta 20kg)">Grande (Caja de ecommerce, Caja grande - hasta 20kg)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="rangoHorario" className="font-bebas text-md text-slate-700 tracking-wider flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-egyptian-blue" /> Prioridad de Horario
                  </label>
                  <select
                    id="rangoHorario"
                    value={rangoHorario}
                    onChange={(e) => setRangoHorario(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-egyptian-blue bg-slate-50/50"
                  >
                    <option value="Inmediato (Rango 2 hs)">Retiro inmediato y entrega directa (Rango 2 hs)</option>
                    <option value="Programado (Mismo día)">Programado (Rango de 4 hs en el día)</option>
                  </select>
                </div>
              </div>

              {/* Observaciones */}
              <div className="space-y-2">
                <label htmlFor="observaciones" className="font-bebas text-md text-slate-700 tracking-wider block">
                  Descripción Adicional (Contenido del paquete, timbres, pisos)
                </label>
                <textarea
                  id="observaciones"
                  rows={3}
                  value={observaciones}
                  onChange={(e) => setObservaciones(e.target.value)}
                  placeholder="Ej: Contiene repuestos delicados. Retirar por timbre 3A, entregar antes de las 18:00 hs en local a la calle..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-egyptian-blue bg-slate-50/50"
                />
              </div>

            </div>
          </div>

          {/* Quotation Results (Right) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-egyptian-blue/20 rounded-full blur-2xl"></div>
              
              <div className="space-y-1.5 pb-4 border-b border-slate-800 relative z-10">
                <span className="text-xs font-mono text-sunbeam-yellow uppercase tracking-widest block font-bold">Resumen de Cotización</span>
                <h3 className="font-anton text-3xl tracking-wide uppercase">SERVICIO EXPRESS</h3>
              </div>

              <div className="space-y-3 font-mono text-sm relative z-10 text-slate-300">
                <div className="flex justify-between">
                  <span>Tarifa Base Express:</span>
                  <span className="text-white">$1500.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Adicional por Cobertura:</span>
                  <span className="text-white">Calculado</span>
                </div>
                <div className="flex justify-between">
                  <span>Sueldo por Peso/Tamaño:</span>
                  <span className="text-white">
                    {peso.includes('Chico') ? '$0.00' : peso.includes('Mediano') ? '$400.00' : '$900.00'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Adicional Prioridad Horaria:</span>
                  <span className="text-white">
                    {rangoHorario.includes('Inmediato') ? '$300.00' : '$0.00'}
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 relative z-10 flex justify-between items-baseline">
                <span className="font-bebas text-2xl text-slate-300 uppercase">PRECIO ESTIMADO:</span>
                <div className="text-right">
                  <span className="font-anton text-4xl text-sunbeam-yellow font-bold">${totalPrice}</span>
                  <span className="text-[10px] font-mono block text-slate-400 uppercase">ARS (IVA Incluido)</span>
                </div>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[11px] font-sans leading-relaxed text-slate-300">
                ⚠️ <span className="font-bold text-white">Nota de exactitud:</span> Este es un costo aproximado basado en cuadrículas. Las tarifas pueden variar ligeramente según la accesibilidad final del destino.
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl font-bebas text-xl tracking-widest bg-emerald-600 hover:bg-emerald-500 text-white transition-all text-center flex items-center justify-center gap-2 shadow-lg relative z-10"
              >
                <MessageSquare className="w-5 h-5 text-sunbeam-yellow fill-sunbeam-yellow" /> CONFIRMAR Y ENVIAR POR WHATSAPP
              </a>
            </div>

            {/* Support Info widget */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
              <h4 className="font-bebas text-md text-slate-800 tracking-wider flex items-center gap-1.5 uppercase">
                <Info className="w-4 h-4 text-egyptian-blue" /> ¿Por qué elegir Express?
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Para urgencias horarias y encomiendas críticas. Nos comprometemos a despachar un repartidor en moto dedicado 100% a tu paquete para agilizar los tiempos al máximo. Ideal para repuestos, contratos, firmas, llaves o delivery gastronómico PyME de precisión.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
