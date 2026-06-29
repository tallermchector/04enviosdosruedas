'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap } from 'lucide-react';

export default function BrandedPageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegant transition duration: 650ms
    const timer = setTimeout(() => {
      setLoading(false);
    }, 650);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
          className="fixed inset-0 bg-slate-950 z-[9999] flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Outer circle animation resembling physical wheels */}
          <div className="relative flex items-center justify-center w-24 h-24 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-4 border-dashed border-sunbeam-yellow opacity-80"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
              className="absolute inset-2 rounded-full border-2 border-dashed border-white/20"
            />
            
            {/* Inner lightning pulse */}
            <motion.div
              animate={{ scale: [0.9, 1.1, 0.9] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
              className="relative z-10 w-12 h-12 rounded-full bg-egyptian-blue flex items-center justify-center shadow-lg border border-white/10"
            >
              <Zap className="w-6 h-6 text-sunbeam-yellow fill-sunbeam-yellow" />
            </motion.div>
          </div>

          {/* Branded Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            className="text-center"
          >
            <h1 className="font-anton text-2xl tracking-wide uppercase text-white leading-none">
              Envíos <span className="text-sunbeam-yellow">DosRuedas</span>
            </h1>
            <p className="font-bebas text-xs tracking-[0.3em] text-white/50 uppercase mt-2">
              LOGÍSTICA URBANA • MDQ
            </p>
          </motion.div>

          {/* Progress bar accent */}
          <div className="w-32 bg-white/10 h-1 rounded-full mt-6 overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="bg-sunbeam-yellow h-full rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
