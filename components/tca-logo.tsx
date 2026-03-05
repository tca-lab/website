export function TcaLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Globe with arrows */}
      <g transform="translate(10, 5)">
        {/* Globe circle */}
        <circle cx="35" cy="35" r="28" stroke="currentColor" strokeWidth="2.5" fill="none" />
        {/* Horizontal ellipse */}
        <ellipse cx="35" cy="35" rx="28" ry="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Vertical ellipse */}
        <ellipse cx="35" cy="35" rx="12" ry="28" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Center lines */}
        <line x1="7" y1="35" x2="63" y2="35" stroke="currentColor" strokeWidth="1" />
        <line x1="35" y1="7" x2="35" y2="63" stroke="currentColor" strokeWidth="1" />

        {/* Arrow top-right - thicker, more visible */}
        <path
          d="M55 10 C68 22, 68 48, 55 60"
          stroke="currentColor"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <polygon points="58,6 56,16 51,8" fill="currentColor" />

        {/* Arrow bottom-left - thicker, more visible */}
        <path
          d="M15 60 C2 48, 2 22, 15 10"
          stroke="currentColor"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <polygon points="12,64 14,54 19,62" fill="currentColor" />
      </g>

      {/* TCA GRUP text */}
      <text
        x="90"
        y="52"
        fill="currentColor"
        fontFamily="'Geist', 'Helvetica Neue', 'Arial', sans-serif"
        fontWeight="700"
        fontSize="42"
        letterSpacing="3"
      >
        TCA GRUP
      </text>
    </svg>
  )
}
