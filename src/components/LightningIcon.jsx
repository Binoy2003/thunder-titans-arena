import React from 'react'

export function LightningBolt({ className = "w-5 h-5", color = "#D7FF4D" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z" 
        fill={color} 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  )
}

export function ElectricBadge({ text = "THUNDER TITANS", iconColor = "#D7FF4D" }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-titan-dark/90 border border-titan-orange/30 text-xs font-semibold uppercase tracking-wider text-titan-white backdrop-blur-md">
      <LightningBolt className="w-3.5 h-3.5 animate-pulse" color={iconColor} />
      <span>{text}</span>
    </div>
  )
}
