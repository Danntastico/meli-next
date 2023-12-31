import '@/styles/main.scss'
import { Inter } from 'next/font/google'
import '@mantine/core/styles.css';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { SearchBar } from '@/containers';
import { Suspense } from 'react';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mercado Libre',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <Suspense fallback={<input disabled placeholder='Loading...' />}>
            <SearchBar />
          </Suspense>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </MantineProvider>
      </body>
    </html>
  )
}
