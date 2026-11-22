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
      className="relative min-h-screen w-full bg-[#20120a] text-white overflow-hidden pt-20 pb-12 sm:pb-16 select-none"
    >
      {/* ========================================================
          ATHLETIC COURT CANVAS & ORANGE COLOR GRADE BACKGROUND
          (Court chalk lines, subtle court grid, warm light orange gradient)
         ======================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft, warm orange-graded court wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#331c0e] via-[#24130a] to-[#140a05]" />
        
        {/* Ambient radial orange glow centers */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-r from-titan-orange/25 via-[#ff9033]/20 to-titan-lime/15 rounded-full blur-[140px]" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-titan-orange/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-titan-lime/10 rounded-full blur-[120px]" />

        {/* Athletic Court Chalk Lines (Inspired by the reference image's court markings) */}
        <div className="absolute inset-0 opacity-20">
          {/* Vertical Court Lines */}
          <div className="absolute top-0 bottom-0 left-[18%] w-[1px] bg-white border-dashed border-l border-white/40" />
          <div className="absolute top-0 bottom-0 right-[18%] w-[1px] bg-white border-dashed border-r border-white/40" />
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/50" />
          
          {/* Horizontal Chalk Lines */}
          <div className="absolute left-0 right-0 top-[24%] h-[1px] bg-white/40" />
          <div className="absolute left-0 right-0 bottom-[28%] h-[1px] bg-white/40" />
          
          {/* Court Corner Marks (+) */}
          <span className="absolute top-[24%] left-[18%] -translate-x-1/2 -translate-y-1/2 text-white/60 font-mono text-sm">+</span>
          <span className="absolute top-[24%] right-[18%] translate-x-1/2 -translate-y-1/2 text-white/60 font-mono text-sm">+</span>
          <span className="absolute bottom-[28%] left-[18%] -translate-x-1/2 translate-y-1/2 text-white/60 font-mono text-sm">+</span>
          <span className="absolute bottom-[28%] right-[18%] translate-x-1/2 translate-y-1/2 text-white/60 font-mono text-sm">+</span>
        </div>

        {/* Subtle Canvas Grit Texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-between min-h-[90vh]">
        
        {/* ========================================================
            CENTER HERO STAGE:
            THUNDER (Left) | TROPHY (Center) | TITANS (Right)
           ======================================================== */}
        <div className="relative w-full flex-grow flex flex-col items-center justify-center pt-4 sm:pt-6 pb-4 sm:pb-8">
          
          {/* Giant Typography & Trophy Layer */}
          <div className="relative w-full flex flex-col lg:flex-row items-center justify-center">
            
            {/* LEFT WORD: "THUNDER" */}
            <div className="w-full lg:w-1/2 text-center lg:text-right pr-0 lg:pr-12 xl:pr-16 z-10">
              <h1 className="font-bebas text-6xl sm:text-8xl md:text-9xl lg:text-[8.5rem] xl:text-[11rem] tracking-tight text-white leading-[0.85] uppercase drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
                THUNDER
              </h1>
            </div>

            {/* CENTERPIECE: OFFICIAL CHAMPIONSHIP TROPHY */}
            <div className="relative my-4 lg:my-0 flex-shrink-0 z-20 flex flex-col items-center justify-center">
              
              {/* Handwritten Brush Script behind Trophy (Like the yellow text in reference) */}
              <div className="absolute -top-6 sm:-top-8 lg:-top-12 left-1/2 -translate-x-1/2 w-max pointer-events-none z-0">
                <span className="font-caveat text-4xl sm:text-6xl lg:text-7xl font-bold text-titan-lime tracking-wide transform -rotate-6 block drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                  Silimpur Champions
                </span>
              </div>

              {/* Glowing Pedestal Ring */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-12 bg-titan-orange/40 rounded-full blur-2xl pointer-events-none" />

              {/* Trophy Card Frame (Showcasing authentic ice_2.jpeg trophy with ribbons) */}
              <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 h-72 sm:h-84 md:h-96 lg:h-[430px] rounded-[28px] overflow-hidden border-2 border-titan-orange/70 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group bg-black/60 backdrop-blur-sm">
                
                {/* Trophy Image */}
                <img
                  src="/assets/ice_2.jpeg"
                  alt="Thunder Titans Championship Trophy"
                  className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 filter brightness-105 contrast-110"
                />

                {/* Soft Radial Vignette for seamless athletic blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Trophy Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#140c06]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-titan-orange/40 text-center shadow-lg">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-titan-lime block font-bold">
                    OFFICIAL CHAMPIONSHIP TROPHY
                  </span>
                  <span className="font-oswald text-xs sm:text-sm text-white uppercase tracking-wider font-semibold">
                    TANGAIL PREMIER TOURNAMENT
                  </span>
                </div>
              </div>

              {/* Handwritten Brush Accent below trophy */}
              <div className="absolute -bottom-5 right-2 pointer-events-none z-30">
                <span className="font-caveat text-2xl sm:text-3xl font-bold text-[#ffae62] transform rotate-3 block">
                  Est. 2011 • Since Glory
                </span>
              </div>
            </div>

            {/* RIGHT WORD: "TITANS" */}
            <div className="w-full lg:w-1/2 text-center lg:text-left pl-0 lg:pr-0 lg:pl-12 xl:pl-16 z-10">
              <h1 className="font-bebas text-6xl sm:text-8xl md:text-9xl lg:text-[8.5rem] xl:text-[11rem] tracking-tight text-white leading-[0.85] uppercase drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
                TITANS
              </h1>
            </div>

          </div>

        </div>

        {/* ========================================================
            THE 4 CLUB PHOTO CARDS & CENTER BANNER
            (Positioned surrounding the stage, matching the reference layout)
           ======================================================== */}
        <div className="relative z-30 grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-end mt-4">
          
          {/* CARD 1 (Top-Left in layout): BADMINTON PHOTO with Play Button */}
          <div 
            onClick={() => handleScrollTo('sports')}
            className="md:col-span-6 lg:col-span-3 group cursor-pointer rounded-2xl overflow-hidden bg-black/60 border border-white/15 hover:border-titan-orange transition-all duration-300 shadow-2xl backdrop-blur-md p-3"
          >
            <div className="relative h-44 sm:h-48 rounded-xl overflow-hidden bg-black">
              <img
                src="/assets/badminton.jpeg"
                alt="Silimpur Night Badminton Match"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Play Button Indicator (Like in reference) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-titan-lime/90 text-black flex items-center justify-center shadow-glow-lime group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>

              {/* Live Tag */}
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 text-[10px] font-oswald uppercase tracking-widest text-titan-lime border border-titan-lime/30">
                Silimpur Court
              </div>
            </div>

            <div className="pt-3 px-1">
              <h4 className="font-oswald text-sm uppercase tracking-wide text-white font-bold group-hover:text-titan-orange transition-colors">
                READY TO IMPROVE YOUR AGILITY & SMASH?
              </h4>
              <div className="flex items-center justify-between text-xs font-oswald uppercase tracking-wider text-titan-orange pt-1">
                <span>Explore Badminton</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* CARD 3 (Bottom-Left in layout): UPCOMING FIXTURES with Event Time Chips */}
          <div className="md:col-span-6 lg:col-span-3 rounded-2xl bg-[#1e130a]/90 border border-titan-orange/40 p-4 sm:p-5 shadow-2xl backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-titan-lime" />
                <span className="font-bebas text-xl sm:text-2xl text-white tracking-wide uppercase">
                  UPCOMING TITAN FIXTURES
                </span>
              </div>

              {/* Time Chips (Like "SMASH FEST 7:00pm" in reference) */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-titan-lime text-black font-oswald font-bold text-xs uppercase tracking-wider shadow-md">
                  <span>CRICKET T20 DERBY</span>
                  <span className="bg-black/20 px-2 py-0.5 rounded text-[11px]">3:30 PM</span>
                </div>

                <div className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-gradient-to-r from-titan-orange to-[#ff6b2b] text-white font-oswald font-bold text-xs uppercase tracking-wider shadow-md">
                  <span>FOOTBALL CUP FINAL</span>
                  <span className="bg-black/30 px-2 py-0.5 rounded text-[11px]">5:00 PM</span>
                </div>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span>VENUE: SILIMPUR FIELD</span>
              <span className="text-titan-lime font-bold">LIVE SUPPORT</span>
            </div>
          </div>

          {/* CARD 5 (Bottom-Center in layout): FOOTBALL SQUAD BANNER (Like Padel Essentials) */}
          <div 
            onClick={() => handleScrollTo('sports')}
            className="md:col-span-12 lg:col-span-3 group cursor-pointer rounded-2xl bg-white text-black p-3 sm:p-4 shadow-2xl hover:shadow-[0_10px_35px_rgba(245,130,22,0.3)] transition-all duration-300"
          >
            <div className="relative h-28 sm:h-32 rounded-xl overflow-hidden bg-black mb-2.5">
              <img
                src="/assets/ice_3.jpeg"
                alt="Thunder Titans Football Squad"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-titan-orange text-black font-oswald text-[10px] uppercase font-bold tracking-wider">
                Football Squad
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 block">
                  Level Up Your Game
                </span>
                <h4 className="font-bebas text-xl text-black leading-none uppercase">
                  TITANS SQUAD ESSENTIALS
                </h4>
              </div>
              <div className="w-8 h-8 rounded-full bg-titan-orange text-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* CARD 2 & 4 (Right Side in layout): CELEBRATION POSTER & MATCH LINEUP */}
          <div className="md:col-span-12 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Top-Right: FEEL THE THUNDER Poster (ice_1.jpeg) */}
            <div 
              onClick={() => handleScrollTo('championships')}
              className="group cursor-pointer relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#2a170d] to-[#120a05] border border-titan-orange/40 p-4 shadow-2xl"
            >
              <div className="relative h-28 rounded-xl overflow-hidden bg-black mb-2">
                <img
                  src="/assets/ice_1.jpeg"
                  alt="Thunder Titans Victory Celebration"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Athletic Brush Badge */}
                <div className="absolute top-2 left-2">
                  <span className="font-marker text-xs text-titan-lime tracking-wider drop-shadow-md">
                    FEEL THE THUNDER!
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-oswald uppercase tracking-wider text-gray-300">
                <span className="text-white font-bold">Championship Cup Win</span>
                <span className="text-titan-orange flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View ↗
                </span>
              </div>
            </div>

            {/* Bottom-Right: THE TANGAIL PREMIER CUP (ice_4.jpeg) */}
            <div 
              onClick={() => handleScrollTo('championships')}
              className="group cursor-pointer rounded-2xl bg-black/60 border border-white/15 hover:border-titan-lime transition-all duration-300 p-3.5 backdrop-blur-md"
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs font-oswald uppercase tracking-wider">
                <span className="text-titan-lime font-bold flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5 text-titan-lime" />
                  THE DISTRICT OPEN
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-titan-lime" />
              </div>

              <div className="relative h-24 rounded-lg overflow-hidden bg-black">
                <img
                  src="/assets/ice_4.jpeg"
                  alt="Thunder Titans Match Lineup"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-1.5 left-2 text-[10px] font-mono text-white font-semibold">
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
