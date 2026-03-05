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
      className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      fill="none"
    >
      {/* Main treasure map path */}
      <path
        ref={pathRef}
        d="M 120 80
           L 120 180
           Q 120 200, 140 200
           L 600 200
           Q 620 200, 620 220
           L 620 320
           Q 620 340, 600 340
           L 200 340
           Q 180 340, 180 360
           L 180 480
           Q 180 500, 200 500
           L 900 500
           Q 920 500, 920 520
           L 920 600
           Q 920 620, 900 620
           L 400 620
           Q 380 620, 380 640
           L 380 740
           Q 380 760, 400 760
           L 720 760
           L 720 860"
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
      <g opacity="0.25" transform="translate(720, 860)">
        <line x1="-6" y1="-6" x2="6" y2="6" stroke="white" strokeWidth="1.5" />
        <line x1="6" y1="-6" x2="-6" y2="6" stroke="white" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="10" stroke="white" strokeWidth="1" fill="none" />
      </g>
    </svg>
  )
}
