'use client'

import { useState, useCallback } from 'react'
import { PromptInputTextarea } from './prompt-input'
import { useTypingPlaceholder } from '@/hooks/use-typing-placeholder'
import type { ComponentProps } from 'react'

type AnimatedPromptTextareaProps = ComponentProps<typeof PromptInputTextarea>

export function AnimatedPromptTextarea({ onChange, className, ...props }: AnimatedPromptTextareaProps) {
  const [hasText, setHasText] = useState(false)
  const { displayText, stop, restart } = useTypingPlaceholder()

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const isEmpty = e.target.value.length === 0
      if (!isEmpty && !hasText) {
        setHasText(true)
        stop()
      } else if (isEmpty && hasText) {
        setHasText(false)
        restart()
      }
      onChange?.(e)
    },
    [hasText, stop, restart, onChange]
  )

  // Show animation overlay when input is empty
  const showAnimation = !hasText

  return (
    <div className='relative'>
      {showAnimation && (
        <div className='pointer-events-none absolute inset-0 z-10 flex items-start p-3 text-muted-foreground text-md font-bricolage-grotesque font-light'>
          <span>{displayText}</span>
          <span className='ml-px animate-blink'>|</span>
        </div>
      )}
      <PromptInputTextarea
        {...props}
        className={className}
        placeholder=''
        aria-label='Describe what you want to build'
        onChange={handleChange}
      />
    </div>
  )
}
