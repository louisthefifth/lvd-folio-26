import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&'

export default function TextScramble({ text, className = '' }) {
  const [display, setDisplay] = useState(text)
  const frameRef = useRef()

  useEffect(() => {
    let frame = 0
    const duration = 18
    const originalText = text

    const animate = () => {
      if (frame >= duration) {
        setDisplay(originalText)
        return
      }

      const scrambled = originalText.split('').map((char, i) => {
        if (char === ' ') return ' '
        if (frame > (i / originalText.length) * duration) return char
        return CHARS[Math.floor(Math.random() * CHARS.length)]
      }).join('')

      setDisplay(scrambled)
      frame++
      frameRef.current = requestAnimationFrame(animate)
    }

    // Small delay before starting
    const timeout = setTimeout(() => {
      frameRef.current = requestAnimationFrame(animate)
    }, 300)

    return () => {
      clearTimeout(timeout)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [text])

  return <span className={className}>{display}</span>
}