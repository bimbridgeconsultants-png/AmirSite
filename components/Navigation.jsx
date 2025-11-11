'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../public/images/logo.png'
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
           
          <Image src={logo} className='mt-5 ' alt="B SQUARE GLOBAL" width={148} height={58} />

            
           
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-gradient transition-all duration-300 font-medium text-sm uppercase tracking-wide relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-foreground hover:text-gradient transition-all duration-300 font-medium text-sm uppercase tracking-wide relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/services" className="text-foreground hover:text-gradient transition-all duration-300 font-medium text-sm uppercase tracking-wide relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/portfolio" className="text-foreground hover:text-gradient transition-all duration-300 font-medium text-sm uppercase tracking-wide relative group">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-gradient transition-all duration-300 font-medium text-sm uppercase tracking-wide relative group">
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact">
              <Button variant="premium" size="lg" className="animate-float">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="glass" size="icon" className="text-foreground hover:text-gradient transition-all duration-300">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px] glass border-l border-white/10">
                <SheetHeader className="pb-6">
                  <SheetTitle className="text-left text-2xl font-bold text-gradient">Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-6 mt-8">
                  <Link href="/" onClick={closeMenu} className="text-foreground hover:text-gradient transition-all duration-300 font-medium text-lg py-3 px-4 rounded-xl hover:bg-white/5 group">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      Home
                    </span>
                  </Link>
                  <Link href="/about" onClick={closeMenu} className="text-foreground hover:text-gradient transition-all duration-300 font-medium text-lg py-3 px-4 rounded-xl hover:bg-white/5 group">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      About
                    </span>
                  </Link>
                  <Link href="/services" onClick={closeMenu} className="text-foreground hover:text-gradient transition-all duration-300 font-medium text-lg py-3 px-4 rounded-xl hover:bg-white/5 group">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      Services
                    </span>
                  </Link>
                  <Link href="/portfolio" onClick={closeMenu} className="text-foreground hover:text-gradient transition-all duration-300 font-medium text-lg py-3 px-4 rounded-xl hover:bg-white/5 group">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      Portfolio
                    </span>
                  </Link>
                  <Link href="/gallery" onClick={closeMenu} className="text-foreground hover:text-gradient transition-all duration-300 font-medium text-lg py-3 px-4 rounded-xl hover:bg-white/5 group">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      Gallery
                    </span>
                  </Link>
                  <div className="pt-6">
                    <Link href="/contact" onClick={closeMenu}>
                      <Button variant="premium" size="lg" className="w-full">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

