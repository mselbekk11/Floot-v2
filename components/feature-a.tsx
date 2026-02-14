import Image from 'next/image';

export default function FeatureA() {
  return (
    <section className='relative overflow-hidden'>
      {/* Top gradient blur glow */}
      <div className='rotate-3 absolute -inset-x-12 -top-6 h-12 bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-300 blur-3xl' />
      {/* Gradient overlay with fade mask */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-300/10 via-indigo-300/10 to-pink-300/10 [mask-image:linear-gradient(to_bottom,rgba(255,255,255,1)_75%,rgba(255,255,255,0))]' />

      <div className='relative max-w-5xl mx-auto pt-12 md:pt-24 pb-12 px-4 sm:px-6 lg:px-8 grid gap-20 items-center'>
        <div className='lg:grid grid-cols-2 gap-x-8 xl:gap-x-16 items-start'>
          <div className='flex flex-col gap-8 relative'>
            <div className='flex flex-col gap-2 relative'>
              <h2 className='text-zinc-800 z-80 heading-serif text-xl md:text-2xl'>Just Chat to Build</h2>
              <p className='font-bricolage-grotesque font-regular text-md text-gray-500'>
                You don’t need to know how to code. You don’t need to hire a
                developer. You don’t even need to know what “tech stack” means.
                Just describe what you want.
              </p>
              <p className='font-bricolage-grotesque font-regular text-md text-gray-500'>
                “I need a simple app to track job sites.” “I want a booking
                system for my salon.” “I need a tool to manage inventory for my
                crew.”
              </p>
            </div>
            <div>
              {/* Decorative bottom line */}
              {/* <div className='hidden lg:block w-full h-px bottom-0 bg-gradient-to-r from-[#1A1A1A] via-[#232325] via-10% to-transparent ' /> */}
              <Image
                src='/stripe.svg'
                width={150}
                height={50}
                alt=''
                className='pointer-events-none '
              />
            </div>
          </div>
          <Image
            src='/chat.png'
            className='w-full -mb-12 mx-auto relative lg:-mt-4'
            alt='Feature A'
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
