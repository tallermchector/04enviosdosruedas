import type {Metadata} from 'next';
import { Anton, Bebas_Neue, Inter } from 'next/font/google';
import './globals.css'; // Global styles
import LayoutWrapper from '@/components/LayoutWrapper';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Envíos DosRuedas | Mensajería y Logística Urbana en Mar del Plata',
  description: 'Tu solución confiable de envíos express, low cost y flex en MDQ. Envíos eficientes, rápidos y seguros para tu e-commerce y negocio.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${anton.variable} ${bebasNeue.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="antialiased min-h-screen flex flex-col bg-white">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
