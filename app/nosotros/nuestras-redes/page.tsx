'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Instagram, 
  Facebook, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function NuestrasRedesPage() {
  const networks = [
    {
      name: 'Instagram Oficial',
      handle: '@enviosdosruedas',
      desc: 'Novedades diarias, novedades operativas y de última milla.',
      icon: <Instagram className="w-6 h-6 text-pink-500" />,
      color: 'hover:border-pink-500/30 hover:bg-pink-500/[0.02]',
      link: 'https://instagram.com/enviosdosruedas'
    },
    {
      name: 'Facebook Oficial',
      handle: '/enviosdosruedas',
      desc: 'Comunidad activa, sorteos, novedades del sector PyME local.',
      icon: <Facebook className="w-6 h-6 text-blue-600" />,
      color: 'hover:border-blue-600/30 hover:bg-blue-600/[0.02]',
      link: 'https://facebook.com/enviosdosruedas'
    },
    {
      name: 'WhatsApp Soporte',
      handle: '+54 223 660-2699',
      desc: 'Canal directo para coordinar envíos de forma inmediata.',
      icon: <MessageSquare className="w-6 h-6 text-emerald-500" />,
      color: 'hover:border-emerald-500/30 hover:bg-emerald-500/[0.02]',
      link: 'https://wa.me/5492236602699'
    },
    {
      name: 'Llamada Telefónica',
      handle: '223 660 2699',
      desc: 'Central telefónica de lunes a viernes de 08:30 a 19:30 hs.',
      icon: <Phone className="w-6 h-6 text-egyptian-blue" />,
      color: 'hover:border-egyptian-blue/30 hover:bg-egyptian-blue/[0.02]',
      link: 'tel:+542236602699'
    }
  ];

  return (
    <div className="relative bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-egyptian-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-3xl mx-auto relative z-10 space-y-16">
        
        {/* Title */}
        <div className="space-y-4 text-center">
          <span className="font-bebas text-sm tracking-widest text-egyptian-blue bg-egyptian-blue/5 px-3.5 py-1 rounded-full uppercase inline-flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-4 h-4 text-egyptian-blue" /> COMUNIDAD EN REDES
          </span>
          <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-brand-dark uppercase tracking-tight leading-none">
            NUESTRAS REDES SOCIALES
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed font-sans max-w-xl mx-auto">
            Seguí de cerca nuestro movimiento diario. Conectate con nosotros y forma parte de la red de logística urbana más ágil de Mar del Plata.
          </p>
        </div>

        {/* Links Grid */}
        <div className="space-y-4">
          {networks.map((net, idx) => (
            <a
              key={idx}
              href={net.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block bg-slate-50 border border-slate-100 rounded-2xl p-6 transition-all duration-200 group shadow-sm ${net.color}`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    {net.icon}
                  </div>
                  <div>
                    <h3 className="font-bebas text-lg sm:text-xl text-slate-800 tracking-wider uppercase leading-none">
                      {net.name}
                    </h3>
                    <p className="font-mono text-xs text-slate-400 font-bold mt-1">
                      {net.handle}
                    </p>
                    <p className="text-xs text-slate-500 font-sans leading-normal mt-1.5 max-w-md hidden sm:block">
                      {net.desc}
                    </p>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 text-slate-400 group-hover:text-egyptian-blue group-hover:border-egyptian-blue/20 transition-all duration-200 group-hover:translate-x-1">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Feed highlight */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center border border-slate-800 space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,53,166,0.3)_0%,transparent_60%)]"></div>
          
          <div className="space-y-4 relative z-10">
            <span className="font-mono text-[10px] text-sunbeam-yellow uppercase tracking-widest font-bold block">@enviosdosruedas</span>
            <h3 className="font-anton text-2xl sm:text-3xl tracking-wide uppercase leading-none">#ENVIOSDOSRUEDAS</h3>
            <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-lg mx-auto">
              Etiquetanos en tus despachos de e-commerce o historias usando el hashtag oficial. ¡Nos encanta compartir el crecimiento de nuestros emprendedores de Mar del Plata!
            </p>
            <div className="flex justify-center pt-2">
              <a 
                href="https://instagram.com/enviosdosruedas"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-brand-dark rounded-xl font-bebas text-lg tracking-widest hover:bg-sunbeam-yellow transition-all shadow-lg flex items-center gap-2 uppercase font-bold"
              >
                🔍 VER INSTAGRAM COMUNIDAD
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
