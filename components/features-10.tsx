export default function FeaturesSectionTen() {
  return (
    <section className='py-24 bg-[#232325] texture-four'>
      <div className='relative z-50 max-w-7xl mx-auto bg-[#17171A] p-8 border border-[#66666F] rounded-md'>
        <h1 className='text-2xl font-bold mb-10 text-white z-50 relative max-w-7xl mx-auto'>
          Build Anything with confidence
        </h1>
        <div className='mx-auto w-full max-w-7xl'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[500px]'>
            <div className=''>
              <div className='flex flex-col gap-2 bg-[#402b82] h-full p-4'>
                <h2 className='text-2xl font-bold text-white'>
                  Just Chat to Build
                </h2>
                <p className='text-sm text-muted-foreground'>
                  Connect instantly with end-to-end encryption.
                </p>
              </div>
            </div>
            <div className=''>
              <div className='flex flex-col gap-2 bg-[#70539D] h-full p-4'>
                <h2 className='text-2xl font-bold text-white'>
                  Easy to use Editor
                </h2>
                <p className='text-sm text-muted-foreground'>
                  Connect instantly with end-to-end encryption.
                </p>
              </div>
            </div>
            <div className=''>
              <div className='flex flex-col gap-2 bg-[#70539D] h-full border-2 border-[#000000] p-4'>
                <h2 className='text-2xl font-bold text-white'>
                  Never, ever get stuck
                </h2>
                <p className='text-sm text-muted-foreground'>
                  Connect instantly with end-to-end encryption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
