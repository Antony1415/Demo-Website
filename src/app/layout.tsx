import './globals.css'
import type { Metadata } from 'next'
import styles from './page.module.css'
import Aside from '@/components/Aside'

export const metadata: Metadata = {
  title: 'Link Nonton atau Nonton Fast & Furious 10',
  description: 'Link Download Fast and Furious 10, Nonton Film Fast X Terbaru Yang Dibintangi Para Aktor Film Populer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className='flex my-[50px]'>
        <Aside />

        <div className='px-[25px]'>
          {children}
        </div>

        <Aside />
      </body>
    </html>
  )
}
