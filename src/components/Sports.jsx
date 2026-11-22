import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { LightningBolt } from './LightningIcon'
import SportModal from './SportModal'

export default function Sports() {
  const [selectedSport, setSelectedSport] = useState(null)

  const sportsData = [
    {
      id: '01',
      name: 'CRICKET',
      tagline: 'THE HEARTBEAT OF OUR FIELDS',
      desc: 'Passion for the game, teamwork and unforgettable moments on the field.',
      extendedDesc: 'Cricket is ingrained in the DNA of Silimpur. Thunder Titans fields competitive squads across T20 formats, limited-overs cups, and local knockout tournaments. From explosive batting orders to disciplined pace attacks, we foster relentless competitive spirit.',
      image: 'https://images.unsplash.com/photo-1531415074868-036b107e775a?q=80&w=1200&auto=format&fit=crop',
      accentColor: 'border-titan-orange',
      badgeColor: 'bg-titan-orange text-titan-black',
      schedule: 'Regular afternoon nets & weekend tournament fixtures.',
      highlights: [
        'T20 & Limited Overs Match Play',
        'Batting & Bowling Skill Drills',
        'Fielding Fitness & Agility',
        'Captaincy & Game Strategy',
      ]
    },
    {
      id: '02',
      name: 'FOOTBALL',
      tagline: 'POWER, SPEED & ENDURANCE',
      desc: 'Speed, strategy, determination and the spirit of teamwork.',
      extendedDesc: 'On the football pitch, Thunder Titans plays with electrifying pace and physical grit. Our football squad unites players across Silimpur, emphasizing tactical positioning, rapid transitions, stamina, and an unyielding team spirit.',
      image: '/assets/ice_3.jpeg',
      isAuthentic: true,
      accentColor: 'border-titan-lime',
      badgeColor: 'bg-titan-lime text-titan-black',
      schedule: 'Evening training sessions & seasonal district cups.',
      highlights: [
        'Tactical Team Formations',
        'Ball Mastery & First Touch',
        'High-Intensity Cardiovascular Stamina',
        'Tournament Knockout Experience',
      ]
    },
    {
      id: '03',
      name: 'BADMINTON',
      tagline: 'LIGHTNING REFLEXES & PRECISION',
      desc: 'Precision, agility and competitive spirit.',
      extendedDesc: 'Badminton requires split-second reactions, explosive footwork, and tactical court mastery. During the winter tournament seasons in Tangail, Thunder Titans courts are alive with intense singles duels and synchronized doubles play under the lights.',
      image: '/assets/badminton.jpeg',
      isAuthentic: true,
      accentColor: 'border-titan-orange',
      badgeColor: 'bg-titan-orange text-titan-black',
      schedule: 'Court practice under floodlights & winter championships.',
      highlights: [
        'Singles & Doubles Court Strategy',
        'Explosive Smashing & Net Play',
        'Lateral Footwork & Reaction Speed',
        'Yearly Tangail Winter Tournaments',
      ]
    }
  ]

  return (
    <section id="sports" className="relative py-24 sm:py-32 bg-titan-surface overflow-hidden border-t border-titan-dark">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-titan-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-titan-dark border border-titan-lime/40 text-xs font-oswald uppercase tracking-widest text-titan-lime mb-4">
              <LightningBolt className="w-3.5 h-3.5 text-titan-lime" />
              <span>CORE DISCIPLINES</span>
            </div>
            <h2 className="font-bebas text-5xl sm:text-7xl uppercase tracking-tight text-white leading-none">
              OUR <span className="text-titan-orange">SPORTS</span>
            </h2>
          </div>

          <p className="text-gray-400 max-w-md text-sm sm:text-base leading-relaxed">
            Three distinct sports disciplines. One relentless commitment to excellence, discipline, and community pride across Silimpur and Tangail.
          </p>
        </div>

        {/* 3 Premium Sports Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sportsData.map((sport) => (
            <div
              key={sport.id}
              className={`group relative rounded-2xl overflow-hidden bg-titan-card border border-titan-border hover:${sport.accentColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between`}
            >
              {/* Top Image Container */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-black">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-titan-card via-titan-card/40 to-transparent" />
                
                {/* Sport Number Watermark */}
                <div className="absolute top-4 left-6 font-bebas text-6xl text-white/20 select-none group-hover:text-white/40 transition-colors">
                  {sport.id}
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  {sport.isAuthentic && (
                    <span className="px-2.5 py-1 text-[10px] font-oswald uppercase tracking-widest font-semibold rounded bg-black/80 text-titan-lime border border-titan-lime/30 backdrop-blur-sm">
                      Club Photo
                    </span>
                  )}
                  <span className={`px-3 py-1 text-xs font-oswald uppercase tracking-widest font-bold rounded ${sport.badgeColor}`}>
                    {sport.name}
                  </span>
                </div>

                {/* Sport Name Overlay on Image Bottom */}
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-oswald uppercase tracking-widest text-titan-lime font-semibold block mb-1">
                    {sport.tagline}
                  </span>
                  <h3 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide uppercase group-hover:text-titan-orange transition-colors">
                    {sport.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {sport.desc}
                </p>

                {/* Explore Link Trigger */}
                <button
                  onClick={() => setSelectedSport(sport)}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-titan-border text-xs sm:text-sm font-oswald uppercase tracking-widest font-semibold text-white group-hover:text-titan-orange transition-colors"
                >
                  <span className="flex items-center gap-2">
                    Explore Details & Training
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

      </div>

      {/* Sport Detail Modal */}
      <SportModal
        sport={selectedSport}
        isOpen={!!selectedSport}
        onClose={() => setSelectedSport(null)}
      />
    </section>
  )
}
