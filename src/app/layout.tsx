import { QueryContext } from '@/context';
import './globals.css';

import { Nunito_Sans } from 'next/font/google';
import type { Metadata } from 'next';

const fontNunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Buscar perfil GitHub',
  description: 'Busque o perfil de um usuário do GitHub',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fontNunitoSans.variable} antialiased`}
      >
        <QueryContext>
          {children}
        </QueryContext>
      </body>
    </html>
  );
}
