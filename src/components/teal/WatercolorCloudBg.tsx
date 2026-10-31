import React from 'react';

interface WatercolorCloudBgProps {
  className?: string;
  opacity?: number;
}

export const WatercolorCloudBg: React.FC<WatercolorCloudBgProps> = ({ 
  className = '', 
  opacity = 1 
}) => {
  return (
    <div 
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none ${className}`}
      style={{ opacity }}
    >
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1000 1600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Watercolor Paper Texture Filter */}
          <filter id="watercolor-paper" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" result="noise" />
            <feDiffuseLighting in="noise" lightingColor="#ffffff" surfaceScale="1.4" result="light">
              <feDistantLight azimuth="55" elevation="65" />
            </feDiffuseLighting>
            <feBlend mode="multiply" in="SourceGraphic" in2="light" />
          </filter>

          {/* Organic Watercolor Bleed / Edge Distortion Filter */}
          <filter id="watercolor-bleed" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="3" result="bleedNoise" />
            <feDisplacementMap in="SourceGraphic" in2="bleedNoise" scale="32" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feGaussianBlur in="displaced" stdDeviation="16" />
          </filter>

          <filter id="soft-wash" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" result="washNoise" />
            <feDisplacementMap in="SourceGraphic" in2="washNoise" scale="22" result="displacedWash" />
            <feGaussianBlur in="displacedWash" stdDeviation="28" />
          </filter>

          {/* Radial Watercolor Gradients */}
          <radialGradient id="grad-top-blue" cx="45%" cy="20%" r="50%">
            <stop offset="0%" stopColor="#76a8d6" stopOpacity="0.75" />
            <stop offset="45%" stopColor="#93bde3" stopOpacity="0.55" />
            <stop offset="75%" stopColor="#c5def4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#eef6fc" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="grad-mid-left-blue" cx="25%" cy="48%" r="42%">
            <stop offset="0%" stopColor="#558fc3" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#6ea3d2" stopOpacity="0.70" />
            <stop offset="65%" stopColor="#9cc2e5" stopOpacity="0.45" />
            <stop offset="90%" stopColor="#d4e7f7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="grad-center-wash" cx="55%" cy="52%" r="48%">
            <stop offset="0%" stopColor="#679ecf" stopOpacity="0.65" />
            <stop offset="40%" stopColor="#89b6dc" stopOpacity="0.50" />
            <stop offset="70%" stopColor="#b4d4ee" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="grad-bottom-blue" cx="30%" cy="82%" r="45%">
            <stop offset="0%" stopColor="#4f8bbd" stopOpacity="0.80" />
            <stop offset="35%" stopColor="#6da3d1" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#9ec4e5" stopOpacity="0.40" />
            <stop offset="95%" stopColor="#d6e8f7" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="grad-bottom-right" cx="78%" cy="88%" r="40%">
            <stop offset="0%" stopColor="#5e96c8" stopOpacity="0.70" />
            <stop offset="45%" stopColor="#88b5dc" stopOpacity="0.45" />
            <stop offset="80%" stopColor="#c2ddf3" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="grad-top-right-light" cx="80%" cy="25%" r="35%">
            <stop offset="0%" stopColor="#b8d7f1" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#d9ecf9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Paper Background Base */}
        <rect width="1000" height="1600" fill="#f8fbfe" />

        {/* Textured Soft Wash Group with Bleed Filter */}
        <g filter="url(#watercolor-paper)">
          {/* Top Atmospheric Watercolor Blooms */}
          <ellipse cx="480" cy="240" rx="420" ry="260" fill="url(#grad-top-blue)" filter="url(#watercolor-bleed)" />
          <ellipse cx="780" cy="320" rx="300" ry="240" fill="url(#grad-top-right-light)" filter="url(#soft-wash)" />

          {/* Organic Mid-Left Large Cloud Wash */}
          <path
            d="M 50,420 C 120,320 320,340 450,440 C 580,540 520,720 380,780 C 240,840 80,780 40,660 Z"
            fill="url(#grad-mid-left-blue)"
            filter="url(#watercolor-bleed)"
          />

          {/* Center Cloud Wash */}
          <ellipse cx="580" cy="680" rx="360" ry="340" fill="url(#grad-center-wash)" filter="url(#soft-wash)" />

          {/* Additional Layered Bloom Circles */}
          <circle cx="280" cy="540" r="260" fill="#7baad4" opacity="0.45" filter="url(#watercolor-bleed)" />
          <circle cx="380" cy="460" r="220" fill="#6299cb" opacity="0.38" filter="url(#watercolor-bleed)" />
          <circle cx="620" cy="590" r="240" fill="#8cb7dc" opacity="0.40" filter="url(#soft-wash)" />
          <circle cx="480" cy="740" r="280" fill="#6fa4d2" opacity="0.42" filter="url(#watercolor-bleed)" />

          {/* Lower Deep Blue Watercolor Bloom Pool */}
          <path
            d="M 80,1050 C 150,920 380,940 520,1080 C 660,1220 580,1460 380,1500 C 180,1540 60,1380 40,1220 Z"
            fill="url(#grad-bottom-blue)"
            filter="url(#watercolor-bleed)"
          />

          <circle cx="340" cy="1200" r="320" fill="#5892c5" opacity="0.55" filter="url(#watercolor-bleed)" />
          <circle cx="420" cy="1320" r="280" fill="#6ba0ce" opacity="0.50" filter="url(#watercolor-bleed)" />
          <circle cx="720" cy="1340" r="300" fill="url(#grad-bottom-right)" filter="url(#watercolor-bleed)" />
          <circle cx="820" cy="1240" r="240" fill="#7faed7" opacity="0.45" filter="url(#soft-wash)" />

          {/* Organic Fine Splashes and Pigment Edges */}
          <circle cx="180" cy="480" r="140" fill="#528dc1" opacity="0.35" filter="url(#watercolor-bleed)" />
          <circle cx="650" cy="420" r="110" fill="#99c3e6" opacity="0.40" filter="url(#soft-wash)" />
          <circle cx="300" cy="980" r="160" fill="#6197c7" opacity="0.45" filter="url(#watercolor-bleed)" />
          <circle cx="560" cy="1160" r="180" fill="#7daed6" opacity="0.40" filter="url(#watercolor-bleed)" />
        </g>

        {/* Subtle Fine Paper Grain Texture on Top */}
        <rect width="1000" height="1600" fill="#ffffff" opacity="0.08" style={{ mixBlendMode: 'overlay' }} />
      </svg>
    </div>
  );
};
