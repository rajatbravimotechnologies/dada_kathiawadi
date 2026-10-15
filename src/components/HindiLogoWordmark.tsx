import React from 'react';

interface HindiLogoWordmarkProps {
  className?: string;
  idPrefix?: string;
}

export const HindiLogoWordmark: React.FC<HindiLogoWordmarkProps> = ({
  className = 'h-6 sm:h-7.5 w-auto',
  idPrefix = 'nav',
}) => {
  const goldGradId = `${idPrefix}-dadaGoldGradient`;
  const highlightGradId = `${idPrefix}-dadaHighlightGradient`;
  const shadowFilterId = `${idPrefix}-dadaSignboard3D`;

  return (
    <svg
      viewBox="0 0 205 48"
      className={`${className} overflow-visible select-none shrink-0`}
      preserveAspectRatio="xMinYMid meet"
      role="img"
      aria-label="दादा काठियावाड़ी"
    >
      <defs>
        {/* Main warm golden-yellow gradient inspired by original brand logo */}
        <linearGradient id={goldGradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8B8" />
          <stop offset="25%" stopColor="#FFDE59" />
          <stop offset="55%" stopColor="#FFC928" />
          <stop offset="82%" stopColor="#F5A900" />
          <stop offset="100%" stopColor="#C76F00" />
        </linearGradient>

        {/* Subtle upper inner cream highlight along top edges */}
        <linearGradient id={highlightGradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF0" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#FFF3A0" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#FFC928" stopOpacity="0" />
        </linearGradient>

        {/* Deep 3D embossed signboard shadow filter */}
        <filter id={shadowFilterId} x="-15%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="1.2" stdDeviation="0" floodColor="#351307" floodOpacity="1" />
          <feDropShadow dx="0" dy="2.4" stdDeviation="0" floodColor="#54180D" floodOpacity="1" />
          <feDropShadow dx="0" dy="3.8" stdDeviation="0.8" floodColor="#15100D" floodOpacity="0.95" />
          <feDropShadow dx="0" dy="5.2" stdDeviation="2" floodColor="#000000" floodOpacity="0.6" />
        </filter>
      </defs>

      <g filter={`url(#${shadowFilterId})`}>
        {/* Layer 1: Deep Maroon 3D Bottom Extrusion (#54180D) */}
        <text
          x="3"
          y="32"
          fontFamily="'Baloo 2', 'Poppins', sans-serif"
          fontWeight="800"
          fontSize="28"
          fill="#54180D"
          stroke="#54180D"
          strokeWidth="4.8"
          strokeLinejoin="round"
          strokeLinecap="round"
          dy="1.8"
        >
          दादा काठियावाड़ी
        </text>

        {/* Layer 2: Thick Dark Brown Outer Contour Outline (#351307) */}
        <text
          x="3"
          y="32"
          fontFamily="'Baloo 2', 'Poppins', sans-serif"
          fontWeight="800"
          fontSize="28"
          fill="#351307"
          stroke="#351307"
          strokeWidth="3.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          दादा काठियावाड़ी
        </text>

        {/* Layer 3: Warm Golden-Yellow Gradient Fill (#FFF3A0 -> #FFC928 -> #F5A900) */}
        <text
          x="3"
          y="32"
          fontFamily="'Baloo 2', 'Poppins', sans-serif"
          fontWeight="800"
          fontSize="28"
          fill={`url(#${goldGradId})`}
          stroke="#E69500"
          strokeWidth="0.3"
          strokeLinejoin="round"
        >
          दादा काठियावाड़ी
        </text>

        {/* Layer 4: Upper Edge Cream Highlight along shirorekha and top curves */}
        <text
          x="3"
          y="32"
          fontFamily="'Baloo 2', 'Poppins', sans-serif"
          fontWeight="800"
          fontSize="28"
          fill="none"
          stroke={`url(#${highlightGradId})`}
          strokeWidth="0.8"
          strokeLinejoin="round"
          dy="-0.5"
        >
          दादा काठियावाड़ी
        </text>
      </g>
    </svg>
  );
};
