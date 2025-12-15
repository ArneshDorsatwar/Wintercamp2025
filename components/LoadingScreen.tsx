'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Simulate loading time and ensure page is ready
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 500) // Wait for fade out animation
    }, 1500) // Show loading screen for at least 1.5 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-winter-blue via-blue-50 to-white transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated Snowflakes Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-30"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${-10 + (i * 3) % 20}%`,
              fontSize: `${1 + (i % 3)}rem`,
              animation: `snowfall ${10 + (i % 10)}s linear infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Animated Snowflake */}
        <div className="mb-6 flex justify-center">
          <div className="text-8xl animate-bounce" style={{ animationDuration: '2s' }}>
            ❄️
          </div>
        </div>

        {/* BestBrains Text */}
        <h1 className="text-5xl md:text-6xl font-bold text-winter-darkBlue mb-4">
          BestBrains
        </h1>
        
        {/* Winter Camp Text */}
        <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-8">
          Winter Camp
        </p>

        {/* Loading Spinner */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          <div className="w-3 h-3 bg-winter-darkBlue rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-winter-darkBlue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-winter-darkBlue rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-600 mt-6 text-lg">Loading...</p>
      </div>
    </div>
  )
}

