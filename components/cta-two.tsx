import Link from 'next/link';
import { Button } from './ui/button';

export default function CTATwo() {
  return (
    <div className='rounded-xl  bg-[#232325] flex flex-col justify-center relative shadow-2xl shadow-black/80 z-80'>
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: 'url(/stars.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '500px',
          opacity: 0.4,
        }}
      ></div>
      <div className=' px-4 py-10 md:px-12 text-center relative z-50'>
        <h2 className=' text-white text-3xl heading-serif '>
          Ready to start building?
        </h2>
        <p className='text-white mt-4 text-md font-bricolage-grotesque'>
          Start for free today — no credit card required.
        </p>
        <div className='mt-6'>
          <Button variant='floottwo' asChild>
            <Link href='#'>Start Building</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
