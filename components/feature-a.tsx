import Image from 'next/image';

export default function FeatureA() {
  return (
    <section className='relative overflow-hidden'>
      {/* Top gradient blur glow */}
      <div className='rotate-3 absolute -inset-x-12 -top-6 h-12 bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-300 blur-3xl' />
      {/* Gradient overlay with fade mask */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-300/10 via-indigo-300/10 to-pink-300/10 [mask-image:linear-gradient(to_bottom,rgba(255,255,255,1)_75%,rgba(255,255,255,0))]' />

      <div className='relative max-w-5xl mx-auto py-24 xl:py-24 px-4 sm:px-6 lg:px-8 grid gap-20 items-center'>
        <div className='lg:grid grid-cols-2 gap-x-8 xl:gap-x-16 items-start'>
          <div className='relative lg:max-w-xl space-y-4 lg:pb-20'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl text-zinc-800'>
              Just Chat to Build
            </h2>
            <p className='font-bricolage-grotesque font-regular text-lg text-gray-500'>
              For builders who need compute that keeps up with their ideas, Fly
              Machines are hardware-virtualized containers that launch instantly
              and run only when you need them. Deploy an app in minutes or run
              untrusted code in isolated sandboxes.
            </p>
            {/* Decorative bottom line */}
            <div className='hidden lg:block w-full h-px absolute bottom-0 bg-gradient-to-r from-purple-400 via-purple-400/35 via-10% to-transparent' />
          </div>
          <Image
            src='/bird.png'
            className='w-full max-w-sm -mb-12 mx-auto relative lg:-mt-4'
            alt='Feature A'
            width={400}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
