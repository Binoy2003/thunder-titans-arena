import React from 'react'
import { Shield, Users, Target, HeartHandshake, Sparkles, MapPin, Award } from 'lucide-react'
import { LightningBolt } from './LightningIcon'

export default function About() {
  const pillars = [
    {
      title: 'Community Unity',
      desc: 'Bringing the youth of Silimpur together under one banner of brotherhood and shared dreams.',
      icon: Users,
      accent: 'border-titan-orange',
      badge: 'text-titan-orange',
    },
    {
      title: 'Teamwork',
      desc: 'No individual stands alone. Every victory, practice session, and challenge is met as one cohesive titan squad.',
      icon: HeartHandshake,
      accent: 'border-titan-lime',
      badge: 'text-titan-lime',
    },
    {
      title: 'Discipline',
      desc: 'Rigorous physical preparation, respect on and off the field, and a commitment to continuous self-improvement.',
      icon: Shield,
      accent: 'border-titan-orange',
      badge: 'text-titan-orange',
    },
    {
      title: 'Sportsmanship',
      desc: 'Playing with honor, respecting opponents and referees, and competing with fair play at every tournament.',
      icon: Award,
      accent: 'border-titan-lime',
      badge: 'text-titan-lime',
    },
    {
      title: 'Youth Development',
      desc: 'Mentoring young village athletes, providing equipment, tournament access, and life skills through athletic excellence.',
      icon: Target,
      accent: 'border-titan-orange',
      badge: 'text-titan-orange',
    },
  ]

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-titan-black overflow-hidden border-t border-titan-dark">
      {/* Background Graphic Lines */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none stroke-[0.3]">
          <path d="M0,0 L100,100 M20,0 L100,80 M40,0 L100,60 M60,0 L100,40 M80,0 L100,20" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-titan-dark border border-titan-orange/40 text-xs font-oswald uppercase tracking-widest text-titan-orange mb-4">
            <LightningBolt className="w-3.5 h-3.5 text-titan-lime" />
            <span>OUR STORY & PHILOSOPHY</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
            MORE THAN A CLUB.<br />
            <span className="text-titan-orange">WE ARE A COMMUNITY.</span>
          </h2>
        </div>

        {/* Split Layout: Content + Original Club Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-titan-white">
                Founded in 2011 by the visionary youth of <span className="text-titan-orange font-semibold">Silimpur village</span> in Tangail, Thunder Titans was created with a clear purpose: to ignite athletic excellence, build deep communal bonds, and give local talent a platform to shine.
              </p>
              <p>
                From humble beginnings on village grounds to championship podiums across the district, Thunder Titans has grown into a cornerstone for sporting passion. We actively train and compete across three major sports: <strong className="text-titan-white">Cricket</strong>, <strong className="text-titan-white">Football</strong>, and <strong className="text-titan-white">Badminton</strong>.
              </p>
              <p>
                Our mission is to foster physical fitness, mental toughness, and genuine sportsmanship—empowering young athletes to carry their village's pride onto every field they step on.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="pt-4">
              <h3 className="font-oswald text-xl uppercase tracking-wider text-titan-white mb-6 flex items-center gap-2">
                <span className="w-3 h-3 bg-titan-lime inline-block transform rotate-45"></span>
                The 5 Pillars of Thunder Titans
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon
                  return (
                    <div 
                      key={pillar.title} 
                      className={`p-4 rounded-xl bg-titan-card border-l-4 ${pillar.accent} border-t border-r border-b border-titan-border/70 hover:border-titan-orange transition-all duration-300 group hover:-translate-y-1`}
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <Icon className={`w-5 h-5 ${pillar.badge} group-hover:scale-110 transition-transform`} />
                        <h4 className="font-oswald text-base uppercase font-bold text-titan-white tracking-wide">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-400 leading-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  )
                })}

                {/* Legacy Card */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-titan-orange/20 to-titan-dark border border-titan-orange/40 flex flex-col justify-center">
                  <div className="font-bebas text-3xl text-titan-orange tracking-wider">
                    SINCE 2011
                  </div>
                  <div className="text-xs text-gray-300 uppercase tracking-wider font-semibold">
                    15+ Years of Silimpur Sporting Heritage
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Original Club Photograph showcase */}
          <div className="lg:col-span-6">
            <div className="relative">
              
              {/* Decorative Background Glow and Borders */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-titan-orange/20 via-transparent to-titan-lime/20 rounded-2xl blur-xl" />
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-titan-border bg-titan-card shadow-2xl group">
                
                {/* Authentic Club Photo (ice_1.jpeg - Real Victory Celebration) */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/assets/ice_1.jpeg"
                    alt="Thunder Titans Real Team Victory Celebration"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                  />
                  
                  {/* Subtle Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-titan-black via-titan-black/30 to-transparent" />

                  {/* Top Badge: Genuine Club Photograph */}
                  <div className="absolute top-4 left-4 bg-titan-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-titan-orange/50 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-titan-lime animate-ping" />
                    <span className="font-oswald text-xs uppercase tracking-widest text-titan-white font-semibold">
                      Authentic Club Photograph
                    </span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-titan-dark/95 backdrop-blur-md p-4 rounded-xl border border-titan-border/80">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-1.5 text-titan-orange text-xs font-oswald uppercase tracking-wider font-bold mb-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Silimpur, Tangail</span>
                        </div>
                        <h4 className="font-bebas text-xl text-white tracking-wide">
                          CHAMPIONSHIP VICTORY CELEBRATION
                        </h4>
                        <p className="text-xs text-gray-400 mt-0.5">
                          Thunder Titans celebrating tournament triumph on the field with the championship trophy.
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="font-bebas text-3xl text-titan-lime">
                          #TITANS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Stats Strip */}
                <div className="grid grid-cols-3 divide-x divide-titan-border bg-titan-surface p-4 text-center">
                  <div>
                    <div className="font-bebas text-2xl text-titan-orange">2011</div>
                    <div className="text-[11px] uppercase tracking-wider text-titan-muted">Established</div>
                  </div>
                  <div>
                    <div className="font-bebas text-2xl text-titan-lime">3 SPORTS</div>
                    <div className="text-[11px] uppercase tracking-wider text-titan-muted">Active Leagues</div>
                  </div>
                  <div>
                    <div className="font-bebas text-2xl text-white">100%</div>
                    <div className="text-[11px] uppercase tracking-wider text-titan-muted">Community Pride</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
