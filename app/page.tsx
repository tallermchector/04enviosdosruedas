'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ParallaxSection, ParallaxElement } from '../components/ParallaxSection';
import { 
  ShieldCheck, 
  Zap, 
  Map, 
  Clock, 
  ChevronRight, 
  TrendingUp, 
  Users, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 15 } }
  } as const;

  const socialPosts = [
    {
      id: 1,
      platform: 'Instagram',
      title: '¡Operativo en Mar del Plata!',
      desc: 'Nuestra flota agilizando las entregas de e-commerce en toda la ciudad. MDQ no para.',
      likes: '243',
      date: 'Hace 2 días',
      link: 'https://instagram.com/enviosdosruedas'
    },
    {
      id: 2,
      platform: 'Facebook',
      title: 'Soluciones Express para PyMEs',
      desc: '¿Necesitás entregar en menos de 2 horas? Nuestro servicio Express es la solución definitiva.',
      likes: '158',
      date: 'Hace 5 días',
      link: 'https://facebook.com/enviosdosruedas'
    },
    {
      id: 3,
      platform: 'Instagram',
      title: 'Envíos Flex MercadoLibre 🚀',
      desc: 'Termómetro siempre en verde para nuestros vendedores asociados. Cumplimos los SLAs al 100%.',
      likes: '312',
      date: 'Hace 1 semana',
      link: 'https://instagram.com/enviosdosruedas'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Dynamic Background Grid Pattern with smooth parallax effect */}
      <ParallaxElement speed={-0.05} className="absolute inset-0 select-none pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />
      </ParallaxElement>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Status indicators */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 items-center">
              <span className="bg-egyptian-blue/5 text-egyptian-blue px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 border border-egyptian-blue/10">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                MDQ HUB: ACTIVO
              </span>
              <span className="bg-sunbeam-yellow/10 text-brand-blue-dark px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-sunbeam-yellow/30">
                ⚡ TEMPORADA 2026
              </span>
            </motion.div>

            {/* Main Hero Headline */}
            <motion.h1 variants={itemVariants} className="font-anton text-5xl sm:text-6xl xl:text-7xl text-brand-dark tracking-tight leading-none uppercase">
              Mensajería y Logística <br />
              <span className="text-egyptian-blue relative inline-block">
                E-Commerce
                <span className="absolute -bottom-2 left-0 right-0 h-2 bg-sunbeam-yellow -z-10 transform -rotate-1"></span>
              </span> <br className="hidden sm:inline" />
              en Mar del Plata
            </motion.h1>

            {/* Hero Subheadline */}
            <motion.p variants={itemVariants} className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-sans">
              Somos tu solución confiable en servicios de mensajería y delivery de última milla. Ofrecemos soluciones rápidas, seguras y altamente económicas para todas tus necesidades de envío urbano.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
              <Link
                href="/cotizar/express"
                className="px-8 py-4 bg-egyptian-blue text-white rounded-xl font-bebas text-xl tracking-widest hover:bg-brand-blue-light transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center gap-2"
              >
                Solicitar Servicio <ArrowRight className="w-5 h-5 text-sunbeam-yellow" />
              </Link>
              <Link
                href="#servicios-grid"
                className="px-8 py-4 bg-slate-100 text-slate-800 rounded-xl font-bebas text-xl tracking-widest hover:bg-slate-200 transition-all border border-slate-200/50 flex items-center gap-2"
              >
                Ver Servicios
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 mt-4 max-w-lg">
              <div className="flex flex-col">
                <span className="font-anton text-3xl text-egyptian-blue leading-none">100%</span>
                <span className="font-bebas text-sm text-slate-400 tracking-wider uppercase mt-1">SEGURO</span>
              </div>
              <div className="flex flex-col">
                <span className="font-anton text-3xl text-egyptian-blue leading-none">ULTRA</span>
                <span className="font-bebas text-sm text-slate-400 tracking-wider uppercase mt-1">RÁPIDO</span>
              </div>
              <div className="flex flex-col">
                <span className="font-anton text-3xl text-egyptian-blue leading-none">TOTAL</span>
                <span className="font-bebas text-sm text-slate-400 tracking-wider uppercase mt-1">COBERTURA</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right Visual Column */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
          >
            {/* Elegant Background Card Graphic */}
            <div className="relative mx-auto max-w-[400px] aspect-square rounded-3xl bg-gradient-to-tr from-egyptian-blue to-brand-blue-light p-1 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-brand-dark/20 mix-blend-overlay"></div>
              
              {/* Glassmorphic Stats Overlay inside card */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white relative z-10">
                <div className="flex justify-between items-start">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                    <Zap className="w-8 h-8 text-sunbeam-yellow fill-sunbeam-yellow" />
                  </div>
                  <span className="bg-sunbeam-yellow text-egyptian-blue text-xs font-mono font-bold px-2.5 py-1 rounded-full">
                    ESTADO REAL: EN TRÁNSITO
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
                    <span className="text-[10px] font-mono text-sunbeam-yellow tracking-widest uppercase">Último Despacho</span>
                    <h3 className="font-bebas text-2xl tracking-wide mt-1">SLA MercadoLibre Flex</h3>
                    <p className="text-xs text-white/80 font-sans mt-0.5">En camino a destino final en Zona Sur MDQ</p>
                    <div className="w-full bg-white/20 h-1.5 rounded-full mt-3 overflow-hidden">
                      <div className="bg-sunbeam-yellow h-full rounded-full w-4/5 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs font-mono text-white/70">
                    <span>SEGUIMIENTO: ACTIVO</span>
                    <span>MDQ 100% ONLINE</span>
                  </div>
                </div>
              </div>

              {/* Backglow element */}
              <div className="absolute -inset-10 bg-sunbeam-yellow/25 rounded-full blur-3xl group-hover:bg-sunbeam-yellow/35 transition-all duration-300 -z-10"></div>
            </div>

            {/* Security Badge Float with smooth 3D scroll-parallax */}
            <ParallaxElement speed={0.15} className="absolute -bottom-6 -left-6 z-20">
              <div className="bg-white shadow-xl border border-slate-100 rounded-2xl p-4 flex items-center gap-3 max-w-[200px]">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bebas text-md tracking-wider text-slate-800 uppercase leading-none">SEGURIDAD</h4>
                  <p className="text-[10px] font-mono text-emerald-600 font-bold mt-1 uppercase">VERIFICADO</p>
                </div>
              </div>
            </ParallaxElement>
          </motion.div>

        </div>
      </section>

      {/* "¡Empezá Ahora!" CTA Section with luxurious parallax background */}
      <ParallaxSection speed={0.2} className="bg-brand-dark text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-egyptian-blue/25 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="font-bebas text-lg tracking-widest text-sunbeam-yellow uppercase">EXPLORE</span>
            <h2 className="font-anton text-4xl sm:text-5xl text-white tracking-tight uppercase leading-none">
              ¿Listo para escalar la <br />
              logística de tu E-Commerce?
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl font-sans">
              Olvidate de la gestión compleja de paquetes and enfocate únicamente en vender más. Dejá la distribución urbana de última milla en manos de los verdaderos expertos de Mar del Plata.
            </p>
            
            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-sunbeam-yellow flex items-center justify-center text-brand-dark shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-200 text-sm font-sans">Confianza local comprobada de más de 7 años.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-sunbeam-yellow flex items-center justify-center text-brand-dark shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-200 text-sm font-sans">Innovación constante en ruteo y última milla.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-sunbeam-yellow flex items-center justify-center text-brand-dark shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-200 text-sm font-sans">Motocicletas dedicadas para máxima agilidad urbana y puntualidad.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 flex flex-col gap-5 justify-center">
            <h3 className="font-bebas text-2xl tracking-wider text-white uppercase text-center pb-2 border-b border-white/10">
              ¡Inicia Hoy Mismo!
            </h3>
            
            <a
              href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web%20y%20necesito%20escalar%20mi%20log%C3%ADstica."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl font-bebas text-lg tracking-widest bg-emerald-600 hover:bg-emerald-500 text-white transition-all text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <PhoneCall className="w-4 h-4 text-sunbeam-yellow" /> Contactanos por WhatsApp
            </a>

            <Link
              href="/nosotros/sobre-nosotros"
              className="w-full py-4 rounded-xl font-bebas text-lg tracking-widest bg-white text-egyptian-blue hover:bg-slate-100 transition-all text-center flex items-center justify-center gap-1 border border-slate-200"
            >
              Ver Tarifas 2026
            </Link>

            <div className="text-center text-[10px] font-mono text-slate-400 uppercase mt-2">
              Soporte Dedicado 24/7 para Clientes Activos
            </div>
          </div>

        </div>
      </ParallaxSection>

      {/* "Potencia tu Logística con DosRuedas" Corporativos & PyME Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="font-bebas text-md tracking-widest text-egyptian-blue bg-egyptian-blue/5 px-3 py-1 rounded-full uppercase">
              Soluciones Corporativas y PyME
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl text-brand-dark tracking-tight uppercase leading-none">
              Potencia tu Logística <br />
              con DosRuedas
            </h2>
            <p className="text-slate-600 text-md leading-relaxed font-sans">
              Transformamos la última milla de tu empresa con una flota ágil y especializada de alta precisión. Beneficios exclusivos diseñados para clientes corporativos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 hover:border-egyptian-blue/30 p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-egyptian-blue/5 text-egyptian-blue flex items-center justify-center group-hover:bg-egyptian-blue group-hover:text-white transition-colors duration-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Empresas</span>
                  <h3 className="font-bebas text-2xl tracking-wider text-slate-800 uppercase">Soluciones Corporativas</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    Optimización logística para empresas con Cuenta Corriente Flexible y beneficios de escala. Facturación simplificada, Gestión multi-usuario, y Reportes de impacto en tus entregas.
                  </p>
                </div>
              </div>
              <Link 
                href="/servicios/plan-emprendedores" 
                className="mt-8 font-bebas text-lg tracking-widest text-egyptian-blue flex items-center gap-1.5 hover:text-brand-blue-light transition-colors group-hover:translate-x-1 duration-200"
              >
                CONFIGURAR PLAN <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 hover:border-egyptian-blue/30 p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-sunbeam-yellow text-egyptian-blue text-[10px] font-mono font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                Recomendado
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-egyptian-blue/5 text-egyptian-blue flex items-center justify-center group-hover:bg-egyptian-blue group-hover:text-white transition-colors duration-300">
                  <Zap className="w-6 h-6 text-sunbeam-yellow fill-sunbeam-yellow" />
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">MercadoLibre</span>
                  <h3 className="font-bebas text-2xl tracking-wider text-slate-800 uppercase">Envíos Flex MercadoLibre</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    Socio estratégico para potenciar tus ventas con entregas garantizadas en el día. Cumplimiento estricto de SLAs para mejorar y mantener tu reputación siempre en verde.
                  </p>
                </div>
              </div>
              <Link 
                href="/servicios/enviosflex" 
                className="mt-8 font-bebas text-lg tracking-widest text-egyptian-blue flex items-center gap-1.5 hover:text-brand-blue-light transition-colors group-hover:translate-x-1 duration-200"
              >
                CONFIGURAR PLAN <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 hover:border-egyptian-blue/30 p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-egyptian-blue/5 text-egyptian-blue flex items-center justify-center group-hover:bg-egyptian-blue group-hover:text-white transition-colors duration-300">
                  <Users className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">PyMEs</span>
                  <h3 className="font-bebas text-2xl tracking-wider text-slate-800 uppercase">Logística E-Commerce</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    Gestión integral de última milla para PyMEs en pleno crecimiento. Rutas optimizadas con flota especializada y seguimiento permanente en tiempo real para deleitar a tus compradores.
                  </p>
                </div>
              </div>
              <Link 
                href="/servicios/plan-emprendedores" 
                className="mt-8 font-bebas text-lg tracking-widest text-egyptian-blue flex items-center gap-1.5 hover:text-brand-blue-light transition-colors group-hover:translate-x-1 duration-200"
              >
                CONFIGURAR PLAN <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-slate-200 max-w-4xl mx-auto text-slate-400 font-mono text-xs">
            <span className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-egyptian-blue" /> 500+ Empresas Asociadas</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-egyptian-blue" /> 24/7 Operativa Especial</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-egyptian-blue" /> Corporativo de Alta Precisión</span>
          </div>
        </div>
      </section>

      {/* "Soluciones a Medida" Capabilities Grid */}
      <section id="servicios-grid" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-3xl">
            <div className="space-y-4">
              <span className="font-bebas text-md tracking-widest text-egyptian-blue bg-egyptian-blue/5 px-3 py-1 rounded-full uppercase">
                Capacidades Dinámicas
              </span>
              <h2 className="font-anton text-4xl sm:text-5xl text-brand-dark tracking-tight uppercase leading-none">
                SOLUCIONES A MEDIDA
              </h2>
              <p className="text-slate-600 text-md leading-relaxed font-sans">
                Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real en un mercado en constante evolución.
              </p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Bento Box 1: Express */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group border border-slate-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-egyptian-blue/20 to-transparent pointer-events-none"></div>
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="bg-white/10 p-3 rounded-2xl border border-white/10">
                    <Zap className="w-7 h-7 text-sunbeam-yellow fill-sunbeam-yellow" />
                  </div>
                  <span className="bg-red-500 text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    ALTA PRIORIDAD
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-anton text-3xl tracking-wide uppercase">Envíos Express</h3>
                  <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed max-w-md">
                    Prioridad absoluta y certeza total. Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación. Garantizamos precisión absoluta.
                  </p>
                </div>
              </div>
              <Link 
                href="/servicios/envios-express" 
                className="mt-12 w-fit px-6 py-3 rounded-xl bg-white text-egyptian-blue font-bebas text-md tracking-wider hover:bg-sunbeam-yellow transition-all duration-200 relative z-10"
              >
                Solicitar Express
              </Link>
            </div>

            {/* Bento Box 2: LowCost */}
            <div className="lg:col-span-6 bg-slate-50 text-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group border border-slate-200/50">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="bg-egyptian-blue/5 p-3 rounded-2xl border border-egyptian-blue/10 text-egyptian-blue">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <span className="bg-emerald-500 text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    RENTABILIDAD
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-anton text-3xl tracking-wide text-brand-dark uppercase">Envíos LowCost</h3>
                  <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed max-w-md">
                    Máxima rentabilidad y eficiencia en ruteo masivo. Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y te garantizamos la entrega en el día antes de las 19:00 hs.
                  </p>
                </div>
              </div>
              <Link 
                href="/servicios/envios-lowcost" 
                className="mt-12 w-fit px-6 py-3 rounded-xl bg-egyptian-blue text-white font-bebas text-md tracking-wider hover:bg-brand-blue-light transition-all duration-200"
              >
                Ahorrá con LowCost
              </Link>
            </div>

            {/* Bento Box 3: Flex */}
            <div className="lg:col-span-7 bg-gradient-to-br from-egyptian-blue to-brand-blue-light text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="bg-white/15 p-3 rounded-2xl border border-white/10">
                    <CheckCircle2 className="w-7 h-7 text-sunbeam-yellow fill-sunbeam-yellow" />
                  </div>
                  <span className="bg-sunbeam-yellow text-egyptian-blue text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    MERCADOLIBRE
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-anton text-3xl tracking-wide uppercase">Envíos Flex (MercadoLibre)</h3>
                  <p className="text-slate-100 text-sm sm:text-base font-sans leading-relaxed max-w-lg">
                    Somos expertos de confianza en MercadoLibre Flex. Despachá con nosotros hasta las 15:00 hs y cumplimos puntualmente con tus acuerdos de nivel de servicio Same-Day para que tu termómetro de reputación brille siempre en verde.
                  </p>
                </div>
              </div>
              <Link 
                href="/servicios/enviosflex" 
                className="mt-12 w-fit px-6 py-3 rounded-xl bg-white text-egyptian-blue font-bebas text-md tracking-wider hover:bg-sunbeam-yellow hover:text-egyptian-blue transition-all duration-200"
              >
                Activar Envíos Flex
              </Link>
            </div>

            {/* Bento Box 4: eCommerce 3PL */}
            <div className="lg:col-span-5 bg-slate-100 text-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 border border-slate-200">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="bg-egyptian-blue/5 p-3 rounded-2xl text-egyptian-blue">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <span className="bg-brand-dark text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    INTEGRAL
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-anton text-3xl tracking-wide text-brand-dark uppercase">E-Commerce & 3PL</h3>
                  <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
                    Tercerización integral y cuentas corrientes flexibles. Más que un transportista de paquetes, somos tu depósito seguro y tu equipo logístico de confianza. Facturación consolidada.
                  </p>
                </div>
              </div>
              <Link 
                href="/servicios/plan-emprendedores" 
                className="mt-12 w-fit px-6 py-3 rounded-xl bg-slate-800 text-white font-bebas text-md tracking-wider hover:bg-slate-700 transition-all duration-200"
              >
                Hablar con un asesor
              </Link>
            </div>

          </div>

          <div className="text-center">
            <span className="font-bebas text-sm text-slate-400 tracking-widest uppercase">
              MÁXIMO PODER • INFRAESTRUCTURA TOTAL • ENGINEERING LOGISTICS FOR THE MODERN ERA OF COMMERCE IN MAR DEL PLATA
            </span>
          </div>
        </div>
      </section>

      {/* "Sigue Nuestro Movimiento" Social Feeds Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="font-bebas text-md tracking-widest text-egyptian-blue bg-egyptian-blue/5 px-3 py-1 rounded-full uppercase">
              Conecta con nosotros
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl text-brand-dark tracking-tight uppercase leading-none">
              SIGUE NUESTRO MOVIMIENTO
            </h2>
            <p className="text-slate-600 text-md leading-relaxed font-sans">
              Únete a nuestra comunidad digital activa y mantente al tanto de las últimas novedades, rutas de logística urbana, y consejos para e-commerce en Mar del Plata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md hover:border-egyptian-blue/20 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                      post.platform === 'Instagram' 
                        ? 'bg-pink-100 text-pink-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {post.platform}
                    </span>
                    <span className="text-slate-400">{post.date}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="font-bebas text-xl tracking-wider text-slate-800 uppercase">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-sans leading-relaxed">
                      {post.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-xs font-mono text-slate-400">♥ {post.likes} Me gusta</span>
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bebas text-md tracking-wider text-egyptian-blue flex items-center gap-1 hover:text-brand-blue-light"
                  >
                    VER POST <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link 
              href="/nosotros/nuestras-redes" 
              className="px-8 py-3.5 bg-slate-900 text-white rounded-xl font-bebas text-xl tracking-widest hover:bg-slate-800 transition-all inline-flex items-center gap-2"
            >
              VER TODAS NUESTRAS REDES <ArrowRight className="w-4 h-4 text-sunbeam-yellow" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
