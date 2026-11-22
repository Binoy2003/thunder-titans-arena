import React from 'react'
import { ArrowUpRight, Crosshair, Target, Zap, Plus } from 'lucide-react'
import DeerFootball from './DeerFootball'

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-[#0a0a0a] overflow-hidden"
    >
      {/* 
        OUTER FRAME with Club's Orange Border 
        ("ekhane j balck border ta ase oikhane club er colou orange colour hobe")
      */}
      <div className="relative w-full max-w-[1550px] min-h-[92vh] rounded-[24px] sm:rounded-[32px] border-[3px] sm:border-4 border-titan-orange bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#161616] overflow-hidden shadow-[0_0_50px_rgba(245,130,22,0.25)] flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-16">
        
        {/* Cinematic Atmospheric Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-titan-orange/25 via-titan-lime/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-titan-orange/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-titan-lime/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Subtle high-tech diagonal light streak */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />

        {/* ========================================================
            HERO MAIN GRID (Left Text | Center DEER Football | Right Callout)
           ======================================================== */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center flex-grow">
          
          {/* LEFT COLUMN: Large Bold Headline, Description, Button */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-20">
            
            {/* Small Club Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-titan-orange/15 border border-titan-orange/40 text-[11px] font-oswald uppercase tracking-[0.2em] text-titan-orange mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-titan-orange animate-ping" />
              <span>EST. 2011 • SILIMPUR, BANGLADESH</span>
            </div>

            {/* Massive Editorial Headline (Like "RULE THE COURT" in reference) */}
            <h1 className="font-bebas text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] uppercase tracking-tight text-white leading-[0.88] mb-6">
              ONE TEAM.<br />
              ONE DREAM.<br />
              <span className="text-titan-orange drop-shadow-sm">UNSTOPPABLE</span><br />
              SPIRIT.
            </h1>

            {/* Supporting Description */}
            <p className="text-gray-300 text-sm sm:text-base max-w-md font-light leading-relaxed mb-8">
              Thunder Titans brings together the youth of Silimpur through cricket, football and badminton. Driven by passion, forged in teamwork.
            </p>

            {/* Action Button (Clean crisp rectangle like reference) */}
            <button
              onClick={() => handleScrollTo('about')}
              className="px-8 py-3.5 bg-white text-black hover:bg-titan-orange hover:text-black font-oswald text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl flex items-center gap-2"
            >
              <span>EXPLORE OUR CLUB</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* CENTER: FLYING DEER FOOTBALL WITH SPEED TRAIL & HUD BRACKETS */}
          <div className="lg:col-span-5 relative flex items-center justify-center my-6 lg:my-0 z-10">
            
            {/* HUD Target Framing Brackets (In Club's Orange color) */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center">
              
              {/* Bracket: Top Left */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-9 h-9 border-t-2 border-l-2 border-titan-orange pointer-events-none" />
              
              {/* Bracket: Top Right */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-9 h-9 border-t-2 border-r-2 border-titan-orange pointer-events-none" />
              
              {/* Bracket: Bottom Left */}
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-9 h-9 border-b-2 border-l-2 border-titan-orange pointer-events-none" />
              
              {/* Bracket: Bottom Right */}
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-9 h-9 border-b-2 border-r-2 border-titan-orange pointer-events-none" />

              {/* HUD Specification Label: Top */}
              <div className="absolute -top-7 sm:-top-8 left-4 text-left pointer-events-none select-none">
                <span className="font-oswald text-xs uppercase tracking-widest text-titan-orange font-bold block">
                  DEER FOOTBALL
                </span>
                <span className="text-[10px] font-mono text-gray-400 tracking-wider">
                  PRESSURE 12-14 PSI
                </span>
              </div>

              {/* HUD Flight Speed Label: Bottom Right */}
              <div className="absolute -bottom-8 right-4 text-right pointer-events-none select-none">
                <span className="font-oswald text-xs uppercase tracking-widest text-titan-lime font-bold block">
                  FLIGHT SPEED
                </span>
                <span className="text-xs font-mono text-white tracking-widest font-semibold">
                  122 KM/H
                </span>
              </div>

              {/* The Realistic 3D DEER Football Component with speed blur & sparks */}
              <DeerFootball className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96" />
            </div>

          </div>

          {/* RIGHT COLUMN: Minimal Typography callout */}
          <div className="lg:col-span-2 hidden lg:flex flex-col items-end text-right justify-center space-y-8 z-20">
            <div className="space-y-2 border-r-2 border-titan-orange pr-4">
              <Plus className="w-5 h-5 text-titan-lime ml-auto" />
              <div className="font-oswald text-xs uppercase tracking-[0.25em] text-white font-bold leading-relaxed">
                BUILT FOR<br />PASSION<br />
                <span className="text-titan-orange">DESIGNED</span><br />
                TO WIN
              </div>
              <p className="text-[11px] text-gray-400 uppercase tracking-widest font-mono pt-1">
                SILIMPUR • TANGAIL
              </p>
            </div>
          </div>

        </div>

        {/* ========================================================
            HERO BOTTOM BAR: Features (Left) & Floating Squad Card (Right)
           ======================================================== */}
        <div className="relative z-20 pt-8 mt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          
          {/* Bottom Left 3 Iconic Attributes (Like CONTROL, PRECISION, POWER in reference) */}
          <div className="flex items-center gap-6 sm:gap-10">
            
            {/* Attribute 1: CONTROL */}
            <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300 group-hover:border-titan-orange group-hover:text-titan-orange transition-colors">
                <Crosshair className="w-4 h-4" />
              </div>
              <span className="font-oswald text-[11px] uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                CONTROL
              </span>
            </div>

            {/* Attribute 2: PRECISION */}
            <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300 group-hover:border-titan-lime group-hover:text-titan-lime transition-colors">
                <Target className="w-4 h-4" />
              </div>
              <span className="font-oswald text-[11px] uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                PRECISION
              </span>
            </div>

            {/* Attribute 3: POWER */}
            <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300 group-hover:border-titan-orange group-hover:text-titan-orange transition-colors">
                <Zap className="w-4 h-4" />
              </div>
              <span className="font-oswald text-[11px] uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                POWER
              </span>
            </div>

          </div>

          {/* Bottom Right: Floating Preview Card (Like "VIEW COLLECTION" in reference) */}
          <div 
            onClick={() => handleScrollTo('sports')}
            className="group cursor-pointer w-full sm:w-64 rounded-xl overflow-hidden bg-black/60 border border-white/15 hover:border-titan-orange transition-all duration-300 shadow-2xl backdrop-blur-md"
          >
            {/* Card Header Link */}
            <div className="px-4 py-2.5 flex items-center justify-between border-b border-white/10 text-xs font-oswald uppercase tracking-wider text-gray-300 group-hover:text-titan-orange transition-colors">
              <span>EXPLORE SQUADS</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>

            {/* Card Image Thumbnail (Featuring the authentic DEER football and team in ice_3.jpeg!) */}
            <div className="relative h-28 overflow-hidden">
              <img
                src="/assets/ice_3.jpeg"
                alt="Thunder Titans Football Team"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-1.5 left-3">
                <span className="text-[10px] font-mono text-titan-lime font-bold uppercase tracking-wider">
                  DEER MATCH EDITION
                </span>
              </div>
            </div>

            {/* Card Footer Quick Tags */}
            <div className="px-3 py-2 bg-black/90 flex items-center justify-between text-[10px] font-oswald uppercase tracking-wider text-gray-400">
              <span className="text-white font-semibold">FOOTBALL</span>
              <span>•</span>
              <span>CRICKET</span>
              <span>•</span>
              <span>BADMINTON</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
