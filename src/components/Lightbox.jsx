import React, { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react'
import { LightningBolt } from './LightningIcon'

export default function Lightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onPrev, onNext])

  if (!isOpen || images.length === 0 || currentIndex === null) return null

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl transition-all duration-300 animate-fadeIn">
      
      {/* Top Bar with Controls */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-2">
          <LightningBolt className="w-5 h-5 text-titan-orange animate-pulse" />
          <span className="font-bebas text-xl text-white tracking-widest">
            TITANS GALLERY <span className="text-titan-orange">[{currentIndex + 1} / {images.length}]</span>
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-titan-dark/90 hover:bg-titan-orange hover:text-titan-black text-white border border-titan-border transition-colors duration-200"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-titan-dark/80 hover:bg-titan-orange hover:text-titan-black text-white border border-titan-border transition-all duration-200 hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-titan-dark/80 hover:bg-titan-orange hover:text-titan-black text-white border border-titan-border transition-all duration-200 hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center Image Container */}
      <div className="relative max-w-5xl max-h-[80vh] mx-auto p-4 flex flex-col items-center justify-center">
        <div className="relative rounded-xl overflow-hidden border border-titan-border/60 shadow-2xl bg-titan-card max-h-[70vh]">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-h-[70vh] w-auto object-contain mx-auto transition-transform duration-300"
          />
        </div>

        {/* Caption bar */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-titan-dark text-xs font-oswald uppercase tracking-widest text-titan-lime mb-2 border border-titan-lime/30">
            <Tag className="w-3 h-3" />
            <span>{currentImage.category}</span>
          </div>

          <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
            {currentImage.title}
          </h3>

          <p className="text-gray-300 text-xs sm:text-sm mt-1">
            {currentImage.desc}
          </p>

          {currentImage.location && (
            <div className="flex items-center justify-center gap-1.5 text-titan-orange text-xs font-oswald uppercase tracking-wider mt-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>{currentImage.location}</span>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}
