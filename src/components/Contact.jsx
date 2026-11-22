import React, { useState } from 'react'
import { Phone, MapPin, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react'
import { LightningBolt } from './LightningIcon'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    sport: 'Cricket',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    setSubmitted(true)
    setTimeout(() => {
      // Keep state or allow new inquiry
    }, 4000)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-titan-black overflow-hidden border-t border-titan-dark">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-titan-orange/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-titan-lime/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-titan-dark border border-titan-orange/40 text-xs font-oswald uppercase tracking-widest text-titan-orange mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-titan-lime" />
            <span>GET IN TOUCH WITH THUNDER TITANS</span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-7xl uppercase tracking-tight text-white leading-none">
            LET'S <span className="text-titan-orange">CONNECT.</span>
          </h2>

          <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl font-light">
            Whether you want to join our training squads, arrange a friendly match, or support our community initiatives in Silimpur, we welcome you with open arms.
          </p>
        </div>

        {/* Contact Grid: Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Official Information Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Club Identity Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-titan-card border border-titan-border">
              <span className="text-xs font-oswald uppercase tracking-widest text-titan-lime font-bold block mb-1">
                Official Sports Club
              </span>
              <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wider uppercase mb-3">
                THUNDER TITANS
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                A community-driven sports club formed by the passionate youth of Silimpur village, competing across Cricket, Football, and Badminton.
              </p>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-titan-card border border-titan-border flex items-start gap-4 hover:border-titan-orange transition-colors">
              <div className="p-3 rounded-xl bg-titan-dark text-titan-orange border border-titan-border flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-oswald text-sm uppercase tracking-widest text-titan-muted font-bold">
                  Club Location
                </h4>
                <p className="font-oswald text-xl text-white mt-1">
                  Silimpur, Tangail
                </p>
                <p className="text-xs text-gray-400">
                  Dhaka Division, Bangladesh
                </p>
              </div>
            </div>

            {/* Phone Card with Clickable tel: */}
            <a 
              href="tel:01748418680" 
              className="p-6 rounded-2xl bg-titan-card border border-titan-border flex items-start gap-4 hover:border-titan-lime hover:shadow-glow-lime transition-all duration-300 group block"
            >
              <div className="p-3 rounded-xl bg-titan-dark text-titan-lime border border-titan-border flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-oswald text-sm uppercase tracking-widest text-titan-muted font-bold flex items-center gap-1.5">
                  Direct Contact Number
                  <span className="text-[10px] text-titan-lime bg-titan-dark px-2 py-0.5 rounded">Call or WhatsApp</span>
                </h4>
                <p className="font-bebas text-3xl text-white group-hover:text-titan-lime transition-colors tracking-widest mt-1">
                  01748418680
                </p>
                <p className="text-xs text-gray-400">
                  Tap to call directly from your device
                </p>
              </div>
            </a>

            {/* Social Links Cards (Facebook & Instagram) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Facebook Link */}
              <a
                href="https://www.facebook.com/share/1CaFDTkbMd/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-titan-card border border-titan-border hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1877F2]/20 flex items-center justify-center text-[#1877F2]">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-oswald text-xs uppercase tracking-wider text-titan-muted">Facebook</div>
                    <div className="font-bebas text-lg text-white group-hover:text-[#1877F2] transition-colors">
                      Official Page
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </a>

              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/thunder_titans_14?mdxt=MXZtZXV6dzc5cXd2bQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-titan-card border border-titan-border hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E1306C]/20 flex items-center justify-center text-[#E1306C]">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-oswald text-xs uppercase tracking-wider text-titan-muted">Instagram</div>
                    <div className="font-bebas text-lg text-white group-hover:text-[#E1306C] transition-colors">
                      @thunder_titans_14
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </a>

            </div>

          </div>

          {/* Interactive Connect / Join Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-titan-card border border-titan-border p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-titan-orange/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="mb-6">
                <span className="text-xs font-oswald uppercase tracking-widest text-titan-orange font-semibold block mb-1">
                  Membership & Inquiry Form
                </span>
                <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase">
                  BECOME PART OF THUNDER TITANS
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Fill in your details below and our club team in Silimpur will reach out to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-titan-dark border border-titan-lime/60 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-titan-lime/20 text-titan-lime flex items-center justify-center mx-auto shadow-glow-lime">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-bebas text-3xl text-white uppercase tracking-wider">
                    MESSAGE RECEIVED, TITAN!
                  </h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thank you, <strong className="text-titan-white">{formData.name}</strong>. Your inquiry for <strong className="text-titan-orange">{formData.sport}</strong> has been logged. We will contact you at <strong className="text-titan-lime">{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', phone: '', sport: 'Cricket', message: '' })
                    }}
                    className="px-6 py-2.5 bg-titan-dark text-xs font-oswald tracking-widest uppercase text-titan-orange border border-titan-orange hover:bg-titan-orange hover:text-titan-black transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-oswald uppercase tracking-widest text-gray-300 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tanvir Ahmed"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-titan-dark border border-titan-border text-white placeholder-gray-500 focus:outline-none focus:border-titan-orange transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-oswald uppercase tracking-widest text-gray-300 mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 01748418680"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-titan-dark border border-titan-border text-white placeholder-gray-500 focus:outline-none focus:border-titan-orange transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-oswald uppercase tracking-widest text-gray-300 mb-2">
                      Primary Sport of Interest
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['Cricket', 'Football', 'Badminton'].map((sport) => (
                        <button
                          key={sport}
                          type="button"
                          onClick={() => setFormData({ ...formData, sport })}
                          className={`py-2.5 px-3 rounded-lg text-xs font-oswald uppercase tracking-wider font-semibold border transition-all text-center ${
                            formData.sport === sport
                              ? 'bg-titan-orange text-titan-black border-titan-orange shadow-glow-orange font-bold'
                              : 'bg-titan-dark text-gray-300 border-titan-border hover:border-gray-500'
                          }`}
                        >
                          {sport}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-oswald uppercase tracking-widest text-gray-300 mb-2">
                      Your Message / Playing Experience
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your sporting interests or query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-titan-dark border border-titan-border text-white placeholder-gray-500 focus:outline-none focus:border-titan-orange transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-titan-orange text-titan-black font-bebas text-2xl tracking-wider uppercase shadow-glow-orange hover:bg-white hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>SEND INQUIRY TO THUNDER TITANS</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
