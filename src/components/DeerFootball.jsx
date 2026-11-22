import React from 'react'

export default function DeerFootball({ className = "w-72 h-72 sm:w-96 sm:h-96" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      
      {/* Dynamic Velocity / Speed Trails (Streaming towards bottom-left) */}
      <svg 
        className="absolute -bottom-16 -left-20 sm:-bottom-24 sm:-left-28 w-[140%] h-[140%] pointer-events-none z-0" 
        viewBox="0 0 400 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="orangeTrail1" x1="0.8" y1="0.2" x2="0.1" y2="0.9">
            <stop offset="0%" stopColor="#F58216" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#ff9a3c" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#D7FF4D" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#F58216" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="orangeTrail2" x1="0.75" y1="0.3" x2="0.05" y2="0.95">
            <stop offset="0%" stopColor="#D7FF4D" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#F58216" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#F58216" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#111111" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="glowG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F58216" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D7FF4D" stopOpacity="0" />
          </linearGradient>

          <filter id="blurTrail" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Ambient speed glow */}
        <ellipse cx="220" cy="180" rx="140" ry="110" fill="url(#glowG)" filter="url(#blurTrail)" />

        {/* Stream 1 - Core dense fiery trail */}
        <path 
          d="M 240 180 C 220 230, 160 300, 40 370 C 130 290, 190 230, 210 180 Z" 
          fill="url(#orangeTrail1)" 
        />

        {/* Stream 2 - Electric neon highlight */}
        <path 
          d="M 260 170 C 240 230, 180 320, 70 395 C 150 310, 210 240, 230 170 Z" 
          fill="url(#orangeTrail2)" 
        />

        {/* Stream 3 - Thin high-velocity streaks */}
        <path d="M 275 160 C 240 240, 190 320, 95 385" stroke="#D7FF4D" strokeWidth="3" strokeLinecap="round" strokeDasharray="16 10" opacity="0.75" />
        <path d="M 250 190 C 210 260, 150 340, 50 390" stroke="#F58216" strokeWidth="4" strokeLinecap="round" opacity="0.65" />
        <path d="M 230 175 C 190 235, 140 295, 30 350" stroke="#ffaa44" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M 285 185 C 260 250, 200 330, 120 390" stroke="#F58216" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <path d="M 220 205 C 180 270, 120 340, 35 375" stroke="#D7FF4D" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

        {/* Speed Sparks / Embers */}
        <circle cx="160" cy="280" r="3" fill="#D7FF4D" opacity="0.8" />
        <circle cx="120" cy="320" r="2.5" fill="#F58216" opacity="0.9" />
        <circle cx="90" cy="350" r="3.5" fill="#FFA500" opacity="0.7" />
        <circle cx="140" cy="310" r="2" fill="#FFFFFF" opacity="0.9" />
        <circle cx="70" cy="370" r="2" fill="#D7FF4D" opacity="0.8" />
      </svg>

      {/* Realistic 3D DEER Football */}
      <div className="relative z-10 w-full h-full transform -rotate-12 hover:rotate-0 transition-transform duration-500 ease-out">
        
        {/* Outer Glow around the Ball */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-titan-orange/40 via-titan-lime/20 to-transparent blur-xl pointer-events-none" />

        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
        >
          <defs>
            {/* 3D Ball Sphere Gradient */}
            <radialGradient id="ballShading" cx="38%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#F0F0F0" />
              <stop offset="75%" stopColor="#CCCCCC" />
              <stop offset="90%" stopColor="#888888" />
              <stop offset="100%" stopColor="#2A2A2A" />
            </radialGradient>

            {/* Specular Highlight */}
            <radialGradient id="specularGlow" cx="35%" cy="30%" r="35%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>

            {/* Fiery rim lighting from motion trail */}
            <linearGradient id="rimLight" x1="0.2" y1="0.8" x2="0.8" y2="0.2">
              <stop offset="0%" stopColor="#F58216" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#D7FF4D" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            <filter id="leatherTexture" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0" />
              <feComposite in2="SourceGraphic" in="gl" operator="in" />
            </filter>
          </defs>

          {/* Base Sphere */}
          <circle cx="100" cy="100" r="94" fill="url(#ballShading)" />
          
          {/* Seams & Leather Panels Group */}
          <g stroke="#3A3A3A" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
            
            {/* Center Pentagon (Slightly tilted) */}
            <polygon 
              points="100,68 126,86 116,117 84,117 74,86" 
              fill="#181818" 
              stroke="#2A2A2A" 
              strokeWidth="2"
            />

            {/* Top Pentagon */}
            <polygon 
              points="100,10 118,22 110,42 90,42 82,22" 
              fill="#1E1E1E" 
              stroke="#2A2A2A" 
              strokeWidth="1.5"
            />

            {/* Top-Right Pentagon */}
            <polygon 
              points="165,55 186,68 180,92 155,95 146,72" 
              fill="#1B1B1B" 
              stroke="#2A2A2A" 
              strokeWidth="1.5"
            />

            {/* Bottom-Right Pentagon */}
            <polygon 
              points="155,145 178,135 185,155 168,178 145,170" 
              fill="#1A1A1A" 
              stroke="#2A2A2A" 
              strokeWidth="1.5"
            />

            {/* Bottom-Left Pentagon */}
            <polygon 
              points="45,145 68,170 52,185 30,170 24,148" 
              fill="#1E1E1E" 
              stroke="#2A2A2A" 
              strokeWidth="1.5"
            />

            {/* Top-Left Pentagon */}
            <polygon 
              points="35,55 54,72 45,95 20,92 14,68" 
              fill="#1C1C1C" 
              stroke="#2A2A2A" 
              strokeWidth="1.5"
            />

            {/* Connecting Seam Lines from Center Pentagon */}
            <line x1="100" y1="68" x2="100" y2="42" />
            <line x1="126" y1="86" x2="146" y2="72" />
            <line x1="116" y1="117" x2="145" y2="148" />
            <line x1="84" y1="117" x2="58" y2="148" />
            <line x1="74" y1="86" x2="54" y2="72" />

            {/* Outer panel seams to sphere edge */}
            <line x1="110" y1="42" x2="146" y2="72" />
            <line x1="90" y1="42" x2="54" y2="72" />
            <line x1="155" y1="95" x2="155" y2="145" />
            <line x1="116" y1="117" x2="100" y2="162" />
            <line x1="84" y1="117" x2="100" y2="162" />
            <line x1="100" y1="162" x2="100" y2="194" />
            <line x1="45" y1="95" x2="45" y2="145" />
          </g>

          {/* DEER Brand Lettering on the White Panel Above/Below Center */}
          <g transform="rotate(5 100 100)">
            {/* The Authentic "DEER" Brand Arc */}
            <text 
              x="100" 
              y="142" 
              textAnchor="middle" 
              fontFamily="'Impact', 'Arial Black', sans-serif" 
              fontSize="17" 
              fontWeight="900" 
              letterSpacing="2.5" 
              fill="#111111"
              stroke="#FFFFFF"
              strokeWidth="0.4"
            >
              DEER
            </text>

            {/* Small Official Match Ball Marking */}
            <text 
              x="100" 
              y="152" 
              textAnchor="middle" 
              fontFamily="'Arial', sans-serif" 
              fontSize="5" 
              fontWeight="bold" 
              letterSpacing="1" 
              fill="#444444"
            >
              ★ FIFA QUALITY SPEC ★
            </text>
          </g>

          {/* Fiery Rim Light from Speed Trail (Bottom-Left) */}
          <circle cx="100" cy="100" r="94" fill="url(#rimLight)" />

          {/* 3D Specular Highlight on Ball Top-Left */}
          <circle cx="70" cy="65" r="50" fill="url(#specularGlow)" />
        </svg>

      </div>
    </div>
  )
}
