import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Detect active section
      const sections = ['home', 'about', 'sports', 'championships', 'gallery', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Sports', href: '#sports', id: 'sports' },
    { name: 'Championships', href: '#championships', id: 'championships' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' 
          : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-white/15 bg-black p-0.5 group-hover:border-titan-orange transition-colors">
              <img 
                src="/assets/mail.jpeg" 
                alt="Thunder Titans Logo" 
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="font-bebas text-2xl sm:text-3xl tracking-wider text-white group-hover:text-titan-orange transition-colors">
                THUNDER <span className="text-titan-orange">TITANS</span>
              </span>
              <span className="text-[10px] uppercase font-medium tracking-[0.2em] text-gray-400 -mt-1">
                Silimpur • Est. 2011
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                    isActive 
                      ? 'text-titan-orange font-semibold' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-titan-orange rounded-full" />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg font-bebas text-lg tracking-wider text-titan-black bg-titan-orange hover:bg-white transition-all duration-200"
            >
              <span>JOIN THE CLUB</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-titan-orange" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[65px] bg-[#0d0d0d]/95 border-b border-white/10 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[450px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between py-2.5 px-3 rounded-md text-base font-medium tracking-wide uppercase transition-colors ${
                  isActive 
                    ? 'text-titan-orange bg-white/5 font-semibold border-l-4 border-titan-orange' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
              </a>
            )
          })}
          
          <div className="pt-4 mt-2 border-t border-white/10">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-titan-orange text-titan-black font-bebas text-xl tracking-wider rounded-lg transition-all"
            >
              <span>JOIN THE CLUB</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
