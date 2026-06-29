'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import BrandedPageLoader from './BrandedPageLoader';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Menu, 
  X, 
  ChevronDown, 
  Facebook, 
  Instagram, 
  MessageSquare, 
  Clock, 
  Shield, 
  Zap, 
  Award,
  Sparkles
} from 'lucide-react';

// Custom modern SVG Logo honoring the brand book & physical logo elements
export function BrandLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-950 border-2 border-sunbeam-yellow overflow-hidden shadow-md shrink-0">
        {/* Striped border effect like physical logo */}
        <div className="absolute inset-0 border-[3px] border-dashed border-sky-400 opacity-80 animate-spin-slow"></div>
        {/* Two wheels vector icon inside */}
        <svg viewBox="0 0 100 100" className="w-6 h-6 text-white relative z-10" fill="currentColor">
          {/* Wheel 1 */}
          <circle cx="35" cy="60" r="16" stroke="currentColor" strokeWidth="4" fill="none" />
          <circle cx="35" cy="60" r="6" fill="currentColor" />
          <line x1="35" y1="44" x2="35" y2="76" stroke="currentColor" strokeWidth="2" />
          <line x1="19" y1="60" x2="51" y2="60" stroke="currentColor" strokeWidth="2" />
          {/* Wheel 2 */}
          <circle cx="65" cy="60" r="16" stroke="currentColor" strokeWidth="4" fill="none" />
          <circle cx="65" cy="60" r="6" fill="currentColor" />
          <line x1="65" y1="44" x2="65" y2="76" stroke="currentColor" strokeWidth="2" />
          <line x1="49" y1="60" x2="81" y2="60" stroke="currentColor" strokeWidth="2" />
          {/* Connector bar */}
          <rect x="35" y="56" width="30" height="8" rx="2" fill="currentColor" />
          {/* Lightning indicator */}
          <path d="M50,15 L62,35 L50,35 L54,50 L40,30 L50,30 Z" fill="#FFEC00" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-anton text-lg tracking-wide uppercase leading-none text-white flex items-center gap-1">
          Envíos <span className="text-sunbeam-yellow">DosRuedas</span>
        </span>
        <span className="font-bebas text-[10px] tracking-widest text-white/60 uppercase leading-none mt-1">
          LOGÍSTICA URBANA • MDQ
        </span>
      </div>
    </div>
  );
}

