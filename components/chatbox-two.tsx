import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import Bolt from './lottie/bolt';

export default function ChatboxTwo() {
  return (
    <div className='px-[3px] pt-[3px] pb-[3px] rounded-md bg-linear-to-r from-[#9B17F7] via-[#D13AC0] to-[#DE3AB4] shadow-2xl shadow-black'>
      <div className='flex items-center gap-3 bg-white px-2 py-2 rounded-md'>
        <input
          type='text'
          autoFocus
          placeholder='Describe a company in a sentence or two...'
          className='flex-1 bg-transparent border-none outline-none text-gray-700 placeholder:text-gray-400 font-bricolage-grotesque font-light'
        />
        {/* <Button variant='pinky' size='lg'>
          <Sparkles className='size-4' />
          Generate
        </Button> */}
        {/* <Button variant='floot' size='lg'>
          Generate
        </Button> */}
        {/* <Button variant='floottwo' size='lg'>
          Generate
        </Button> */}
        <Button variant='floottwo' size='lg'>
        <Bolt mode='loop' size='w-4 h-4' className='brightness-0 invert' />
          Generate
        </Button>
        {/* <div className='bg-linear-to-r from-[#9B17F7] via-[#D13AC0] to-[#DE3AB4] p-[1px]'>
          <Button variant='grey' size='lg'>
            Generate
          </Button>
        </div> */}
      </div>
    </div>
  );
}
