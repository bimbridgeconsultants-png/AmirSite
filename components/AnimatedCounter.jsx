'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const AnimatedCounter = ({ 
  value, 
  duration = 2000, 
  delay = 0,
  className = "",
  prefix = "",
  suffix = "",
  label = "",
  labelClassName = ""
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const rafRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (!isInView) return

    const startValue = 0
    const endValue = Number(value) || 0

    // If value is already 0, set and return (no animation needed)
    if (endValue === 0) {
      setCount(0)
      return
    }

    let startTime = null

    const animate = (now) => {
      if (startTime === null) startTime = now
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // easeOut cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut)

      setCount(currentValue)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        // ensure exact final value
        setCount(endValue)
      }
    }

    // start after the requested delay
    timeoutRef.current = setTimeout(() => {
      // start animation loop
      rafRef.current = requestAnimationFrame(animate)
    }, delay)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isInView, value, duration, delay])

  return (
    <div ref={ref} className={`text-center group ${className}`}>
      <div className="relative">
        <div className={`text-4xl md:text-5xl font-bold text-blue-400 mb-2 transition-all duration-500 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {prefix}{count.toLocaleString()}{suffix}
        </div>
        {label && (
          <div className={`text-gray-400 text-lg transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } ${labelClassName}`} style={{ transitionDelay: '200ms' }}>
            {label}
          </div>
        )}
      </div>
    </div>
  )
}

export default AnimatedCounter