// Interactive feedback (visual + haptic fake)
function triggerInteraction(label: string) {
  if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(10); // Subtle physical buzz on mobile devices
  }
}

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [nosotrosDropdownOpen, setNosotrosDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menus on route change
  useEffect(() => {
    setTimeout(() => {
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
      setNosotrosDropdownOpen(false);
    }, 0);
  }, [pathname]);

  // Handle scroll class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesLinks = [
    { name: 'Envíos Express', path: '/servicios/envios-express', desc: 'Prioridad y rango exacto' },
    { name: 'Envíos LowCost', path: '/servicios/envios-lowcost', desc: 'Máxima rentabilidad diaria' },
    { name: 'Envíos Flex (MeLi)', path: '/servicios/enviosflex', desc: 'Socio estratégico MercadoLibre' },
    { name: 'Plan Emprendedores', path: '/servicios/plan-emprendedores', desc: 'Tercerización & cuentas corrientes' },
  ];

  const nosotrosLinks = [
    { name: 'Sobre Nosotros', path: '/nosotros/sobre-nosotros' },
    { name: 'Preguntas Frecuentes', path: '/nosotros/preguntas-frecuentes' },
    { name: 'Nuestras Redes', path: '/nosotros/nuestras-redes' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white relative selection:bg-sunbeam-yellow selection:text-egyptian-blue">
      {/* Branded Loading Screen */}
      <BrandedPageLoader />

      {/* Top Banner Bar */}
      <div className="bg-egyptian-blue text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-sunbeam-yellow">
              <Clock className="w-3.5 h-3.5" /> 2026 LOGISTICS ON-TIME
            </span>
            <span className="opacity-75">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-sunbeam-yellow" /> Mar del Plata, Argentina
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+5492236602699" className="hover:text-sunbeam-yellow transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-sunbeam-yellow" /> +54 223 660-2699
            </a>
            <span>•</span>
            <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] uppercase font-bold text-sunbeam-yellow">
              MDQ STATUS: ONLINE
            </span>
          </div>
        </div>
      </div>

      {/* Header Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled 
          ? 'bg-slate-950/45 border-b border-white/10 py-3 shadow-xl shadow-black/20' 
          : 'bg-white/5 py-4 border-b border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            onClick={() => triggerInteraction('home')}
            className="focus:outline-none focus:ring-2 focus:ring-sunbeam-yellow rounded-lg p-1"
          >
            <BrandLogo />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link 
              href="/"
              onClick={() => triggerInteraction('inicio')}
              className={`font-bebas text-lg tracking-wider hover:text-sunbeam-yellow transition-colors px-2 py-1 relative ${
                pathname === '/' ? 'text-sunbeam-yellow' : 'text-white/80'
              }`}
            >
              Inicio
              {pathname === '/' && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-sunbeam-yellow"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Servicios Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  triggerInteraction('services-dropdown');
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  setNosotrosDropdownOpen(false);
                }}
                className={`font-bebas text-lg tracking-wider hover:text-sunbeam-yellow transition-colors px-2 py-1 flex items-center gap-1 ${
                  pathname.startsWith('/servicios') ? 'text-sunbeam-yellow' : 'text-white/80'
                }`}
              >
                Servicios <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setServicesDropdownOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-72 rounded-xl bg-slate-900/95 backdrop-blur-xl shadow-2xl border border-white/10 p-2 z-20"
                    >
                      {servicesLinks.map((link) => (
                        <Link
                          key={link.path}
                          href={link.path}
                          onClick={() => {
                            triggerInteraction(`service-${link.name}`);
                            setServicesDropdownOpen(false);
                          }}
                          className="flex flex-col p-3 rounded-lg hover:bg-white/10 transition-all duration-150 group"
                        >
                          <span className="font-bebas text-md tracking-wider text-white group-hover:text-sunbeam-yellow transition-colors">
                            {link.name}
                          </span>
                          <span className="text-xs text-white/50 mt-0.5">
                            {link.desc}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Nosotros Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  triggerInteraction('nosotros-dropdown');
                  setNosotrosDropdownOpen(!nosotrosDropdownOpen);
                  setServicesDropdownOpen(false);
                }}
                className={`font-bebas text-lg tracking-wider hover:text-sunbeam-yellow transition-colors px-2 py-1 flex items-center gap-1 ${
                  pathname.startsWith('/nosotros') ? 'text-sunbeam-yellow' : 'text-white/80'
                }`}
              >
                Nosotros <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${nosotrosDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {nosotrosDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setNosotrosDropdownOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-56 rounded-xl bg-slate-900/95 backdrop-blur-xl shadow-2xl border border-white/10 p-2 z-20"
                    >
                      {nosotrosLinks.map((link) => (
                        <Link
                          key={link.path}
                          href={link.path}
                          onClick={() => {
                            triggerInteraction(`nosotros-${link.name}`);
                            setNosotrosDropdownOpen(false);
                          }}
                          className="block p-3 rounded-lg hover:bg-white/10 font-bebas text-md tracking-wider text-white hover:text-sunbeam-yellow transition-all duration-150"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/contacto"
              onClick={() => triggerInteraction('contacto')}
              className={`font-bebas text-lg tracking-wider hover:text-sunbeam-yellow transition-colors px-2 py-1 relative ${
                pathname === '/contacto' ? 'text-sunbeam-yellow' : 'text-white/80'
              }`}
            >
              Contacto
              {pathname === '/contacto' && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-sunbeam-yellow"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </nav>

          {/* Call to Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/cotizar/express"
              onClick={() => triggerInteraction('btn-cotizar')}
              className="px-5 py-2 rounded-full font-bebas text-md tracking-widest text-white border-2 border-white/20 bg-white/5 hover:bg-white/20 transition-all duration-300 hover:shadow-md hover:scale-[1.02] uppercase shimmer-btn"
            >
              COTIZAR EXPRESS
            </Link>
            <Link
              href="/cotizar/lowcost"
              onClick={() => triggerInteraction('btn-lowcost')}
              className="px-5 py-2 rounded-full font-bebas text-md tracking-widest bg-sunbeam-yellow text-egyptian-blue hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20 flex items-center gap-1.5 font-bold uppercase shimmer-btn"
            >
              <Zap className="w-4 h-4 text-egyptian-blue fill-egyptian-blue" /> COTIZAR LOWCOST
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              triggerInteraction('mobile-menu');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 hover:text-sunbeam-yellow focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-slate-950/95 backdrop-blur-xl border-l border-white/10 z-50 p-6 flex flex-col justify-between lg:hidden shadow-2xl text-white"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <BrandLogo />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-white/70 hover:bg-white/10"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="py-6 flex flex-col gap-4">
                  <Link
                    href="/"
                    onClick={() => {
                      triggerInteraction('mob-inicio');
                      setMobileMenuOpen(false);
                    }}
                    className={`font-bebas text-xl tracking-wider py-1.5 block ${pathname === '/' ? 'text-sunbeam-yellow font-bold border-l-4 border-sunbeam-yellow pl-2' : 'text-white/80 hover:text-sunbeam-yellow'}`}
                  >
                    Inicio
                  </Link>

                  {/* Servicios group mobile */}
                  <div>
                    <span className="font-bebas text-sm tracking-widest text-white/40 block mb-2">
                      NUESTROS SERVICIOS
                    </span>
                    <div className="flex flex-col gap-3 pl-2">
                      {servicesLinks.map((link) => (
                        <Link
                          key={link.path}
                          href={link.path}
                          onClick={() => {
                            triggerInteraction(`mob-service-${link.name}`);
                            setMobileMenuOpen(false);
                          }}
                          className={`font-bebas text-lg tracking-wider block ${pathname === link.path ? 'text-sunbeam-yellow' : 'text-white/70 hover:text-sunbeam-yellow'}`}
                        >
                          • {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Nosotros group mobile */}
                  <div className="mt-2">
                    <span className="font-bebas text-sm tracking-widest text-white/40 block mb-2">
                      SOBRE NOSOTROS
                    </span>
                    <div className="flex flex-col gap-3 pl-2">
                      {nosotrosLinks.map((link) => (
                        <Link
                          key={link.path}
                          href={link.path}
                          onClick={() => {
                            triggerInteraction(`mob-nosotros-${link.name}`);
                            setMobileMenuOpen(false);
                          }}
                          className={`font-bebas text-lg tracking-wider block ${pathname === link.path ? 'text-sunbeam-yellow' : 'text-white/70 hover:text-sunbeam-yellow'}`}
                        >
                          • {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contacto"
                    onClick={() => {
                      triggerInteraction('mob-contacto');
                      setMobileMenuOpen(false);
                    }}
                    className={`font-bebas text-xl tracking-wider py-1.5 block ${pathname === '/contacto' ? 'text-sunbeam-yellow font-bold border-l-4 border-sunbeam-yellow pl-2' : 'text-white/80 hover:text-sunbeam-yellow'}`}
                  >
                    Contacto
                  </Link>
                </div>
              </div>

              {/* Action Buttons in drawer */}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
                <Link
                  href="/cotizar/express"
                  onClick={() => {
                    triggerInteraction('mob-cot-express');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-center py-3 rounded-full font-bebas text-lg tracking-widest text-white border-2 border-white/20 bg-white/5 hover:bg-white/10 shimmer-btn"
                >
                  COTIZAR EXPRESS
                </Link>
                <Link
                  href="/cotizar/lowcost"
                  onClick={() => {
                    triggerInteraction('mob-cot-lowcost');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-center py-3 rounded-full font-bebas text-lg tracking-widest bg-sunbeam-yellow text-egyptian-blue flex items-center justify-center gap-2 font-bold shimmer-btn"
                >
                  <Zap className="w-4 h-4 text-egyptian-blue fill-egyptian-blue" /> COTIZAR LOWCOST
                </Link>
                <a
                  href="tel:+5492236602699"
                  className="flex items-center justify-center gap-2 text-white/50 font-mono text-xs text-center mt-2"
                >
                  <Phone className="w-3.5 h-3.5 text-sunbeam-yellow" /> Llámanos: +54 223 660-2699
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Wrapper with Page Animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Brand Footer */}
      <footer className="bg-slate-950/45 backdrop-blur-md text-white pt-16 pb-8 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand details */}
            <div className="flex flex-col gap-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-2.5 rounded-xl w-fit">
                <BrandLogo />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Tu solución confiable de mensajería y delivery en Mar del Plata. Conectamos negocios y clientes con entregas de alta precisión e inteligencia logística urbana.
              </p>
              <div className="flex items-center gap-3">
                <a 
                  href="https://facebook.com/enviosdosruedas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => triggerInteraction('fb-social')}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-egyptian-blue hover:text-white transition-colors flex items-center justify-center text-slate-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com/enviosdosruedas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => triggerInteraction('ig-social')}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-pink-600 hover:text-white transition-colors flex items-center justify-center text-slate-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://wa.me/542236602699" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => triggerInteraction('wa-social')}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center text-slate-300"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-bebas text-xl tracking-wider text-sunbeam-yellow mb-6">
                NOSOTROS
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-400">
                {nosotrosLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      href={link.path}
                      onClick={() => triggerInteraction(`foot-${link.name}`)}
                      className="hover:text-white hover:underline transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    href="/contacto" 
                    onClick={() => triggerInteraction('foot-contacto')}
                    className="hover:text-white hover:underline transition-all"
                  >
                    Contacto Directo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="font-bebas text-xl tracking-wider text-sunbeam-yellow mb-6">
                SERVICIOS
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-400">
                {servicesLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      href={link.path}
                      onClick={() => triggerInteraction(`foot-srv-${link.name}`)}
                      className="hover:text-white hover:underline transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className="flex flex-col gap-4 text-sm text-slate-400">
              <h3 className="font-bebas text-xl tracking-wider text-sunbeam-yellow mb-4">
                CONTACTO RÁPIDO
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-egyptian-blue shrink-0 mt-0.5" />
                <span>Friuli 1972, Mar del Plata, Argentina</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-egyptian-blue shrink-0" />
                <a href="tel:+542236602699" className="hover:text-white transition-colors">
                  +54 223 660-2699
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-egyptian-blue shrink-0" />
                <a href="mailto:matiascejas@enviosdosruedas.com" className="hover:text-white transition-colors break-all">
                  matiascejas@enviosdosruedas.com
                </a>
              </div>
              <div className="mt-2 bg-slate-900 border border-slate-800 p-3 rounded-lg flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-mono text-emerald-400">MDQ LOGISTICS HUB CONNECTED</span>
              </div>
            </div>

          </div>

          {/* Footer Badge / Subfooter */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
            <div>
              &copy; 2026 Envíos DosRuedas. Todos los derechos reservados. Mar del Plata, Argentina.
            </div>
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-egyptian-blue" /> SEGURIDAD CERTIFICADA</span>
              <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-sunbeam-yellow" /> VELOCIDAD MÁXIMA</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Modern Interactive WhatsApp Link */}
      <motion.a
        href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web%20y%20necesito%20realizar%20un%20env%C3%ADo."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => triggerInteraction('whatsapp-float')}
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="absolute right-full mr-3 bg-white text-slate-800 text-xs font-bold font-mono px-3 py-1.5 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-slate-100">
          ¿Hablamos por WhatsApp? 💬
        </span>
        {/* Animated radar rings around WhatsApp logo */}
        <span className="absolute inset-0 rounded-full bg-emerald-600 opacity-30 animate-ping"></span>
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.62.963 3.41 1.47 5.259 1.471 5.53 0 10.029-4.5 10.032-10.03.001-2.678-1.04-5.195-2.933-7.091C17.051 1.609 14.536.565 11.854.565c-5.539 0-10.039 4.5-10.043 10.03-.001 1.846.48 3.65 1.391 5.244l-.974 3.556 3.638-.954zm12.115-7.53c-.333-.166-1.971-.973-2.278-1.084-.306-.113-.53-.166-.752.166-.222.333-.861 1.084-1.055 1.305-.194.222-.389.25-.722.083-.333-.166-1.405-.518-2.675-1.653-1.002-.894-1.678-2.001-1.875-2.333-.197-.333-.021-.513.145-.679.15-.15.333-.389.5-.583.167-.194.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.752-1.812-1.03-2.48-.27-.65-.542-.56-.752-.57-.193-.01-.417-.01-.639-.01s-.583.083-.889.417c-.306.333-1.166 1.139-1.166 2.778 0 1.639 1.194 3.222 1.361 3.444.167.222 2.35 3.589 5.694 5.039.796.345 1.417.55 1.903.706.8.254 1.528.218 2.103.132.64-.096 1.971-.806 2.25-1.583.278-.778.278-1.444.194-1.583-.083-.139-.306-.222-.639-.389z" />
        </svg>
      </motion.a>
    </div>
  );
}
