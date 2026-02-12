import Image from 'next/image';

export default function FeatureB() {
  return (
    <section className='relative'>
      <div className='relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid grid-cols-2 gap-x-8 xl:gap-x-16 items-center'>
        <Image
          src='/carpet.png'
          width={400}
          height={400}
          alt=''
          className='w-full max-w-sm mx-auto mb-6 lg:mb-0'
        />
        <div className='space-y-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl text-zinc-800'>
            Easy to use Editor
          </h2>
          <p className='font-bricolage-grotesque font-regular text-lg text-gray-500'>
              For builders who need compute that keeps up with their ideas, Fly
              Machines are hardware-virtualized containers that launch instantly
              and run only when you need them. Deploy an app in minutes or run
              untrusted code in isolated sandboxes.
            </p>
          {/* <Button variant='floottwo'>Check It Out</Button> */}
        </div>
      </div>
    </section>
  );
}
