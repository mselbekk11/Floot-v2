import Image from 'next/image';

export default function FeatureC() {
  return (
    <section className='relative overflow-hidden'>
      {/* Top gradient blur glow */}
      {/* <div className='rotate-3 absolute -inset-x-12 -top-6 h-12 bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-300 blur-3xl' /> */}
      {/* Gradient overlay with fade mask */}
      {/* <div className='absolute inset-0 bg-gradient-to-r from-purple-300/10 via-indigo-300/10 to-pink-300/10 [mask-image:linear-gradient(to_bottom,rgba(255,255,255,1)_75%,rgba(255,255,255,0))]' /> */}

      <div className='relative max-w-5xl mx-auto py-24 xl:py-24 px-4 sm:px-6 lg:px-8 grid gap-20 items-center'>
        <div className='lg:grid grid-cols-2 gap-x-8 xl:gap-x-16 items-start'>
          <div className='flex flex-col gap-8 relative'>
            <div className='flex flex-col gap-2 relative'>
              <h2 className=' text-zinc-800'>Never Get Stuck</h2>
              <p className='font-bricolage-grotesque font-regular text-md text-gray-500'>
                If there’s an error, Floot detects it and fixes it
                automatically. If something isn’t connected properly, it
                resolves it behind the scenes.
              </p>
              <p className='font-bricolage-grotesque font-regular text-md text-gray-500'>
                And if you ever want real human help, we’re right there. Chat
                with us. We’ll
                guide you step by step until your app is exactly what you need.
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
            src='/lifering.png'
            className='-mb-12 mx-auto relative lg:-mt-4'
            alt='Feature A'
            width={250}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
