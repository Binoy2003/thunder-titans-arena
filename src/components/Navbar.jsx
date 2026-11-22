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
      const sections = ['home', 'about', 'leadership', 'sports', 'championships', 'gallery', 'contact']
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

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Leadership', href: '#leadership', id: 'leadership' },
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
          ? 'bg-[#120a05]/95 backdrop-blur-md border-b border-white/10 py-2.5 shadow-xl' 
          : 'bg-gradient-to-b from-[#120a05]/90 via-[#120a05]/40 to-transparent py-4'
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
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-titan-orange/40 bg-black p-0.5 group-hover:border-titan-orange transition-colors">
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
                  className={`relative px-3 py-2 text-xs lg:text-sm font-medium tracking-wide uppercase transition-colors ${
                    isActive 
                      ? 'text-titan-orange font-semibold' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-titan-orange rounded-full" />
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
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full font-bebas text-base tracking-wider text-titan-black bg-titan-orange hover:bg-white transition-all duration-200 shadow-md hover:scale-105 active:scale-95"
            >
              <span>JOIN TITANS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none transition-colors active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-titan-orange" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu (Touch & Momentum Optimized for Android & iOS) */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[65px] bg-[#120a05]/98 border-b border-white/10 backdrop-blur-2xl transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-2.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium tracking-wide uppercase transition-colors ${
                  isActive 
                    ? 'text-titan-orange bg-white/5 font-semibold border-l-4 border-titan-orange' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.name}</span>
              </a>
            )
          })}
          
          <div className="pt-3 mt-1 border-t border-white/10">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-titan-orange text-titan-black font-bebas text-xl tracking-wider rounded-xl transition-all active:scale-98 shadow-md"
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
