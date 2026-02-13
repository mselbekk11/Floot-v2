"use client";

import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import Bolt from './lottie/bolt';

export default function Chatbox() {
  return (
    <div className='px-[4px] pt-[4px] pb-[4px] rounded-md bg-linear-to-r from-orange-400 via-pink-500 to-purple-600'>
      <div className='flex items-center gap-3 bg-white px-5 py-3 rounded-md'>
        <input
          type='text'
          placeholder='Describe a company in a sentence or two...'
          className='flex-1 bg-transparent border-none outline-none text-gray-700 placeholder:text-gray-400'
        />
        <Button variant='pinky' size='lg'>
          <Sparkles className='size-4' />
          <Bolt mode='loop' size='w-5 h-5' />
          Generate
        </Button>
      </div>
    </div>
  );
}
