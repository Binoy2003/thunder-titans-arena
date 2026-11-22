import React, { useState } from 'react'
import { Maximize2, Camera } from 'lucide-react'
import Lightbox from './Lightbox'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const galleryItems = [
    {
      id: 1,
      src: '/assets/ice_1.jpeg',
      title: 'Trophy Celebration On Field',
      desc: 'Thunder Titans squad in full jubilation after clinching tournament victory on the sports field.',
      category: 'Celebration',
      tag: 'authentic',
      location: 'Silimpur Village Ground, Tangail',
    },
    {
      id: 2,
      src: '/assets/ice_2.jpeg',
      title: 'Official Championship Trophy',
      desc: 'The sparkling tournament trophy proudly displayed in Tangail, representing club victory.',
      category: 'Trophy',
      tag: 'authentic',
      location: 'Tangail, Dhaka, Bangladesh',
    },
    {
      id: 3,
      src: '/assets/ice_3.jpeg',
      title: 'Thunder Titans Football Squad',
      desc: 'Official team photograph of the Thunder Titans football squad lined up on the pitch in Silimpur.',
      category: 'Football',
      tag: 'authentic',
      location: 'Silimpur Field, Tangail',
    },
    {
      id: 4,
      src: '/assets/badminton.jpeg',
      title: 'Badminton Night Championship',
      desc: 'Live high-intensity badminton match in Silimpur under floodlights surrounded by passionate community supporters.',
      category: 'Badminton',
      tag: 'authentic',
      location: 'Silimpur Court, Tangail',
    },
    {
      id: 5,
      src: '/assets/ice_4.jpeg',
      title: 'Match Day Team Lineup',
      desc: 'Thunder Titans athletes assembled together on match day, showcasing brotherhood and collective spirit.',
      category: 'Football',
      tag: 'authentic',
      location: 'Tangail Regional Pitch',
    },
    {
      id: 6,
      src: '/assets/mail.jpeg',
      title: 'Official Club Crest & Poster',
      desc: 'Official promotional poster and crest of Thunder Titans sports club since 2011.',
      category: 'Branding',
      tag: 'authentic',
      location: 'Silimpur, Tangail',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1531415074868-036b107e775a?q=80&w=1200&auto=format&fit=crop',
      title: 'Cricket Match Day Action',
      desc: 'Power hitting and focus on the pitch during an electric weekend cricket tournament.',
      category: 'Cricket',
      tag: 'sports',
      location: 'Tangail Cricket Fixture',
    },
  ]

  const filters = [
    { label: 'All Photographs', value: 'all' },
    { label: 'Authentic Club Photos', value: 'authentic' },
    { label: 'Sports Action', value: 'sports' },
  ]

  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true
    return item.tag === activeFilter
  })

  const openLightboxAt = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))
  }

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))
  }

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-titan-surface overflow-hidden border-t border-titan-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-titan-dark border border-titan-orange/40 text-xs font-oswald uppercase tracking-widest text-titan-orange mb-4">
              <Camera className="w-3.5 h-3.5 text-titan-lime" />
              <span>VISUAL ARCHIVE</span>
            </div>

            <h2 className="font-bebas text-5xl sm:text-7xl uppercase tracking-tight text-white leading-none">
              THE TITANS <span className="text-titan-orange">IN ACTION.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-4 py-2 text-xs font-oswald uppercase tracking-widest transition-all rounded-full ${
                  activeFilter === f.value
                    ? 'bg-titan-orange text-titan-black font-bold shadow-md'
                    : 'bg-titan-dark text-gray-300 hover:text-white border border-titan-border'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isSpecial = item.tag === 'authentic'
            return (
              <div
                key={item.id}
                onClick={() => openLightboxAt(index)}
                className={`group relative rounded-2xl overflow-hidden bg-titan-card border cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  isSpecial 
                    ? 'border-titan-orange/40 hover:border-titan-orange' 
                    : 'border-titan-border hover:border-titan-lime'
                }`}
              >
                <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-black">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-titan-black via-titan-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className={`px-2.5 py-1 rounded text-[11px] font-oswald uppercase tracking-wider ${
                      isSpecial 
                        ? 'bg-titan-orange text-titan-black font-bold' 
                        : 'bg-titan-black/80 text-titan-lime border border-titan-lime/30'
                    }`}>
                      {item.category}
                    </span>

                    <span className="p-2 rounded-full bg-titan-black/80 text-white group-hover:text-titan-orange transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bebas text-2xl text-white tracking-wide uppercase group-hover:text-titan-orange transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-2 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Lightbox Component */}
      <Lightbox
        images={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  )
}
