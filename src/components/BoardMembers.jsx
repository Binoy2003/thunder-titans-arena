import React from 'react'
import { ShieldCheck, Award } from 'lucide-react'
import { LightningBolt } from './LightningIcon'

export default function BoardMembers() {
  const president = {
    name: 'Al Labib',
    role: 'PRESIDENT',
    image: '/assets/president_labib.jpeg',
    club: 'Thunder Titans Sports Club',
    location: 'Silimpur, Tangail',
  }

  const board = [
    {
      name: 'Jawad Alam',
      role: 'VICE PRESIDENT',
      image: '/assets/vp_jawad.jpeg',
      club: 'Thunder Titans Sports Club',
      location: 'Silimpur, Tangail',
    },
    {
      name: 'Al Rafi',
      role: 'GENERAL SECRETARY',
      image: '/assets/gs_rafi.jpeg',
      club: 'Thunder Titans Sports Club',
      location: 'Silimpur, Tangail',
    },
  ]

  return (
    <section 
      id="leadership" 
      className="relative py-24 sm:py-32 bg-[#120a05] text-white overflow-hidden border-t border-titan-dark"
    >
      {/* Subtle ambient court lines & glowing gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-titan-orange/15 rounded-full blur-[140px]" />
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Tag & Section Title (Matching the reference layout) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-titan-orange/15 border border-titan-orange/40 text-xs font-oswald uppercase tracking-[0.25em] text-titan-orange mb-3">
          <ShieldCheck className="w-4 h-4 text-titan-lime" />
          <span>CLUB LEADERSHIP</span>
        </div>

        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
          EXECUTIVE <span className="text-titan-orange">BOARD</span>
        </h2>

        {/* Short orange gradient divider line */}
        <div className="w-14 h-1 bg-gradient-to-r from-titan-orange via-titan-lime to-titan-orange rounded-full mx-auto mt-3 mb-14" />

        {/* ========================================================
            TOP CENTER CARD: PRESIDENT (Al Labib)
           ======================================================== */}
        <div className="max-w-sm sm:max-w-md mx-auto mb-2">
          <div className="group relative rounded-3xl bg-titan-card/90 border border-white/15 hover:border-titan-orange/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(245,130,22,0.25)]">
            
            {/* Glowing avatar ring */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-5 rounded-full p-1 bg-gradient-to-tr from-titan-orange via-titan-lime to-titan-orange/50 shadow-md">
              <div className="w-full h-full rounded-full overflow-hidden bg-black">
                <img
                  src={president.image}
                  alt={president.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Member Details */}
            <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase group-hover:text-titan-orange transition-colors">
              {president.name}
            </h3>

            <div className="inline-block mt-1 px-3 py-1 rounded-full bg-titan-orange/15 border border-titan-orange/40">
              <span className="font-oswald text-xs sm:text-sm font-bold tracking-[0.2em] text-titan-orange uppercase">
                {president.role}
              </span>
            </div>

            <p className="text-xs text-gray-400 mt-2 font-mono">
              {president.club} • {president.location}
            </p>
          </div>
        </div>

        {/* ========================================================
            CONNECTING VERTICAL LINE (Inspired by Reference)
           ======================================================== */}
        <div className="w-[2px] h-10 sm:h-12 bg-gradient-to-b from-titan-orange/80 via-titan-orange/40 to-white/20 mx-auto" />

        {/* ========================================================
            BOTTOM ROW: VICE PRESIDENT (Jawad Alam) & GENERAL SECRETARY (Al Rafi)
           ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto mt-2">
          {board.map((member) => (
            <div
              key={member.name}
              className="group relative rounded-3xl bg-titan-card/90 border border-white/15 hover:border-titan-lime/70 p-6 sm:p-7 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(215,255,77,0.2)]"
            >
              {/* Circular Avatar */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full p-1 bg-gradient-to-tr from-titan-lime via-titan-orange to-titan-lime/60 shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Name & Role */}
              <h4 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase group-hover:text-titan-lime transition-colors">
                {member.name}
              </h4>

              <div className="inline-block mt-1 px-3 py-0.5 rounded-full bg-titan-lime/15 border border-titan-lime/40">
                <span className="font-oswald text-xs font-bold tracking-[0.2em] text-titan-lime uppercase">
                  {member.role}
                </span>
              </div>

              <p className="text-[11px] text-gray-400 mt-2 font-mono">
                {member.club}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
