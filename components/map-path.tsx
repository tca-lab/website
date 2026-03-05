"use client"

import { useEffect, useRef, useState } from "react"

export function MapPath() {
  const pathRef = useRef<SVGPathElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [pathLength, setPathLength] = useState(0)
  const [dashOffset, setDashOffset] = useState(0)

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength()
      setPathLength(length)
      setDashOffset(length)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!pathRef.current || pathLength === 0) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.min(scrollTop / docHeight, 1)
      const newOffset = pathLength * (1 - scrollPercent)
      setDashOffset(newOffset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathLength])

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[10]"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      fill="none"
    >
      {/* Main treasure map path */}
      <path
        ref={pathRef}
        d="M 120 90
           L 120 220
           Q 120 260, 320 260
           L 720 260
           Q 980 260, 980 320
           L 980 380
           Q 900 420, 760 420
           L 560 420
           Q 420 420, 420 480
           L 420 520
           Q 420 560, 640 560
           L 880 560
           Q 1100 560, 1180 520
           L 1220 620
           L 1220 700
           Q 1220 740, 900 720
           Q 600 700, 260 620
           L 200 640
           Q 160 680, 220 720
           Q 160 760, 220 800
           Q 280 840, 360 840
           Q 420 840, 480 860"
        stroke="white"
        strokeWidth="1"
        strokeDasharray="8 8"
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        opacity="0.15"
        style={{
          strokeDasharray: `${pathLength}`,
          strokeDashoffset: dashOffset,
          transition: "stroke-dashoffset 0.05s linear",
        }}
      />

      {/* Glowing dot at the drawing tip */}
      {pathRef.current && pathLength > 0 && (
        <>
          {(() => {
            const drawn = pathLength - dashOffset
            if (drawn <= 0 || !pathRef.current) return null
            const point = pathRef.current.getPointAtLength(Math.min(drawn, pathLength))
            return (
              <circle
                cx={point.x}
                cy={point.y}
                r="3"
                fill="white"
                opacity="0.5"
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.7;0.3"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
            )
          })()}
        </>
      )}

      {/* Start marker - small circle at logo */}
      <circle cx="120" cy="80" r="4" fill="white" opacity="0.2" />
      <circle cx="120" cy="80" r="2" fill="white" opacity="0.4" />

      {/* End marker - small "X" at mail */}
      <g opacity="0.25" transform="translate(480, 860)">
        <line x1="-6" y1="-6" x2="6" y2="6" stroke="white" strokeWidth="1.5" />
        <line x1="6" y1="-6" x2="-6" y2="6" stroke="white" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="10" stroke="white" strokeWidth="1" fill="none" />
      </g>
    </svg>
  )
}
