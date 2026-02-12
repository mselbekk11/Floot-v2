import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export default function ChatboxTwo() {
  return (
    <div className='px-[3px] pt-[3px] pb-[3px] rounded-md bg-linear-to-r from-[#9B17F7] via-[#D13AC0] to-[#DE3AB4] shadow-2xl shadow-black'>
      <div className='flex items-center gap-3 bg-white px-5 py-3 rounded-md'>
        <input
          type='text'
          placeholder='Describe a company in a sentence or two...'
          className='flex-1 bg-transparent border-none outline-none text-gray-700 placeholder:text-gray-400'
        />
        <Button variant='pinky' size='lg'>
          <Sparkles className='size-4' />
          Generate
        </Button>
      </div>
    </div>
  );
}
