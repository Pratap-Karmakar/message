
import Header from "./Header"
import Head from "./head"
import '@/styles/globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <Head/>
      <body>
        <Header/>
        {children}
        </body>
    </html>
  )
}




