import { Fraunces, Inter, Manrope, Space_Grotesk, Space_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const cabinet = localFont({
  src: [
    { path: '../cabinet-grotesk/CabinetGrotesk-Thin.woff2', weight: '100' },
    { path: '../cabinet-grotesk/CabinetGrotesk-Extralight.woff2', weight: '200' },
    { path: '../cabinet-grotesk/CabinetGrotesk-Light.woff2', weight: '300' },
    { path: '../cabinet-grotesk/CabinetGrotesk-Regular.woff2', weight: '400' },
    { path: '../cabinet-grotesk/CabinetGrotesk-Medium.woff2', weight: '500' },
    { path: '../cabinet-grotesk/CabinetGrotesk-Bold.woff2', weight: '700' },
    { path: '../cabinet-grotesk/CabinetGrotesk-Extrabold.woff2', weight: '800' },
    { path: '../cabinet-grotesk/CabinetGrotesk-Black.woff2', weight: '900' },
  ],
  variable: '--font-cabinet',
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
})