import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { AuthProvider } from '@/utils/authContext'
import { JsonOutputProvider } from '@/utils/jsonOutputContext'
import JsonBox from '@/components/jsonbox'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'HydroponiQ',
  description: 'An app made for hydroponic farmers',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AuthProvider>
        <JsonOutputProvider>
          <body className={poppins.className}>
            {children}
            <JsonBox/>
          </body>
        </JsonOutputProvider>
      </AuthProvider>
    </html>
  )
}
