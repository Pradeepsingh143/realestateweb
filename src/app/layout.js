import './globals.css'
import { Raleway, Open_Sans } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Real Estate Solutions',
  description: 'Bramble Management Group is a trusted real estate company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
