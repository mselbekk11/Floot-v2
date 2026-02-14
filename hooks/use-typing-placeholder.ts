'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

const sentences = [
  'Build me a tool for...',
  'Build me a SaaS product for...',
  'Build me a dashboard for...',
  'Build me a marketplace for...',
  'Build me a AI app for...',
]

const commonPrefix = 'Build me a '

interface UseTypingPlaceholderOptions {
  typeSpeed?: number
  deleteSpeed?: number
  pauseAfterType?: number
  pauseAfterDelete?: number
}

export function useTypingPlaceholder(options: UseTypingPlaceholderOptions = {}) {
  const {
    typeSpeed = 70,
    deleteSpeed = 40,
    pauseAfterType = 1500,
    pauseAfterDelete = 300,
  } = options

  const [displayText, setDisplayText] = useState('')
  const [isActive, setIsActive] = useState(true)
  const sentenceIndex = useRef(0)
  const charIndex = useRef(0)
  const isDeleting = useRef(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  const stop = useCallback(() => {
    setIsActive(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [])

  const restart = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsActive(true)
  }, [])

  useEffect(() => {
    if (!isActive) return

    const tick = () => {
      const current = sentences[sentenceIndex.current]

      if (isDeleting.current) {
        // Delete back to common prefix
        if (charIndex.current > commonPrefix.length) {
          charIndex.current--
          setDisplayText(current.slice(0, charIndex.current))
          timeoutRef.current = setTimeout(tick, deleteSpeed)
        } else {
          // Done deleting — move to next sentence
          isDeleting.current = false
          sentenceIndex.current = (sentenceIndex.current + 1) % sentences.length
          timeoutRef.current = setTimeout(tick, pauseAfterDelete)
        }
      } else {
        // Type forward
        const target = sentences[sentenceIndex.current]
        if (charIndex.current < target.length) {
          charIndex.current++
          setDisplayText(target.slice(0, charIndex.current))
          timeoutRef.current = setTimeout(tick, typeSpeed)
        } else {
          // Done typing — pause then delete
          isDeleting.current = true
          timeoutRef.current = setTimeout(tick, pauseAfterType)
        }
      }
    }

    // Small initial delay before starting
    timeoutRef.current = setTimeout(tick, 400)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [isActive, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete])

  return { displayText, stop, restart, isActive }
}
