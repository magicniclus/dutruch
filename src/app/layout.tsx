import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Château Dutruch Grand Poujeaux – Excellence du Médoc Vinicole',
  description: 'Découvrez le Château Dutruch Grand Poujeaux, un joyau du Médoc proposant des vins d\'exception. Savourez l\'authenticité d\'un terroir unique et la finesse de nos crus. Visitez notre domaine et partagez notre passion pour la vinification.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="logo/logotext.jpg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
