import React from 'react'
import { X, CheckCircle2, Calendar, MapPin, Zap } from 'lucide-react'
import { LightningBolt } from './LightningIcon'

export default function SportModal({ sport, isOpen, onClose }) {
  if (!isOpen || !sport) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-titan-dark border-2 border-titan-orange/60 rounded-2xl overflow-hidden shadow-2xl z-10">
        
        {/* Header image banner */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img 
            src={sport.image} 
            alt={sport.name} 
            className="w-full h-full object-cover filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-titan-dark via-titan-dark/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:text-titan-orange border border-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6">
            <span className="font-bebas text-titan-orange text-lg tracking-widest">
              DISCIPLINE #{sport.id}
            </span>
            <h3 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide uppercase">
              {sport.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="font-oswald text-lg text-titan-lime uppercase tracking-wider mb-2 flex items-center gap-2">
              <LightningBolt className="w-4 h-4 text-titan-lime" />
              Philosophy & Focus
            </h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {sport.extendedDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-titan-card border border-titan-border">
              <div className="flex items-center gap-2 text-titan-orange font-oswald text-sm uppercase tracking-wider mb-2">
                <Calendar className="w-4 h-4" />
                <span>Training & Sessions</span>
              </div>
              <p className="text-xs text-gray-300">
                {sport.schedule}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-titan-card border border-titan-border">
              <div className="flex items-center gap-2 text-titan-lime font-oswald text-sm uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Venue & Field</span>
              </div>
              <p className="text-xs text-gray-300">
                Silimpur Village Ground, Tangail District
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-oswald text-sm uppercase tracking-wider text-titan-white mb-3">
              Key Competencies & Program Highlights:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sport.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-titan-orange flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-titan-border flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-titan-orange text-titan-black font-bebas text-lg tracking-wider hover:bg-white transition-colors"
            >
              CLOSE OVERVIEW
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
