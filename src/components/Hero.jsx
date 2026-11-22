import React from 'react'
import { Play, ArrowUpRight, Trophy, Zap, Calendar, Sparkles } from 'lucide-react'

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
      className="relative min-h-screen w-full bg-[#1e1109] text-white overflow-x-hidden pt-24 pb-12 sm:pb-16 select-none"
    >
      {/* ========================================================
          ATHLETIC COURT CANVAS & ORANGE COLOR GRADE BACKGROUND
          (Warm light orange gradient, subtle court chalk lines & marks)
         ======================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft, warm orange-graded court wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2e190d] via-[#211209] to-[#120904]" />
        
        {/* Ambient radial orange glow centers */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-r from-titan-orange/25 via-[#ff9033]/20 to-titan-lime/15 rounded-full blur-[140px]" />
        <div className="absolute top-10 left-10 w-80 h-80 bg-titan-orange/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-titan-lime/10 rounded-full blur-[120px]" />

        {/* Athletic Court Chalk Lines (Inspired by the reference image's court markings) */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 bottom-0 left-[16%] w-[1px] bg-white border-dashed border-l border-white/40" />
          <div className="absolute top-0 bottom-0 right-[16%] w-[1px] bg-white border-dashed border-r border-white/40" />
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/50" />
          
          <div className="absolute left-0 right-0 top-[26%] h-[1px] bg-white/40" />
          <div className="absolute left-0 right-0 bottom-[28%] h-[1px] bg-white/40" />
          
          <span className="absolute top-[26%] left-[16%] -translate-x-1/2 -translate-y-1/2 text-white/60 font-mono text-sm">+</span>
          <span className="absolute top-[26%] right-[16%] translate-x-1/2 -translate-y-1/2 text-white/60 font-mono text-sm">+</span>
          <span className="absolute bottom-[28%] left-[16%] -translate-x-1/2 translate-y-1/2 text-white/60 font-mono text-sm">+</span>
          <span className="absolute bottom-[28%] right-[16%] translate-x-1/2 translate-y-1/2 text-white/60 font-mono text-sm">+</span>
        </div>

        {/* Subtle Canvas Grit Texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between min-h-[88vh]">
        
        {/* ========================================================
            CENTER HERO STAGE:
            THUNDER (Left) | TROPHY (Rock-Solid Center) | TITANS (Right)
           ======================================================== */}
        <div className="relative w-full flex-grow flex flex-col items-center justify-center pt-2 sm:pt-4 pb-6 sm:pb-8">
          
          {/* Robust 3-Column Grid on Desktop, Clean Balanced Stack on Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center justify-center w-full gap-4 lg:gap-0">
            
            {/* LEFT WORD: "THUNDER" (Desktop: Col 1-4, Text Right) */}
            <div className="lg:col-span-4 text-center lg:text-right pr-0 lg:pr-6 xl:pr-10 z-10 order-1 lg:order-1">
              <h1 className="font-bebas text-6xl sm:text-8xl md:text-9xl lg:text-[7rem] xl:text-[9.5rem] tracking-tight text-white leading-none uppercase drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]">
                THUNDER
              </h1>
            </div>

            {/* CENTERPIECE: OFFICIAL CHAMPIONSHIP TROPHY (Desktop: Col 5-8, Centered) */}
            <div className="lg:col-span-4 relative flex flex-col items-center justify-center z-20 order-2 lg:order-2 my-3 lg:my-0">
              
              {/* Handwritten Brush Script behind Trophy (Like the yellow text in reference) */}
              <div className="absolute -top-6 sm:-top-8 lg:-top-10 left-1/2 -translate-x-1/2 w-max pointer-events-none z-0">
                <span className="font-caveat text-4xl sm:text-5xl lg:text-6xl font-bold text-titan-lime tracking-wide transform -rotate-6 block drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  Silimpur Champions
                </span>
              </div>

              {/* Glowing Pedestal Ring */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 sm:w-60 h-10 bg-titan-orange/40 rounded-full blur-2xl pointer-events-none" />

              {/* Trophy Frame: Perfectly proportioned and centered */}
              <div className="relative w-56 sm:w-64 md:w-72 lg:w-76 xl:w-80 h-72 sm:h-80 md:h-88 lg:h-[400px] xl:h-[430px] rounded-[28px] overflow-hidden border-2 border-titan-orange/70 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group bg-black/60 backdrop-blur-sm">
                
                {/* Trophy Image (ice_2.jpeg) */}
                <img
                  src="/assets/ice_2.jpeg"
                  alt="Thunder Titans Official Championship Trophy"
                  className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 filter brightness-105 contrast-110"
                />

                {/* Soft Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none" />

                {/* Trophy Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#140c06]/95 backdrop-blur-md px-3 py-2 rounded-xl border border-titan-orange/40 text-center shadow-lg">
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-titan-lime block font-bold">
                    OFFICIAL CHAMPIONSHIP TROPHY
                  </span>
                  <span className="font-oswald text-xs sm:text-sm text-white uppercase tracking-wider font-semibold">
                    TANGAIL PREMIER TOURNAMENT
                  </span>
                </div>
              </div>

              {/* Handwritten Brush Accent below trophy */}
              <div className="absolute -bottom-4 right-1 sm:right-4 pointer-events-none z-30">
                <span className="font-caveat text-xl sm:text-2xl font-bold text-[#ffae62] transform rotate-3 block drop-shadow-md">
                  Est. 2011 • Since Glory
                </span>
              </div>
            </div>

            {/* RIGHT WORD: "TITANS" (Desktop: Col 9-12, Text Left) */}
            <div className="lg:col-span-4 text-center lg:text-left pl-0 lg:pl-6 xl:pl-10 z-10 order-3 lg:order-3">
              <h1 className="font-bebas text-6xl sm:text-8xl md:text-9xl lg:text-[7rem] xl:text-[9.5rem] tracking-tight text-white leading-none uppercase drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]">
                TITANS
              </h1>
            </div>

          </div>

        </div>

        {/* ========================================================
            THE 4 CLUB PHOTO CARDS & CENTER BANNER
            (Positioned surrounding the stage, matching reference)
           ======================================================== */}
        <div className="relative z-30 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 items-end mt-2">
          
          {/* CARD 1: BADMINTON PHOTO with Play Button */}
          <div 
            onClick={() => handleScrollTo('sports')}
            className="md:col-span-6 lg:col-span-3 group cursor-pointer rounded-2xl overflow-hidden bg-black/60 border border-white/15 hover:border-titan-orange transition-all duration-300 shadow-2xl backdrop-blur-md p-3"
          >
            <div className="relative h-40 sm:h-44 rounded-xl overflow-hidden bg-black">
              <img
                src="/assets/badminton.jpeg"
                alt="Silimpur Night Badminton Match"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Play Button Indicator (Like in reference) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-titan-lime/90 text-black flex items-center justify-center shadow-glow-lime group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>

              {/* Live Tag */}
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 text-[10px] font-oswald uppercase tracking-widest text-titan-lime border border-titan-lime/30">
                Silimpur Court
              </div>
            </div>

            <div className="pt-2.5 px-1">
              <h4 className="font-oswald text-xs sm:text-sm uppercase tracking-wide text-white font-bold group-hover:text-titan-orange transition-colors line-clamp-1">
                READY TO IMPROVE YOUR AGILITY & SMASH?
              </h4>
              <div className="flex items-center justify-between text-xs font-oswald uppercase tracking-wider text-titan-orange pt-1">
                <span>Explore Badminton</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* CARD 3: UPCOMING FIXTURES with Event Time Chips */}
          <div className="md:col-span-6 lg:col-span-3 rounded-2xl bg-[#1e130a]/90 border border-titan-orange/40 p-4 shadow-2xl backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <Calendar className="w-4 h-4 text-titan-lime" />
                <span className="font-bebas text-lg sm:text-xl text-white tracking-wide uppercase">
                  UPCOMING TITAN FIXTURES
                </span>
              </div>

              {/* Time Chips (Like "SMASH FEST 7:00pm" in reference) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-titan-lime text-black font-oswald font-bold text-xs uppercase tracking-wider shadow-md">
                  <span>CRICKET T20 DERBY</span>
                  <span className="bg-black/20 px-2 py-0.5 rounded text-[10px]">3:30 PM</span>
                </div>

                <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-gradient-to-r from-titan-orange to-[#ff6b2b] text-white font-oswald font-bold text-xs uppercase tracking-wider shadow-md">
                  <span>FOOTBALL CUP FINAL</span>
                  <span className="bg-black/30 px-2 py-0.5 rounded text-[10px]">5:00 PM</span>
                </div>
              </div>
            </div>

            <div className="pt-2.5 mt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span>VENUE: SILIMPUR FIELD</span>
              <span className="text-titan-lime font-bold">LIVE SUPPORT</span>
            </div>
          </div>

          {/* CARD 5: FOOTBALL SQUAD BANNER (Like Padel Essentials) */}
          <div 
            onClick={() => handleScrollTo('sports')}
            className="md:col-span-12 lg:col-span-3 group cursor-pointer rounded-2xl bg-white text-black p-3 shadow-2xl hover:shadow-[0_10px_35px_rgba(245,130,22,0.3)] transition-all duration-300"
          >
            <div className="relative h-28 rounded-xl overflow-hidden bg-black mb-2">
              <img
                src="/assets/ice_3.jpeg"
                alt="Thunder Titans Football Squad"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-1.5 left-2 px-2 py-0.5 rounded bg-titan-orange text-black font-oswald text-[10px] uppercase font-bold tracking-wider">
                Football Squad
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] uppercase font-bold tracking-wider text-gray-500 block">
                  Level Up Your Game
                </span>
                <h4 className="font-bebas text-lg text-black leading-none uppercase">
                  TITANS SQUAD ESSENTIALS
                </h4>
              </div>
              <div className="w-7 h-7 rounded-full bg-titan-orange text-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* CARD 2 & 4: CELEBRATION POSTER & MATCH LINEUP */}
          <div className="md:col-span-12 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            
            {/* Top-Right: FEEL THE THUNDER Poster (ice_1.jpeg) */}
            <div 
              onClick={() => handleScrollTo('championships')}
              className="group cursor-pointer relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#2a170d] to-[#120a05] border border-titan-orange/40 p-3 shadow-2xl"
            >
              <div className="relative h-24 rounded-xl overflow-hidden bg-black mb-1.5">
                <img
                  src="/assets/ice_1.jpeg"
                  alt="Thunder Titans Victory Celebration"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute top-1.5 left-2">
                  <span className="font-marker text-[11px] text-titan-lime tracking-wider drop-shadow-md">
                    FEEL THE THUNDER!
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-oswald uppercase tracking-wider text-gray-300">
                <span className="text-white font-bold text-[11px]">Championship Cup Win</span>
                <span className="text-titan-orange flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[11px]">
                  View ↗
                </span>
              </div>
            </div>

            {/* Bottom-Right: THE TANGAIL PREMIER CUP (ice_4.jpeg) */}
            <div 
              onClick={() => handleScrollTo('championships')}
              className="group cursor-pointer rounded-2xl bg-black/60 border border-white/15 hover:border-titan-lime transition-all duration-300 p-3 backdrop-blur-md"
            >
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10 text-xs font-oswald uppercase tracking-wider">
                <span className="text-titan-lime font-bold flex items-center gap-1 text-[11px]">
                  <Trophy className="w-3 h-3 text-titan-lime" />
                  THE DISTRICT OPEN
                </span>
                <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-titan-lime" />
              </div>

              <div className="relative h-20 rounded-lg overflow-hidden bg-black">
                <img
                  src="/assets/ice_4.jpeg"
                  alt="Thunder Titans Match Lineup"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-1 left-2 text-[9px] font-mono text-white font-semibold">
                  MATCH DAY LINEUP
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
