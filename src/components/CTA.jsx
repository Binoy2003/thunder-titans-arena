import React from 'react'
import { ArrowRight, Flame } from 'lucide-react'
import { LightningBolt } from './LightningIcon'

export default function CTA() {
  const handleScrollToContact = (e) => {
    e.preventDefault()
    const target = document.getElementById('contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-r from-titan-orange via-[#ff7800] to-titan-orange overflow-hidden text-titan-black">
      {/* Decorative Electric Lightning Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-black stroke-black">
          <polygon points="40,0 20,50 45,50 30,100 80,40 55,40 70,0" />
        </svg>
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-titan-black text-titan-lime font-oswald text-xs uppercase tracking-widest font-bold mb-6 shadow-xl">
          <LightningBolt className="w-4 h-4 text-titan-lime animate-bounce" />
          <span>JOIN THE LEGACY • SILIMPUR, BANGLADESH</span>
        </div>

        {/* Headline */}
        <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl tracking-tight text-titan-black uppercase mb-6 leading-none drop-shadow-sm">
          READY TO BECOME A TITAN?
        </h2>

        {/* Description */}
        <p className="font-oswald text-xl sm:text-2xl md:text-3xl text-titan-black/90 font-medium tracking-wide uppercase max-w-3xl mx-auto mb-10">
          Be part of something bigger. Play with passion. Grow with the team.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-titan-black text-white hover:text-titan-lime font-bebas text-2xl sm:text-3xl tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl group border-2 border-black"
          >
            <span>CONNECT WITH US</span>
            <ArrowRight className="w-6 h-6 text-titan-lime group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  )
}
