import { ClerkProvider } from "@clerk/nextjs"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ModalProvider } from "@/providers/modal-provider"
import { ToasterProvider } from "@/providers/toast-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next admin app',
  description: 'it is going to be full stack e-commerce',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout;
