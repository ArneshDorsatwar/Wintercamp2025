'use client'

import { useEffect, useState } from 'react'

interface HeroAnimationProps {
  children: React.ReactNode
  delay?: number
}

export default function HeroAnimation({ children, delay = 0 }: HeroAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after loading screen fades out
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000 + delay) // 2 seconds for loading screen + delay

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  )
}

