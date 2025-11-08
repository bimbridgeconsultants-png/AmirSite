import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'B SQUARE GLOBAL - BIM Consulting & Services',
  description: 'BIM That Builds Confidence and Stronger Projects. Professional BIM consulting and services with 20 years of expertise in the UAE.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
             
              <div>
                <div className="font-bold">Bimbridge</div>
                <div className="text-xs text-gray-400">THE BIM PARTNER</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              BIM That Builds Confidence and Stronger Projects
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="block text-gray-400 hover:text-white transition-colors">
                Portfolio
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Core BIM Services</p>
              <p>Visualization & Reality</p>
              <p>Coordination & Data</p>
              <p>Consulting & Training</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              
              <p>+919545031601</p>
              <p>+971589931660</p>
              <p>www.bimbridge.in</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Bimbridge Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}