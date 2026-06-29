'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';

export default function ContactoPage() {
  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoCliente: 'E-Commerce / PyME',
    mensaje: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.nombre || !formState.email || !formState.mensaje) {
      setError('Por favor complete todos los campos requeridos (Nombre, Email y Mensaje).');
      return;
    }

    setLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormState({
        nombre: '',
        email: '',
        telefono: '',
        tipoCliente: 'E-Commerce / PyME',
        mensaje: ''
      });
    }, 1500);
  };

  return (
    <div className="relative bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-egyptian-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-bebas text-md tracking-widest text-egyptian-blue bg-egyptian-blue/5 px-3.5 py-1 rounded-full uppercase">
            Soporte & Atención
          </span>
          <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-brand-dark tracking-tight uppercase leading-none">
            CONTACTA CON NOSOTROS
          </h1>
          <p className="text-slate-500 text-md sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
            ¿Tenés preguntas o estás listo para delegar tu logística urbana en manos de expertos? Escribinos hoy y un asesor de cuentas corporativas se comunicará de inmediato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Information (Left Column) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 space-y-6">
              <h2 className="font-anton text-2xl text-brand-dark uppercase tracking-wide">
                INFORMACIÓN DE CONTACTO
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed font-sans">
                Nuestras oficinas centrales y centro de distribución logística se encuentran en una ubicación estratégica de Mar del Plata para cubrir toda la cuadrícula urbana con rapidez quirúrgica.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-egyptian-blue/10 flex items-center justify-center shrink-0 text-egyptian-blue">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bebas text-md text-slate-800 tracking-wider">DIRECCIÓN FÍSICA</h4>
                    <p className="text-sm text-slate-500 font-sans mt-0.5">Friuli 1972, Mar del Plata, Buenos Aires</p>
                    <a 
                      href="https://maps.google.com/?q=Friuli+1972,+Mar+del+Plata" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-egyptian-blue font-bold font-mono hover:underline mt-1 inline-block uppercase"
                    >
                      VER EN GOOGLE MAPS ➔
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-egyptian-blue/10 flex items-center justify-center shrink-0 text-egyptian-blue">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bebas text-md text-slate-800 tracking-wider">TELÉFONO DE CONTACTO</h4>
                    <p className="text-sm text-slate-500 font-sans mt-0.5">+54 223 660-2699</p>
                    <a 
                      href="tel:+542236602699" 
                      className="text-xs text-egyptian-blue font-bold font-mono hover:underline mt-1 inline-block uppercase"
                    >
                      LLAMAR AHORA ➔
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-egyptian-blue/10 flex items-center justify-center shrink-0 text-egyptian-blue">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bebas text-md text-slate-800 tracking-wider">CORREO ELECTRÓNICO</h4>
                    <p className="text-sm text-slate-500 font-sans mt-0.5 break-all">matiascejas@enviosdosruedas.com</p>
                    <a 
                      href="mailto:matiascejas@enviosdosruedas.com" 
                      className="text-xs text-egyptian-blue font-bold font-mono hover:underline mt-1 inline-block uppercase"
                    >
                      ENVIAR MAIL ➔
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-egyptian-blue/10 flex items-center justify-center shrink-0 text-egyptian-blue">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bebas text-md text-slate-800 tracking-wider">HORARIOS DE ATENCIÓN</h4>
                    <p className="text-sm text-slate-500 font-sans mt-0.5">Lunes a Viernes: 08:30 a 19:30 hs</p>
                    <p className="text-xs text-slate-400 font-sans">Sábados (Guardias Express): 09:00 a 14:00 hs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro-interactive FAQ Banner inside info */}
            <div className="bg-egyptian-blue text-white rounded-2xl p-6 relative overflow-hidden border border-white/10 shadow-lg">
              <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-10">
                <HelpCircle className="w-40 h-40" />
              </div>
              <div className="space-y-4 relative z-10">
                <span className="text-[10px] font-mono text-sunbeam-yellow uppercase font-bold tracking-widest block">¿Dudas rápidas?</span>
                <h3 className="font-bebas text-xl tracking-wider text-white">REVISÁ NUESTRAS PREGUNTAS FRECUENTES</h3>
                <p className="text-xs text-slate-200 font-sans leading-relaxed">
                  Respondemos tus dudas sobre cobertura de distritos, tipos de empaques permitidos, tiempos límites de despacho de MercadoLibre Flex y facturación consolidada de fin de mes.
                </p>
                <a 
                  href="/nosotros/preguntas-frecuentes"
                  className="inline-flex items-center gap-1.5 font-bebas text-md text-sunbeam-yellow hover:text-white transition-colors"
                >
                  VER PREGUNTAS FRECUENTES ➔
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-slate-100 shadow-xl relative">
            <h2 className="font-anton text-2xl text-brand-dark uppercase tracking-wide mb-6">
              ENVIANOS UN MENSAJE DIRECTO
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="font-bebas text-md text-slate-700 tracking-wider block">
                    Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formState.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-egyptian-blue transition-all bg-slate-50/50"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="font-bebas text-md text-slate-700 tracking-wider block">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-egyptian-blue transition-all bg-slate-50/50"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="telefono" className="font-bebas text-md text-slate-700 tracking-wider block">
                    Número Telefónico (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formState.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-egyptian-blue transition-all bg-slate-50/50"
                    placeholder="Ej. 223 6602699"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="tipoCliente" className="font-bebas text-md text-slate-700 tracking-wider block">
                    Tipo de Operación
                  </label>
                  <select
                    id="tipoCliente"
                    name="tipoCliente"
                    value={formState.tipoCliente}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-egyptian-blue transition-all bg-slate-50/50"
                  >
                    <option value="E-Commerce / PyME">E-Commerce / PyME (Envíos Frecuentes)</option>
                    <option value="Particular">Particular (Envíos Eventuales)</option>
                    <option value="Corporativo">Gran Empresa (Cuenta Corriente)</option>
                    <option value="MercadoLibre Flex">Usuario MercadoLibre Flex</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="font-bebas text-md text-slate-700 tracking-wider block">
                  Mensaje o Descripción de Necesidades <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  value={formState.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-egyptian-blue transition-all bg-slate-50/50"
                  placeholder="Detállanos cuántos envíos solés hacer por día o semana, zonas críticas de entrega y tus consultas específicas..."
                />
              </div>

              {/* Status messages */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-red-50 text-red-700 text-sm rounded-lg flex items-center gap-2.5 border border-red-100"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-emerald-50 text-emerald-800 text-sm rounded-lg flex items-center gap-2.5 border border-emerald-100"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div>
                      <span className="font-bold block">¡Mensaje enviado correctamente!</span>
                      <span className="text-xs">Gracias por contactarnos. Un asesor comercial te llamará en las próximas horas.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-egyptian-blue text-white rounded-xl font-bebas text-xl tracking-widest hover:bg-brand-blue-light transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Procesando Mensaje...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 text-sunbeam-yellow fill-sunbeam-yellow" /> ENVIAR MENSAJE AHORA
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

        {/* Physical Office stylized widget */}
        <div className="mt-20 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,53,166,0.3)_0%,transparent_60%)]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs text-sunbeam-yellow uppercase tracking-widest block">En Mar del Plata</span>
              <h3 className="font-anton text-3xl tracking-wide uppercase leading-none">NUESTRA PLANTA MDQ</h3>
              <p className="text-slate-300 text-sm font-sans leading-relaxed max-w-lg">
                Equipada con depósitos climatizados para almacenamiento temporal de e-commerce, zona de consolidación de paquetes de última milla, y puntos de recarga de baterías/combustible de flota de motos de alta frecuencia.
              </p>
              <div className="flex gap-4 pt-2 font-mono text-xs text-slate-400">
                <div>📦 DEPÓSITO 3PL</div>
                <div>⚡ RUTEADORES DIGITALES</div>
                <div>🏍️ FLOTA ÁGIL</div>
              </div>
            </div>
            
            <div className="lg:col-span-6">
              {/* Beautiful interactive-looking map rendering using Tailwind grids representing Mar del Plata delivery districts */}
              <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 space-y-4">
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Ruta Activa de Cobertura de Distritos MDQ</span>
                
                <div className="grid grid-cols-3 gap-3 text-center font-bebas text-sm">
                  <div className="bg-egyptian-blue/20 text-white p-3 rounded-lg border border-egyptian-blue/30 flex flex-col justify-center items-center gap-1.5">
                    <span className="text-sunbeam-yellow">DIST_01</span>
                    <span className="text-xs text-slate-300">ZONA CENTRO</span>
                  </div>
                  <div className="bg-egyptian-blue/20 text-white p-3 rounded-lg border border-egyptian-blue/30 flex flex-col justify-center items-center gap-1.5">
                    <span className="text-sunbeam-yellow">DIST_02</span>
                    <span className="text-xs text-slate-300">PUERTO / SUR</span>
                  </div>
                  <div className="bg-egyptian-blue/20 text-white p-3 rounded-lg border border-egyptian-blue/30 flex flex-col justify-center items-center gap-1.5">
                    <span className="text-sunbeam-yellow">DIST_03</span>
                    <span className="text-xs text-slate-300">ZONA NORTE</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-[11px] font-mono text-slate-300 leading-relaxed">
                  🚚 <span className="text-emerald-400 font-bold">DESPACHO FÁCIL:</span> Traé tus paquetes de MercadoLibre Flex a nuestras oficinas en <span className="text-white font-bold">Friuli 1972</span> antes de las 13:00 hs y garantizamos entrega el mismo día.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
