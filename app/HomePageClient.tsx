'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ParallaxSection, ParallaxElement } from '../components/ParallaxSection';
import { 
  ShieldCheck, 
  Zap, 
  Clock, 
  ChevronRight, 
  ChevronLeft,
  TrendingUp, 
  Users, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  PhoneCall,
  Instagram,
  Facebook,
  MessageSquare
} from 'lucide-react';

export default function HomePageClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 15 } }
  } as const;

  // SliderServicios interactive state
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderData = [
    {
      id: 1,
      tag: "Express",
      title: "ENTREGAS ULTRA VELOCES",
      desc: "Ideal para urgencias y bultos prioritarios. Un cadete exclusivo recoge y entrega en menos de 120 minutos en la cuadrícula urbana.",
      color: "from-red-500/10 to-egyptian-blue/5",
      borderColor: "group-hover:border-red-500/30",
      accent: "text-red-500",
      icon: <Zap className="w-6 h-6 text-red-500 fill-red-500" />
    },
    {
      id: 2,
      tag: "LowCost",
      title: "RUTAS INTEGRADAS",
      desc: "La máxima economía. Consolidamos paquetes en rutas inteligentes distribuidas por barrios para reducir costos a niveles inmejorables.",
      color: "from-sunbeam-yellow/15 to-emerald-500/5",
      borderColor: "group-hover:border-sunbeam-yellow/40",
      accent: "text-sunbeam-yellow",
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />
    },
    {
      id: 3,
      tag: "Flex",
      title: "INTEGRACIÓN CON MERCADOLIBRE",
      desc: "Cumplimiento garantizado de tus envíos rápidos en el día. Olvidate de reclamos de reputación, resolvemos tus despachos a tiempo.",
      color: "from-egyptian-blue/10 to-brand-blue-light/5",
      borderColor: "group-hover:border-egyptian-blue/30",
      accent: "text-egyptian-blue",
      icon: <CheckCircle2 className="w-6 h-6 text-egyptian-blue" />
    },
    {
      id: 4,
      tag: "3PL & Depósito",
      title: "LOGÍSTICA INTEGRAL",
      desc: "Guardamos, empaquetamos y despachamos toda tu mercadería directamente desde nuestra planta operativa central de Friuli 1972.",
      color: "from-slate-950/10 to-slate-900/5",
      borderColor: "group-hover:border-slate-800/30",
      accent: "text-slate-800",
      icon: <Building2 className="w-6 h-6 text-slate-800" />
    }
  ];

  const nextSlide = () => {
    setSliderIndex((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setSliderIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  const socialPosts = [
    {
      id: 1,
      platform: 'Instagram',
      title: 'Instagram',
      badge: 'Novedades diarias',
      desc: 'Nuestra flota en movimiento agilizando las entregas de e-commerce en Mar del Plata. Seguí el día a día operativo.',
      likes: '342',
      link: 'https://instagram.com/enviosdosruedas',
      icon: <Instagram className="w-5 h-5" />
    },
    {
      id: 2,
      platform: 'Facebook',
      title: 'Facebook',
      badge: 'Comunidad activa',
      desc: 'Sumate a nuestra red de comercios adheridos. Compartimos consejos para potenciar tu e-commerce local.',
      likes: '198',
      link: 'https://facebook.com/enviosdosruedas',
      icon: <Facebook className="w-5 h-5" />
    },
    {
      id: 3,
      platform: 'WhatsApp',
      title: 'WhatsApp',
      badge: 'Atención inmediata',
      desc: 'Coordiná tus despachos de manera instantánea con nuestro equipo de soporte disponible para resolver tus dudas.',
      likes: '2.4k',
      link: 'https://wa.me/5492236602699',
      icon: <MessageSquare className="w-5 h-5" />
    }
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Dynamic Background Grid Pattern with smooth parallax */}
      <ParallaxElement speed={-0.05} className="absolute inset-0 select-none pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />
      </ParallaxElement>

      {/* HeroAnimado Section */}
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
              <span className="bg-egyptian-blue text-white px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-sunbeam-yellow animate-pulse"></span>
                Tu Solución Confiable
              </span>
              <span className="bg-sunbeam-yellow/15 text-brand-blue-dark px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-sunbeam-yellow/30">
                ⚡ TEMPORADA 2026
              </span>
            </motion.div>

            {/* Main Hero Headline */}
            <motion.h1 variants={itemVariants} className="font-anton text-5xl sm:text-6xl xl:text-7.5xl text-brand-dark tracking-tight leading-none uppercase">
              Mensajería y Logística <br />
              <span className="text-egyptian-blue relative inline-block">
                E-Commerce
                <span className="absolute -bottom-2 left-0 right-0 h-2 bg-sunbeam-yellow -z-10 transform -rotate-1"></span>
              </span> <br />
              en Mar del Plata
            </motion.h1>

            {/* Hero Subheadline / Body */}
            <motion.p variants={itemVariants} className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-sans">
              Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
              <Link
                href="/cotizar/express"
                className="px-8 py-4 bg-egyptian-blue text-white rounded-xl font-bebas text-xl tracking-widest hover:bg-brand-blue-light transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center gap-2 uppercase shimmer-btn"
              >
                Solicitar Servicio <ArrowRight className="w-5 h-5 text-sunbeam-yellow" />
              </Link>
              <Link
                href="#servicios-overview"
                className="px-8 py-4 bg-slate-100 text-slate-800 rounded-xl font-bebas text-xl tracking-widest hover:bg-slate-200 transition-all border border-slate-200/50 flex items-center gap-2 uppercase"
              >
                Ver Servicios
              </Link>
            </motion.div>

            {/* Features Indicators */}
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
            {/* Elegant Background Card Graphic with Glassmorphism overlay */}
            <div className="relative mx-auto max-w-[400px] aspect-square rounded-3xl bg-gradient-to-tr from-egyptian-blue to-brand-blue-dark p-1 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-brand-dark/20 mix-blend-overlay"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white relative z-10">
                <div className="flex justify-between items-start">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                    <Zap className="w-8 h-8 text-sunbeam-yellow fill-sunbeam-yellow" />
                  </div>
                  <span className="bg-sunbeam-yellow text-egyptian-blue text-xs font-mono font-bold px-2.5 py-1 rounded-full shadow-md">
                    MDQ HUB: ACTIVO
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
                    <span className="text-[10px] font-mono text-sunbeam-yellow tracking-widest uppercase">Último Despacho</span>
                    <h3 className="font-bebas text-2xl tracking-wide mt-1">SLA MercadoLibre Flex</h3>
                    <p className="text-xs text-white/80 font-sans mt-0.5">En camino a destino final en Mar del Plata</p>
                    <div className="w-full bg-white/20 h-1.5 rounded-full mt-3 overflow-hidden">
                      <div className="bg-sunbeam-yellow h-full rounded-full w-4/5 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs font-mono text-white/70">
                    <span>SEGUIMIENTO: ACTIVO</span>
                    <span>100% ONLINE</span>
                  </div>
                </div>
              </div>

              {/* Decorative backglow */}
              <div className="absolute -inset-10 bg-sunbeam-yellow/20 rounded-full blur-3xl group-hover:bg-sunbeam-yellow/30 transition-all duration-300 -z-10"></div>
            </div>

            {/* Security Badge Float with subtle parallax */}
            <ParallaxElement speed={0.12} className="absolute -bottom-6 -left-6 z-20">
              <div className="bg-white shadow-xl border border-slate-100 rounded-2xl p-4 flex items-center gap-3 max-w-[200px]">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
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

      {/* VisionSection */}
      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        {/* Subtle decorative blob */}
        <div className="absolute -left-20 top-20 w-80 h-80 bg-egyptian-blue/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Vision Left Column (Text & Features) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-bebas text-md tracking-widest text-brand-blue-dark bg-sunbeam-yellow px-4 py-1 rounded-full uppercase inline-block shadow-sm">
                Partner Logístico Especializado
              </span>
              <h2 className="font-anton text-4xl sm:text-5xl text-brand-dark tracking-tight uppercase leading-none">
                Nuestra Visión Logística
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-sans max-w-2xl">
                Transformamos tus costos fijos en soluciones flexibles que acompañan el crecimiento de tu negocio.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2 hover:border-egyptian-blue/20 transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-egyptian-blue/5 text-egyptian-blue flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <h3 className="font-bebas text-xl tracking-wider text-brand-dark uppercase">Entregas a Tiempo</h3>
                  <p className="text-sm text-slate-500 font-sans">
                    Puntualidad garantizada en cada envío.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2 hover:border-egyptian-blue/20 transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-egyptian-blue/5 text-egyptian-blue flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <h3 className="font-bebas text-xl tracking-wider text-brand-dark uppercase">Envíos Seguros</h3>
                  <p className="text-sm text-slate-500 font-sans">
                    Protección total de tus paquetes.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Right Column (Stats Indicators) */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-egyptian-blue/5 rounded-xl flex items-center justify-center font-anton text-2xl text-egyptian-blue">
                  +5k
                </div>
                <div>
                  <h4 className="font-bebas text-xl text-brand-dark uppercase tracking-wider leading-none">Confianza local comprobada</h4>
                  <p className="text-xs text-slate-400 font-mono uppercase mt-1">Socio de comercios marplatenses</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-egyptian-blue/5 rounded-xl flex items-center justify-center font-anton text-2xl text-egyptian-blue">
                  7A
                </div>
                <div>
                  <h4 className="font-bebas text-xl text-brand-dark uppercase tracking-wider leading-none">Innovación constante en última milla</h4>
                  <p className="text-xs text-slate-400 font-mono uppercase mt-1">Liderando la logística en MDP</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-egyptian-blue/5 rounded-xl flex items-center justify-center font-anton text-2xl text-egyptian-blue">
                  Flota
                </div>
                <div>
                  <h4 className="font-bebas text-xl text-brand-dark uppercase tracking-wider leading-none">Flota Exclusiva</h4>
                  <p className="text-xs text-slate-400 font-sans mt-0.5">Motocicletas dedicadas para máxima agilidad urbana</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ServicesOverview Section */}
      <section id="servicios-overview" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="font-bebas text-md tracking-widest text-white bg-egyptian-blue px-4 py-1.5 rounded-full uppercase shadow-md inline-block">
              Nuestras Alternativas
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl text-brand-dark tracking-tight uppercase leading-none">
              Soluciones Logísticas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Express Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 relative overflow-hidden border border-slate-800 shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-egyptian-blue/25 to-transparent pointer-events-none"></div>
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="bg-white/10 p-3.5 rounded-2xl border border-white/10">
                    <Zap className="w-7 h-7 text-sunbeam-yellow fill-sunbeam-yellow" />
                  </div>
                  <span className="bg-red-500 text-white text-[10px] font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    ALTA PRIORIDAD
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-anton text-3xl tracking-wide uppercase text-sunbeam-yellow">Envíos Express</h3>
                  <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
                    Prioridad absoluta y certeza total. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación. Despachamos un cadete dedicado exclusivamente a tu bulto de forma inmediata.
                  </p>
                </div>
              </div>
              <Link 
                href="/servicios/envios-express" 
                className="mt-12 w-fit px-6 py-3 rounded-xl bg-white text-egyptian-blue font-bebas text-lg tracking-wider hover:bg-sunbeam-yellow hover:text-egyptian-blue transition-all duration-200 relative z-10 uppercase"
              >
                Solicitar Express ⚡
              </Link>
            </div>

            {/* LowCost Card */}
            <div className="bg-slate-50 text-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 relative overflow-hidden border border-slate-200 shadow-md group">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="bg-egyptian-blue/5 p-3.5 rounded-2xl border border-egyptian-blue/10 text-egyptian-blue">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <span className="bg-emerald-500 text-white text-[10px] font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    ECONÓMICO
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-anton text-3xl tracking-wide text-egyptian-blue uppercase">Envíos LowCost</h3>
                  <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
                    Rentabilidad y ruteo masivo. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el día. Al agrupar paquetes en un mismo distrito logramos abaratar fuertemente los costos.
                  </p>
                </div>
              </div>
              <Link 
                href="/servicios/envios-lowcost" 
                className="mt-12 w-fit px-6 py-3 rounded-xl bg-egyptian-blue text-white font-bebas text-lg tracking-wider hover:bg-brand-blue-light transition-all duration-200 uppercase"
              >
                Ahorrar con LowCost 🏷️
              </Link>
            </div>

            {/* Flex Card */}
            <div className="bg-gradient-to-br from-egyptian-blue to-brand-blue-dark text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 relative overflow-hidden shadow-xl group">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="bg-white/10 p-3.5 rounded-2xl border border-white/10">
                    <CheckCircle2 className="w-7 h-7 text-sunbeam-yellow fill-sunbeam-yellow" />
                  </div>
                  <span className="bg-sunbeam-yellow text-egyptian-blue text-[10px] font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    RECOMENDADO FLEX
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-anton text-3xl tracking-wide uppercase text-sunbeam-yellow">Envíos Flex (MercadoLibre)</h3>
                  <p className="text-slate-100 text-sm sm:text-base font-sans leading-relaxed">
                    Potenciá tu reputación al máximo. Somos expertos en MercadoLibre. Cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day para que tu termómetro de reputación brille siempre en verde brillante.
                  </p>
                </div>
              </div>
              <Link 
                href="/servicios/enviosflex" 
                className="mt-12 w-fit px-6 py-3 rounded-xl bg-white text-egyptian-blue font-bebas text-lg tracking-wider hover:bg-sunbeam-yellow hover:text-egyptian-blue transition-all duration-200 uppercase"
              >
                Configurar Flex 🚀
              </Link>
            </div>

            {/* eCommerce & 3PL Card */}
            <div className="bg-slate-100 text-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 border border-slate-200 shadow-md group">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="bg-egyptian-blue/5 p-3.5 rounded-2xl text-egyptian-blue">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <span className="bg-slate-800 text-white text-[10px] font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    SOPORTE 3PL
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-anton text-3xl tracking-wide text-brand-dark uppercase">E-Commerce & 3PL</h3>
                  <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
                    Tercerización y cuentas corrientes. Soluciones escalables para PyMEs con facturación mensual centralizada. Almacenamos, preparamos y distribuimos tus productos de e-commerce en toda la ciudad.
                  </p>
                </div>
              </div>
              <Link 
                href="/servicios/plan-emprendedores" 
                className="mt-12 w-fit px-6 py-3 rounded-xl bg-slate-800 text-white font-bebas text-lg tracking-wider hover:bg-slate-700 transition-all duration-200 uppercase"
              >
                Consultar Plan 📦
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CtaSection */}
      <ParallaxSection speed={0.15} className="bg-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-egyptian-blue/20 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <span className="font-bebas text-sm tracking-widest text-sunbeam-yellow uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            Alianza Logística
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none">
            ¿Listo para escalar la logística <br /> de tu E-Commerce?
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-sans">
            Olvidate de la gestión de paquetes y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas!%20Estoy%20listo%20para%20escalar%20mi%20e-commerce."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bebas text-xl tracking-widest hover:bg-emerald-500 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 uppercase shimmer-btn"
            >
              <PhoneCall className="w-5 h-5 text-sunbeam-yellow" /> Contactanos por WhatsApp
            </a>
            <Link
              href="/servicios/plan-emprendedores"
              className="px-8 py-4 bg-white text-egyptian-blue rounded-xl font-bebas text-xl tracking-widest hover:bg-slate-100 transition-all border border-slate-200 flex items-center justify-center gap-2 uppercase"
            >
              Ver Tarifas 2026
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* EmprendedoresHome Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="font-bebas text-md tracking-widest text-egyptian-blue bg-egyptian-blue/5 px-3 py-1.5 rounded-full uppercase font-bold">
              PLAN EMPRENDEDORES & PYMES
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl text-brand-dark tracking-tight uppercase leading-none">
              Potencia tu Logística con DosRuedas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-egyptian-blue/5 text-egyptian-blue flex items-center justify-center group-hover:bg-egyptian-blue group-hover:text-white transition-colors duration-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Cuentas Corrientes</span>
                  <h3 className="font-bebas text-2xl tracking-wider text-slate-800 uppercase">Soluciones Corporativas</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    Optimización logística para empresas con Cuenta Corriente Flexible y beneficios de escala. Facturación centralizada mensual para simplificar tu contabilidad administrativa.
                  </p>
                </div>
              </div>
              <Link 
                href="/servicios/plan-emprendedores" 
                className="mt-8 font-bebas text-lg tracking-widest text-egyptian-blue flex items-center gap-1.5 hover:text-brand-blue-light transition-colors group-hover:translate-x-1 duration-200 uppercase"
              >
                Configurar Corporativo <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Solution 2 */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group">
              <span className="absolute top-0 right-0 bg-sunbeam-yellow text-egyptian-blue text-[10px] font-mono font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                Recomendado
              </span>
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-egyptian-blue/5 text-egyptian-blue flex items-center justify-center group-hover:bg-egyptian-blue group-hover:text-white transition-colors duration-300">
                  <Zap className="w-6 h-6 text-sunbeam-yellow fill-sunbeam-yellow" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">MercadoLibre Flex</span>
                  <h3 className="font-bebas text-2xl tracking-wider text-slate-800 uppercase">Envíos Flex MercadoLibre</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    Socio estratégico para potenciar tus ventas con entregas en el día. Despachos rápidos y confirmación instantánea en la app para deleitar al cliente final.
                  </p>
                </div>
              </div>
              <Link 
                href="/servicios/enviosflex" 
                className="mt-8 font-bebas text-lg tracking-widest text-egyptian-blue flex items-center gap-1.5 hover:text-brand-blue-light transition-colors group-hover:translate-x-1 duration-200 uppercase"
              >
                Activar Flex <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Solution 3 */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-egyptian-blue/5 text-egyptian-blue flex items-center justify-center group-hover:bg-egyptian-blue group-hover:text-white transition-colors duration-300">
                  <Users className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">E-commerce Log</span>
                  <h3 className="font-bebas text-2xl tracking-wider text-slate-800 uppercase">Logística E-Commerce</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    Gestión integral de última milla para PyMEs en crecimiento. Optimizamos tus despachos, reduciendo tiempos de espera de manera profesional y robusta.
                  </p>
                </div>
              </div>
              <Link 
                href="/servicios/plan-emprendedores" 
                className="mt-8 font-bebas text-lg tracking-widest text-egyptian-blue flex items-center gap-1.5 hover:text-brand-blue-light transition-colors group-hover:translate-x-1 duration-200 uppercase"
              >
                Empezar E-Commerce <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SliderServicios Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
            <div className="space-y-4">
              <span className="font-bebas text-md tracking-widest text-egyptian-blue bg-egyptian-blue/5 px-3 py-1 rounded-full uppercase">
                Capacidades Corporativas
              </span>
              <h2 className="font-anton text-4xl sm:text-5xl text-brand-dark tracking-tight uppercase leading-none">
                SOLUCIONES A MEDIDA
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-sans">
                Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real en un mercado en constante evolución.
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex gap-2">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-700"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-700"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Card Slider */}
          <div className="relative min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={sliderIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-100 p-8 sm:p-12 rounded-3xl"
              >
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="bg-egyptian-blue text-white font-mono text-xs px-3 py-1 rounded-full uppercase font-bold tracking-wider">
                      {sliderData[sliderIndex].tag}
                    </span>
                    <span className="text-xs font-mono text-slate-400">PASO {sliderIndex + 1} DE {sliderData.length}</span>
                  </div>
                  <h3 className="font-anton text-3xl sm:text-4xl text-brand-dark uppercase tracking-wide">
                    {sliderData[sliderIndex].title}
                  </h3>
                  <p className="text-slate-600 text-md sm:text-lg leading-relaxed font-sans">
                    {sliderData[sliderIndex].desc}
                  </p>
                  
                  <div className="flex gap-4 pt-2">
                    <Link
                      href="/contacto"
                      className="px-6 py-3 bg-egyptian-blue text-white rounded-xl font-bebas text-md tracking-widest hover:bg-brand-blue-light transition-all shadow-md uppercase"
                    >
                      Consultar Ahora
                    </Link>
                    <button
                      onClick={nextSlide}
                      className="px-6 py-3 bg-white text-slate-700 rounded-xl font-bebas text-md tracking-widest hover:bg-slate-100 transition-all border border-slate-200 uppercase"
                    >
                      Siguiente Solución
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white shadow-xl flex items-center justify-center border border-slate-100 relative">
                    <div className="absolute inset-2 rounded-full bg-egyptian-blue/5 animate-pulse"></div>
                    <div className="relative z-10 scale-[1.3]">
                      {sliderData[sliderIndex].icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* CarruselRedes Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="font-bebas text-md tracking-widest text-egyptian-blue bg-egyptian-blue/5 px-4 py-1.5 rounded-full uppercase inline-block">
              Redes Sociales
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl text-brand-dark tracking-tight uppercase leading-none">
              SIGUE NUESTRO MOVIMIENTO
            </h2>
            <p className="text-slate-600 text-md leading-relaxed font-sans">
              Únete a nuestra comunidad digital y mantente al día con las últimas noticias de logística en Mar del Plata.
            </p>
          </div>

          {/* Social posts carousel represented as elegant responsive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 flex flex-col justify-between hover:shadow-xl hover:border-egyptian-blue/20 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="flex items-center gap-2 text-egyptian-blue font-bold uppercase">
                      {post.icon} {post.platform}
                    </span>
                    <span className="bg-sunbeam-yellow/20 text-brand-blue-dark font-bold px-2.5 py-0.5 rounded-full uppercase text-[10px]">
                      {post.badge}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
                    {post.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs font-mono text-slate-400">Impacto local comprobado</span>
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bebas text-lg tracking-widest text-egyptian-blue flex items-center gap-1.5 hover:text-brand-blue-light transition-all group-hover:translate-x-1 duration-200 uppercase"
                  >
                    Seguir Canal <ChevronRight className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
