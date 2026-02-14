import Image from 'next/image';

export default function FeatureB() {
  return (
    <section className='relative'>
      <div className='relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid grid-cols-2 gap-x-8 xl:gap-x-16 items-center'>
        <Image
          src='/editor-2.png'
          width={350}
          height={400}
          alt=''
          className='mx-auto mb-6 lg:mb-0'
        />
        <div className='flex flex-col gap-8 relative'>
          <div className='flex flex-col gap-2 relative'>
            <h2 className=' text-zinc-800'>Easy to use Editor</h2>
            <p className='font-bricolage-grotesque font-regular text-md text-gray-500'>
              Sometimes you want to tweak things visually. Move a button. Change
              a headline. Add a new section. Adjust how something looks. 
            </p>
            <p className='font-bricolage-grotesque font-regular text-md text-gray-500'>
              With Floot’s editor, you
              just point and show. Circle what you want changed. Highlight text to rewrite it. Type a
              quick note like “make this bigger” or “add a photo here.”
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
      </div>
    </section>
  );
}
