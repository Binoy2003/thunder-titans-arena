import React from 'react'
import { Trophy, Award, MapPin, Sparkles, CheckCircle2 } from 'lucide-react'
import { LightningBolt } from './LightningIcon'

export default function Championships() {
  return (
    <section id="championships" className="relative py-24 sm:py-32 bg-titan-black overflow-hidden border-t border-titan-dark">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-titan-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-titan-lime/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-titan-dark border border-titan-orange/40 text-xs font-oswald uppercase tracking-widest text-titan-orange mb-4">
            <Trophy className="w-3.5 h-3.5 text-titan-lime" />
            <span>COMPETITIVE RECORD & TOURNAMENT SPIRIT</span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-7xl uppercase tracking-tight text-white leading-none">
            BUILT TO COMPETE.<br />
            <span className="text-titan-orange">BORN TO WIN.</span>
          </h2>

          <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl font-light">
            Every match is an opportunity to represent Silimpur with valor. From village grounds to regional championships in Tangail, Thunder Titans competes with relentless passion and unwavering teamwork.
          </p>
        </div>

        {/* Featured Showcase: 2 Authentic Trophy & Team Images + Promotional Poster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Card 1: Authentic Championship Trophy (ice_2.jpeg) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="group relative rounded-2xl overflow-hidden bg-titan-card border border-titan-border hover:border-titan-orange transition-all duration-500 flex-grow flex flex-col">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-black">
                <img
                  src="/assets/ice_2.jpeg"
                  alt="Thunder Titans Official Championship Trophy at Tangail"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-titan-black via-titan-black/20 to-transparent" />
                
                {/* Verified Badge */}
                <div className="absolute top-4 left-4 bg-titan-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-titan-lime/40 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-titan-lime animate-pulse" />
                  <span className="font-oswald text-xs uppercase tracking-widest text-titan-white font-semibold">
                    Verified Club Trophy • Tangail
                  </span>
                </div>
              </div>

              <div className="p-6 bg-titan-card flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-titan-orange text-xs font-oswald uppercase tracking-widest mb-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Tangail, Dhaka, Bangladesh</span>
                  </div>
                  <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase mb-2">
                    TOURNAMENT CHAMPIONS
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    The championship cup standing proud at Tangail. A testament to months of disciplined training, strategic teamwork, and community support from Silimpur.
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-titan-border flex items-center justify-between text-xs text-titan-muted">
                  <span className="font-oswald uppercase tracking-wider text-titan-lime">Tangail District Tournaments</span>
                  <Award className="w-4 h-4 text-titan-orange" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: ice_1.jpeg & Promotional Poster mail.jpeg */}
          <div className="lg:col-span-7 flex flex-col gap-8 justify-between">
            
            {/* Top Right: Team Celebration (ice_1.jpeg) */}
            <div className="group relative rounded-2xl overflow-hidden bg-titan-card border border-titan-border hover:border-titan-lime transition-all duration-500">
              <div className="relative aspect-[16/9] overflow-hidden bg-black">
                <img
                  src="/assets/ice_1.jpeg"
                  alt="Thunder Titans Team Victory Celebration on Field"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-titan-black via-titan-black/30 to-transparent" />
                
                <div className="absolute top-4 left-4 bg-titan-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-titan-orange/40 flex items-center gap-2">
                  <Trophy className="w-3.5 h-3.5 text-titan-orange" />
                  <span className="font-oswald text-xs uppercase tracking-widest text-titan-white font-semibold">
                    Field Triumph
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
                    VICTORY ON THE PITCH
                  </h3>
                  <span className="font-bebas text-2xl text-titan-lime">#TITANS</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  The raw joy of youth athletes lifting the cup after a hard-fought final. Thunder Titans squad united in celebration, proving what village youth can achieve through grit and sportsmanship.
                </p>
              </div>
            </div>

            {/* Bottom Right: Club Identity Poster Card (mail.jpeg) */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-titan-dark to-titan-card border border-titan-border p-6 flex flex-col sm:flex-row items-center gap-6 group hover:border-titan-orange/60 transition-colors">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-titan-orange/40 flex-shrink-0 shadow-glow-orange bg-black">
                <img
                  src="/assets/mail.jpeg"
                  alt="Thunder Titans Promotional Poster"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 text-titan-lime font-oswald text-xs tracking-widest uppercase font-semibold">
                  <LightningBolt className="w-3.5 h-3.5 text-titan-lime" />
                  <span>Official Club Promotional Emblem</span>
                </div>
                <h4 className="font-bebas text-2xl text-white tracking-wide uppercase">
                  UNAPOLOGETIC PASSION SINCE 2011
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed max-w-md">
                  Proudly representing Silimpur across cricket grounds, football pitches, and badminton arenas with unyielding energy and lightning spirit.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Tournament Highlights & Culture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 rounded-xl bg-titan-card border-t-2 border-titan-orange border-r border-b border-l border-titan-border">
            <h4 className="font-bebas text-2xl text-white tracking-wide uppercase mb-2 flex items-center gap-2">
              <span className="text-titan-orange">01.</span> Cricket Championships
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Active participants in local and regional cricket competitions across Tangail. Fostering top-order batsmen, fiery pacers, and disciplined captains.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-titan-card border-t-2 border-titan-lime border-r border-b border-l border-titan-border">
            <h4 className="font-bebas text-2xl text-white tracking-wide uppercase mb-2 flex items-center gap-2">
              <span className="text-titan-lime">02.</span> Football Tournaments
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Showcasing relentless stamina, collective defense, and sharp attacking football in seasonal knockout tournaments and village leagues.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-titan-card border-t-2 border-titan-orange border-r border-b border-l border-titan-border">
            <h4 className="font-bebas text-2xl text-white tracking-wide uppercase mb-2 flex items-center gap-2">
              <span className="text-titan-orange">03.</span> Badminton Winter Cups
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Competing in Tangail winter badminton tournaments, testing speed, reflexes, and tactical coordination in both singles and doubles brackets.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
