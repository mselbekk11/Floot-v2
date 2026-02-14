'use client';

import { useRef } from 'react';
import { Paperclip } from 'lucide-react';
import { Button } from './ui/button';

export default function AttachFileButton() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        ref={inputRef}
        type='file'
        className='hidden'
        multiple
      />
      <Button
        type='button'
        variant='ghost'
        size='icon'
        className='text-muted-foreground rounded-lg'
        onClick={() => inputRef.current?.click()}
      >
        <Paperclip className='size-4' />
      </Button>
    </>
  );
}
